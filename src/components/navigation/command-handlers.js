import React from 'react';
import './command-buttons.scss';

const CommandHandlers = ({ updateContent }) => {
  return (
    <div className="command-container">
      <button className="update-command" onClick={updateContent}>
        Update Story
      </button>
    </div>
  );
};

export default CommandHandlers;
