const API_URL = 'https://api.adviceslip.com/advice/';

export const state = {};

export const getNewAdvice = async function () {
  try {
    const newId = Math.floor(Math.random() * 224 + 1);

    const res = await fetch(`${API_URL}${newId}`);
    const data = await res.json();

    if (!res.ok) throw new Error('Failed to load data. Try again later...');

    state.id = data.slip.id;
    state.advice = data.slip.advice;
  } catch (error) {
    throw error;
  }
};
