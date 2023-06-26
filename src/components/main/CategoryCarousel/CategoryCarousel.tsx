import { useNavigate } from 'react-router-dom';

import * as styles from './CategoryCarousel.style';

interface CategoryElementProps {
  imageUrl: string;
  category: string;
  isSelected: boolean;
  presetPin: string;
}

const EXAMPLE_CATEGORY_ELEMENT: CategoryElementProps[] = [
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
  {
    imageUrl:
      'https://nayeongseokgame-s3.s3.ap-northeast-2.amazonaws.com/preset/64984bdcafed34155563ccc1/%EB%82%98%EC%98%81%EC%84%9D.jfif',
    category: '운동선수',
    isSelected: false,
    presetPin: '6499412328938fad80d8c534',
  },
];

const CategoryCarousel = () => {
  const navigate = useNavigate();

  const handleGoToQuizPreset = (presetPin: string) => {
    navigate(`/quiz/${presetPin}/loading`);
  };

  return (
    <styles.Wrapper>
      <styles.Carousel>
        {EXAMPLE_CATEGORY_ELEMENT.map(
          ({
            imageUrl,
            category,
            isSelected,
            presetPin,
          }: CategoryElementProps) => (
            <styles.Image
              imageUrl={imageUrl}
              isSelected={isSelected}
              onClick={() => handleGoToQuizPreset(presetPin)}
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
