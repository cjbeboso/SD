const form = document.getElementById('form');

const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const batch = document.getElementById('batch');
const technology = document.getElementById('technology');
const idNumber = document.getElementById('idNumber');
const contactNumber = document.getElementById('contactNumber');

// Auto validate while typing
firstName.addEventListener('input', () => autoValidate(firstName));
lastName.addEventListener('input', () => autoValidate(lastName));
batch.addEventListener('input', () => autoValidate(batch));
idNumber.addEventListener('input', () => validateIdNumber(idNumber.value.trim()));
contactNumber.addEventListener('input', () => validateContact(contactNumber.value.trim()));

form.addEventListener('submit', (e) => {
  checkInputs();

  if (!isFormValid()) {
    e.preventDefault(); 
    alert('Please fix the errors before submitting!');
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
  const idNumberValue = idNumber.value.trim();
  const contactNumberValue = contactNumber.value.trim();
  const technologyValue = technology.value;


  if (firstNameValue === '') {
    setErrorFor(firstName, 'First name cannot be blank');
  } else {
    setSuccessFor(firstName);
  }


  if (middleNameValue !== '') {
    setSuccessFor(middleName);
  } else {
    middleName.parentElement.className = 'form-control'; // leave neutral if empty
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name cannot be blank');
  } else {
    setSuccessFor(lastName);
  }


  if (batchValue === '') {
    setErrorFor(batch, 'Batch cannot be blank');
  } else {
    setSuccessFor(batch);
  }


  if (technologyValue === '' || technologyValue === null) {
    setErrorFor(technology, 'Please select technology');
  } else {
    setSuccessFor(technology);
  }


  validateIdNumber(idNumberValue);


  validateContact(contactNumberValue);
}

function validateIdNumber(idNumberValue) {
  const idNumberRegex = /^\d{4}-\d{2}-\d{3}$/;
  if (idNumberRegex.test(idNumberValue)) {
    setSuccessFor(idNumber);
  } else {
    setErrorFor(idNumber, 'ID number must be in the format YYYY-MM-DD (e.g., 2023-33-052)');
  }
}


function validateContact(contactNumberValue) {
  if (contactNumberValue === '') {
    setErrorFor(contactNumber, 'Contact number cannot be blank');
  } else if (!/^\d{11}$/.test(contactNumberValue)) {
    setErrorFor(contactNumber, 'Contact number must be 11 digits');
  } else {
    setSuccessFor(contactNumber);
  }
}


function isFormValid() {
  const formControls = document.querySelectorAll('.form-control');
  return [...formControls].every((formControl) => {

    if (formControl.querySelector('input') === middleName && middleName.value.trim() === '') {
      return true;
    }
    return formControl.classList.contains('success');
  });
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