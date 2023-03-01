import React from "react";
import FilesPanel from "../files-panel/FilesPanel";
import Documentation from "../documentation/Documentation";
import './api-documentation.css';

function ApiDocumentation() {
    return (
        <div className="api-documentation">
            <Documentation></Documentation>
            <FilesPanel></FilesPanel>
        </div>
    );
}

export default ApiDocumentation;