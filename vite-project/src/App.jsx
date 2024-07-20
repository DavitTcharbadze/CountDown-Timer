import { useState, useEffect } from "react";
import classes from "./modules/App.module.scss";
import Facebook from "./assets/images/icon-facebook.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";

const App = () => {
  const newCountdownTime = new Date();
  newCountdownTime.setHours(newCountdownTime.getHours() + 15);

  const [targetTime, setTargetTime] = useState(newCountdownTime);
  const [currentTime, setCurrentTime] = useState(new Date());

  const updatedClock = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updatedClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const remainingTime = targetTime - currentTime;
  const remainingHours = Math.floor(remainingTime / 3600000);
  const remainingMinutes = Math.floor((remainingTime % 3600000) / 60000);
  const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);

  return (
      <div className={classes['main-wrapper']}>
        <h1>We're &nbsp; &nbsp; Launching &nbsp; &nbsp; Soon...</h1>
        <div className={classes['main-timer']}>
          <div className={classes['card-timer']}>
            <div className={classes['time']}>{remainingHours}</div>
            <div className={classes['time-text']}>h o u r s</div>
          </div>
          <div className={classes['card-timer']}>
            <div className={classes['time']}>{remainingMinutes}</div>
            <div className={classes['time-text']}>m i n u t e s</div>
          </div>
          <div className={classes['card-timer']}>
            <div className={classes['time']}>{remainingSeconds}</div>
            <div className={classes['time-text']}>s e c o n d s</div>
          </div>
        </div>
        <div className={classes['social']}>
          <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook"></img></a>
          <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram"></img></a>
          <a href="https://www.pinterest.com/"><img src={Pinterest} alt="Pinterest"></img></a>
        </div>
      </div>
  );
};

export default App;