import { useState, useEffect } from "react";
import Chip from "../chip/Chip";
import FormInput from "./FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaCheck, FaTimes } from "react-icons/fa";

const AutoComplete = ({
  options,
  selectedItems,
  setSelectedItems,
  field_name,
}) => {
  const [items, setItems] = useState(options);

  useEffect(() => {
    if (selectedItems.length > 0) {
      if (items) {
        for (let index = 0; index < selectedItems.length; index++) {
          if (items.some((item) => item.item == selectedItems[index].item)) {
            let appSkills = items;
            appSkills = appSkills.filter(
              (itm) => itm.item !== selectedItems[index].item
            );
            setItems(appSkills);
          }
        }
      }
    }
  }, [selectedItems]);

  const searchItems = (e) => {
    if (e.target.value) {
      let filteredItems = items.filter((item) =>
        item.item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItems(filteredItems);
    } else if (e.target.value == "") {
      if (selectedItems.length > 0) {
        setItems(options);
        let filtered_items = [];
        for (let index = 0; index < selectedItems.length; index++) {
          if (index === 0) {
            filtered_items = options.filter(
              (item) => item.id != selectedItems[index].id
            );
            setItems(filtered_items);
          } else {
            filtered_items = filtered_items.filter(
              (item) => item.id != selectedItems[index].id
            );
            setItems(filtered_items);
          }
        }
      } else {
        setItems(options);
      }
    }
  };
  const addSelectedItem = (item) => {
    let new_item = [...selectedItems, item];
    setSelectedItems(new_item);
  };
  const removeSelectedItem = (item) => {
    let new_selected_items = selectedItems.filter((x) => x.id != item.id);
    let new_items = [...items, item];
    setSelectedItems(new_selected_items);
    setItems(new_items);
  };

  return (
    <>
      <div className="mb-2">
        <label htmlFor="" className="text-sm font-semibold ">
          Choose items relevant to your task
        </label>
      </div>

      <div>
        {selectedItems.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-3">
            {selectedItems.map((item) => (
              <Chip
                key={item.id}
                active
                text={item.item}
                icon={<FaTimes />}
                onClick={() =>
                  removeSelectedItem({
                    id: item.id,
                    item: item.item,
                  })
                }
              />
            ))}
          </ul>
        )}
        <FormInput
          placeholder="Search skills "
          field_name={field_name}
          type="text"
          onChange={searchItems}
        />

        <div>
          <small className="text-gray-400 font-semibold">
            Click on a skill to select it
          </small>
        </div>
        <ul className="flex gap-2 flex-wrap">
          {items.map((item) => (
            <li key={item.id}>
              <Chip
                className={
                  "py-1 px-2 hover:cursor-pointer hover:bg-primary-main hover:text-secondary-text  "
                }
                text={item.item}
                value={item}
                icon={<FaCheck />}
                onClick={() =>
                  addSelectedItem({ id: item.id, item: item.item })
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AutoComplete;
