import React from "react";

const Input = ({ type, onChange, value }) => {
  return (
    <div class="mb-6">
      <label
        for="large-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Large input
      </label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        id="large-input"
        className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
