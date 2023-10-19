import { FaBars, FaChevronDown } from "react-icons/fa";

function MobileNav() {
  return (
    <div className="kb-small-screen-header kb-flex-container d-md-none">
      <div>
        <a
          href="/kanbas/kanbas_navigation/mobile-nav.html"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FaBars
            className="fa-solid fa-bars"
            style={{ marginLeft: "10px" }}
          ></FaBars>
        </a>
      </div>
      <div className="kb-flex-column-grow .kb-header-title">
        <div>CS5610.17367.202410</div>
        <div>Modules</div>
      </div>
      <div>
        <a
          href="/kanbas/course_navigation/mobile-nav.html"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FaChevronDown
            className="fa-solid fa-chevron-down"
            style={{ marginRight: "10px" }}
          ></FaChevronDown>
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
