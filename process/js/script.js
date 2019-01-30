document.querySelectorAll('input.num').forEach((input) => {
  input.addEventListener('keyup', function() {
    input.nextSibling.nextSibling.focus();
    input.nextSibling.nextSibling.value = '';
  });
});

document.querySelectorAll('input.row, input.column').forEach((input) => {
  input.addEventListener('keyup', function() {
    if (input.value.length == 2) {
      input.nextSibling.nextSibling.focus();
      input.nextSibling.nextSibling.value = '';
    }
  });
});