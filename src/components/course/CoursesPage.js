import React, {Component,PropTypes} from 'react';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const { courses } = this.props;
//                <Snackbar open={true} message="Course saved" autoHideDuration={4000} />
        return (
            <div>
                <h1>Courses</h1>
                <RaisedButton primary={true} label="Add Course" onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return { courses: state.courses };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(courseActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);