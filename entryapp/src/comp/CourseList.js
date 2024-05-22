import { Fragment } from "react";



// render update course

renderUpdateForm = () => {
    return (
        <form>
            <input type="text" />
            <button >updateCourse</button>
        </form>
    )
}


function CourseList(props) {
  const data = props;

  return (
    <>
      <Fragment>
        <li>
          <span> {props.det.name}</span>
          <button onClick={ () => props.deleteCourse(props.index)}>delete course</button>
          {/* <button onClick={() =>}>edit course</button> */}
        </li>
      </Fragment>
    </>
  );
}

export default CourseList;
