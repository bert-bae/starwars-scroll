import React from 'react';
import StarScreen from './star-screen';
import CrawlPlane from './crawl-plane';
import './starwars-background.scss';

const StarwarsBackground = () => {
  return (
    <div className="starwars-background">
      <StarScreen />
      <CrawlPlane />
    </div>
  );
};

export default StarwarsBackground;
