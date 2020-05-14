import React from 'react';
import StarScreen from './star-screen';
import CrawlPlane from './crawl-plane';
import './starwars-background.scss';

const StarwarsBackground = ({ startCrawl, getContent }) => {
  console.log(startCrawl);
  return (
    <div className="starwars-background">
      <StarScreen />
      {startCrawl && <CrawlPlane getContent={getContent} />}
    </div>
  );
};

export default StarwarsBackground;
