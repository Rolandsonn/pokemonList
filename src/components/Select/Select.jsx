import React from "react";

const Select = ({ selectedType, handleTypeChange }) => {
  return (
    <>
      <div className="input-field col s10 select">
        <select defaultValue={selectedType} onChange={handleTypeChange}>
          <option value="">Выберите тип покемона</option>
          <option value="water">Water</option>
          <option value="combat">Fighting</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="grass">Grass</option>
          <option value="flying">Flying</option>
        </select>
      </div>
    </>
  );
};

export default Select;
