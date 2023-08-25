import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ name, value, onChange }) => {
    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
    );
};

export default DatePickerField;