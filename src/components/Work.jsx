
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
            <div id="Works">
                <Grid sx={{ py:padding
            }} container  >
                    <h1 className="works-heading">PROJECTS</h1>
                    <Grid container sx={{px:"10px"}}>

                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{p:"10px"}} > 
                       <Box className="work-container" maxWidth="500px" sx={{height:"480px"}}>
                           <div className="work-inner-container">
                               <div className="p-image">
                                   <img src="https://user-images.githubusercontent.com/91669835/166094016-32efa43e-32cb-452e-bd82-1517021deaf5.png" alt="" />
                               </div>
                               <p className="p-name"> Fabindia Clone</p>
                               <p className="p-description">
                                E-commerce website where user can buy clothes,filter the dresses by costs, Price Range etc..User can add the items in carts and wishlist then buy the products by checking out
                               </p>
                               <p className="p-stack"> Javascript | HTML | CSS</p>
                               <div className="p-buttons">
                                   <a href="https://fabindia-clone.vercel.app/" target="_blank" rel="noreferrer noopener">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/lkakshay/fabindia-clone" target="_blank" rel="noreferrer noopener">
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
                                   <img src="https://user-images.githubusercontent.com/91669835/166094013-ffd663e8-714f-477f-acb0-0f8912e12b3c.png" alt="" />
                               </div>
                               <p className="p-name">Weather App</p>
                               <p className="p-description"> Web Application to get details about the weather of a place ,Can find the weather of a place by searching , Built using public weather api</p>
                               <p className="p-stack"> Javascript | HTML | CSS</p>
                               <div className="p-buttons">   
                               <a href="http://weather-app-lkakshay.vercel.app/" target="_blank" rel="noreferrer noopener">
                                   <button>LIVE</button>
                                   </a>
                                   <a href="https://github.com/lkakshay/Weather-app" target="_blank" rel="noreferrer noopener">
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



