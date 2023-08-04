import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const AddTAsk = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);

    setValue("");
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          placeholder="Add New Task"
        />
        <Button variant="light" onClick={addItem}>
          Add
        </Button>
      </div>
    </>
  );
};

export default AddTAsk;
