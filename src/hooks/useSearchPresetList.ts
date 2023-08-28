import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import QuizRepository from '@/apis/quiz';
import QUERY_KEY from '@/constants/queryKey';
import { PaginationKeywordType, PresetPageType } from '@/types/quiz';

const useSearchPresetList = ({
  page,
  limit,
  type,
  keyword,
}: PaginationKeywordType) => {
 
  //검색 안했을 경우
  const {
    data: allData,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<PresetPageType, Error>(
    QUERY_KEY.page({ page, limit }),
    ({ pageParam = 1 }) =>
      QuizRepository.getQuizListAsyncwithPagenation({
        page: pageParam,
        limit,
      }),
    { getNextPageParam: (lastPage) => lastPage.nextPage },
  );

  //검색 했을 경우
  const { data: searchData, isLoading } = useQuery(
    QUERY_KEY.search(keyword),
    () => QuizRepository.getQuizListSearchAsync({ page, limit, type, keyword }),
    { enabled: type === 'title' || type === 'hashtag' },
  );

  return {
    isLoading,
    searchData,
    allData,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
  };
};
export default useSearchPresetList;
