import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { weatherApi } from "../services/api/weatherApi";
import { IWeatherResponse } from "../interfaces";
import { localStorageHelper } from "../services/helpers/localStoreage";
import { FaArrowRight } from "react-icons/fa";
import { ITheme, getTheme } from "../services/helpers/getTheme";

type Props = {
  setWeatherData: Dispatch<SetStateAction<IWeatherResponse | null | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<ITheme>>;
  theme: ITheme;
};

const SearchBar = ({
  setIsLoading,
  setWeatherData,
  setTheme,
  theme,
}: Props) => {
  const [term, setTerm] = useState("");

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitAction();
    }
  };
  const submitAction = () => {
    setIsLoading(true);
    weatherApi
      .fetchCityWeather(term)
      .then(({ data }) => {
        setWeatherData(data);
        setTheme(getTheme({ type: data.weather[0].main as any }));
        console.log(`set data via call ${data.weather[0].main}`);
        localStorageHelper.setWeather(data);
      })
      .catch((err) => {
        setWeatherData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="input-box">
        <input
          type="text"
          className="input"
          placeholder="Enter city"
          onKeyDown={handleKeydown}
          value={term}
          onChange={({ target: { value } }) => {
            setTerm(value || "");
          }}
        />
        <FaArrowRight
          color="#FFF"
          className="submit-icon"
          onClick={submitAction}
        />
      </div>
    </>
  );
};

export { SearchBar };
