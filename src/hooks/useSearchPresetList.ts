import { useQuery } from '@tanstack/react-query';
import { error } from 'console';

import QuizRepository from '@/apis/quiz';
import QUERY_KEY from '@/constants/queryKey';
import { PaginationType } from '@/types/quiz';

const useSearchPresetList = ({ page = 1, limit = 9 }: PaginationType) => {
  const { isLoading, data } = useQuery({
    queryKey: QUERY_KEY.page({ page, limit }),
    queryFn: () => QuizRepository.getQuizListAsync({ page, limit }),
    keepPreviousData: true,
  });

  return { isLoading, data };
};
export default useSearchPresetList;
