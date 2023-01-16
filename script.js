const ScrollBtn = document.querySelector('.scroll-to-top')

console.log(ScrollBtn);

ScrollBtn.addEventListener('click', () => {
    document.body.top = 0;
    document.documentElement.top = 0;
})