import React, { useState, useEffect, useRef } from 'react';

const CRAWL_RATE = 0.06;

const CrawlPlane = () => {
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
        <h1>Title</h1>
        <h2>A new title</h2>
        <p>
          It is a period of civil war. Rebel spaceships, striking from a hidden
          base, have won their first victory against the evil Galactic Empire.
        </p>
        <p>
          During the battle, rebel spies managed to steal secret plans to the
          Empire’s ultimate weapon, the DEATH STAR, an armored space station
          with enough power to destroy an entire planet.
        </p>
        <p>
          Pursued by the Empire’s sinister agents, Princess Leia races home
          aboard her starship, custodian of the stolen plans that can save her
          people and restore freedom to the galaxy....
        </p>
      </div>
    </div>
  );
};

export default CrawlPlane;
