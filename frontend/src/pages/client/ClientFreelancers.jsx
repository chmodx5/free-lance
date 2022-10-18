import React, { useState } from "react";
import {
  Card,
  AutoComplete,
  Button,
  FreeLancerCard,
} from "./../../components/shared";
import { HiChevronDown } from "react-icons/hi";
import { useGetAllFreelancersQuery } from "../../services/apiSlice";

const ClientFreelancers = () => {
  const all_freelancers = useGetAllFreelancersQuery();
  console.log(all_freelancers);
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
        {all_freelancers.isSuccess ? (
          <>
            <ul className="grid gap-5">
              {all_freelancers.data.data.items.map((freelancer, index) => (
                <li key={index}>
                  <FreeLancerCard
                    id={freelancer.id}
                    name={freelancer.username}
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
          </>
        ) : (
          <></>
        )}
        <div>
          pagination
          {all_freelancers.isSuccess ? (
            <>
              <div className="flex space-x-3">
                {all_freelancers.data.data.pages
                  .slice(0, 3)
                  .map((item, index) => (
                    <Button variant={"outlined"}>{item.page}</Button>
                  ))}
                <div>................</div>
                {all_freelancers.data.data.pages
                  .slice(
                    all_freelancers.data.data.pages.length - 3,
                    all_freelancers.data.data.pages.length
                  )
                  .map((item, index) => (
                    <Button variant={"outlined"}>{item.page}</Button>
                  ))}
              </div>
              <div>
                {all_freelancers.data.data.total} results showing page 5 of{" "}
                {all_freelancers.data.data.totalPages}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ClientFreelancers;
