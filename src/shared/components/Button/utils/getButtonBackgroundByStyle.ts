import { ButtonStyle } from "../enums/ButtonStyle";

export const getButtonBackgroundByStyle = (style: ButtonStyle): string => {
  switch (style) {
    case ButtonStyle.Danger:
      return "#bf616a";

    case ButtonStyle.Warning:
      return "#ebcb8b";

    case ButtonStyle.Success:
      return "#a3be8c";

    case ButtonStyle.Regular:
      return "#5E81AC";

    default:
      return "transparent";
  }
};
