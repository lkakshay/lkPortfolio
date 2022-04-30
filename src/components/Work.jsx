
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


    return(
            <div className="Works">
                <Grid sx={{ py:padding
            }} container  >
                    <h1 className="works-heading">PROJECTS</h1>
                    <Grid container sx={{px:"10px"}}>

                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:"10px"}} > 
                       <Box className="work-container" maxWidth="500px" sx={{height:"480px"}}>
                           <div className="work-inner-container">
                               <div className="p-image">
                                   <div>
                                   <img src="https://user-images.githubusercontent.com/91669835/166094016-32efa43e-32cb-452e-bd82-1517021deaf5.png" alt="" />
                                   </div>
                               </div>
                               <p className="p-name"> Fabindia Clone</p>
                               <div className="p-buttons">
                                   <a href="https://fabindia-clone.vercel.app/">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/lkakshay/fabindia-clone">
                                   <button>CODE</button>
                                   </a>
                               </div>
                              
                           </div>
                       </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:"10px"}} > 
                       <Box className="work-container" maxWidth="500px" sx={{height:"480px"}}>
                           <div className="work-inner-container">
                               <div className="p-image">
                                   <div>
                                   <img src="https://user-images.githubusercontent.com/91669835/166094013-ffd663e8-714f-477f-acb0-0f8912e12b3c.png" alt="" />

                                   </div>
                               </div>
                               <p className="p-name">Meal App</p>
                               <div className="p-buttons">
                                   
                               <a href="http://weather-app-lkakshay.vercel.app/">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/lkakshay/Weather-app">
                                   <button>CODE</button>
                                   </a>
                               </div>
                              
                           </div>
                       </Box>
                    </Grid>
                    


                    </Grid>
            </Grid>
            </div>
    )
}



