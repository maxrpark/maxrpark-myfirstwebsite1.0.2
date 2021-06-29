const showBtn = document.querySelectorAll('.show-question');

showBtn.forEach(function (btn) {
  const parent = btn.parentElement.parentElement;
  const nextElment = parent.nextElementSibling;
  btn.addEventListener('click', function () {
    parent.classList.add('hide');
    nextElment.classList.add('show-section');
    const prev = nextElment.previousElementSibling;
    console.log(prev);
    if (nextElment.classList.contains('show-section')) {
      prev.classList.remove('hide');
      prev.classList.remove('show-section');
    }
  });
});

const date = document.getElementById('date');
const year = new Date().getFullYear();

date.textContent = year;
console.log(date);
