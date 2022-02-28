import { useTheme } from 'native-base';
import React, { memo } from 'react';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

export const GoogleIcon = memo(() => {
  const { colors } = useTheme();

  return (
    <Svg width="13" height="14" viewBox="0 0 13 14" fill="none">
      <G clip-path="url(#clip0_59_2881)">
        <Path
          d="M12.9932 7.12162C12.9932 6.58902 12.9489 6.20036 12.8532 5.79731H6.62952V8.20122H10.2827C10.2091 8.79862 9.81135 9.6983 8.92749 10.3029L8.9151 10.3833L10.8829 11.873L11.0193 11.8863C12.2713 10.7563 12.9932 9.0937 12.9932 7.12162Z"
          fill={colors.upTextColor}
        />
        <Path
          d="M6.62952 13.4554C8.41927 13.4554 9.92178 12.8795 11.0193 11.8863L8.92749 10.3029C8.36773 10.6843 7.61645 10.9506 6.62952 10.9506C4.87658 10.9506 3.38879 9.82067 2.85843 8.25883L2.78069 8.26529L0.734523 9.81273L0.707764 9.88542C1.79782 12.0014 4.03689 13.4554 6.62952 13.4554Z"
          fill={colors.upTextColor}
        />
        <Path
          d="M2.85846 8.25884C2.71852 7.85579 2.63753 7.42391 2.63753 6.9777C2.63753 6.53143 2.71852 6.0996 2.85109 5.69655L2.84739 5.61071L0.775574 4.03841L0.707788 4.06991C0.258522 4.94801 0.000732422 5.93407 0.000732422 6.9777C0.000732422 8.02132 0.258522 9.00733 0.707788 9.88543L2.85846 8.25884Z"
          fill={colors.upTextColor}
        />
        <Path
          d="M6.62952 3.00469C7.87424 3.00469 8.71387 3.5301 9.19264 3.96917L11.0634 2.1842C9.91447 1.14058 8.41927 0.500008 6.62952 0.500008C4.03689 0.500008 1.79782 1.95387 0.707764 4.0699L2.85107 5.69653C3.38879 4.1347 4.87658 3.00469 6.62952 3.00469Z"
          fill={colors.upTextColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_59_2881">
          <Rect width="13" height="13" fill="white" transform="translate(0 0.5)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
