
const container = document.querySelector('#container');

const paragraphContent = document.createElement('div');
paragraphContent.classList.add('paragraphContent');
paragraphContent.textContent = "<p> Hey I'm red! </p>";
paragraphContent.textContent.style.color = 'red';

container.appendChild(paragraphContent);