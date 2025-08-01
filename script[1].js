
let currentStep = 1;
function nextStep(step) {
  document.getElementById('step' + currentStep).classList.add('hidden');
  document.getElementById('step' + step).classList.remove('hidden');
  currentStep = step;
}
document.getElementById('step1').classList.remove('hidden');
