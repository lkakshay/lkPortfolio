
import { Grid,useTheme,useMediaQuery} from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/Work.css'






export const Work=()=>{

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

    const data=[{name:"React"},
    {name:"Redux"},
    {name:"Node"}]

    return(
            <div className="Works">
                <Grid sx={{ py:padding
            }} container  >
                    <h1 className="works-heading">PROJECTS</h1>
                    <Grid container sx={{px:"10px"}}>
            {
            data.map((e)=>{
                return(
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:"10px"}} > 
                       <Box className="work-container" maxWidth="500px" sx={{height:"480px"}}>
                           <div className="work-inner-container">
                              
                           </div>
                       </Box>
                    </Grid>


                )
            })
            }
                    </Grid>
            </Grid>
            </div>
    )
}