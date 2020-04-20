import React, {useState, useEffect, useRef, createRef} from "react";
import './starwars-background.scss'

const CRAWL_RATE = 0.06

const StarwarsBackground = () => {
  const [position, setPosition] = useState(0)
  const crawlRef = useRef()
  const requestRef = useRef()
  const crawlPosition = useRef(0)
  const prevTime = useRef(0)
  
  const moveCrawl = distance => {
    crawlPosition.current = crawlPosition.current - distance
    setPosition(crawlPosition.current)
    // crawlRef.current.style.top = crawlPosition.current
    if (crawlPosition.current < -crawlRef.current.clientHeight) {
      // crawlRef.current.style.top = crawlRef.current.clientHeight
      setPosition(crawlRef.current.clientHeight)
    }
    console.log(position)
  }

  const tick = time => {
    const elapsed = time - prevTime.current
    prevTime.current = time
    moveCrawl(elapsed * CRAWL_RATE)
    requestRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(requestRef.current)
  }

  // // const [crawlPosition, setCrawlPosition] = useState(0)
  // const prevTime = useRef(0)
  // const crawlPosition = useRef(0)
  // const crawlRef = createRef()

  // const moveCrawl = (distance) => {
  //   crawlPosition.current -= distance
  //   crawlRef.current.style.top = crawlPosition.current
  //   if (crawlPosition.current < -contentHeight) {
  //     crawlRef.current.style.top = contentHeight
  //   }
  // }

  // const tick = (time) => {
  //   const elapsed = time - prevTime.current
    
  //   moveCrawl(elapsed * 0.06)
  //   window.requestAnimationFrame(tick)
  // }

  useEffect(() => {
    crawlRef.current.style.top = crawlRef.current.clientHeight
    window.requestAnimationFrame(tick)
  }, [])

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