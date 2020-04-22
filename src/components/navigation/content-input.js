import React, { useState } from 'react';
import { TextField, TextareaAutosize, makeStyles } from '@material-ui/core';

const ContentInput = () => {
  const [title, setTitle] = useState('');
  const [subheader, setSubheader] = useState('');
  const [content, setContent] = useState('');

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
          value={title}
          onChange={handleChange(setTitle)}
        />
        <TextField
          id="outlined-basic"
          label="Subheader"
          variant="outlined"
          value={subheader}
          onChange={handleChange(setSubheader)}
        />
        <TextField
          id="outlined-basic"
          label="Main Content"
          variant="outlined"
          multiline
          value={content}
          onChange={handleChange(setContent)}
          rows={12}
          rowsMax={12}
        />
      </form>
    </div>
  );
};

export default ContentInput;
