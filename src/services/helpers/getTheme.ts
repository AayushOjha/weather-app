export interface IGetThemeProps {
  type:
    | "Thunderstorm"
    | "Drizzle"
    | "Rain"
    | "Snow"
    | "Clear"
    | "Clouds"
    | "Haze"
    | "default";
}

export interface ITheme {
  icon: string;
  appClass: string;
}

export const getTheme = ({ type }: IGetThemeProps): ITheme => {
  console.log(type);

  switch (type) {
    case "Clear":
      return {
        icon: `https://res.cloudinary.com/dca1rzsyb/image/upload/v1710084248/aswo6akvyjahe7p93a22.png`,
        appClass: "clear",
      };
    case "Haze":
      return {
        icon: "https://res.cloudinary.com/dca1rzsyb/image/upload/v1710087569/nsf68xsjllftihr26akq.png",
        appClass: "clouds",
      };
    case "Snow":
      return {
        icon: "https://res.cloudinary.com/dca1rzsyb/image/upload/v1710085929/drjangmrd4k8723fywrz.png",
        appClass: "snow",
      };
    case "Rain":
      return {
        icon: "https://res.cloudinary.com/dca1rzsyb/image/upload/v1710085929/mwae7qgrxgqjdyokwang.png",
        appClass: "rain",
      };
    case "Clouds":
      return {
        icon: "https://res.cloudinary.com/dca1rzsyb/image/upload/v1710085903/sujkmclkhwfim0mdll1h.png",
        appClass: "clouds",
      };
    case "default":
    default:
      return {
        icon: "https://res.cloudinary.com/dca1rzsyb/image/upload/v1710085882/smrtzj6kyvilirntryx6.png",
        appClass: "default",
      };
  }
};
