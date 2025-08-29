const form = document.getElementById('form');

const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const batch = document.getElementById('batch');
const technology = document.getElementById('technology');
const idNumber = document.getElementById('idNumber');
const contactNumber = document.getElementById('contactNumber');

firstName.addEventListener('input', () => autoValidate(firstName));
middleName.addEventListener('input', () => autoValidate(middleName));
lastName.addEventListener('input', () => autoValidate(lastName));
batch.addEventListener('input', () => autoValidate(batch));
technology.addEventListener('change', () => autoValidate(technology));  // For select input
idNumber.addEventListener('input', () => autoValidate(idNumber));
contactNumber.addEventListener('input', () => autoValidate(contactNumber));

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  checkInputs(); 
  
  if (isFormValid()) {
    alert('Form submitted successfully!, Thank You!');
    resetForm(); 
  }
});

function autoValidate(input) {
  if (input.value.trim() !== '') {
    setSuccessFor(input);
  } else {
    setErrorFor(input, `${input.previousElementSibling.innerText} cannot be blank`);
  }
}

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const middleNameValue = middleName.value.trim();
  const lastNameValue = lastName.value.trim();
  const batchValue = batch.value.trim();
  const technologyValue = technology.value.trim();
  const idNumberValue = idNumber.value.trim();
  const contactNumberValue = contactNumber.value.trim();

  firstNameValue === '' ? setErrorFor(firstName, 'First name cannot be blank') : setSuccessFor(firstName);
  middleNameValue === '' ? setErrorFor(middleName, 'Middle name cannot be blank') : setSuccessFor(middleName);
  lastNameValue === '' ? setErrorFor(lastName, 'Last name cannot be blank') : setSuccessFor(lastName);
  batchValue === '' ? setErrorFor(batch, 'Batch cannot be blank') : setSuccessFor(batch);
  technologyValue === '' ? setErrorFor(technology, 'Technology cannot be blank') : setSuccessFor(technology);
  idNumberValue === '' ? setErrorFor(idNumber, 'ID number cannot be blank') : validateIdNumber(idNumberValue);

  


  if (contactNumberValue === '') {
    setErrorFor(contactNumber, 'Contact number cannot be blank');
  } else if (!/^\d{10,15}$/.test(contactNumberValue)) {
    setErrorFor(contactNumber, 'Contact number must be 11 digits');
  } 
  else if(firstNameValue !== firstNameInput){
    setErrorFor(firstName, 'it must be letters');
  }
  else {
    setSuccessFor(contactNumber);
  }
}

function firstNameInput(input) {
    const regex = /^[a-zA-Z]+$/; // Matches only letters (uppercase and lowercase)

}
function validateIdNumber(idNumberValue) {
  const idNumberRegex = /^\d{4}-\d{2}-\d{3}$/;
  if (idNumberRegex.test(idNumberValue)) {
    setSuccessFor(idNumber);
  } else {
    setErrorFor(idNumber, 'ID number must be in the format YYYY-MM-DD (e.g., 2023-33-052)');
  }
}

function isFormValid() {
  const formControls = document.querySelectorAll('.form-control');
  return [...formControls].every((formControl) => formControl.classList.contains('success'));
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function resetForm() {
  form.reset(); 
  const formControls = document.querySelectorAll('.form-control');
  formControls.forEach((formControl) => {
    formControl.className = 'form-control';
    const small = formControl.querySelector('small');
    small.innerText = ''; 
  });
}

