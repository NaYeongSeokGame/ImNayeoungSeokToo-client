import PresetCard from '@/components/common/PresetCard';
import GameStartModal from '@/components/main/GameStartModal';
import useGetPresetList from '@/hooks/useGetPresetList';
import useModal from '@/hooks/useModal';
import { QuizPresetType } from '@/types/quiz';

import * as styles from './SearchQuiz.style';

const QuizSearch = () => {
  const { openModal } = useModal();
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
  const presetList = useGetPresetList({ page: 1, limit: 9 });

  return (
    <styles.SearchQuizWrapper>
      <styles.SearchForm onSubmit={handleSubmit}>
        <styles.SearchInput placeholder="#태그를 검색하세요" />
        <styles.SearchButton />
      </styles.SearchForm>

      <styles.QuizPresetWrapper>
        {presetList?.map((preset) => (
          <styles.QuizPresetCard key={preset.presetPin}>
            <PresetCard
              title={preset.title}
              thumbnailUrl={preset.thumbnailUrl}
              hashtagList={preset.hashtagList}
              handleClick={() => handleClick(preset)}
            />
          </styles.QuizPresetCard>
        ))}
      </styles.QuizPresetWrapper>
    </styles.SearchQuizWrapper>
  );
};

export default QuizSearch;
