import { useTheme } from 'native-base';
import React, { memo } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const AppIcon = memo(() => {
  const { colors } = useTheme();

  return (
    <Svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <Rect width="80" height="80" rx="20.9231" fill={colors.appIcon.bg} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.5364 19.8841C33.8095 22.1771 33.7934 25.8787 31.5004 28.1518L29.2842 30.3487L57.6701 39.9942C57.7516 40.0219 57.8346 40.05 57.9187 40.0785C59.1161 40.4844 60.5616 40.9744 61.7051 41.5624C63.0062 42.2314 65.3163 43.7229 66.026 46.7989C66.7356 49.8749 65.3124 52.2277 64.4359 53.3992C63.6656 54.4287 62.5808 55.5024 61.6822 56.3918C61.6191 56.4543 61.5569 56.5159 61.4957 56.5765L57.3465 60.6897C55.0535 62.9628 51.352 62.9466 49.0789 60.6536C46.8058 58.3606 46.822 54.6591 49.115 52.386L51.3311 50.1891L22.9452 40.5436C22.8637 40.5159 22.7808 40.4878 22.6967 40.4593C21.4993 40.0534 20.0538 39.5634 18.9103 38.9754C17.6092 38.3063 15.299 36.8149 14.5894 33.7389C13.8797 30.6628 15.303 28.3101 16.1794 27.1386C16.9497 26.1091 18.0345 25.0354 18.9331 24.1459C18.9962 24.0835 19.0585 24.0219 19.1196 23.9613L23.2688 19.8481C25.5618 17.575 29.2633 17.5911 31.5364 19.8841Z"
        fill={colors.appIcon.icon}
      />
    </Svg>
  );
});
