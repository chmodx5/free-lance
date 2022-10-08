import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer, Sidebar } from "../shared";

const WorkerLayout = () => {
  return (
    <div className="">
      <NavBar
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
      />
      <main>
        <div className="flex  pt-14">
          <div className="w-64 bg-gray-200 h-screen">
            <Sidebar
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
          </div>
          <div className="flex-1 ">
            <Outlet />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkerLayout;
