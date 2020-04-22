import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
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
    console.log(open);
    setIsOpen(open);
  };

  return (
    <div
      className="navigation-bar"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <button onClick={toggleDrawer(true)}>Menu</button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClick={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        Hello world
      </Drawer>
    </div>
  );
};

export default NavigationBar;
