import useModal from '@/hooks/useModal';

import GameStartModal from '../GameStartModal';
import * as styles from './CategoryCarousel.style';

interface CategoryElementProps {
  imageUrl: string;
  category: string;
  presetPin: string;
}

const EXAMPLE_CATEGORY_ELEMENT: CategoryElementProps[] = [
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499921cda2ab71457cff4f3/8c884b422460c98c.jpeg',
    category: '스포츠',
    presetPin: '649991e4da2ab71457cff4e7',
  },
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/64999226da2ab71457cff4ff/이강인.jpg',
    category: '축구선수',
    presetPin: '64999226da2ab71457cff4ff',
  },
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499927bda2ab71457cff527/c39374225f7a80a0a9dcc2066eedc3de.jpg',
    category: '남자연예인',
    presetPin: '6499927bda2ab71457cff527',
  },
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499921cda2ab71457cff4f3/8c884b422460c98c.jpeg',
    category: '여자연예인',
    presetPin: '649993fbda2ab71457cff55f',
  },
];

const CategoryCarousel = () => {
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
    <styles.Wrapper>
      <styles.Carousel>
        {EXAMPLE_CATEGORY_ELEMENT.map(
          ({
            imageUrl,
            category,
            presetPin,
          }: CategoryElementProps) => (
            <styles.Image
              imageUrl={imageUrl}
              isSelected={isSelected}
              onClick={() =>
                handleGoToQuizPreset(presetPin, imageUrl, category)
              }
            >
              <styles.CategoryText>{category}</styles.CategoryText>
            </styles.Image>
          ),
        )}
      </styles.Carousel>
    </styles.Wrapper>
  );
};

export default CategoryCarousel;
