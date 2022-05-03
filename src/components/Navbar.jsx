import  React, { useState } from "react";
import { scroller } from "react-scroll/modules";

import { AppBar,Tab,Toolbar,Tabs,useMediaQuery,useTheme } from "@mui/material"

import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import MenuIcon from '@mui/icons-material/Menu';

import { DrawerComponent } from "./Drawer";



export const Navbar=()=>{
    const [value,setvalue]=useState(0)
    const [openDrawer,setopenDrawer]=useState(false)

    const data=["Home","About","Skills","Works","Contact"]

    const theme=useTheme()
    const isMatch=useMediaQuery(theme.breakpoints.down("sm"))

    const handleChange=(i,e)=>{
        setvalue(i)
        scrollToSection(e)
    }

    const screenchange=()=>{
    setopenDrawer(!openDrawer)
    }

   const  scrollToSection = (e) => {
        scroller.scrollTo(e, {
          duration: 600,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };


    

    return(
            <AppBar  position={"sticky"} sx={{background:"#ffffff",boxShadow: 0}}>
                <Toolbar>
                    <CodeTwoToneIcon fontSize="large" sx={{color:"#2878d5"}}/>
                    {isMatch?(<MenuIcon htmlColor="#2878d5" sx={{marginLeft:"auto"}}
                    onClick={screenchange}/>
                    ):
                    (
                        <Tabs value={value} sx={{marginLeft:"auto", marginRight:"5%",BagroundColor:"white",textDecorationColor:"#9f54b0"}}>
                        {data.map((e,i)=>{
                            return <Tab sx={{fontWeight:"500"}} label={e} key={i} onClick={()=>{
                                handleChange(i,e)
                            }} />
                        })}
                            
                        </Tabs>
                    )}

                </Toolbar>
                {openDrawer?<DrawerComponent setopenDrawer={setopenDrawer} openDrawer={openDrawer}/>:<></>}
            </AppBar>

    )
}