import * as model from './model.js';
import { adviceView } from './view.js';

const controlAdvice = async function () {
  try {
    adviceView.renderSpinner();

    await model.getNewAdvice();
    if (!model.state) return;

    adviceView.renderNewAdvice(model.state);
  } catch (error) {
    adviceView.renderError();
    console.error(error);
  }
};

const init = function () {
  controlAdvice();
  adviceView.addHandlerGenerateAdvice(controlAdvice);
};

init();
