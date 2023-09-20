import { Typography } from "@mui/material";

/**
 * Generate a main title text with UI material typography
 * @param {String} text The main title text
 * @param {String} color The text color
 * @returns main title text with UI material typography component
 */
export const typographyForMainTitles = (text = "", color = null) => {
  return (
    <Typography component={"span"} fontWeight="bold" variant="h5" color={color}>
      {text}
    </Typography>
  );
};

/**
 * Generate subtitle text with UI material typography
 * @param {String} text The subtitle text
 * @param {String} color The text color
 * @returns subtitle text with UI material typography component
 */
export const typographyForSubtitles = (text = "", color = null) => {
  return (
    <Typography component={"span"} fontWeight="bold" color={color}>
      {text}
    </Typography>
  );
};

/**
 * Generate normal text with UI material typography
 * @param {String} text The text
 * @param {String} bold The fontWeight of the text
 * @param {String} color The text color
 * @returns normal text with UI material typography component
 */
export const typographyForText = (text = "", bold = null, color = null) => {
  return (
    <Typography
      component={"span"}
      fontWeight={bold}
      variant="body2"
      color={color}
    >
      {text}
    </Typography>
  );
};

// ==========>SMALL TEXT<==========
export const typographyForCustomizedFontSize = (
  text = "",
  px = "",
  color = null,
  fontWeight = null
) => {
  return (
    <Typography
      component={"span"}
      sx={{ fontSize: px, color: color }}
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  );
};
