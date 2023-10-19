import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {FaBan} from "react-icons/fa"
import {AiTwotoneCalendar} from "react-icons/ai"
import {FaFileImport} from "react-icons/fa";
import {TbFileImport} from "react-icons/tb";
import {BiTargetLock} from "react-icons/bi";
import {BiSolidBarChartAlt2} from "react-icons/bi";
import {TfiAnnouncement} from "react-icons/tfi";
import {BsBell} from "react-icons/bs";


function RightSidebar() {
    return (
        <div className="kb-home-right-side d-none d-lg-block">
        <div>Course Status</div>
            <div className="kb-flex-container">
                <div style={{width: "50%"}}>
                    <button className="btn btn-secondary kb-unpub-btn" style={{width: "100%"}}>
                        <FaBan style={{marginRight: "5px"}}/>
                        {/* <i className="fa-solid fa-ban"></i> */}
                        Unpublish</button>
                </div>
                <div style={{width: "50%"}}>
                    <button className="btn btn-secondary kb-pub-btn" style={{width: "100%"}}>
                        <IoIosCheckmarkCircleOutline style={{marginRight: "5px"}}/>
                        {/* <i className="fa-regular fa-circle-check"></i> */}
                        Published</button>
                </div>
            </div>
            <ul className="list-group">
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <FaFileImport style={{marginRight: "10px"}}/>
                        {/* <i className="fa-solid fa-file-import"></i> */}
                        Import Existing Content
                    </a>
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <TbFileImport style={{marginRight: "10px"}}/>
                        {/* <i className="fa-solid fa-arrow-right-from-bracket"></i> */}
                        Import From Commons
                    </a>
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <BiTargetLock style={{marginRight: "10px"}}/>
                        {/* <i className="fa-solid fa-crosshairs"></i> */}
                        Choose Home Page
                    </a>
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <BiSolidBarChartAlt2 style={{marginRight: "10px"}}/>
                        {/* <i className="fa-solid fa-chart-simple"></i> */}
                        View Course Stream
                    </a>
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <TfiAnnouncement style={{marginRight: "10px"}}/>
                        {/* <i className="fa-solid fa-bullhorn"></i> */}
                        New Announcment
                    </a>
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <BiSolidBarChartAlt2 style={{marginRight: "10px"}}/>
                        {/* <i className="fa-solid fa-chart-simple"></i> */}
                        New Analytics
                    </a>
                    <a className="mb-1 list-group-item list-group-item-action list-group-item-secondary" href="#">
                        <BsBell style={{marginRight: "10px"}}/>
                        {/* <i className="fa-regular fa-bell"></i> */}
                        View Course Notificitions
                    </a>
            </ul>
            <div className="kb-flex-container" style={{width: "100%"}}>
                <div>Coming Up</div>
                <div className="kb-flex-column-grow float-end" style={{alignItems: "end", textAlign: "right"}}>
                    <i className="fa-regular fa-calendar"></i>
                    <a className="kb-calendar-link" href="#">View Calendar</a>
                </div>
            </div>
            <hr></hr>
            <div className="kb-calendar-list">
                <div className="kb-flex-container kb-calendar-item">
                    <div>
                        <AiTwotoneCalendar style={{marginRight: "5px"}}/>
                        {/* <i className="fa-regular fa-calendar"></i> */}
                    </div>
                    <div className="kb-flex-column-grow">
                        <div>
                            <a href="#">Lecture</a>
                        </div>
                        <div className="kb-calendar-detail">CS4550.12631.202410</div>
                        <div className="kb-calendar-detail">Sep 7 at 11:45am</div>
                    </div>
                </div>
                <div className="kb-flex-container kb-calendar-item">
                    <div>
                    <AiTwotoneCalendar style={{marginRight: "5px"}}/>
                        {/* <i className="fa-regular fa-calendar"></i> */}
                    </div>
                    <div className="kb-flex-column-grow">
                        <div>
                            <a href="#">Lecture</a>
                        </div>
                        <div className="kb-calendar-detail">CS4550.12631.202410</div>
                        <div className="kb-calendar-detail">Sep 11 at 11:45am</div>
                    </div>
                </div>
                <div className="kb-flex-container kb-calendar-item">
                    <div>
                        <AiTwotoneCalendar style={{marginRight: "5px"}}/>
                        {/* <i className="fa-regular fa-calendar"></i> */}
                    </div>
                    <div className="kb-flex-column-grow">
                        <div>
                            <a href="#">CS5610 Web Development Lecture</a>
                        </div>
                        <div className="kb-calendar-detail">CS4550.12631.202410</div>
                        <div className="kb-calendar-detail">Sep 11 at 6pm</div>
                    </div>
                </div>
            </div>
    </div>
    );
  };

export default RightSidebar;
       
