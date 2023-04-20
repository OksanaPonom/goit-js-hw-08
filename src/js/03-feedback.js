import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
let formData = {};

updateForm();

feedbackForm.addEventListener('input', throttle(onInputForm,500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(storageKey, JSON.stringify(formData)); 

}
   
function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(storageKey);
    console.log(formData);
}
 
function updateForm() {
    let savedFormData = localStorage.getItem(storageKey);
     if (savedFormData) {
         formData = JSON.parse(savedFormData);

         emailInput.value = formData.email;
         messageInput.value = formData.message;
    };    
    }

