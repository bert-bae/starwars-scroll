import React, { useState, useEffect, useRef } from 'react';

const StarScreen = () => {
  const canvasRef = useRef();

  const createCoordinates = (width, height) => () => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1000,
    };
  };

  const starCoordinates = (numOfStars, coordinateCb) => {
    let result = [];
    for (let i = 0; i < numOfStars; i++) {
      result.push(coordinateCb());
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
    starCoordinates(
      1000,
      createCoordinates(window.innerWidth, window.innerHeight)
    ).forEach((coord) => {
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
