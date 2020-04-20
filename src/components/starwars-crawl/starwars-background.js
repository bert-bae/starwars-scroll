import React, {useState, useEffect, useRef, createRef} from "react";
import './starwars-background.scss'

const CRAWL_RATE = 0.06

const StarwarsBackground = () => {
  const [position, setPosition] = useState(0)
  const [crawlHeight, setCrawlHeight] = useState(null)
  const crawlRef = useRef()
  const requestRef = useRef()
  const crawlPosition = useRef(0)
  const prevTime = useRef(0)
  
  const moveCrawl = distance => {
    crawlPosition.current -= distance
    setPosition(crawlPosition.current - distance)
  }

  const tick = time => {
    const elapsed = time - prevTime.current
    const distance = elapsed * CRAWL_RATE

    if (crawlHeight && crawlHeight < -crawlPosition.current) {
      return
    }

    prevTime.current = time
    moveCrawl(distance)
    requestRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(requestRef.current)
  }

  useEffect(() => {
    const clientHeight = crawlRef.current.clientHeight
    if (crawlHeight && setPosition) {
      requestAnimationFrame(tick)
    } else {
      setCrawlHeight(() => clientHeight * 2.5)
      crawlPosition.current = clientHeight
    }
  }, [crawlHeight])

  return (
    <div className="starwars-background">
      <div 
        id="crawler-plane" 
        ref={crawlRef}
        style={{
          top: `${position}px`
        }}>
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
    </div>
 )
}

export default StarwarsBackground