import React from 'react';
import { TextField } from '@material-ui/core';
import CommandHandlers from './command-handlers';

const ContentInput = ({ updateContent, inputStates, inputSetters }) => {
  const handleChange = (setter) => (event) => {
    event.stopPropagation();
    setter(event.target.value);
  };

  return (
    <div className="menu-list">
      <form autoComplete="off" noValidate>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={inputStates.inputTitle}
          onChange={handleChange(inputSetters.setInputTitle)}
        />
        <TextField
          id="outlined-basic"
          label="Subheader"
          variant="outlined"
          value={inputStates.inputSubheader}
          onChange={handleChange(inputSetters.setInputSubheader)}
        />
        <TextField
          id="outlined-basic"
          label="Main Content"
          variant="outlined"
          multiline
          value={inputStates.inputContent}
          onChange={handleChange(inputSetters.setInputContent)}
          rows={12}
          rowsMax={12}
        />
      </form>
      <CommandHandlers
        updateContent={() =>
          updateContent(
            inputStates.inputTitle,
            inputStates.inputSubheader,
            inputStates.inputContent
          )
        }
      />
    </div>
  );
};

export default ContentInput;
