import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    return (
        <TextField
            name={name}
            floatingLabelText={label}
            onChange={onChange}
            hintText={placeholder}
            value={value}
            errorText={error}
        />
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;