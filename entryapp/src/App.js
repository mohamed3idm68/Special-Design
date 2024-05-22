import React from "react";
import CourseForm from "./comp/CourseForm";
import CourseList from "./comp/CourseList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [{ name: "html" }, { name: "css" }, { name: "js" }],
      current: "",
    };
  }

  // update course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  // add course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current: "",
    });
  };


  // delete course

  deleteCourse = (index) => {
      let courses = this.state.courses;
      courses.splice(index , 1);
      this.setState({
        courses
      })
  }

  render() {
    const { courses } = this.state;

    const courseList = courses.map((course, index) => (
      <CourseList det={course} key={index} index={index} deleteCourse={this.deleteCourse}/>
    ));

    return (
      <div className="App">
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList} </ul>
      </div>
    );
  }
}

export default App;
