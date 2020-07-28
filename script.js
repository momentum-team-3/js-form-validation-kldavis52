const form = document.querySelector('#parking-form')
let formIsValid

form.addEventListener('submit', validate)

function validate (event) {
  event.preventDefault()

  // Start clean
  removeErrorMessage()
  removeValidMessage()

  formIsValid = true

  // here are all the inputs we need to validate
  validateName()
  validateCarYear()
  validateCarMake()
  validateCarModel()
  const carField = form.querySelector('#car-field')
  carField.remove('input-invalid')
  carField.add('input-valid')
  validateDate()
  validateDays()
  validateCCN()
  validateCVV()
  validateExpDate()

  // if everything is valid, we want to show a message at the bottom
  showValidMessage()
}

function markFormAsInvalid () {
  formIsValid = false
}

function removeErrorMessage () {
  const errorDiv = document.querySelector('#error-msg')
  if (errorDiv) {
    errorDiv.innerHTML = ''
  }
}

function removeValidMessage () {
  const validMsg = document.querySelector('#valid-message')
  if (validMsg) {
    validMsg.remove()
  }
}

function validateName () {
  const nameInput = form.querySelector('#name')
  const name = nameInput.value
  const parentEl = nameInput.parentElement
  const namePattern = /[\w]/

  if (name && namePattern.test(name)) {
    // mark as valid
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateCarYear () {
  const carYearInput = form.querySelector('#car-year')
  const carYear = carYearInput.value
  const parentEl = carYearInput.parentElement
  const carYearPattern = /^[1|2]{1}[0-9]{1}[0-9]{2}$/

  if (carYear > '1900' && carYearPattern.test(carYear)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateCarMake () {
  const carMakeInput = form.querySelector('#car-make')
  const carMake = carMakeInput.value
  const parentEl = carMakeInput.parentElement
  const carMakePattern = /[A-z]/

  if (carMake && carMakePattern.test(carMake)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateCarModel () {
  const carModelInput = form.querySelector('#car-model')
  const carModel = carModelInput.value
  const parentEl = carModelInput.parentElement
  const carModelPattern = /\w/

  if (carModel && carModelPattern.test(carModel)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateDate () {
  const dateInput = form.querySelector('#start-date')
  const date = dateInput.value
  const parentEl = dateInput.parentElement
  const datePattern = /^[\d]{2}[\d]{2}[\d]{4}/

  if (date && datePattern.test(date)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateDays () {
  const daysInput = form.querySelector('#days')
  const days = daysInput.value
  const parentEl = daysInput.parentElement
  const daysPattern = /[\d]/

  if (days && daysPattern.test(days)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateCCN () {
  const ccnInput = form.querySelector('#credit-card')
  const ccn = ccnInput.value
  const parentEl = ccnInput.parentElement
  const ccnPattern = /^([\d]{14}|[\d]{15})|[\d]{16}$/

  if (ccn && ccnPattern.test(ccn)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateCVV () {
  const cvvInput = form.querySelector('#cvv')
  const cvv = cvvInput.value
  const parentEl = cvvInput.parentElement
  const cvvPattern = /[\d]{3}/

  if (cvv && cvvPattern.test(cvv)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function validateExpDate () {
  const expDateInput = form.querySelector('#expiration')
  const expDate = expDateInput.value
  const parentEl = expDateInput.parentElement
  const expDatePattern = /^[\d]{4}$/

  if (expDate && expDatePattern.test(expDate)) {
    parentEl.classList.remove('input-invalid')
    parentEl.classList.add('input-valid')
  } else {
    console.log('Name input is invalid')
    parentEl.classList.remove('input-valid')
    parentEl.classList.add('input-invalid')
    markFormAsInvalid()
  }
}

function showValidMessage () {
  if (formIsValid) {
    const validMsgEl = document.createElement('h2')
    validMsgEl.id = 'valid-message'
    const validMsgText = document.createTextNode('This form is valid!')
    validMsgEl.appendChild(validMsgText)
    document.querySelector('h1').appendChild(validMsgEl)
  }
}
