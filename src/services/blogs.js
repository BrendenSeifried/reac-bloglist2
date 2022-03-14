import { client, checkError } from './client';

export default async function getBlog() {
  const response = await client.from('blogs').select('*');
  return checkError(response);
}
