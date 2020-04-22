import React from 'react';
import StarScreen from './star-screen';
import CrawlPlane from './crawl-plane';
import './starwars-background.scss';

const StarwarsBackground = ({ getContent }) => {
  return (
    <div className="starwars-background">
      <StarScreen />
      <CrawlPlane getContent={getContent} />
    </div>
  );
};

export default StarwarsBackground;
