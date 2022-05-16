import { useTheme } from 'native-base';
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

export const SunOutlineIcon = memo(() => {
  const { colors } = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 1V3"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 21V23"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.21997 4.22L5.63997 5.64"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.36 18.36L19.78 19.78"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 12H3"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 12H23"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.21997 19.78L5.63997 18.36"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.36 5.64L19.78 4.22"
        stroke={colors.headingSmall}
        stroke-opacity="0.9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
});
