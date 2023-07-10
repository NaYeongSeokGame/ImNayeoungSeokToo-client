import { useEffect, useState } from 'react';

import QuizRepository from '@/apis/quiz';
import useGetPresetList from '@/hooks/useGetPresetList';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './CategoryCarousel.style';
import CategoryCarouselImage from './CategoryCarouselImage';

const CategoryCarousel = () => {
  const presetList = useGetPresetList({ page: 1, limit: 9 });

  return (
    <styles.Wrapper>
      <styles.Carousel>
        {presetList && presetList.map(({ presetPin, title, thumbnailUrl, hashtagList }) => (
          <CategoryCarouselImage
            key={presetPin}
            isPrivate={false}
            title={title}
            presetPin={presetPin}
            thumbnailUrl={thumbnailUrl}
            hashtagList={hashtagList}
          />
        ))}
      </styles.Carousel>
      <styles.CarouselClone>
        {presetList && presetList.map(({ presetPin, title, thumbnailUrl, hashtagList }) => (
          <CategoryCarouselImage
            key={presetPin}
            isPrivate={false}
            title={title}
            presetPin={presetPin}
            thumbnailUrl={thumbnailUrl}
            hashtagList={hashtagList}
          />
        ))}
      </styles.CarouselClone>
    </styles.Wrapper>
  );
};

export default CategoryCarousel;
