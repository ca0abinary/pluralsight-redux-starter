import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

const CourseList = ({courses}) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>&nbsp;</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Author</TableHeaderColumn>
                    <TableHeaderColumn>Category</TableHeaderColumn>
                    <TableHeaderColumn>Length</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map(course => <CourseListRow key={course.id} course={course} />)}
            </TableBody>
        </Table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;