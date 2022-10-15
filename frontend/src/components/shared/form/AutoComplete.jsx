import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";

const AutoComplete = ({ values }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? values
      : values.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div>
      {" "}
      <Combobox value={selectedValue} onChange={setSelectedValue}>
        <div className="relative">
          <div className="relative">
            <Combobox.Button className="absolute right-3 top-1/2 bottom-1/2 flex items-center pr-2 bg-red-700">
              <BsChevronExpand />
            </Combobox.Button>
            <Combobox.Input
              placeholder="Select project"
              className={
                "rounded border border-gray-300 px-3 py-1 focus:outline focus:outline-1 focus:border-secondary focus: outline-secondary"
              }
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Combobox.Options
            className={
              "absolute w-full z-50  py-1 px-1 bg-white rounded mt-1 divide-y shadow hover:shadow-lg"
            }
          >
            {filteredPeople.map((item) => (
              <Combobox.Option
                className={
                  "hover:bg-secondary px-3 py-1 rounded hover:text-white hover:cursor-pointer"
                }
                key={item}
                value={item}
              >
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default AutoComplete;
