import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { projectContext } from "../../../../context/ProjectsContext";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

function SelectIndustry() {
  const { term, setTerm, industryOptions } = useContext(projectContext);

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "gray" : "gray",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? "#864721" : "white",
          color: state.isFocused ? "white" : "black",
          cursor: "pointer",
          // ":hover": {
          //   color: "white",
          // }, // borderRadius: "20px",
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,

          backgroundColor: "#864721", // Background for selected options
        }),
        multiValueLabel: (baseStyles) => ({
          ...baseStyles,
          color: "white", // Text color of selected options
          // backgroundColor: "white",
        }),
        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          color: "white", // Color of the remove icon
          cursor: "pointer",
          ":hover": {
            backgroundColor: "transparent", // Background when hovering over the remove icon
          },
        }),
      }}
      isMulti
      name="colors"
      placeholder="Select Main Sectors"
      onChange={(data) => {
        const value = data.map((d) => d.value);
        setTerm({
          ...term,
          industry: { text: value },
        });
      }}
      noOptionsMessage={"mke"}
      options={industryOptions}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#864721",
          primary: "#864721",
        },
      })}
      className="basic-multi-select rounded-xl"
      classNamePrefix="select"
    />
  );
}
export default SelectIndustry;
