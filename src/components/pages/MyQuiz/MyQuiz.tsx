import { useAtom } from 'jotai';
import { toast } from 'react-toastify';

import QuizRepository from '@/apis/quiz';
import GameStartModal from '@/components/main/GameStartModal';
import ModifyPresetImageView from '@/components/main/ModifyPresetImageView';
import useModal from '@/hooks/useModal';
import { createdQuizPresetAtomWithLocalStorage } from '@/stores/quiz';

import * as styles from './MyQuiz.style';

const MyQuiz = () => {
  const { openModal } = useModal();
  const [{ presetList }, setPresetList] = useAtom(
    createdQuizPresetAtomWithLocalStorage,
  );

  // TODO: 프리셋 수정 이동
  const modifyCurrentQuiz = (index: number) => {
    console.log('update');
  };

  const removeCurrentQuiz = async (index: number) => {
    if (confirm('해당 퀴즈 프리셋을 삭제하시겠습니까?')) {
      try {
        await QuizRepository.deletePresetAsync(presetList[index].presetPin);
        setPresetList({
          type: 'DELETE',
          item: presetList[index],
        });

        toast.success('해당 퀴즈 프리셋을 삭제하였습니다.');
      } catch (e) {
        toast.error(
          '해당 퀴즈 프리셋을 삭제하지 못했습니다. 잠시 후 다시 시도해주세요.',
        );
      }
    }
  };

  const startCurrentQuiz = (index: number) => {
    const item = presetList[index];
    openModal(
      <GameStartModal
        presetPin={item.presetPin}
        title={item.title}
        thumbnailUrl={item.thumbnailUrl}
      />,
    );
  };

  return (
    <styles.Wrapper>
      <styles.Title>
        <styles.PointTitle>나의 퀴즈</styles.PointTitle>
      </styles.Title>
      <styles.QuizListWrapper>
        {presetList.map((preset, index) => (
          <ModifyPresetImageView
            key={preset.presetPin}
            url={preset.thumbnailUrl}
            index={index}
            title={preset.title}
            startQuiz={startCurrentQuiz}
            removeQuiz={removeCurrentQuiz}
            modifyQuiz={modifyCurrentQuiz}
          />
        ))}
      </styles.QuizListWrapper>
    </styles.Wrapper>
  );
};

export default MyQuiz;
