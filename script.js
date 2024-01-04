const button = document.getElementById('button');
const form = document.getElementById('form');
const message = document.getElementById('message');
const link = document.getElementById('link');

const secretNumber = Math.floor(Math.random() * 100);
let attemps = 10;

button.addEventListener('click', () => {
  const input = document.getElementById('input');
  if (input.value !== '') {

    if (input.value  < secretNumber) {
      message.innerHTML = `Le nombre est plus grand que ${input.value}`;
      message.style.color = "#999";
    }else if (input.value > secretNumber) {
      message.innerHTML = `Le nombre est plus petit que ${input.value}`;
      message.style.color = "#999";
    }

    if (attemps === 0) {
      message.innerHTML = `Vous avez perdu. Vous devieez trouver: ${secretNumber}`;
      message.style.color = 'red';
      form.style.display = 'none';
      link.style.display = 'flex';
    }
    attemps--;

    if (input.value == secretNumber) {
      message.innerHTML = `Bravo ! Vous avez trouvé le nombre: ${secretNumber}`;
      message.style.color = 'green';
      form.style.display = 'none';
      link.style.display = 'flex';
    }
  } else {
    message.innerHTML = "Le champs est vide !"
    message.style.color = "red";
  }
});