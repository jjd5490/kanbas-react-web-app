import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaEllipsisV,
  FaPlus,
  FaFileInvoice,
  FaCheckCircle,
} from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="col-11">
      <div class="kb-flex-container">
        <div class="w-25">
          <div>
            <input
              style={{ width: "100%" }}
              class="form-control"
              type="text"
              placeholder="Search For Assignment"
            ></input>
          </div>
        </div>
        <div class="kb-flex-column-grow">
          {/* <select class="dropdown float-end" name="" id="">
                                <option value="Edit Assignment Dates">Edit Assignment Dates</option>
                            </select>  */}
          <button class="kb-assign-top-second-btn btn btn-secondary float-end">
            <FaEllipsisV />
          </button>
          <button class="kb-assign-top-danger-btn btn btn-danger float-end">
            <FaPlus style={{ marginRight: "5px" }} />
            Assignment
          </button>
          <button class="kb-assign-top-second-btn btn btn-secondary float-end">
            Group
          </button>
        </div>
      </div>
      <div className="list-group">
        <a
          className="kb-flex-container list-group-item list-group-item-action list-group-item-secondary"
          href="#"
        >
          <div className="kb-double-ellipsis">
            <FaEllipsisV className="fa-solid fa-ellipsis-vertical float-start" />
            <FaEllipsisV className="fa-solid fa-ellipsis-vertical float-start" />
            {/* <i className="fa-solid fa-ellipsis-vertical float-start"></i> */}
          </div>
          <div className="kb-flex-column-grow" style={{ marginLeft: "10px" }}>
            Assignments
          </div>
          <div
            className="float-end kb-center-items-vertically"
            style={{ display: "flex" }}
          >
            <div className="kb-pct-total rounded-pill">40% of Total</div>
            <FaPlus style={{ marginLeft: "15px", marginRight: "15px" }} />
            <FaEllipsisV />
          </div>
        </a>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <div class="kb-double-ellipsis">
              <FaEllipsisV />
              <FaEllipsisV />
            </div>
            <div class="kb-assign-icon" style={{ marginLeft: "10px" }}>
              <FaFileInvoice />
              {/* <i class="fa-solid fa-file-invoice"></i> */}
            </div>
            <div class="kb-flex-column-grow">
              <div class="kb-assigment-detail" style={{ marginLeft: "20px" }}>
                <div class="kb-assignment-title">{assignment.title}</div>
                <div class="kb-assignment-subtext">
                  Unlock {assignment.unlock_date}
                </div>
                <div class="kb-assignment-subtext">
                  <b>Due</b> {assignment.due_date} | {assignment.point_total}{" "}
                  pts
                </div>
              </div>
            </div>
            <div class="kb-double-ellipsis">
              <FaEllipsisV className="float-end" />
              <FaCheckCircle className="float-end" />
              {/* <i class="fa-solid fa-circle-check float-end"></i> */}
            </div>
            {/* {assignment.title} */}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
