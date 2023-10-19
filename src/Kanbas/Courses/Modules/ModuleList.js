import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <>
            {/* <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li> */}
            <ul className="list-group panel-collapse">
            <li className="list-group-item list-group-item-secondary" style={{borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>
            <div className="kb-double-ellipsis">
                <i className="fa-solid fa-ellipsis-vertical float-start"></i>
                <i className="fa-solid fa-ellipsis-vertical float-start"></i>
            </div>
            <span className="kb-list-item-text"><b>{module.name}</b>: {module.description}</span>
            <i className="fa-solid fa-ellipsis-vertical float-end"></i>
            <i className="fa-solid fa-circle-check float-end"></i>
            </li>
            </ul>
        </>
      ))
      }
      </div>
  );
}
export default ModuleList;