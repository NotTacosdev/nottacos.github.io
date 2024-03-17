document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');

  modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });
});

function clearResult() {
  document.getElementById('result').value = '';
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  const result = document.getElementById('result').value;
  try {
    const calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
