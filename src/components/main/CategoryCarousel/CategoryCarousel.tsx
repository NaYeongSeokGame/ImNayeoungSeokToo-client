import { useEffect, useState } from 'react';

import QuizRepository from '@/apis/quiz';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './CategoryCarousel.style';
import CategoryCarouselImage from './CategoryCarouselImage';

const CategoryCarousel = () => {
  const [presetList, setPresetList] = useState<QuizPresetType[]>([]);

  useEffect(() => {
    const getPresetList = async () => {
      try {
        const presetList = await QuizRepository.getQuizListAsync({
          page: 1,
          limit: 9,
        });
        setPresetList(presetList);
      } catch (error) {
        console.error(error);
      }
    };
    getPresetList();
  }, []);

  return (
    <styles.Wrapper>
      <styles.Carousel>
        {presetList.map(({ presetPin, title, thumbnailUrl, hashtagList }) => (
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
        {presetList.map(({ presetPin, title, thumbnailUrl, hashtagList }) => (
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
