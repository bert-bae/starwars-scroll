import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import ContentInput from './content-input';
import './navigation-bar.scss';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <button onClick={toggleDrawer(true)}>Menu</button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClick={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <ContentInput />
      </Drawer>
    </div>
  );
};

export default NavigationBar;
