import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>              
            </div>
        );
    }
}

CoursesPage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    //createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};
// Could also do:
// const connectedStateandProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateandProps(CoursesPage);
function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}
/*
Manual implementation: 

function mapDispatchToProps(dispatch){
    return{
        createCourse: (course) => dispatch(courseActions.createCourse(course))
    }
}
*/

// Map all of the actions found in courseAction to a call to dispatch.
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);