import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {};

populateTextarea();

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
});

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) {
    //console.log(savedMessage);
    return;
  }
  refs.textarea.value = savedMessage['message'] || '';
  refs.input.value = savedMessage['email'] || '';
}

// refs.form.addEventListener('input', e => {
//   //console.log(e.target.name);
//   //console.log(e.target.value);

//   formData[e.target.name] = e.target.value;
//   const stringifiedData = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, stringifiedData);
//   console.log(formData);
// });

// import '../css/common.css';
// import '../css/03-feedback.css';
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const STORAGE_EMAIL = 'email';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('input'),
// };

// populateTextarea();
// populateInput();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', throttle(onEmailInput, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   localStorage.removeItem(STORAGE_EMAIL);
// }

// function onTextareaInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onEmailInput(e) {
//   const email = e.target.value;
//   localStorage.setItem(STORAGE_EMAIL, email);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }

// function populateInput() {
//   const savedEmail = localStorage.getItem(STORAGE_EMAIL);

//   if (savedEmail) {
//     console.log(savedEmail);
//     refs.input.value = savedEmail;
//   }
// }
