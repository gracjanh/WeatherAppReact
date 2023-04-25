import { useState } from "react";
import WeatherData from "./WeatherData";
import SearchField from "./SearchField";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
    const [input, setInput] = useState("");
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(false);

    const fetchData = async (e) => {
        e.preventDefault();

        if (input === "") return;

        // OpenWeatherMap API key
        const key = "API KEY";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`;

        try {
            const res = await fetch(url);
            if (!res.ok) {
                toast.error("No results found!");
                setError(true);
                return;
            }
            const data = await res.json();

            setWeather(data);
            setError(false);
        } catch (err) {
            toast.error(err.message);
        }
        setInput("");
    };

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="main-container">
            <SearchField input={input} handleInput={handleInput} fetchData={fetchData} />
            <WeatherData weather={weather} />
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    );
};
export default App;
