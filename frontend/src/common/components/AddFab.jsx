import { Fab } from '@mui/material';
import AddOutlined from '@mui/icons-material/AddOutlined';

const AddFab = ({ onClick, text, ...others }) => {
    return <Fab
        onClick={onClick}
        variant='extended'
        color='secondary'
        sx={{ position: 'fixed', bottom: 0, mb: 8 }}
        {...others}
    >
        <AddOutlined sx={{ mr: 2 }} /> {text}
    </Fab>
}

export default AddFab;