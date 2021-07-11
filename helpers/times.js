import { roadmap } from "constants/roadmap.js";

export const pad = (num) => ("0" + num).slice(-2);

export const calculateTimeLeft = (date, callback, nextDate) => {
  let difference = +new Date(date) - +new Date();
  const nextTime = +new Date(nextDate) - +new Date();
  let status = "Register";
  let time = 0;
  if (difference > 0) {
    status = "Register";
    time = difference;
  } else if (nextTime > 0) {
    status = "Buy Now";
    time = nextTime;
  } else {
    status = "Sold Out";
  }

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  return timeLeft
  if (difference > 0 || nextTime > 0) {
    timeLeft = {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    };
    callback && callback(timeLeft);
  }

  return { ...timeLeft, status };
};

export const getRoadmap = () => {
  for (let i = 0; i < roadmap.length; i++) {
    if (+new Date(roadmap[i].date) - +new Date() > 0 || +new Date(roadmap[i].nextDate) - +new Date() > 0) {
      return roadmap[i];
    }
  }

  return {
    title: "IDO Sale",
    dateTitle: "Jun 25",
  };
};
