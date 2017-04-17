var fpTextString;
var fpActiveInput;

fpActiveInput = document.activeElement;
fpTextString = prompt('Text to paste', '');

document.activeElement.value = fpTextString;