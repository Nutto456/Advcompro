var input = document.getElementById('result');

function appendValue(value) {
  input.value += value;
}

function appendDecimal() {
  if (!input.value.includes('.')) {
    input.value += '.';
  }
}

function clearInput() {
  input.value = '';
}

function calculate() {
  try {
    var result = eval(input.value);
    input.value = result;
  } catch (error) {
    input.value = 'Error';
  }
}
