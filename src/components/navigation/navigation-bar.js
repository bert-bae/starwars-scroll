import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import ContentInput from './content-input';
import './navigation-bar.scss';

const NavigationBar = ({ updateContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputSubheader, setInputSubheader] = useState('');
  const [inputContent, setInputContent] = useState('');

  const inputSetters = {
    setInputTitle,
    setInputSubheader,
    setInputContent,
  };

  const inputStates = {
    inputTitle,
    inputSubheader,
    inputContent,
  };

  const toggleDrawer = (open) => (event) => {
    event.stopPropagation();
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div className="navigation-bar" onClick={toggleDrawer(false)}>
      <div className="menu-toggle" onClick={toggleDrawer(true)}>
        Change Story
      </div>
      <Drawer
        anchor="right"
        open={isOpen}
        onClick={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <ContentInput
          updateContent={updateContent}
          inputStates={inputStates}
          inputSetters={inputSetters}
        />
      </Drawer>
    </div>
  );
};

export default NavigationBar;
