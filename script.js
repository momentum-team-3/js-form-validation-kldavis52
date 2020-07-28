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
  validateDate()
  validateDays()
  validateCCN()
  validateCCV()
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
  const nameInput = form.querySelector('#name-field')
  const name = nameInput.value
  const parentEl = nameInput.parentElement
  const namePattern = /^[a-z ,.'-]+$/i

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
