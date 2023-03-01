import React from "react";
import { Content } from "../content/Content";
import Menu from "../menu/Menu";
import './app-content.css';

export function AppContent() {
    return (
        <div className="app-content">
            <Menu></Menu>
            <Content></Content>
        </div>
    );
}