// MSW 서버 설정, 핸들러 정의
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
