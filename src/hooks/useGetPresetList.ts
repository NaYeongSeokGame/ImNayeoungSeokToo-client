import { useQuery } from '@tanstack/react-query';

import QuizRepository from '@/apis/quiz';
import QUERY_KEY from '@/constants/queryKey';
import { PaginationType } from '@/types/quiz';

const useGetPresetList = ({ page = 1, limit = 9 }: PaginationType) => {
  const { data } = useQuery(QUERY_KEY.page({ page, limit }), () =>
    QuizRepository.getQuizListAsync({ page, limit }),
  );

  return data;
};

export default useGetPresetList;
