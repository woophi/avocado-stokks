import { Box, Heading, ScrollView, useTheme } from 'native-base';

import { If } from 'ui/atoms/If';
import { PopularTweet } from 'ui/PopularTweet';
import React from 'react';
import { SkeletonPopularTweetsBanner } from 'ui/Skeletons/SkeletonStockBanner/SkeletonPopularTweetsBanner';
import { StyleSheet } from 'react-native';
import { useTweetsQuery } from 'core/modules/stock/query';

type PopularTweetsBannerProps = {
  symbol: string;
};

export const PopularTweetsBanner = React.memo<PopularTweetsBannerProps>(({ symbol }) => {
  const { colors } = useTheme();
  const tweets = useTweetsQuery({ query: symbol }, { skip: !symbol }).data;

  if (Array.isArray(tweets)) {
    return (
      <If is={!!tweets.length}>
        <Heading size={'sm'} my={5} mr={2} color={colors.heading}>
          Popular Tweets
        </Heading>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.mainBox}>
          {tweets.map(t => (
            <Box mx={2} key={t.id}>
              <PopularTweet data={t} />
            </Box>
          ))}
        </ScrollView>
      </If>
    );
  } else {
    return <SkeletonPopularTweetsBanner />;
  }
});

const styles = StyleSheet.create({
  mainBox: {
    height: 254,
  },
});
