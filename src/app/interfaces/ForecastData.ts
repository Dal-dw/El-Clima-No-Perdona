export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastEntry[];
}

export interface ForecastEntry {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

// Ejemplo de cómo se utilizaría la interfaz:
// const data: WeatherData = {
//   cod: "200",
//   message: 0,
//   cnt: 40,
//   list: [
// ... (coloca aquí los objetos de WeatherEntry)
