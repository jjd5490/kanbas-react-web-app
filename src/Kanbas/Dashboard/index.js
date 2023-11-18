import { React, useState } from "react";
import { Link } from "react-router-dom";
// import db from "../Database";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  console.log(courses);
  return (
    <div className="mt-4 ms-4 me-4">
      <h3>Dashboard</h3>
      <hr className="kb-dashboard-hr" width="100%"></hr>
      <div className="ms-4">
        <div className="kb-course-count">
          Published Courses ({courses.length})
          <Link to="/Kanbas/Dashboard/Edit">
            <button className="btn btn-danger ms-5">Edit</button>
          </Link>
        </div>
        <hr className="kb-dashboard-hr" width="100%"></hr>
        <div className="d-flex flex-row flex-wrap mt-2">
          {courses.map((course) => (
            <Link
              key={course._id["$oid"]}
              to={`/Kanbas/Courses/${course._id["$oid"]}/`}
              className="list-group-item"
            >
              {/* {course.name} */}
              <div className={"card kb-course-card"}>
                <img
                  className="card-img-top"
                  src={course.image}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <div className="kb-dashboard-card-text">
                    <h5 className="card-title">{course.name}</h5>
                    <div className="card-text">{course.number}</div>
                    <div className="card-text">
                      {course.startDate} to {course.startDate}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
