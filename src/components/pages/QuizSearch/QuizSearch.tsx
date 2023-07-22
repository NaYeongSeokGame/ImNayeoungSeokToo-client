import { useEffect, useRef, useState } from 'react';

import PresetCard from '@/components/main/PresetCard';
import GameStartModal from '@/components/main/GameStartModal';
import useGetPresetList from '@/hooks/useGetPresetList';
import useModal from '@/hooks/useModal';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './QuizSearch.style';

const QuizSearch = () => {
  const { openModal } = useModal();
  const [page, setPage] = useState(1);
  const limit = 6;
  const observerTarget = useRef(null);
  const presetList = useGetPresetList({ page, limit });

  //Fixme : 동작 확인 필요
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (presetList && limit > presetList.length) {
            setPage(1);
          } else if (page > 1) {
            setPage(page + 1);
          }
        }
      },
      { threshold: 1 },
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  const handleClick = ({ presetPin, thumbnailUrl, title }: QuizPresetType) => {
    openModal(
      <GameStartModal
        presetPin={presetPin}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
    );
  };

  const handleSubmit = () => {};

  return (
    <styles.SearchQuizWrapper>
      <styles.SearchForm onSubmit={handleSubmit}>
        <styles.SearchInput placeholder="#태그를 검색하세요" />
        <styles.SearchButton />
      </styles.SearchForm>
      <styles.QuizPresetWrapper>
        {presetList &&
          presetList.map((preset) => (
            <styles.QuizPresetCard >
              <PresetCard
              key={preset.presetPin}
                title={preset.title}
                thumbnailUrl={preset.thumbnailUrl}
                hashtagList={preset.hashtagList}
                handleClick={() => handleClick(preset)}
              />
            </styles.QuizPresetCard>
          ))}
      </styles.QuizPresetWrapper>
      <div ref={observerTarget}></div>
    </styles.SearchQuizWrapper>
  );
};

export default QuizSearch;
