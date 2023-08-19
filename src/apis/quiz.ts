import {
  CreatePresetType,
  GetQuizListOutput,
  PaginationType,
  QuizPresetPinType,
  QuizPresetType,
} from '@/types/quiz';

import { deleteAsync, getAsync, postAsync } from './API';

class QuizRepository {
  static async getQuizByPinAsync(presetPin: string) {
    const quizPreset = await getAsync<GetQuizListOutput>('/quiz', {
      params: {
        presetPin,
      },
    });
    return quizPreset;
  }

  static async getQuizListAsync({ page = 1, limit = 9 }: PaginationType) {
    const quizPresetList = await getAsync<QuizPresetType[]>('/quiz/list', {
      params: {
        page,
        limit,
      },
    });
    return quizPresetList;
  }

  static async postCreateNewPresetAsync({
    title,
    isPrivate,
    images,
    answers,
    hashtagList,
    hintList,
  }: CreatePresetType) {
    const formData = new FormData();
    images.map((image) => formData.append('images', image));
    answers.map((answer) => formData.append('answers', answer));
    hashtagList.map((hashtag) => formData.append('hashtagList', hashtag));
    hintList.map((hint) => formData.append('hints', hint));
    formData.append('title', title);
    formData.append('isPrivate', `${isPrivate}`);

    const response = await postAsync<QuizPresetPinType, FormData>(
      '/quiz/create',
      formData,
    );
    return response;
  }

  static async deletePresetAsync(presetId: string) {
    const response = deleteAsync<undefined>('/quiz/remove', {
      params: {
        presetId,
      },
    });
    return response;
  }
}

export default QuizRepository;
