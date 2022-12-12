import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '6bqpyhhmus',
  apiKey: process.env.API_KEY,
});