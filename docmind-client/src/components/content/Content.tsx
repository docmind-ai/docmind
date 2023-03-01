import { Card } from "@mui/material";
import React from "react";
import ApiDocumentation from "../api-documentation/ApiDocumentation";
import './content.css';

export function Content() {
    return (
        <Card className={"content"}>
            <ApiDocumentation></ApiDocumentation>
        </Card>
    );
}