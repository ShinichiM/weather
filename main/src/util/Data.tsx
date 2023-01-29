export const WeatherData = (): JSX.Element => {
  const apiKey = "08de60513f8aaba79d4697d19640606f";

  const getCurrentWeatherData = async (
    cityName: string,
    apiKey: any
  ): Promise<object> => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", cityName);
    url.searchParams.append("appid", apiKey);
    url.searchParams.append("units", "imperial");
    console.log(url);

    try {
      const currentWeatherData = await fetch(url).then((response: Response) => {
        if (!response.ok) {
          switch (response.status) {
            case 300:
              console.error({
                code: response.status,
                message: response.statusText,
              });
              break;
            case 404:
              console.error({
                code: response.status,
                message: response.statusText,
              });
              break;
            case 500:
              console.error({
                code: response.status,
                message: response.statusText,
              });
              break;
          }
        }
        return response.json();
      });
      console.log(currentWeatherData);
      return currentWeatherData;
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  };

  const data = getCurrentWeatherData("Columbus", apiKey);

  return (
    <div>
      <ul>
        <li>Data</li>
        <li>Data</li>
      </ul>
    </div>
  );
};
