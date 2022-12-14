import { useState } from "react";
import { AppTable, Card, AutoComplete } from "./../../../components/shared";

const values = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];
const ClientActiveBids = () => {
  return (
    <div className="grid gap-4">
      {/* add a field to select the project someone that someone wants to view bids for */}
      <Card className={"flex space-x-4 justify-between items-center"}>
        <p>Select project/task</p>
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
