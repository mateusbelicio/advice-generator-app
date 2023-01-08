import * as model from './model.js';
import { adviceView } from './view.js';

const controlAdvice = async function () {
  try {
    adviceView.renderSpinner();
    await model.getNewAdvice();

    setTimeout(() => {
      if (!model.state) return;
      adviceView.renderNewAdvice(model.state);
    }, 1000);
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
