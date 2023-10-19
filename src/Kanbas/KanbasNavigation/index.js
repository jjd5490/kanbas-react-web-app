import { Link, useLocation } from "react-router-dom";
import "./index.css";

import { CgProfile } from "react-icons/cg";
import { TfiDashboard } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const iconMap = {
    Account: <CgProfile className="kb-nav-icon kb-nav-profile-icon" />,
    Dashboard: <TfiDashboard className="kb-nav-icon" />,
    Courses: <FaBook className="kb-nav-icon" />,
    Calendar: <BsFillCalendarDateFill className="kb-nav-icon" />,
    Inbox: <FiInbox className="kb-nav-icon" />,
    History: <AiOutlineClockCircle className="kb-nav-icon" />,
    Studio: <FiMonitor className="kb-nav-icon" />,
    Commons: <FiArrowRightCircle className="kb-nav-icon" />,
    Help: <BiHelpCircle className="kb-nav-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="kb-navbar-container d-none d-md-block">
      <ul className="kb-nav-bar">
        <li>
          <img
            src="/images/neu-logo.png"
            alt=""
            width="50px"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
        </li>
        {links.map((link, index) => (
          <li className={`${pathname.includes(link) && "kb-nav-active"}`}>
            <Link
              key={index}
              to={`/Kanbas/${link}`}
              className={`${pathname.includes(link) && "kb-nav-active"}`}
            >
              {iconMap[link]}
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
