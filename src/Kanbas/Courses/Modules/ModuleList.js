import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      <ul className="list-group col-6">
        <li className="list-group-item kb-flex-container">
          <div className="col-9">
            <input
              className="form-control mb-2"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              className="form-control"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
          <button
            className="btn btn-success ms-3 me-2"
            onClick={handleAddModule}
          >
            Add
          </button>
          <button className="btn btn-primary" onClick={handleUpdateModule}>
            Update
          </button>
        </li>
      </ul>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <>
            {/* <li key={index} className="list-group-item">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li> */}
            <ul className="list-group panel-collapse">
              <li
                className="list-group-item list-group-item-secondary kb-flex-container"
                data-toggle="collapse"
                data-target="#test"
                style={{
                  width: "matchParent",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              >
                <span className="kb-list-item-text">
                  <b>{module.name}</b>:
                </span>
                <div className="kb-flex-column-grow"></div>
                <button
                  className="btn btn-danger float-end me-2"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
              </li>
              <li id="test" className="list-group-item">
                {module.description}
              </li>
            </ul>
          </>
        ))}
    </div>
  );
}
export default ModuleList;
