import React from "react";
import { Card } from "./../../components/shared";

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
          <h4 className="text-xl capitalize font-semibold">active task</h4>
          {/* progress */}
          <div className="py-5">
            <h4 className="text-5xl capitalize font-semibold"> 52%</h4>
            <div className="h-56 w-56 bg-secondary rounded-full"></div>
            <div className="flex items-center justify-center space-x-3 mt-2">
              <p className="capitalize rounded-full">progress: </p>

              <div className="h-1 w-full border border-1 rounded border-primary">
                <div className="h-full bg-primary rounded w-[50%]"></div>
              </div>
            </div>
          </div>
          {/* the task */}
          <div>
            <span className="font-semibold">Task: </span>
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              quaerat, obcaecati rem consequuntur dolor vel nemo. Provident,
              adipisci iusto? Quo quam labore unde voluptates? Incidunt eum quos
              voluptates esse obcaecati?
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
        </Card>
      </div>
    </div>
  );
};

export default ClientHome;
