import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    const formatOnChange = (event, key, payload) => {
        Object.assign(event.target, { name: name, value: payload });
        onChange(event);
    };

    return (
        <SelectField
            name={name}
            floatingLabelText={label}
            onChange={formatOnChange}
            value={value || defaultOption}
            errorText={error}>
            <MenuItem value={null} primaryText={defaultOption}/>
            {
                options.map((option,i) => <MenuItem key={i} value={option.value} primaryText={option.text} />)
           }
        </SelectField>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;