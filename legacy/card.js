const container = document.querySelector('.card-container');
container.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const rotateX = (-2/29) * y + 10;
  const rotateY = (1 / 10) * x - 10;
  container.style = `transform: perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseout', () => {
  container.style = `rotateX(0deg) rotateY(0deg)`;
});
