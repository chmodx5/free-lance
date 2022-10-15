import { useState } from "react";
import { AppTable, Card, FormInput } from "./../../../components/shared";
import { Combobox } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";

const values = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];
const ClientActiveBids = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? values
      : values.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="grid gap-4">
      {/* add a field to select the project someone that someone wants to view bids for */}
      <Card className={"flex space-x-4 justify-between items-center"}>
        <p>Select project/task</p>
        {/* autocomplete */}
        <div>
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
      </Card>

      <AppTable
        table_headers={[
          {
            id: "bidder",

            label: "bidder",
          },
          {
            id: "project_name",

            label: "project name",
          },
          {
            id: "delivered_in",

            label: "delivered in",
          },
          {
            id: "bid_amount",

            label: "bid amount",
          },
          {
            id: "bid_date",

            label: "bidded on",
          },
        ]}
        table_data={[
          {
            id: "daskfljadsf",
            bidder: "someone bidding",
            project_name: "the project name",
            delivered_in: "3days",
            bid_amount: "kes 5000",
            bid_date: "3 days ago",
          },
          {
            id: "tdjdhdjfhgdf",
            bidder: "else bidding",
            project_name: "one project name",
            delivered_in: "2days",
            bid_amount: "kes 5000",
            bid_date: "4 days ago",
          },
          {
            id: "fxcxbcxbvx",
            bidder: "maimuma bidding",
            project_name: "five the project name",
            delivered_in: "1days",
            bid_amount: "kes 5000",
            bid_date: "1 days ago",
          },
          {
            id: "dsfasdfasdfa",
            bidder: "wewe bidding",
            project_name: "tem the project name",
            delivered_in: "9days",
            bid_amount: "kes 2000",
            bid_date: "10 days ago",
          },
        ]}
      />
    </div>
  );
};

export default ClientActiveBids;
