import { useEffect, useRef, useState } from 'react';

import GameStartModal from '@/components/main/GameStartModal';
import PresetCard from '@/components/main/PresetCard';
import useModal from '@/hooks/useModal';
import useSearchPresetList from '@/hooks/useSearchPresetList';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './QuizSearch.style';

const QUIZ_COUNT_LIMIT = 12;

const QuizSearch = () => {
  const { openModal } = useModal();
  const [page, setPage] = useState(1);
  const observerTarget = useRef(null);
  const { data: presetList, isLoading } = useSearchPresetList({
    page,
    limit: QUIZ_COUNT_LIMIT,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          console.log(entries);
          if (presetList && QUIZ_COUNT_LIMIT > presetList.length) {
            setPage(1);
          } else {
            setPage((page) => page + 1);
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
          presetList.map((preset: QuizPresetType) => (
            <styles.QuizPresetCard>
              <PresetCard
                key={preset.presetPin}
                title={preset.title}
                thumbnailUrl={preset.thumbnailUrl}
                hashtagList={preset.hashtagList}
                handleClick={() => handleClick(preset)}
              />
            </styles.QuizPresetCard>
          ))}

        {isLoading && <p>데이터를 불러오는 중입니다. </p>}
      </styles.QuizPresetWrapper>
      <div ref={observerTarget}></div>
    </styles.SearchQuizWrapper>
  );
};

export default QuizSearch;
