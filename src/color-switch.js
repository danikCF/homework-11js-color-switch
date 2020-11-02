const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
 body:  document.querySelector('body'),
 start: document.querySelector('[data-action="start"]'),
 stop:  document.querySelector('[data-action="stop"]')
}

const changeColor = ()=>{
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  refs.body.style.background = colors[randomIntegerFromInterval(0,colors.length-1)];
}

let changeThemeColor = false;
function startChangeColor() {
  changeThemeColor = setInterval(changeColor, 1000);
};

function stopChangeColor () {
  clearInterval(changeThemeColor);
};

refs.start.addEventListener('click', () => {
  refs.start.disabled = true;
  startChangeColor();
});

refs.stop.addEventListener('click', () => {
  refs.start.disabled = false;
  stopChangeColor();
})