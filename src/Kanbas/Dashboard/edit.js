import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Edit({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <div className="mt-4 ms-4 me-4">
        <h3>Dashboard</h3>
        <hr className="kb-dashboard-hr" width="100%"></hr>
        <div className="ms-4">
          <div className="kb-course-count">
            Published Courses ({courses.length})
          </div>
        </div>
        <form>
          <div className="kb-flex-container col-3 list-group-item ms-4 mt-3">
            <div>
              <input
                value={course.name}
                className="form-control mb-1"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
              <input
                value={course.number}
                className="form-control mb-1"
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
              />
              <input
                value={course.startDate}
                className="form-control mb-1"
                onChange={(e) =>
                  setCourse({ ...course, startDate: e.target.value })
                }
                type="date"
              />
              <input
                value={course.endDate}
                className="form-control mb-2"
                onChange={(e) =>
                  setCourse({ ...course, endDate: e.target.value })
                }
                type="date"
              />
              <div>
                <btn className="btn btn-success me-2" onClick={addNewCourse}>
                  Add
                </btn>
                <btn className="btn btn-primary" onClick={updateCourse}>
                  Update
                </btn>
              </div>
            </div>
          </div>
          <div className="list-group">
            {courses.map((course) => (
              <div className="kb-flex-container list-group-item col-3 ms-4">
                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  style={{ width: "250px", color: "black" }}
                >
                  {course.name}
                </Link>
                <btn
                  className="btn btn-warning me-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </btn>
                <btn
                  className="btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </btn>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
