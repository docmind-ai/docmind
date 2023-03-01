import { Divider } from "@mui/material";
import React from "react";
import APIList from "./api-list/APIList";
import Search from '@mui/icons-material/Search';
import FileCopy from '@mui/icons-material/FileCopy';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

import './documentation.css';

function Documentation() {
    return (
        <div className="documentation">
            <div className="tools-bar">
                <Search className="icon" />
                <FileCopy className="icon" />
                <ArrowBack className="icon" />
                <ArrowForward className="icon" />
            </div>
            <Divider />
            <APIList />
        </div>
    );
}

export default Documentation;