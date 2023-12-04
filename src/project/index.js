import Signin from "./users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "./nav";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  return (
    <div className="row">
      <div className="col-3">
        <ProjectNav />
      </div>
      <div className="col-9 ms-2 me-2 mb-2 mt-2">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
