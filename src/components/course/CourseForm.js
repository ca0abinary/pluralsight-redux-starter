import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <div>
            <h1>Manage Course</h1>
            <TextInput name="title" label="Title" value={course.title} onChange={onChange} error={errors.title} />
            <br/>
            <SelectInput name="authorId" label="Author" value={course.authorId} defaultOption="Select Author" options={allAuthors} onChange={onChange} error={errors.authorId} />
            <br/>
            <TextInput name="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
            <br/>
            <TextInput name="length" label="Length" value={course.length} onChange={onChange} error={errors.length} />
            <br/>
            <RaisedButton primary={true} disabled={saving} label={saving ? 'Saving...' : 'Save'} onClick={onSave} />
        </div>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;