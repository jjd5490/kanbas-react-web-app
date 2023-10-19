import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <ul className="kb-course-nav d-none d-md-block">
      {links.map((link, index) => (
        <li className={`${pathname.includes(link) && "kb-active"}`}>
          <Link key={index} to={`/Kanbas/Courses/${courseId}/${link}`}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;
