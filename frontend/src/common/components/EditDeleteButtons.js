import { Button, Box } from "@mui/material";
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';

const EditDeleteButtons = ({ onClickEdit, onClickDelete, ...others }) => {
    return <Box mb={2} ml={2} {...others}>
        <Button
            startIcon={<EditOutlined />}
            variant='outlined'
            onClick={onClickEdit}
        >
            Update
        </Button>
        <Button
            sx={{ ml: 1 }}
            startIcon={<DeleteForeverOutlined />}
            variant='contained'
            color='warning'
            onClick={onClickDelete}
        >
            Delete
        </Button>
    </Box>;
}

export default EditDeleteButtons;