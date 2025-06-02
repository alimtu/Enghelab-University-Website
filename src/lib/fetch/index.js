import config from '../../config';

export async function AppFetcher(path, options) {
  const baseUrl = config.api.baseURL || '';
  const url = baseUrl + path;

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
