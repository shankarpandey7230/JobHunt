import "./App.css";

import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";

import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import CompanyCreate from "./components/admin/CompanyCreate";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/description/:id" element={<JobDescription />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        {/* routes for admins  */}
        <Route path="/admin/companies" element={<Companies />} />
        <Route path="/admin/companies/create" element={<CompanyCreate />} />
        <Route path="/admin/companies/:id" element={<CompanySetup />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="admin/jobs/create" element={<PostJob />} />
        <Route path="admin/jobs/:id/applicants" element={<Applicants />} />
      </Routes>
    </>
  );
}

export default App;
