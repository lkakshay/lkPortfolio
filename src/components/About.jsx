
import { Grid,Container,useTheme,useMediaQuery} from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"




export const About=()=>{

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
        setpadding("100px")
    },[small,medium,large])


    return(

         <Grid sx={{ border: 1,py:padding
        }} container spacing={3} >
                <Grid item xs={12} sm={12} md={6} lg={6} >
                   <Container maxWidth="xs"  sx={{border:1 ,height:'320px'}}></Container>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                   <Container maxWidth="xs"  sx={{border:1 ,height:'320px'}}></Container>
                </Grid>
            </Grid>


           

    )
}