import { useState } from "react";

const useOpenEdit = () => {
    const [open, setOpen] = useState(false);
    const [editItem, setEditItem] = useState(undefined);

    const handleOpen = () => {
        setOpen(value => {
            const val = !value;
            if (!val) {
                setEditItem(undefined);
            }
            return val;
        });
    }

    const handleEditItem = (item, index) => {
        setEditItem({
            item: item,
            index: index
        });
        handleOpen();
    }

    return {
        open, editItem, handleEditItem, handleOpen
    }
}

export default useOpenEdit;