import { useEffect, useState } from 'react';

import QuizRepository from '@/apis/quiz';
import useModal from '@/hooks/useModal';
import { QuizPresetType, QuizType } from '@/types/quiz';
import getCloudFrontUrl from '@/utils/getCloudFrontUrl';

import GameStartModal from '../GameStartModal';
import * as styles from './CategoryCarousel.style';

interface CategoryElementProps {
  imageUrl: string;
  category: string;
  isSelected: boolean;
  presetPin: string;
}

function getQuizListLocal(){ //Fix : 로컬 테스트용, 서버에 데이터 반영되면 삭제 예정
  return [ {
    thumbnailUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499921cda2ab71457cff4f3/8c884b422460c98c.jpeg',
    title: '스포츠',
    isPrivate: false,
    presetPin: '649991e4da2ab71457cff4e7',
  },
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/64999226da2ab71457cff4ff/이강인.jpg',
    title: '축구선수',
    isPrivate: false,
    presetPin: '64999226da2ab71457cff4ff',
  },
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499927bda2ab71457cff527/c39374225f7a80a0a9dcc2066eedc3de.jpg',
    title: '남자연예인',
    isPrivate: false,
    presetPin: '6499927bda2ab71457cff527',
  },
  {
    imageUrl:
      'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499921cda2ab71457cff4f3/8c884b422460c98c.jpeg',
    title: '여자연예인',
    isPrivate: false,
    presetPin: '649993fbda2ab71457cff55f',
  }];
}

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
        console.log(presetList);
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
            isPrivate,
            presetPin,
            title,
            thumbnailUrl = 'http://d2e2zp9buqlqpp.cloudfront.net/preset/6499921cda2ab71457cff4f3/8c884b422460c98c.jpeg', //임시 이미지
          }: QuizPresetType) => (
            console.log(title),
            (
              <styles.Image
                imageUrl={thumbnailUrl}
                isSelected={false}
                onClick={() =>
                  handleGoToQuizPreset(presetPin, thumbnailUrl, title)
                }
              >
                <styles.CategoryText>{title}</styles.CategoryText>
              </styles.Image>
            )
          ),
        )}
      </styles.Carousel>
    </styles.Wrapper>
  );
};

export default CategoryCarousel;
