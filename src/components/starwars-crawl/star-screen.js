import React, { useState, useEffect, useRef } from 'react';

const StarScreen = () => {
  const canvasRef = useRef();

  const createCoordinates = () => {
    return {
      x: Math.random() * 1600,
      y: Math.random() * 900,
      z: Math.random() * 1000,
    };
  };

  const starCoordinates = (numOfStars) => {
    let result = new Set();
    for (let i = 0; i < numOfStars; i++) {
      result.add(createCoordinates());
    }
    return result;
  };

  const createStar = (ctx, coordinates, brightness) => {
    const intensity = brightness * 255;
    const rgb = `rgb(${intensity}, ${intensity}, ${intensity})`;
    ctx.fillStyle = rgb;
    ctx.fillRect(coordinates.x, coordinates.y, 1, 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(starCoordinates(1000));
    starCoordinates(1000).forEach((coord) => {
      createStar(ctx, coord, Math.random());
    });
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  );
};

export default StarScreen;
