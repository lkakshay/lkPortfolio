
import { Grid,Container,useTheme,useMediaQuery, Box} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/Skills.css'
import react from '../images/react.svg'
import redux from '../images/redux.svg'
import node from '../images/node.svg'
import express from '../images/express.svg'
import mongo from '../images/mongo.svg'
import js from '../images/js.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import github from '../images/github.svg'






export const Skills=()=>{

    const[padding,setpadding]=useState("")
    
    const theme=useTheme()
    const small=useMediaQuery(theme.breakpoints.down("sm"))
    const medium=useMediaQuery(theme.breakpoints.only("sm"))
    const large=useMediaQuery(theme.breakpoints.up("md"))
    useEffect(()=>{
        if(small)
        setpadding("30px")
        else if(medium)
        setpadding("50px")
        else if(large)
        setpadding("60px")
    },[small,medium,large])

    const data=[{comp:react,name:"React"},
                 {comp:redux,name:"Redux"},
                 {comp:node,name:"Node"},
                 {comp:express,name:"Express"},
                 {comp:mongo,name:"MongoDB"},
                 {comp:js,name:"Javascript"},
                 {comp:html,name:"HTML5"},
                 {comp:css,name:"CSS3"},
                 {comp:github,name:"Github"}]


    return(
            <div className="Skills">
                <Grid sx={{ py:padding
            }} container  >
                <div className="skills-div">
                    <h1 className="skills-heading">SKILLS</h1>
                    <Grid container>
            
            {
            data.map((e)=>{
                return(
                    <Grid item xs={12} sm={6} md={4} lg={4}  > 
                        <div className="skill-div" >  
                                <div className="skill-image-div">
                                <img src={e.comp} alt="skills" />
                                </div>
                                <p className="skill-heading">{e.name}</p>
                        
                        
                        </div>
                    </Grid>


                )
            })
            }
                    </Grid>
                </div>
            </Grid>
            </div>
    )
}