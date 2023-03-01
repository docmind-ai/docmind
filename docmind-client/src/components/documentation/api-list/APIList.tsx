import { Accordion, AccordionDetails, AccordionSummary, Card, Chip } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import './api-list.css';

function APIList() {
    const apis = [{
        endpoint: '/store/{id}',
        method: 'GET',
        headers: {
            "content-type": "application/json"
        },
        description: 'Fetches existing store',
        params: {},
        reqBody: {}
    },
    {
        endpoint: '/store/{id}',
        method: 'DELETE',
        headers: {
            "content-type": "application/json"
        },
        description: 'Deletes existing store from Database',
        params: {},
        reqBody: {}
    },
    {
        endpoint: '/store',
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        description: 'Creates a store',
        params: {},
        reqBody: {}
    },
    {
        endpoint: '/store/{id}',
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        description: 'Updates existing store from Database',
        params: {},
        reqBody: {}
    }];

    const getColor = (api: string) => {
        switch (api) {
            case 'GET':
                return 'info';
            case 'DELETE':
                return 'error';
            case 'POST':
                return 'success';
            case 'PUT':
                return 'warning';
            default:
                return 'default';
        }
    };

    return (
        <div className={"api-list"}>
            {
                apis.map((api: any) => (
                    <Accordion sx={{
                        borderRadius: "8px !important",
                        margin: "0 !important",
                        marginTop: "8px !important",
                        "&:before": {
                            display: 'none',
                        },
                        boxShadow: 'none',
                        border: '1px solid #e2e2e2'
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className="header">
                                <Chip
                                    label={api.method}
                                    color={getColor(api.method)}
                                    sx={
                                        {
                                            width: '100px',
                                            marginRight: '2rem'
                                        }} />
                                <span>{api.endpoint}</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                Method
                                Headers
                                Params
                                Req Body
                                Response
                                what api does
                            </div>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
}

export default APIList;