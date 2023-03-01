import { InsertDriveFile } from "@mui/icons-material";
import { Button, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import './files-panel.css';

function FilesPanel(props: any) {
    const [uploadedFiles, setUploadedFiles] = useState<any>([]);
    const handleOnChange = (event: any) => {
        setUploadedFiles(event.target.files);
    };

    const renderFilesList = () => {
        let files: any[] = [];
        for (let i = 0; i < uploadedFiles.length; i++) {
            files.push({
                name: uploadedFiles.item(i)?.name
            });
        }

        return files.map((file: any) => (
            <ListItemButton
                selected={false}
                onClick={(event) => { }}
            >
                <ListItemIcon>
                    <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} />
            </ListItemButton>
        ))
    };

    return (
        <div className="files-panel">
            <div className="buttons-container">
                <Button
                    variant="outlined"
                    component="label"
                >
                    Upload Files
                    <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleOnChange}
                    />
                </Button>
                <Button
                    variant="contained"
                    component="label"
                >
                    Generate
                </Button>
            </div>
            <List component="nav" dense={true} aria-label="main mailbox folders" >
                {renderFilesList()}
            </List>
        </div>
    );
}

export default FilesPanel;