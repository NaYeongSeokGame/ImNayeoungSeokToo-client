import React, { useCallback, useState } from 'react';

import * as styles from './HastagInput.style';
import { toast } from 'react-toastify';

interface HashtagInputType {
  hashtag: string[];
  setHashtag: (newdata: string[]) => void;
}
const HashtagInput = ({ hashtag, setHashtag }: HashtagInputType) => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (input && event.key == 'Enter') {
      if(hashtag.length > 2){
        toast.error("해시태그는 세 개 이상 설정할 수 없습니다. ");
        return;
      }
      if(input.length > 10){
        toast.error("해시태그는 10글자 이하로 입력해주세요.");
        return;
      }
      const newHashtag = [...hashtag, input];
      setHashtag(newHashtag);
      setInput('');
    }
  };
  
  const hashtagRemove=(index: number)=>{
    hashtag.splice(index, 1);
    setHashtag([...hashtag]);
  }
  return (
    <styles.HastagInputWrapper>
        {hashtag &&
          hashtag.map((text, index) => (
            <styles.HashtagInner onClick={()=>hashtagRemove(index)}>{text}</styles.HashtagInner>
          ))}
      <styles.HastagInput
        type="text"
        value={input}
        onChange={handleChange}
        onKeyUp={onKeyUp}
      />
    </styles.HastagInputWrapper>
  );
};

export default HashtagInput;
