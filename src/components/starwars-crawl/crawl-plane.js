import React, { useState, useEffect, useRef } from 'react';

const CRAWL_RATE = 0.15;

const CrawlPlane = ({ getContent }) => {
  const [position, setPosition] = useState(0);
  const [triggerFade, setTriggerFade] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(null);
  const crawlRef = useRef();
  const requestRef = useRef();
  const crawlPosition = useRef(0);
  const prevTime = useRef(0);

  const moveCrawl = (distance) => {
    crawlPosition.current -= distance;
    setPosition(crawlPosition.current - distance);
  };

  const tick = (time) => {
    if (scrollHeight < -crawlPosition.current) {
      setPosition(0);
      setScrollHeight(null);
      return;
    }
    if (
      Math.abs(crawlPosition.current) / scrollHeight > 0.9 &&
      crawlPosition.current < 0 &&
      !triggerFade
    ) {
      setTriggerFade(true);
    }

    const elapsed = time - prevTime.current;
    const distance = elapsed * CRAWL_RATE;

    prevTime.current = time;
    moveCrawl(distance);
    requestRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(requestRef.current);
  };

  useEffect(() => {
    if (scrollHeight) {
      requestAnimationFrame(tick);
    } else {
      const clientHeight = crawlRef.current.clientHeight;
      const scrollHeight = crawlRef.current.scrollHeight;
      setTriggerFade(false);
      setScrollHeight(() => scrollHeight * 1.5);
      crawlPosition.current = clientHeight;
    }
  }, [scrollHeight]);

  return (
    <div
      id="crawler-plane"
      ref={crawlRef}
      style={{
        top: `${position}px`,
        opacity: `${triggerFade ? 0 : 1}`,
      }}
    >
      <div className="crawler-content">
        <h1>{getContent.title}</h1>
        <h2>{getContent.subheader}</h2>
        <p>{getContent.content}</p>
      </div>
    </div>
  );
};

export default CrawlPlane;
