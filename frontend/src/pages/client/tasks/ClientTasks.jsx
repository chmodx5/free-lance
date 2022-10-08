import React from "react";
import { Card } from "../../../components/shared";

const ClientTasks = () => {
  return (
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
  );
};

export default ClientTasks;
