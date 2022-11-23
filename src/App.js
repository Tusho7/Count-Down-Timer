import { useEffect, useState } from "react";

const target = new Date("Aug 5, 2025 18:00:00");

let now = new Date().getTime();
let distance = target - now;

function App() {
  const [timer, setTimer] = useState(distance);
  const textArray = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
  const title = "We’re launching soon";

  let days = Math.floor(timer / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timer % (1000 * 60)) / 1000);

  useEffect(() => {
    setInterval(function () {
      setTimer((t) => t - 1000);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="main-container">
        <div className="header">
          <h1 className="title">{title}</h1>
        </div>

        <div className="counter-div">
          <div className="counter" id="days">
            {days}
          </div>
          <div className="counter" id="hours">
            {hours}
          </div>
          <div className="counter" id="minutes">
            {minutes}
          </div>
          <div className="counter" id="seconds">
            {seconds}
          </div>
        </div>

        <div className="counter-texts">
          {textArray.map((Text) => {
            return (
              <div className="texts" key={Text}>
                {Text}
              </div>
            );
          })}
        </div>

        <div className="footer-div">
          <img src="./images/icon-facebook.svg" className="fb-icon" />

          <img src="./images/icon-pinterest.svg" className="pintereset-icon" />

          <img src="./images/icon-instagram.svg" className="instagram-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
