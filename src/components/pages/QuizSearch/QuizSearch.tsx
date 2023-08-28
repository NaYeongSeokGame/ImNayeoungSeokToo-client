import { useEffect, useRef } from 'react';

import GameStartModal from '@/components/main/GameStartModal';
import PresetCard from '@/components/main/PresetCard';
import useModal from '@/hooks/useModal';
import useSearchPresetList from '@/hooks/useSearchPresetList';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './QuizSearch.style';

const QUIZ_COUNT_LIMIT = 4;

const QuizSearch = () => {
  const { openModal } = useModal();
  const observerTarget = useRef(null);
  const { data, fetchNextPage, isFetching, hasNextPage } = useSearchPresetList({
    page: 1,
    limit: QUIZ_COUNT_LIMIT,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasNextPage) {
          fetchNextPage(); // 다음 페이지 데이터 가져오기
        }
      },
      { threshold: 0 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, data]);

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
        {data &&
          data.pages.map((page) =>
            page.results.map((preset) => (
              <styles.QuizPresetCard>
              <PresetCard
                key={preset.presetPin}
                title={preset.title}
                thumbnailUrl={preset.thumbnailUrl}
                hashtagList={preset.hashtagList}
                handleClick={() => handleClick(preset)}
              />
              </styles.QuizPresetCard>
            )),
          )}
        {isFetching && <p>데이터를 불러오는 중입니다. </p>}
      </styles.QuizPresetWrapper>
      <div ref={observerTarget}></div>
    </styles.SearchQuizWrapper>
  );
};

export default QuizSearch;
