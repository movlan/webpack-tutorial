import Kiwi from './kiwi.jpg';
import altText from './alt-text.txt'

export default function addImage() {
  const imgEl = document.createElement('img');
  imgEl.src = Kiwi;
  imgEl.alt = altText;
  imgEl.width = 300;
  const bodyEl = document.querySelector('body');
  bodyEl.appendChild(imgEl);
} 