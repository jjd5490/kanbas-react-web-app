import {HiDotsVertical} from "react-icons/hi";

function TopMenuButtons() {
    return (
        <>
        <div className="kb-home-top-btns float-end">
        <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Publish All</a></li>
              <li><a className="dropdown-item" href="#">Publish All Items and Modules</a></li>
              <li><a className="dropdown-item" href="#">Unpublish</a></li>
            </ul>
          </div>
        <button className="btn btn-danger">+ Module</button>
        <button className="btn btn-secondary">
            <HiDotsVertical/>
            {/* <i className="fa-solid fa-ellipsis-vertical"></i> */}
        </button>
    </div> 
    <hr width="100%"></hr> 
    </>

    );
}

export default TopMenuButtons;