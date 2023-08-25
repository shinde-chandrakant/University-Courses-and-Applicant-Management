import React from "react";
import { Dialog } from "@mui/material";

import AddFab from "./AddFab";

const FabDialog = ({ fabText, open, handleOpen, children }) => {

    return <React.Fragment>
        <Dialog
            open={open}
            onClose={handleOpen}
            maxWidth='xs'
            fullWidth
        >
            {children}
        </Dialog>

        <AddFab
            text={fabText}
            onClick={handleOpen}
        />
    </React.Fragment>
}

export default FabDialog;