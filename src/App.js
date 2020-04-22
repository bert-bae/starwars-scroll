import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './styles/App.css';
// Components
import NavigationBar from './components/navigation/navigation-bar';
import StarwarsBackground from './components/starwars-crawl/starwars-background';

const App = () => {
  const [title, setTitle] = useState('A New Title');
  const [subheader, setSubheader] = useState('The Story');
  const [content, setContent] = useState(
    'The story begins with a simple update in the menu'
  );

  const updateContent = (title, subheader, content) => {
    setTitle(title);
    setSubheader(subheader);
    setContent(content);
  };

  return (
    <div className="App">
      <NavigationBar updateContent={updateContent} />
      <StarwarsBackground getContent={{ title, subheader, content }} />
    </div>
  );
};

export default hot(module)(App);
