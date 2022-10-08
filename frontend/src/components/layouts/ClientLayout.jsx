import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer, Sidebar } from "../shared";

const ClientLayout = ({}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="">
      <NavBar
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
      />
      <main>
        <div className="flex  pt-14">
          <div
            className={`${
              sidebarOpen ? "w-64" : "hidden "
            } bg-gray-200 h-screen`}
          >
            {sidebarOpen && (
              <Sidebar
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
            )}
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

export default ClientLayout;
