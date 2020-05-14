import axios from 'axios';
import { apiBaseUrl } from '../config/config.json';

const apiClient = axios.create({
  baseURL: apiBaseUrl,
});

const saveStory = async ({ title, subheader, content }) => {
  try {
    const result = await apiClient.post('/story', {
      title,
      subheader,
      content,
    });

    if (result.data) {
      return result.data.Item;
    }
    return {
      error: 'Encountered an issue saving the story',
    };
  } catch (err) {
    console.log(err);
    return {
      error: `Encountered an issue saving the story: ${err.message}`,
    };
  }
};

const getStory = async (shortId) => {
  const result = await apiClient.get(`/story/${shortId}`);

  if (result.data) {
    return result.data.Item;
  }
  return null;
};

export { saveStory, getStory };
