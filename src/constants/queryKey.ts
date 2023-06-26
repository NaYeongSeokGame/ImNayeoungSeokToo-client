import { PaginationType } from '@/types/quiz';

const QUERY_KEY = {
  preset: ['preset'],
  page: ({ page, limit }: PaginationType) => [
    ...QUERY_KEY.preset,
    'list',
    page,
    limit,
  ],
  presetPin: (presetPin: string) => [...QUERY_KEY.preset, 'pin', presetPin],
};

export default QUERY_KEY;
