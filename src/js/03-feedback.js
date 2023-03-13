import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

const saveFormState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(state));
}, 500);

const populateFormFields = () => {
  const state = JSON.parse(localStorage.getItem(feedbackFormStateKey));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

populateFormFields();
