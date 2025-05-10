import { useEffect, useState } from "react";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  };

  useEffect(() => {
    const fetchWeatherWithLocation = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
      }

      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
            );
            const result = await response.json();
            setWeatherData(result.current);
          } catch (err) {
            console.error(err);
            setError("Failed to fetch weather data.");
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          const errorMessages = {
            [error.PERMISSION_DENIED]: "Location permission denied.",
            [error.POSITION_UNAVAILABLE]: "Location position unavailable.",
            [error.TIMEOUT]: "Location request timeout.",
          };
          const errMsg =
            errorMessages[error.code] || "Unable to fetch location.";
          setError(errMsg);
          setLoading(false);
        }
      );
    };

    fetchWeatherWithLocation();
  }, []);

  //   console.log(weatherData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300">
      {loading && (
        <h1 className="text-center text-xl mt-10">
          <LoadingSpinner />
        </h1>
      )}
      {error && (
        <h1 className="text-center text-red-500 text-xl mt-10">
          Error: {error}
        </h1>
      )}
      {weatherData && (
        <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 w-80 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            <time>{new Date(weatherData?.time).toDateString()}</time> Weather
            Information
          </h2>
          <p className="text-white mb-2">
            🌡️ Temperature: <strong>{weatherData.temperature_2m} °C</strong>
          </p>
          <p className="text-white mb-2">
            💧 Humidity: <strong>{weatherData.relative_humidity_2m} %</strong>
          </p>
          <p className="text-white mb-2">
            💨 Wind Speed: <strong>{weatherData.wind_speed_10m} km/h</strong>
          </p>
          <p className="text-white">
            ⛅ Weather Code: <strong>{weatherData.weather_code}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
