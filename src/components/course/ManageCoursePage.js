import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { actions: bindActionCreators(courseActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);