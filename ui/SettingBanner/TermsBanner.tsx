import { Box, Heading, useTheme } from 'native-base';
import React, { memo } from 'react';
import { Separator } from 'ui/atoms/Separator';
import { BlockedOutlineIcon } from 'ui/icons/BlockedOutlineIcon';
import { PaperOutlineIcon } from 'ui/icons/PaperOutlineIcon';
import { SettingCell } from 'ui/SettingCell';

export const TermsBanner = memo(() => {
  const { colors } = useTheme();
  return (
    <Box>
      <Heading size={'sm'} my={2} mb={2} color={colors.heading}>
        Theme
      </Heading>
      <Box>
        <SettingCell before={<BlockedOutlineIcon />}>Privacy Policy</SettingCell>
        <SettingCell before={<PaperOutlineIcon />}>Terms of Use</SettingCell>
      </Box>
      <Separator />
    </Box>
  );
});