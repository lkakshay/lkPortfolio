import  React, { useState } from "react";

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

    const handleChange=(i)=>{
        setvalue(i)
    }

    const screenchange=()=>{
    setopenDrawer(!openDrawer)
    }

    return(
            <AppBar  position={"sticky"} sx={{background:"transparent",boxShadow: 0}}>
                <Toolbar>
                    <CodeTwoToneIcon fontSize="large" sx={{color:"black"}}/>
                    {isMatch?(<MenuIcon htmlColor="black" sx={{marginLeft:"auto"}}
                    onClick={screenchange}/>
                    ):
                    (
                        <Tabs value={value} sx={{marginLeft:"auto", marginRight:"5%",BagroundColor:"white"}}>
                        {data.map((e,i)=>{
                            return <Tab label={e} key={i} onClick={()=>{
                                handleChange(i)
                            }} />
                        })}
                            
                        </Tabs>
                    )}

                </Toolbar>
                {openDrawer?<DrawerComponent setopenDrawer={setopenDrawer} openDrawer={openDrawer}/>:<></>}
            </AppBar>

    )
}