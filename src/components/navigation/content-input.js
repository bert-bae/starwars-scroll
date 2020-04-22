import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import CommandHandlers from './command-handlers';

const ContentInput = ({ updateContent }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputSubheader, setInputSubheader] = useState('');
  const [inputContent, setInputContent] = useState('');

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
          value={inputTitle}
          onChange={handleChange(setInputTitle)}
        />
        <TextField
          id="outlined-basic"
          label="Subheader"
          variant="outlined"
          value={inputSubheader}
          onChange={handleChange(setInputSubheader)}
        />
        <TextField
          id="outlined-basic"
          label="Main Content"
          variant="outlined"
          multiline
          value={inputContent}
          onChange={handleChange(setInputContent)}
          rows={12}
          rowsMax={12}
        />
      </form>
      <CommandHandlers
        updateContent={() =>
          updateContent(inputTitle, inputSubheader, inputContent)
        }
      />
    </div>
  );
};

export default ContentInput;
