import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="col-11">
      <div className="kb-flex-container">
        <div className="kb-flex-column-grow">
          <div
            className="kb-flex-container float-end"
            style={{ alignItems: "center" }}
          >
            <FaCheckCircle style={{ color: "green" }} />
            <div style={{ color: "green", marginLeft: "5px" }}>Published</div>
            <button
              className="kb-assign-top-second-btn btn btn-secondary"
              style={{ marginLeft: "10px" }}
            >
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%" }}></hr>
      <div>
        <label className="mt-3" for="assingment-name">
          <b>Assignment Name</b>
        </label>
        <form action="">
          <input value={assignment.title} className="form-control mb-2" />
          <label
            className="mt-3"
            for="assignment-desc"
            style={{ fontWeight: "bold" }}
          >
            Description
          </label>
          <br />
          <textarea
            className="form-control mt-2"
            rows="3"
            cols="30"
            id="assignment-desc"
          >
            This assignment describes how to install the development environment
            for creating and working with Web applications we will be working
            with this semester. We will add new content every week, pushing this
            code to a GitHub source repository, and then deploying the content
            to a remote server hosted on Netlify.
          </textarea>
          <div className="container">
            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="points">Points</label>
              </div>
              <div className="col-6 kb-input-column">
                <input
                  className="form-control"
                  id="points"
                  type="number"
                  value={assignment.point_total}
                  max="100"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="assignment-group">Assignment Group</label>
              </div>
              <div className="col-6 kb-input-column">
                <select
                  className="form-select"
                  name="assignment-group"
                  id="assignment-group"
                >
                  <option value="Assignments">Assignments</option>
                  <option value="Quizzes">Quizzes</option>
                  <option value="Exams">Exams</option>
                  <option value="Project">Project</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="display-type">Display Grade as</label>
              </div>
              <div className="col-6 kb-input-column">
                <select
                  className="form-select"
                  name="display-type"
                  id="display-type"
                >
                  <option value="Percentage">Percentage</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column"></div>
              <div className="col-3 kb-input-column">
                <div className="form-check">
                  <label className="form-check-label" for="count-towards-grade">
                    Do not count this assignment towards the final grade
                  </label>
                  <input
                    className="form-check-input"
                    name="count-towards-grade"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="submission-type">Submission Type</label>
              </div>
              <div className="col-6 kb-input-column">
                <select
                  className="form-select"
                  name="submission-type"
                  id="submission-type"
                >
                  <option value="Online">Online</option>
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column"></div>
              <div className="col-6 kb-input-column">
                <label for="online-entry-options">Online Entry Options</label>
                <div className="form-check">
                  <label className="form-check-label" for="text-entry">
                    Text Entry
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="online-entry-options"
                    id="text-entry"
                    value="Text Entry"
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" for="website-url">
                    Website URL
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="online-entry-options"
                    id="website-url"
                    value="Website URL"
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" for="media-recordings">
                    Media Recordings
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="online-entry-options"
                    id="media-recordings"
                    value="Media Recordings"
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" for="student-annotations">
                    Student Annotation
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="online-entry-options"
                    id="student-annotations"
                    value="Student Annotation"
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" for="file-upload">
                    File Upload
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="online-entry-options"
                    id="file-upload"
                    value="File Upload"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="submission-attempts">Submission Attempts</label>
              </div>
              <div className="col-6 kb-input-column">
                <select
                  className="form-select"
                  name="submission-attempts"
                  id="submission-attempts"
                >
                  <option value="unlimited">Unlimited</option>
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="plagiarism-review">Plagiarism Review</label>
              </div>
              <div className="col-6 kb-input-column">
                <select
                  className="form-select"
                  name="plagiarism-review"
                  id="plagiarism-review"
                >
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="group-assignment">Group Assignment</label>
              </div>
              <div className="col-6 kb-input-column">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="group-assignment"
                    id="group-assignment"
                    value="Group Assignment"
                  />
                  <label className="form-check-label" for="group-assignment">
                    This is a group assignment
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label for="peer-reviewed">Peer Reviews</label>
              </div>
              <div className="col-6 kb-input-column">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="peer-reviewed"
                    id="peer-reviewed"
                    value="Peer Reviewed"
                  />
                  <label className="form-check-label" for="peer-reviewed">
                    Require Peer Reviews
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-3 kb-label-column">
                <label>Assign</label>
              </div>
              <div className="col-6 kb-input-column">
                <div className="kb-calendar-container">
                  <div style={{ marginBottom: "10px" }}>Assign To</div>
                  <span className="kb-tag">
                    Everyone
                    <a href="#">
                      <i className="fa-solid fa-xmark"></i>
                    </a>
                  </span>
                  <div style={{ marginBottom: "5px" }}></div>
                  <div className="mt-3">Due</div>
                  <input className="form-control mt-1" type="date" />
                  <div className="row">
                    <div className="col mt-3">
                      <label for="from-date">Available From</label>
                      <input
                        className="form-control mt-1"
                        name="from-date"
                        type="date"
                      />
                    </div>
                    <div className="col mt-3">
                      <label for="until-date">Until</label>
                      <input
                        className="form-control mt-1"
                        name="until-date"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="kb-flex-container mt-4 mb-5">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label" for="">
            Notify users that this content has changed
          </label>
        </div>
        <div className="kb-flex-column-grow">
          <button
            className="btn btn-danger float-end kb-assign-top-danger-btn"
            onClick={handleSave}
          >
            Save
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button className="btn btn-secondary float-end kb-assign-top-second-btn">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
