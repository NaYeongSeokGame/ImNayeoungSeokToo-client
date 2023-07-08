import { useEffect, useState } from 'react';

import QuizRepository from '@/apis/quiz';
import useModal from '@/hooks/useModal';
import { QuizPresetType, QuizType } from '@/types/quiz';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';

import GameStartModal from '../GameStartModal';
import * as styles from './CategoryCarousel.style';

const CategoryCarousel = () => {
  const [presetList, setPresetList] = useState<QuizPresetType[]>([]);
  const { openModal } = useModal();

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

  const handleGoToQuizPreset = (
    presetPin: string,
    imageUrl: string,
    title: string,
  ) => {
    openModal(
      <GameStartModal
        presetPin={presetPin}
        thumbnailUrl={imageUrl}
        title={title}
      />,
    );
  };

  return (
    <styles.Wrapper>
      <styles.Carousel>
        {presetList.map(
          ({
            presetPin,
            title,
            thumbnailUrl,
          }: QuizPresetType) => (
            (
              <styles.ImageWrapper>
                <styles.Image
                  imageUrl={thumbnailUrl}
                  onClick={() =>
                    handleGoToQuizPreset(presetPin, thumbnailUrl, title)
                  }
                />
                <styles.TitleText>{title}</styles.TitleText>
                <styles.HashtagText>{title}</styles.HashtagText>
              </styles.ImageWrapper>
            )
          ),
        )}
      </styles.Carousel>
    </styles.Wrapper>
  );
};

export default CategoryCarousel;
