import { Accordion, AccordionDetails, AccordionSummary, Card, Chip } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import './api-list.css';

function APIList() {
    const apis = [{
        endpoint: '/store/{id}',
        method: 'get',
        headers: {
            "content-type": "application/json"
        },
        description: 'Fetches existing store',
        params: {},
        reqBody: {}
    },
    {
        endpoint: '/store/{id}',
        method: 'delete',
        headers: {
            "content-type": "application/json"
        },
        description: 'Deletes existing store from Database',
        params: {},
        reqBody: {}
    }];
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
                            <div>
                                <Chip label={api.method} color={"success"} />
                                <Chip label={api.endpoint} />
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