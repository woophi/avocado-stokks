import React from 'react';
import { StyleSheet } from 'react-native';
import * as shape from 'd3-shape';
import { Box, Flex, useTheme, Pressable } from 'native-base';
import { AreaChart } from 'react-native-svg-charts';
import { HistoryPeriodTarget } from '@models';
import { If } from 'ui/atoms/If';
import { TimeBox } from './TimeBox';
import { useScrollBarHandler } from 'core/hooks/useScrollBarHandler';

type Props = {
  up: boolean;
  target: HistoryPeriodTarget;
  timestamps: number[];
  data: number[];
};

export const LineGraph = React.memo<Props>(({ data, up, target, timestamps }) => {
  const { colors } = useTheme();
  const width = 353;
  const colorFill = up ? colors.upTextColor : colors.downTextColor;
  const colorFillSecondary = up ? colors.upTextSecondaryColor : colors.downTextSecondaryColor;
  const { positionX, isTouched, touchCancelHandler, touchMoveHandler, touchEndHandler, touchStartHandler } =
    useScrollBarHandler(width);
  const sliceIndex = Math.floor((positionX / width) * data.length);
  return (
    <Pressable
      onTouchEnd={touchEndHandler}
      onTouchCancel={touchCancelHandler}
      onTouchMove={touchMoveHandler}
      onTouchStart={touchStartHandler}
    >
      <Flex flexDirection={'row'}>
        <AreaChart
          curve={shape.curveLinear}
          svg={{
            stroke: colorFill,
            fillOpacity: 0,
          }}
          style={{ width: positionX, height: 260 }}
          data={data?.slice(0, sliceIndex).filter(d => typeof d === 'number') ?? []}
          contentInset={{ top: 20, bottom: 20, left: -1, right: -1 }}
        />
        <AreaChart
          curve={shape.curveLinear}
          svg={{
            stroke: colorFillSecondary,
            fillOpacity: 0,
          }}
          style={{ width: width - positionX, height: 260 }}
          data={data?.slice(sliceIndex).filter(d => typeof d === 'number') ?? []}
          contentInset={{ top: 20, bottom: 20, left: -1, right: -1 }}
        />
        <If is={isTouched}>
          <Box
            style={{
              ...styles.scrollBar,
              left: positionX,
              backgroundColor: colorFill,
            }}
          />
          <Box style={styles.timeBox}>
            <TimeBox colorBar={colorFillSecondary} timestamps={timestamps} width={width} rule={target} />
          </Box>
        </If>
      </Flex>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  scrollBar: {
    zIndex: 1000,
    position: 'absolute',
    width: 2,
    height: 260,
  },
  timeBox: {
    position: 'absolute',
    left: 0,
  },
});
