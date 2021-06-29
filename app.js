const showBtn = document.querySelectorAll('.show-question');

showBtn.forEach(function (btn) {
  const parent = btn.parentElement.parentElement;
  const nextElment = parent.nextElementSibling;
  btn.addEventListener('click', function () {
    parent.classList.add('hide');

    nextElment.classList.add('show-section');
  });
});
