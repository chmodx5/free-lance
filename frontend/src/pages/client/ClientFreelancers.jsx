import React, { useState } from "react";
import {
  AppTable,
  Card,
  AutoComplete,
  Chip,
  Button,
  FreeLancerCard,
} from "./../../components/shared";
import { HiChevronDown } from "react-icons/hi";
import { BsChevronExpand } from "react-icons/bs";

const ClientFreelancers = () => {
  return (
    <>
      <div className="grid gap-4">
        {/* add a field to select the project someone that someone wants to view bids for */}
        <Card className={"flex space-x-4 justify-between items-center"}>
          <ul className="flex space-x-2 ">
            {["rating", "reviews", "completion rate"].map((item, index) => (
              <li key={index}>
                <Button
                  variant={"outlined"}
                  color={""}
                  icon={<HiChevronDown />}
                  key={index}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
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
              <FreeLancerCard
                id={"5432534gh"}
                name={"customer one"}
                rating={"2.2"}
                reviews={"20"}
                completion_rate={"36"}
                description={
                  "Lorem, ipsum dolor sit amet consectet adipisicing elit. Eo  obcaecati omnis repudiandae ipsum blanditiis consectetur expedita corrupti numquam soluta, saepe inventore facere consequuntur in non quibusdam, quaerat, dolorum qui totam."
                }
                skills={["html", "css", "js", "php", "laravel"]}
                display_image={""}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClientFreelancers;
