import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";

function CopyButton({ textToCopy }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setOpenSnackbar(true);
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <Tooltip title="クリップボードにコピー">
                <Button variant="contained" color="primary" onClick={handleCopy}>
                    IDをコピー
                </Button>
            </Tooltip>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="クリップボードにコピーしました！"
            />
        </div>
    );
}

export default CopyButton;
