import React from 'react';

import * as styles from './PresetCard.style.ts';

export interface QuizPresetTemplateType {
  title: string;
  thumbnailUrl: string;
  hashTagList?: string[];
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const PresetCard = ({
  title,
  thumbnailUrl,
  hashTagList,
  handleClick,
}: QuizPresetTemplateType) => {
  return (
    <styles.PresetWrapper onClick={handleClick}>
      <styles.TitleText>{title}</styles.TitleText>
      <styles.Image imageurl={thumbnailUrl} />
      <styles.HashtagWrapper>
        {hashTagList?.slice(0, 2).map((hashtag) => (
          <styles.HashtagText>{hashtag}</styles.HashtagText>
        ))}
      </styles.HashtagWrapper>
    </styles.PresetWrapper>
  );
};
export default PresetCard;
