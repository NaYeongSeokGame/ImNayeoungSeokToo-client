import {
  CreatePresetType,
  ModifyPresetType,
  PaginationKeywordType,
  PaginationType,
  PlayableQuizPresetType,
  PresetPageType,
  QuizPresetPinType,
  QuizPresetType,
} from '@/types/quiz';

import { deleteAsync, getAsync, patchAsync, postAsync } from './API';

class QuizRepository {
  static async getQuizByPinAsync(presetPin: string) {
    const quizPreset = await getAsync<PlayableQuizPresetType>('/quiz', {
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

  static async getQuizListAsyncWithPagenation({
    page = 1,
    limit = 9,
  }: PaginationType): Promise<PresetPageType> {
    const response = await getAsync<QuizPresetType[]>('/quiz/list', {
      params: {
        page,
        limit,
      },
    });
    const responseData: PresetPageType = {
      results: response,
      page,
      nextPage: response.length < limit ? null : page + 1,
    };

    return responseData;
  }

  static async getQuizListSearchAsync({
    page = 1,
    limit = 9,
    type,
    keyword,
  }: PaginationKeywordType): Promise<QuizPresetType[]> {
    if (type === 'hashtag') {
      keyword = keyword.substring(1);
    }
    const response = await getAsync<QuizPresetType[]>('/quiz/search', {
      params: {
        page,
        limit,
        type,
        keyword,
      },
    });
    return response;
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

  static async patchPresetAsync({
    presetPin,
    title,
    isPrivate,
    addQuizAnswers,
    addQuizHints,
    addQuizImages,
    addHashtagList,
    removedHashtagList,
    removedQuizIndexList,
  }: ModifyPresetType) {
    const formData = new FormData();
    formData.append('presetPin', presetPin);
    formData.append('title', title);
    formData.append('isPrivate', `${isPrivate}`);

    addQuizAnswers.map((answer) => formData.append('addQuizAnswers', answer));
    addQuizHints.map((hint) => formData.append('addQuizHints', hint));
    addQuizImages.map((image) => formData.append('addQuizImages', image));
    addHashtagList.map((hashtag) => formData.append('addHashtagList', hashtag));
    removedHashtagList.map((hashtag) =>
      formData.append('removedHashtagList', hashtag),
    );
    removedQuizIndexList.map((index) =>
      formData.append('removedQuizIndexList', index.toString()),
    );

    const response = await patchAsync<QuizPresetPinType, FormData>(
      '/quiz/modify',
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
