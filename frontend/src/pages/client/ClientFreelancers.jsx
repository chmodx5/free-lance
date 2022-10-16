import React, { useState } from "react";
import { AppTable, Card, AutoComplete, Chip } from "./../../components/shared";
import { HiChevronDown } from "react-icons/hi";
import { BsChevronExpand } from "react-icons/bs";

const ClientFreelancers = () => {
  return (
    <>
      <div className="grid gap-4">
        {/* add a field to select the project someone that someone wants to view bids for */}
        <Card className={"flex space-x-4 justify-between items-center"}>
          <button className="flex divide-x divide-dotted divide-gray-500">
            {["rating", "reviews", "completion rate"].map((item, index) => (
              <div
                key={index}
                className=" capitalize text-secondary hover:font-semibold  flex space-x-2 items-center px-2"
              >
                <span>{item}</span> <HiChevronDown />
              </div>
            ))}
          </button>
          {/* autocomplete */}
          <div>
            <AutoComplete
              values={[
                "Durward Reynolds",
                "Kenton Towne",
                "Therese Wunsch",
                "Benedict Kessler",
                "Katelyn Rohan",
              ]}
            />
          </div>
        </Card>

        <ul className="grid gap-5">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <li key={index}>
              <Card>
                <div className="flex space-x-3">
                  <div className="">
                    <div className="aspect-square w-36 rounded bg-gray-400"></div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-lg capitalize">
                      somebody2
                    </h3>
                    <div className="flex  text-sm divide-x-2 divide-black">
                      <div className="pr-3">
                        Rating <span className="font-semibold">4.6</span>
                      </div>
                      <div className="px-3">
                        <span className=" font-semibold">20</span> Reviews
                      </div>
                      <div className="pl-3">
                        <span className="font-semibold">20%</span> Completion
                        rate
                      </div>
                    </div>
                    <p className="py-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eos obcaecati omnis repudiandae ipsum blanditiis
                      consectetur expedita corrupti numquam soluta, saepe
                      inventore facere consequuntur in non quibusdam, quaerat,
                      dolorum qui totam.
                    </p>
                    <div>
                      <ul className="flex space-x-3">
                        {["html", "css", "js", "php", "laravel"].map(
                          (item, index) => (
                            <Chip key={index} text={item} />
                          )
                        )}
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClientFreelancers;
