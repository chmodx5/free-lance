import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/tailwind.css";
import {
  AdminHome,
  ClientHome,
  ClientProfile,
  ClientTasks,
  ClientFreelancers,
  ClientAccount,
  GuestHome,
  GuestAbout,
  GuestContact,
  WorkerHome,
  WorkerAccount,
  WorkerTasks,
  WorkerFreelancers,
  Login,
  Register,
  ClientReviews,
  ClientActiveBids,
  ClientCompleted,
  ClientIncomplete,
  ClientInProgress,
} from "./pages";
import {
  AdminLayout,
  ClientLayout,
  WorkerLayout,
  GuestLayout,
} from "./components/layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<GuestLayout />}>
            <Route path="/" element={<GuestHome />} />
            <Route path="/about" element={<GuestAbout />} />
            <Route path="/contact" element={<GuestContact />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route path="" element={<AdminHome />} />
          </Route>

          <Route path="client" element={<ClientLayout />}>
            <Route path="" element={<ClientHome />} />
            <Route path="freelancers" element={<ClientFreelancers />} />
            <Route path="tasks">
              <Route path="" element={<ClientTasks />} />
              <Route path="activebids" element={<ClientActiveBids />} />
              <Route path="completed" element={<ClientCompleted />} />
              <Route path="incomplete" element={<ClientIncomplete />} />
              <Route path="inprogress" element={<ClientInProgress />} />
            </Route>
            <Route path="account">
              <Route path="" element={<ClientProfile />} />
              <Route path="reviews" element={<ClientReviews />} />
            </Route>
          </Route>
          <Route path="worker" element={<WorkerLayout />}>
            <Route path="" element={<WorkerHome />} />
            <Route path="tasks" element={<WorkerTasks />} />
            <Route path="freelancers" element={<WorkerFreelancers />} />
            <Route path="account" element={<WorkerAccount />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
