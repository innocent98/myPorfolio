import "./weather.scss";

const Weather = () => {
  return (
    <div className="weather">
      <div className="wrapper">
        <h2>71</h2>
        <span className="material-icons"><i class="fa-regular fa-sun-bright"></i></span>
        <h4>Sunny</h4>
        <p>Real Feel: 78° <span>Rain Chance: 5%</span></p>
      </div>
    </div>
  );
};

export default Weather;
