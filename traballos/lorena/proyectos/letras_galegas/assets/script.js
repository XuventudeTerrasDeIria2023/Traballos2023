document.getElementById('button').onclick = () => {
  console.log('>');
  const left = document.querySelector('.left');
  const center = document.querySelector('.center');
  const right = document.querySelector('.right');
  const hidden1 = document.querySelector('.hidden1');
  const hidden2 = document.querySelector('.hidden2');
  
  left.classList.remove('left');
  left.classList.add('center');
  
  center.classList.remove('center');
  center.classList.add('right');
  
  right.classList.remove('right');
  right.classList.add('hidden2');
  
  hidden2.classList.remove('hidden2');
  hidden2.classList.add('hidden1');
  
  hidden1.classList.remove('hidden1');
  hidden1.classList.add('left');
  hidden1.classList.add('hidden-to-left');
}