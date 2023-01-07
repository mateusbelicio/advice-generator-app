class Advice {
  _parentElement = document.querySelector('.c-advice');
  _id = document.querySelector('.c-advice__id');
  _advice = document.querySelector('.c-advice__text');

  addHandlerGenerateAdvice(handler) {
    const btn = document.querySelector('.c-advice__button');
    btn.addEventListener('click', function () {
      handler();
    });
  }

  _clear() {
    this._id.textContent = '';
    this._advice.innerHTML = '';
    this._parentElement.dataset.error = false;
  }

  renderSpinner() {
    const markup = `<div class="c-spinner">
      <span class="c-spinner__dot" style="--i: 0"></span>
      <span class="c-spinner__dot" style="--i: 1"></span>
      <span class="c-spinner__dot" style="--i: 2"></span>
    </div>`;

    this._clear();
    this._advice.insertAdjacentHTML('afterbegin', markup);
  }

  renderNewAdvice(data) {
    this._clear();
    this._id.textContent = data.id;
    this._advice.textContent = data.advice;
  }

  renderError() {
    this._clear();
    this._advice.textContent = 'Failed to load advice. Try again later...';
    this._parentElement.dataset.error = true;
    this._id.textContent = 'Error';
  }
}

export const adviceView = new Advice();
