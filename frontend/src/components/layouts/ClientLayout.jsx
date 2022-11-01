import React, { useState } from "react";
import { CheckAuthStatus } from "../shared";
import SidebarLayout from "./SidebarLayout";
import { useLocation } from "react-router-dom";

const ClientLayout = ({}) => {
  const navigate = useLocation();
  let current_route = navigate.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <CheckAuthStatus
        current_location={current_route}
        account_type={"client"}
      />
      <SidebarLayout
        toggle_sidebar={() => setSidebarOpen(!sidebarOpen)}
        nav_links={[
          {
            title: "dashboard",
            link: "/client",
          },
          {
            title: "tasks",
            link: "/client/tasks",
          },
          {
            title: "freelancers",
            link: "/client/freelancers",
          },
          {
            title: "account ",
            link: "/client/account",
          },
        ]}
        sidebar_links={[
          {
            title: "dashboard",
            link: "/client",
          },
          {
            title: "tasks",
            link: "/client/tasks",
            items: [
              {
                title: "dashboard",
                link: "/client/tasks",
              },
              {
                title: "active bids",
                link: "/client/tasks/activebids",
              },
              {
                title: "in progress",
                link: "/client/tasks/inprogress",
              },
              {
                title: "completed",
                link: "/client/tasks/completed",
              },
              {
                title: "incomplete",
                link: "/client/tasks/incomplete",
              },
              {
                title: "canceled",
                link: "/client/tasks/canceled",
              },
              {
                title: "add new",
                link: "/client/tasks/addnewtask",
              },
            ],
          },
          {
            title: "freelancers",
            link: "/client/freelancers",
          },
          {
            title: "account",
            link: "/client/account",
            items: [
              {
                title: "profile",
                link: "/client/account",
              },
              {
                title: "reviews",
                link: "/client/account/reviews",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ClientLayout;
