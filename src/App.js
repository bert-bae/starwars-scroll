import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import './styles/App.css';
// Components
import NavigationBar from './components/navigation/navigation-bar';
import StarwarsBackground from './components/starwars-crawl/starwars-background';

// Default config
import DefaultStates from './config/default.json';

const App = () => {
  const [title, setTitle] = useState(DefaultStates.title);
  const [subheader, setSubheader] = useState(DefaultStates.subheader);
  const [content, setContent] = useState(DefaultStates.content);
  const [shortId, setShortId] = useState(null);

  const updateContent = (title, subheader, content) => {
    setTitle(title);
    setSubheader(subheader);
    setContent(content);
  };

  // useEffect(() => {
  //   if (!shortId) {
  //     updateContent('test', 'test', 'test');
  //   } else {
  //     const params = new URLSearchParams(window.location.search);
  //     if (params.has('shortId')) {
  //       setShortId(123456);
  //     }
  //   }
  // }, [shortId]);

  return (
    <div className="App">
      <NavigationBar updateContent={updateContent} />
      <StarwarsBackground getContent={{ title, subheader, content }} />
    </div>
  );
};

export default hot(module)(App);
