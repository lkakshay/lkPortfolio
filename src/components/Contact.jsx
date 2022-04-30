
import { Grid,Container,useTheme,useMediaQuery, Box} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import '../styles/About.css'
import logo2 from '../images/logo2.svg'




export const Contact=()=>{

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
            <div className="About">
                <Grid sx={{ py:padding
            }} container  >
                <Grid item xs={12} sm={12} md={6} lg={6} >
                   <Box className="about-first-grid"  component={"div"} sx={{height:'400px', maxWidth:"600px",marginLeft:"auto"}}>
                       <Container >
                           <img src={logo2} alt="" />
                       </Container>
                   </Box>
                </Grid>
                <Grid   item xs={12} sm={12} md={6} lg={6}  >
                <Box className="about-second-grid"component={"div"} sx={{height:'400px', maxWidth:"600px",marginRight:"auto"}}>
                    <div>
                    <p className="about-heading">Hi, I’m Matt. Nice to meet you.</p>
                    <p className="about-paragraph">
                    Since beginning my journey as a freelance designer nearly 10 years ago, 
                    I've done remote work for agencies, consulted for startups, and collaborated 
                    with talented people to create digital products for both business and consumer use.
                    I'm quietly confident, naturally curious, 
                    and perpetually working on improving my chops one design problem at a time.
                    </p>  
                    </div>
                </Box>
                </Grid>
            </Grid>
            </div>
    )
}