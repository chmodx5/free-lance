import React from "react";
import SidebarLayout from "./SidebarLayout";

const WorkerLayout = () => {
  return (
    <>
      <SidebarLayout
        nav_links={[
          {
            title: "dashboard",
            link: "/worker",
          },
          {
            title: "tasks",
            link: "/worker/tasks",
          },
          {
            title: "freelancers",
            link: "/worker/freelancers",
          },
          {
            title: "account ",
            link: "/worker/account",
          },
        ]}
        sidebar_links={[
          {
            title: "dashboard",
            link: "/worker",
          },
          {
            title: "tasks",
            link: "/worker/tasks",
            items: [
              {
                title: "dashboard",
                link: "/worker/tasks",
              },
              {
                title: "active bids",
                link: "/worker/tasks/activebids",
              },
              {
                title: "in progress",
                link: "/worker/tasks/inprogress",
              },
              {
                title: "completed",
                link: "/worker/tasks/completed",
              },
              {
                title: "incomplete",
                link: "/worker/tasks/incomplete",
              },
            ],
          },
          {
            title: "account",
            link: "/worker/account",
            items: [
              {
                title: "profile",
                link: "/worker/account",
              },
              {
                title: "reviews",
                link: "/worker/account/reviews",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default WorkerLayout;
