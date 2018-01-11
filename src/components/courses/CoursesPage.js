import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: "new course" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {        
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"                    
                    value="Save"
                    onClick={this.onClickSave} />                
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