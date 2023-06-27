import axios from 'axios';
import { useRef, useState } from 'react';

const API = axios.create({
  baseURL:
    'http://ec2-43-202-28-155.ap-northeast-2.compute.amazonaws.com:8000/api/v1',
});

interface PostSendQuizPresetType {
  images: File[];
  answers: string[];
  title: string;
  isPrivate: boolean;
}

interface QuizType {
  image: File | null;
  answer: string;
}

function TestAPI() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [presetData, setPresetData] = useState<PostSendQuizPresetType>({
    images: [],
    answers: [],
    title: '',
    isPrivate: false,
  });
  const [quizData, setQuizData] = useState<QuizType>({
    image: null,
    answer: '',
  });
  const [presetId, setPresetId] = useState<string>('');

  const openFileUploadDialog = () => fileInputRef.current?.click();
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [uploadedFile] = e.target.files ?? [];
    if (!uploadedFile) return;
    setQuizData((prev) => ({
      ...prev,
      image: uploadedFile,
    }));
  };
  const removeUploadedFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setQuizData((prev) => ({ ...prev, image: null }));
    }
  };

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    setQuizData((prev) => ({ ...prev, answer }));
  };

  const handlePresetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setPresetData((prev) => ({ ...prev, title }));
  };

  const handleSetPresetId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const presetId = e.target.value;
    setPresetId(presetId);
  };

  const storeNewQuiz = () => {
    const { answer, image } = quizData;
    if (!answer || !image) return;
    setPresetData((prev) => ({
      ...prev,
      images: [...prev.images, image],
      answers: [...prev.answers, answer],
    }));
  };

  const submitQuizData = async () => {
    console.log(presetData);
    if (presetData.answers.length !== presetData.images.length) return;

    const formData = new FormData();
    presetData.images.map((image) => formData.append('images', image));
    presetData.answers.map((answer) => formData.append('answers', answer));
    formData.append('title', presetData.title);

    try {
      const response = await API.post('/quiz/create', formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteQuizPreset = async () => {
    try {
      const response = await API.delete(`/quiz/remove`, {
        params: {
          presetPin: presetId,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getQuizPreset = async () => {
    try {
      const response = await API.get(`/quiz`, {
        params: {
          presetPin: presetId,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getQuizPresetList = async () => {
    try {
      const response = await API.get(`/quiz/list`, {
        params: {
          page: 1,
          limit: 10,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>{`등록된 퀴즈 : ${presetData.answers.length}`}</p>
      <p>제목</p>
      <input
        value={presetData.title}
        onChange={handlePresetInput}
        name="title"
      />
      <div>
        <p>문제 별 제출</p>
        <div>
          <input
            value={quizData.answer}
            onChange={handleAnswerInput}
            placeholder="정답"
          />
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleUploadFile}
          />
          <br />
          <button
            onClick={quizData.image ? removeUploadedFile : openFileUploadDialog}
          >
            파일 업로드
          </button>
          <div>
            <button onClick={storeNewQuiz}>퀴즈 등록하기</button>
          </div>
        </div>
        <br />
        <button onClick={submitQuizData}>프리셋 등록하기</button>
        <div>
          <p>프리셋 로드 / 삭제하기</p>
          <input onChange={handleSetPresetId} value={presetId} />
          <button onClick={getQuizPreset}>프리셋 불러오기</button>
          <button onClick={deleteQuizPreset}>프리셋 삭제</button>
        </div>
        <div>
          <p>프리셋 목록 불러오기</p>
          <button onClick={getQuizPresetList}>목록 불러오기</button>
        </div>
      </div>
    </div>
  );
}

export default TestAPI;
