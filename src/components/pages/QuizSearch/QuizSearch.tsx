import { useEffect, useRef, useState } from 'react';

import GameStartModal from '@/components/main/GameStartModal';
import PresetCard from '@/components/main/PresetCard';
import useGetPresetByPin from '@/hooks/useGetPresetByPin.ts';
import useModal from '@/hooks/useModal';
import useSearchPresetList from '@/hooks/useSearchPresetList';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './QuizSearch.style';


const QUIZ_COUNT_LIMIT = 6;

const QuizSearch = () => {
  const { openModal } = useModal();
  const observerTarget = useRef(null);
  const [input, setInput] = useState<string>('');
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('all');
  const search = new URL(location.href).search;
  const quizPin = new URLSearchParams(search).get('pin');

  let presetByPin: ReturnType<typeof useGetPresetByPin>;
  if (quizPin) {
    presetByPin = useGetPresetByPin(quizPin);
  }

  const {
    allData,
    searchData,
    status,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useSearchPresetList({
    page: 1,
    limit: QUIZ_COUNT_LIMIT,
    type,
    keyword,
  });

  useEffect(() => {
    if (allData && allData.pages[0].results.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && type === 'all' && hasNextPage) {
            fetchNextPage(); // 다음 페이지 데이터 가져오기
          }
        },
        { threshold: 1 },
      );

      if (observerTarget.current) {
        observer.observe(observerTarget.current);
      }
      return () => observer.disconnect();
    }
  }, [type, hasNextPage]);

  useEffect(() => {
    if (!presetByPin) return;
    openModal(<GameStartModal {...presetByPin} />);
  }, [presetByPin]);

  const handleClick = ({ presetPin, thumbnailUrl, title }: QuizPresetType) => {
    openModal(
      <GameStartModal
        presetPin={presetPin}
        thumbnailUrl={thumbnailUrl}
        title={title}
      />,
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    if (event.target.value === '') {
      setType('all');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.length > 0) {
      setKeyword(input);
      if (input.slice(0, 1) === '#') {
        setType('hashtag');
      } else {
        setType('title');
      }
    }
  };

  return (
    <styles.SearchQuizWrapper>
      <styles.SearchForm onSubmit={handleSubmit}>
        <styles.SearchInput
          placeholder="제목 및 #태그를 검색하세요"
          onChange={handleChange}
          value={input}
        />
        <styles.SearchButton />
      </styles.SearchForm>

      <styles.QuizPresetWrapper>
        {type === 'all' &&
          allData &&
          allData.pages.map((page) =>
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
        {type !== 'all' &&
          searchData &&
          searchData.map((preset: QuizPresetType) => (
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
        <styles.ObserverTarget ref={observerTarget}></styles.ObserverTarget>
      </styles.QuizPresetWrapper>
    </styles.SearchQuizWrapper>
  );
};

export default QuizSearch;