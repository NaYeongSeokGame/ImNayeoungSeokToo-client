import React from 'react';
import * as styles from './PresetCard.style';

export interface QuizPresetTemplateType {
  title: string;
  thumbnailUrl: string;
  hashtagList?: string[];
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const PresetCard = ({
  title,
  thumbnailUrl,
  hashtagList,
  handleClick,
}: QuizPresetTemplateType) => {
  return (
      <styles.PresetWrapper onClick={handleClick}>
        <styles.TitleText>{title}</styles.TitleText>
        <styles.Image imageurl={thumbnailUrl} />
        <styles.HashtagWrapper>
          {hashtagList?.slice(0, 2).map((hashtag) => (
            <styles.HashtagText> 
              {hashtag}
            </styles.HashtagText>
          ))}
        </styles.HashtagWrapper>
      </styles.PresetWrapper>
  );
};
export default PresetCard;
