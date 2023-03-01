import { Divider } from "@mui/material";
import React from "react";
import APIList from "./api-list/APIList";
import './documentation.css';

function Documentation() {
    return (
        <div className="documentation">
            <div className="tools-bar">Tools Bar</div>
            <Divider />
            <APIList />
        </div>
    );
}

export default Documentation;