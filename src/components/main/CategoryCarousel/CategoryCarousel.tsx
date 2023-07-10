import { useEffect, useState } from 'react';

import QuizRepository from '@/apis/quiz';
import { QuizPresetType} from '@/types/quiz';

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
        {presetList.map((v) => (
          <CategoryCarouselImage
          key={v.presetPin}
          isPrivate={false}
            title={v.title}
            presetPin={v.presetPin}
            thumbnailUrl={v.thumbnailUrl}
            hashtagList={v.hashtagList}
          />
        ))}
      </styles.Carousel>
      <styles.CarouselClone>
        {presetList.map((v) => (
          <CategoryCarouselImage
            key={v.presetPin}
            isPrivate={false}
            title={v.title}
            presetPin={v.presetPin}
            thumbnailUrl={v.thumbnailUrl}
            hashtagList={v.hashtagList}
          />
        ))}
      </styles.CarouselClone>
    </styles.Wrapper>
  );
};

export default CategoryCarousel;
