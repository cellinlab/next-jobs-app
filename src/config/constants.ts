export const IS_SERVER = typeof window === 'undefined';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const IS_TEST = process.env.NODE_ENV === 'test';

export const API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === 'true';

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
