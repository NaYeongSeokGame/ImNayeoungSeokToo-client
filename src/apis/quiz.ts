import {
  CreatePresetType,
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

  static async getQuizListAsyncwithPagenation({
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
      //Fixme : 반복해서 새로운 데이터를 가져올 수 있도록 하면 좋을듯?
      // nextPage : page + 1,
      // nextPage: (response.length < limit ? 1 : page + 1)
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
      keyword.slice(1);
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
    console.log(hashtagList);
    const formData = new FormData();
    images.map((image) => formData.append('images', image));
    answers.map((answer) => formData.append('answers', answer));
    hashtagList.map((hashtag) => formData.append('hashtagContentList', hashtag));
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
    hashtagList.map((hashtag) => formData.append('hashtagContentList', hashtag));
    hintList.map((hint) => formData.append('hints', hint));
    formData.append('title', title);
    formData.append('isPrivate', `${isPrivate}`);

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
