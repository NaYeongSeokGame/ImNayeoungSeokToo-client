import {
  GetQuizListOutput,
  PostCreateNewPresetInput,
  QuizTypeWithPin,
} from '@/types/quiz';

import { deleteAsync, getAsync, postAsync } from './API';

class QuizRepository {
  static async getQuizByPinAsync(presetPin: string) {
    const quizPreset = await getAsync('/quiz', {
      params: {
        presetPin,
      },
    });
    return quizPreset;
  }

  static async getQuizListAsync({
    pages = 1,
    limit = 9,
  }: {
    pages: number;
    limit: number;
  }) {
    const quizPresetList = await getAsync<GetQuizListOutput>('/quiz/list', {
      params: {
        pages,
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
  }: PostCreateNewPresetInput) {
    const formData = new FormData();
    images.map((image) => formData.append('images', image));
    answers.map((answer) => formData.append('answers', answer));
    formData.append('title', title);
    formData.append('isPrivate', `${isPrivate}`);

    const response = await postAsync<Pick<QuizTypeWithPin, 'presetPin'>>(
      '/quiz/create',
      formData,
    );
    return response;
  }

  static async deletePresetAsync(presetId: string) {
    const response = deleteAsync('/quiz/remove', {
      params: {
        presetId,
      },
    });
    return response;
  }
}

export default QuizRepository;
