import { Card, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import Article from '@mui/icons-material/Article';
import Summarize from '@mui/icons-material/Summarize';
import './menu.css';
import { useSelector } from "react-redux";

function Menu() {
    const isMenuPanelShown = useSelector((state: any) => state.isMenuPanelShown)

    return (
        <div
            className={isMenuPanelShown ? "menu" : "menu-hidden"}
        >
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={true}
                    onClick={(event) => { }}
                >
                    <ListItemIcon>
                        <Article />
                    </ListItemIcon>
                    <ListItemText primary="Api Documentation" />
                </ListItemButton>
                <ListItemButton
                    selected={false}
                    onClick={(event) => { }}
                >
                    <ListItemIcon>
                        <Summarize />
                    </ListItemIcon>
                    <ListItemText primary="Summaize" />
                </ListItemButton>
            </List>
        </div>
    );
}

export default Menu;