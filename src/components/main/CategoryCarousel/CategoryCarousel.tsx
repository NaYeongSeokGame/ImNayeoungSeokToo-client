import GameStartModal from '@/components/main/GameStartModal';
import PresetCard from '@/components/main/PresetCard';
import useGetPresetList from '@/hooks/useGetPresetList';
import useModal from '@/hooks/useModal.ts';
import { QuizPresetType } from '@/types/quiz.ts';

import * as styles from './CategoryCarousel.style';

const CategoryCarousel = () => {
  const presetList = useGetPresetList({ page: 1, limit: 9 });
  const { openModal } = useModal();
  const handleCardClick = ({
    presetPin,
    thumbnailUrl,
    title,
  }: QuizPresetType) => {
    openModal(
      <GameStartModal
        presetPin={presetPin}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
    );
  };

  return (
    <styles.Wrapper>
      <styles.Carousel>
        {presetList &&
          presetList.map((preset) => {
            const { title, thumbnailUrl, hashtagList, presetPin } = preset;
            return (
              <PresetCard
                key={presetPin}
                title={title}
                thumbnailUrl={thumbnailUrl}
                hashtagList={hashtagList}
                handleClick={() => handleCardClick(preset)}
              />
            );
          })}
      </styles.Carousel>
      <styles.CarouselClone>
        {presetList &&
          presetList.map((preset) => {
            const { title, thumbnailUrl, hashtagList, presetPin } = preset;
            return (
              <PresetCard
                key={presetPin}
                title={title}
                thumbnailUrl={thumbnailUrl}
                hashtagList={hashtagList}
                handleClick={() => handleCardClick(preset)}
              />
            );
          })}
      </styles.CarouselClone>
    </styles.Wrapper>
  );
};

export default CategoryCarousel;
