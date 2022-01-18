import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect ,useHistory} from 'react-router-dom';
import { getAllcontrollerget,ControllerDetails ,clearErrors, getControllerDetails} from "../../../actions/userAction";

function Countdown() {
     
     const dispatch = useDispatch();
     const {error, loading, user } = useSelector((state) => state.userDetails);
     useEffect(() => {

       if (error) {
         alert.error(error);
         dispatch(clearErrors());
       }
   
       console.log('rimel')
       
       dispatch(getControllerDetails('61dc089f410a853a542123e8'));
       
     }, [dispatch, alert, error ]);
   
console.log('countdown',user)


  const [ timerDays, setTimerDays ] = useState("00");
  const [ timerHours, setTimerHours ] = useState("00");
  const [ timerMinutes, setTimerMinutes ] = useState("00");
  const [ timerSeconds, setTimerSeconds ] = useState("00");
  const [ date, setDate] = useState("Jan 20, 2022");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(`${user.countdown} 00:00:00`).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
     

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      
      const hours = Math.floor((
        distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

      if (distance < 0) {
        //stop the timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

//   compoundDidMount
  useEffect(() => {
     startTimer()
    return () => {
      clearInterval(interval.current);
    };
  });
 

  

  return (
    <div>
      {/* Section Book Your Ticket*/}
      <section
        className="parallax-container section"
        data-parallax-img="images/bg-parallax-01-1894x778.jpg"
      >
        <div className="parallax-content section-lg context-dark text-center parallax-overlay-gradient-primary">
          <div className="container wow fadeIn">
            {/* Block with content*/}
            <div className="block-lg block-center">
              <h6>Time is running out</h6>
              <h3>Book your ticket.</h3>
              <p style={{color:'white',fontWeight:'600'}}>
                Malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
              {/* Countdown rectangle*/}
              <div
                className="countdown countdown-rect"
                data-countdown="data-countdown"
                data-to="2020-12-31"
              >
                <div
                  className="countdown-block box-with-triangle-right wow fadeScale countdown-block-days"
                  data-wow-delay="0s"
                  data-triangle=".countdown-block-overlay"
                >
                  <div className="countdown-block-overlay" />
                  <svg
                    className="countdown-circle"
                    x={0}
                    y={0}
                    width={200}
                    height={237}
                    viewBox="0 0 200 237"
                    data-progress-days
                  >
                    <rect
                      className="countdown-rect-bg"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                    <rect
                      className="countdown-rect-fg clipped"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                  </svg>
                  <div className="countdown-wrap">
                    <div className="countdown-counter" data-counter-days>
                      {timerDays}
                    </div>
                    <div className="countdown-title">days</div>
                  </div>
                </div>
                <div
                  className="countdown-block box-with-triangle-right wow fadeScale countdown-block-hours"
                  data-wow-delay="0.125s"
                  data-triangle=".countdown-block-overlay"
                >
                  <div className="countdown-block-overlay" />
                  <svg
                    className="countdown-circle"
                    x={0}
                    y={0}
                    width={200}
                    height={237}
                    viewBox="0 0 200 237"
                    data-progress-hours
                  >
                    <rect
                      className="countdown-rect-bg"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                    <rect
                      className="countdown-rect-fg clipped"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                  </svg>
                  <div className="countdown-wrap">
                    <div className="countdown-counter" data-counter-hours>
                      {timerHours}
                    </div>
                    <div className="countdown-title">hours</div>
                  </div>
                </div>
                <div
                  className="countdown-block box-with-triangle-right wow fadeScale countdown-block-minutes"
                  data-wow-delay="0.25s"
                  data-triangle=".countdown-block-overlay"
                >
                  <div className="countdown-block-overlay" />
                  <svg
                    className="countdown-circle"
                    x={0}
                    y={0}
                    width={200}
                    height={237}
                    viewBox="0 0 200 237"
                    data-progress-minutes
                  >
                    <rect
                      className="countdown-rect-bg"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                    <rect
                      className="countdown-rect-fg clipped"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                  </svg>
                  <div className="countdown-wrap">
                    <div className="countdown-counter" data-counter-minutes>
                      {timerMinutes}
                    </div>
                    <div className="countdown-title">minutes</div>
                  </div>
                </div>
                <div
                  className="countdown-block box-with-triangle-right wow fadeScale countdown-block-seconds"
                  data-wow-delay="0.375s"
                  data-triangle=".countdown-block-overlay"
                >
                  <div className="countdown-block-overlay" />
                  <svg
                    className="countdown-circle"
                    x={0}
                    y={0}
                    width={200}
                    height={237}
                    viewBox="0 0 200 237"
                    data-progress-seconds
                  >
                    <rect
                      className="countdown-rect-bg"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                    <rect
                      className="countdown-rect-fg clipped"
                      x={0}
                      y={0}
                      width={200}
                      height={237}
                    />
                  </svg>
                  <div className="countdown-wrap" >
                    <div className="countdown-counter" >
                      {timerSeconds}
                    </div>
                    <div className="countdown-title">seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Countdown;
