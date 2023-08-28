import {
  useInfiniteQuery,
} from '@tanstack/react-query';

import QuizRepository from '@/apis/quiz';
import QUERY_KEY from '@/constants/queryKey';
import { PaginationType, PresetPageType} from '@/types/quiz';

const useSearchPresetList = ({ page, limit }: PaginationType) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<PresetPageType, Error>(
    QUERY_KEY.page({ page, limit }),
    ({ pageParam = 1 }) =>
      QuizRepository.getQuizListAsyncwithPagenation({ page: pageParam, limit }),
    { getNextPageParam: (lastPage) => lastPage.nextPage },
  );

  return { data, error, fetchNextPage, hasNextPage, isFetching, status };
};
export default useSearchPresetList;
