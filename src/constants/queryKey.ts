import { PaginationType } from '@/types/quiz';

const QUERY_KEY = {
  preset: ['preset'],
  page: ({ page, limit }: PaginationType) => [
    ...QUERY_KEY.preset,
    'list',
    page,
    limit,
  ],
  search :(keyword : string)=> [...QUERY_KEY.preset, 'search', keyword], 
  presetPin: (presetPin: string) => [...QUERY_KEY.preset, 'pin', presetPin],
};

export default QUERY_KEY;
