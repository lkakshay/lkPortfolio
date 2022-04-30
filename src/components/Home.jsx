
import { Grid,Container,useTheme,useMediaQuery} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import logo1 from '../images/logo1.svg'
import Typewriter from "typewriter-effect";
import '../styles/Home.css'



export const Home=()=>{

    const[padding,setpadding]=useState("")
    
    const theme=useTheme()
    const small=useMediaQuery(theme.breakpoints.down("sm"))
    const medium=useMediaQuery(theme.breakpoints.only("sm"))
    const large=useMediaQuery(theme.breakpoints.up("md"))
    useEffect(()=>{
        if(small)
        setpadding("10px")
        else if(medium)
        setpadding("50px")
        else if(large)
        setpadding("80px")
    },[small,medium,large])


    return(
            <div className="Home" >

            <Grid sx={{py:padding
                  }} container spacing={3} >
                <Grid item xs={12} sm={12} md={6} lg={6}  >
                   <Container  className="home" maxWidth="xs" sx={{height:'320px'}}>
                    <div className="home1">
                        <div className="home2">
                        <p className="home-intro">Hi,<span> </span> am </p>
                       <p className="home-name" >AKSHAY LK</p>
                        <div className="home-typewriter">
                        <Typewriter
                        
                        options={{
                            strings: ["Fullstack web developer","MERN Developer","React Developer"],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        </div>
                        </div>
                    </div>

                   </Container>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                       <img src={logo1} style={{width:'100%',height:'100%'}} alt="dfd" /> 
                </Grid>
            </Grid>      
            </div>

    )
}