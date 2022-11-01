import React, { useState, useEffect } from "react";
import {
  Card,
  AutoComplete,
  Button,
  FreeLancerCard,
} from "./../../components/shared";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useGetAllFreelancersQuery } from "../../services/apiSlice";

const ClientFreelancers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [freelancers, setFreelancers] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [selectedAutoComplete, setSelectedAutoComplete] = useState("");

  const all_freelancers = useGetAllFreelancersQuery(`?page=${currentPage}`);
  console.log(all_freelancers);
  console.log(selectedAutoComplete);
  useEffect(() => {
    setSelectedAutoComplete(selectedAutoComplete);
  }, [selectedAutoComplete]);
  useEffect(() => {
    if (all_freelancers.isSuccess) {
      setFreelancers(all_freelancers.data.data.items);
      setUsernames(all_freelancers.data.data.usernames);
    }
  }, [all_freelancers.status, currentPage]);

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
              selectedAutoComplete={selectedAutoComplete}
              setSelectedAutoComplete={setSelectedAutoComplete}
              values={usernames}
            />
          </div>
        </Card>
        {freelancers ? (
          <>
            <ul className="grid gap-5">
              {freelancers.map((freelancer, index) => (
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
                {currentPage == 0 ? null : (
                  <Button
                    variant={"outlined"}
                    onClick={() =>
                      setCurrentPage(currentPage <= 0 ? 0 : currentPage - 1)
                    }
                  >
                    <HiChevronLeft />
                  </Button>
                )}

                {all_freelancers.data.data.pages
                  .slice(currentPage, currentPage + 4)
                  .map((item, index) => (
                    <Button
                      key={index}
                      to={item.link}
                      variant={"outlined"}
                      active={item.page == currentPage}
                      onClick={() => setCurrentPage(item.page)}
                    >
                      {item.page}
                    </Button>
                  ))}
                <div>................</div>
                {all_freelancers.data.data.pages
                  .slice(
                    all_freelancers.data.data.pages.length - 3,
                    all_freelancers.data.data.pages.length
                  )
                  .map((item, index) => (
                    <Button
                      key={index}
                      to={item.link}
                      variant={"outlined"}
                      active={item.page == currentPage}
                      onClick={() => setCurrentPage(item.page)}
                    >
                      {item.page}
                    </Button>
                  ))}
                <Button
                  variant={"outlined"}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <HiChevronRight />
                </Button>
              </div>
              <div>
                {all_freelancers.data.data.total} results showing page{" "}
                {currentPage} of {all_freelancers.data.data.totalPages}
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
