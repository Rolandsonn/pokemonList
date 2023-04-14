import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectTypes = ({ types, onChange, label, value }) => {
  const typeElems = types.map((type) => (
    <MenuItem key={type} value={type}>
      {type}
    </MenuItem>
  ));
  return (
    <>
      <div className="input-field col s10 select">
        <FormControl fullWidth sx={{ mb: "20px", borderColor: "#cacaca" }}>
          <InputLabel id="select" color="secondary" sx={{ color: "#cacaca" }}>
            {label}
          </InputLabel>
          <Select
            sx={{
              borderBottom: "1px solid#cacaca",
              borderRadius: "3px",
              color: "#cacaca",
            }}
            labelId="select"
            id="select-1"
            color="secondary"
            value={value}
            label={label}
            onChange={onChange}
          >
            {typeElems}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default SelectTypes;
