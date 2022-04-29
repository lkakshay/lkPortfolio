
import { Grid,Container,useTheme,useMediaQuery, Box} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/About.css'
import logo2 from '../images/logo2.svg'




export const About=()=>{

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


    return(
            <Grid sx={{ py:padding
            }} container  >
                <Grid item xs={12} sm={12} md={6} lg={6} >
                   <Box className="about-first-grid"  component={"div"} sx={{height:'380px', maxWidth:"480px",marginLeft:"auto"}}>
                       <Container sx={{my:"40px"}}>
                           <img src={logo2} alt="" />
                       </Container>
                   </Box>
                </Grid>
                <Grid   item xs={12} sm={12} md={6} lg={6} >
                <Box className="about-second-grid"component={"div"} sx={{height:'380px', maxWidth:"480px",marginRight:"auto"}}></Box>
                </Grid>
            </Grid>

    )
}