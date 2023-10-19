import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import RightSidebar from "./Home/RightSidebar";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  var [empty, kanbas, courses, id, screen, assignment_id] = pathname.split("/");
  screen = screen.replace("%20", " ");
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignment_id
  );
  const breadcrumbArray = [course, screen, assignment];

  return (
    <div className=" ms-3 mt-4 me-2">
      <div className="kb-flex-container kb-center-items-vertically kb-course-breadcrumb">
        <RxHamburgerMenu className="kb-hamburger" />
        <div>
          <nav className="kb-assignment-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="http://google.com">
                  {course?.name} {course?.section} {course?.term}
                </a>
              </li>
              <li className="breadcrumb-item">{screen}</li>
              {assignment_id && (
                <li className="breadcrumb-item">{assignment.title}</li>
              )}
            </ol>
          </nav>
        </div>
      </div>
      <hr className="kb-dashboard-hr" width="100%"></hr>
      <div className="kb-flex-container mt-3">
        <div>
          <CourseNavigation />
        </div>
        <div className="kb-flex-column-grow">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
