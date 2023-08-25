import React from "react";

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

// Applied, Pending, Confirmed, Rejected;

const StatusSelector = ({ name, value, onChange, label, error, ...others }) => {

    const handleOnChange = (event) => {
        onChange(name, event.target.value);
    }

    return <React.Fragment>
        <FormControl {...others}>
            <InputLabel id="status-selector-label">{label}</InputLabel>
            <Select
                labelId="status-selector-label"
                id="status-selector"
                value={value}
                label={label}
                onChange={handleOnChange}
            >

                <MenuItem value={'Applied'}>Applied</MenuItem>
                <MenuItem value={'Pending'}>Pending</MenuItem>
                <MenuItem value={'Confirmed'}>Confirmed</MenuItem>
                <MenuItem value={'Rejected'}>Rejected</MenuItem>
            </Select>
            {
                error &&
                <FormHelperText sx={{ color: 'red' }}>{error}</FormHelperText>
            }
        </FormControl>
    </React.Fragment>

}

export default StatusSelector;