import React from 'react';

import useModal from '@/hooks/useModal';
import { QuizPresetType } from '@/types/quiz';

import GameStartModal from '../GameStartModal';
import * as styles from './CategoryCarousel.style';

const CategoryCarouselImage = ({
  thumbnailUrl,
  presetPin,
  title,
  hashtagList,
}: QuizPresetType) => {
  const { openModal } = useModal();

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
    <div>
      <styles.ImageWrapper>
        <styles.Image
          imageurl={thumbnailUrl}
          onClick={() => handleGoToQuizPreset(presetPin, thumbnailUrl, title)}
        />
        <styles.TitleText>{title}</styles.TitleText>
        <styles.HashtagWrapper>
          {hashtagList?.slice(0, 2).map((hashtag) => (
            <styles.HashtagText>{hashtag}</styles.HashtagText>
          ))}
        </styles.HashtagWrapper>
      </styles.ImageWrapper>
    </div>
  );
};
export default CategoryCarouselImage;
