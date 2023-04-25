import moment from "moment";

const WeatherData = ({ weather }) => {
    return (
        <div className={`container-hidden ${weather.length === 0 ? "" : "container-visible"}`}>
            <div
                className={`weather-data-hidden ${
                    weather.length === 0 ? "" : "weather-data-visible"
                }`}
            >
                <div className="header">
                    <div className="name">{weather.name}</div>
                    <div className="time">
                        <div>
                            {moment()
                                .utcOffset(weather.timezone / 60)
                                .format("HH:mm")}
                        </div>
                        <div>
                            {moment()
                                .utcOffset(weather.timezone / 60)
                                .format("MMM D")}
                        </div>
                    </div>
                </div>
                <div className="data-container">
                    <div className="data icon">
                        <div>
                            {weather.weather ? (
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt="icon"
                                />
                            ) : null}
                        </div>

                        {weather.main ? <div>{Math.round(weather.main.temp)}°C</div> : null}
                    </div>

                    <div className="data">
                        <div>Humidity:</div>

                        {weather.main ? <div>{weather.main.humidity}%</div> : null}
                    </div>

                    <div className="data">
                        <div>Sunrise:</div>
                        {weather.sys ? (
                            <div>
                                {moment
                                    .unix(weather.sys.sunrise)
                                    .utcOffset(weather.timezone / 60)
                                    .format("HH:mm")}
                            </div>
                        ) : null}
                    </div>

                    <div className="data">
                        <div>Sunset:</div>

                        {weather.sys ? (
                            <div>
                                {moment
                                    .unix(weather.sys.sunset)
                                    .utcOffset(weather.timezone / 60)
                                    .format("HH:mm")}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WeatherData;
