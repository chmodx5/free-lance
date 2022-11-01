import React from "react";
import { Card } from "./../../components/shared";
import CircularProgress from "@mui/material/CircularProgress";
import Slider from "@mui/material/Slider";

const ClientHome = () => {
  return (
    <div className=" grid gap-4 ">
      <div className="grid grid-cols-3 gap-4">
        {[
          {
            title: "in progress",
            value: 2,
          },
          {
            title: "completed",
            value: 36,
          },
          {
            title: "active bids",
            value: 5,
          },
        ].map((item, index) => (
          <Card key={index}>
            <div>
              <h5 className="text-5xl ">{item.value}</h5>
              <p className="capitalize">{item.title}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-2">
        <Card>
          <h4 className="text-xl capitalize font-semibold mb-4">active task</h4>

          {/* progress */}
          <div className="flex space-x-5">
            <div>
              <div
                className={"inline-flex  items-center justify-center relative"}
              >
                <CircularProgress
                  // className={"bg-green-200"}
                  className={""}
                  classes={{
                    root: " text-red-900 ",
                  }}
                  variant={"determinate"}
                  size={120}
                  value={50}
                />
                <div className=" absolute text-4xl font-semibold">50%</div>
              </div>
              {/* <p className="font-semibold"> 50% Complete</p> */}
            </div>
            <div>
              {/* the task */}
              <div>
                <span className="font-semibold">Task: </span>
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita quaerat, obcaecati rem consequuntur dolor vel nemo.
                  Provident, adipisci iusto? Quo quam labore unde voluptates?
                  Incidunt eum quos voluptates esse obcaecati?
                </span>
              </div>
              {/* who it has been assigned to */}
              <div className="text-sm">
                <span className="font-semibold">Assigned to: </span>
                <span>Someone</span>
              </div>
              {/*  due in how long */}
              <div className="text-sm">
                <span className="font-semibold">Due in: </span>
                <span>3 days</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClientHome;
