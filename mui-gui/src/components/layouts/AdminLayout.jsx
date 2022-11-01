import React from "react";
import { CheckAuthStatus } from "../shared";
import SidebarLayout from "./SidebarLayout";

const AdminLayout = () => {
  return (
    <>
      <CheckAuthStatus account_type={"admin"} />
      <SidebarLayout
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

export default AdminLayout;
