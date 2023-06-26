import { useQuery } from '@tanstack/react-query';

import QuizRepository from '@/apis/quiz';
import QUERY_KEY from '@/constants/queryKey';

const useGetPresetByPin = (presetPin: string) => {
  const { data } = useQuery(QUERY_KEY.preset(presetPin), () =>
    QuizRepository.getQuizByPinAsync(presetPin),
  );

  return data;
};

export default useGetPresetByPin;
