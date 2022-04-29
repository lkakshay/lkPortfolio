import React from "react"
import { Drawer, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { List } from "@mui/material"

export const DrawerComponent=({setopenDrawer,openDrawer})=>{
    const data=["Home","About","Skills","Works","Contact"]
    return(
        <React.Fragment>
            <Drawer sx={{width:360}} anchor="bottom" open={openDrawer}
            onClose={()=>{
                setopenDrawer(false)
            }}>
               {data.map((e,i)=>{
                   return ( <List key={i}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText sx={{color:"#2878d5"}}>
                                {e}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>)
               })}

            </Drawer>
        </React.Fragment>

    )
}