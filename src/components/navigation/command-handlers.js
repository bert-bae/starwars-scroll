import React, { useState } from 'react';
import { saveStory } from '../../clients/api-client';
import { baseUrl } from '../../config/config.json';
import './command-buttons.scss';

const CommandHandlers = ({ updateContent, inputStates }) => {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const copyContent = () => {
    // TODO: Set copy function here
  };

  const saveHandler = async ({ title, subheader, content }) => {
    if (!title && !subheader && !content) {
      setError('Title, subheader, and content are all required fields!');
      setLink('');
    }

    const saved = await saveStory({ title, subheader, content });

    if (saved.short_id) {
      setError('');
      setLink(`https://${baseUrl}/?shortId=${saved.short_id}`);
    }
  };

  return (
    <>
      <div className="command-container">
        <div className="command-triggers">
          <button className="update-command" onClick={updateContent}>
            Preview Story
          </button>
          <button
            className="share-story"
            onClick={async () => {
              await saveHandler({
                title: inputStates.inputTitle,
                subheader: inputStates.inputSubheader,
                content: inputStates.inputContent,
              });
            }}
          >
            Share Story
          </button>
        </div>
        <p className="error">{error}</p>
        {link && (
          <div className="share-container">
            <p>Share this link</p>
            <p id="shareable-link" onClick={copyContent}>
              {link}
            </p>
          </div>
        )}
        <p className="disclaimer">
          Share your story with a friend! clicking the "Share Story" button will
          generate a link that you can share. The stories will only live for 7
          days before it is lost to space. These words are off on a one way trip
          to oblivion.
        </p>
      </div>
    </>
  );
};

export default CommandHandlers;
