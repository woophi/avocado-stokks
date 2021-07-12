import React from 'react';
import { Box, Image, HStack, Pressable, Text, Radio, FormControl } from 'native-base';
import stockGraph from '../../assets/images/stock-graph.png';

export const StockGraph = () => {
  const [style, setStyle] = React.useState(false);

  return (
    <Box>
      <Box alignItems="center" mb={8}>
        <Image
          alt="stock graph"
          source={{
            uri: stockGraph,
          }}
          resizeMode="contain"
        />
      </Box>
      {/* <Radio.Group name="stock-period">
        <HStack>
          <FormControl.Label htmlFor="one">Onee</FormControl.Label>
          <Radio value="one" id="one" style={{ display: 'none' }} />
          <Radio value="two">two</Radio>
          <Radio value="three">three</Radio>
        </HStack>
      </Radio.Group> */}
    </Box>
  );
};
