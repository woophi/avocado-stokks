import { HistoryPeriodTarget } from '@models';
import { useGraphQuery } from 'core/modules/stock/query';
import { getSelectedSymbol } from 'core/modules/stock/selectors';
import { Box, Button, useTheme } from 'native-base';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineGraph } from 'ui/graphs/LineChart';
import { periods, targets } from './constants';

type Props = {
  up: boolean;
};

export const StockGraph = memo<Props>(({ up }) => {
  const { colors } = useTheme();
  const [target, setHistoryTarget] = useState(HistoryPeriodTarget.Day);
  const symbol = useSelector(getSelectedSymbol);

  const { data } = useGraphQuery(
    {
      symbol,
      target,
    },
    { skip: !symbol },
  );
  return (
    <Box>
      <Box alignItems="center" mb={8}>
        <LineGraph up={up} data={data?.close ?? []} />
      </Box>
      <Button.Group justifyContent="space-between" colorScheme="gray" variant="ghost">
        {periods.map(period => (
          <Button
            _text={{
              color: colors.textGray,
            }}
            borderRadius={14}
            key={period}
            variant={target === targets[period] ? 'solid' : 'ghost'}
            onPress={() => setHistoryTarget(targets[period])}
          >
            {period}
          </Button>
        ))}
      </Button.Group>
    </Box>
  );
});
