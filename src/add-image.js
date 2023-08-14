import Kiwi from './kiwi.jpg';

export default function addImage() {
  const imgEl = document.createElement('img');
  imgEl.src = Kiwi;
  imgEl.alt = "Kiwi";
  imgEl.width = 300;
  const bodyEl = document.querySelector('body');
  bodyEl.appendChild(imgEl);
} 