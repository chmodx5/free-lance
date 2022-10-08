import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppTabs = ({ tabHeaders, tabItems }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-2 rounded-xl bg-primary p-1">
        {tabHeaders.map((tabHeader, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              classNames(
                " px-10 rounded-lg py-2.5 text-sm font-bold leading-5 text-blue-700 capitalize",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.4] hover:text-white"
              )
            }
          >
            {tabHeader}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {tabItems.map((tabItem, index) => (
          <Tab.Panel key={index} className={classNames("pt-2")}>
            <>{tabItem}</>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default AppTabs;
