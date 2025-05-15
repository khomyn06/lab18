const API_KEY = 'f5ee5dbf293745f5a1c140753252504'; 
export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=uk`
    );
    const data = await response.json();

    return {
      temperature: data.current.temp_c + "°C",
      description: data.current.condition.text,
      wind: data.current.wind_kph + " км/год",
      icon: data.current.condition.icon,
    };
  } catch (error) {
    console.error("Помилка при запиті погоди:", error);
    return null;
  }
};
