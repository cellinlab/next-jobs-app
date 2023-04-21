import { IS_SERVER } from '@/config/constants';

export const initializeMocks = async () => {
  if (IS_SERVER) {
    console.log('Initializing server mocks');
    const { server } = await import('./server');
    server.listen();
  } else {
    console.log('Initializing browser mocks');
    const { worker } = await import('./browser');
    worker.start();
  }
};
