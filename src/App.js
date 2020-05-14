import 'regenerator-runtime/runtime.js';
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import './styles/App.css';
// Components
import { getStory } from './clients/api-client';
import NavigationBar from './components/navigation/navigation-bar';
import StarwarsBackground from './components/starwars-crawl/starwars-background';

// Default config
import DefaultStates from './config/default.json';

const App = () => {
  const [title, setTitle] = useState(DefaultStates.title);
  const [subheader, setSubheader] = useState(DefaultStates.subheader);
  const [content, setContent] = useState(DefaultStates.content);

  const updateContent = (title, subheader, content) => {
    setTitle(title);
    setSubheader(subheader);
    setContent(content);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('shortId')) {
      (async () => {
        const story = await getStory(params.get('shortId'));

        if (story) {
          setTitle(story.title);
          setSubheader(story.subheader);
          setContent(story.content);
        }
      })();
    }
  }, []);

  return (
    <div className="App">
      <NavigationBar updateContent={updateContent} />
      <StarwarsBackground getContent={{ title, subheader, content }} />
    </div>
  );
};

export default hot(module)(App);
