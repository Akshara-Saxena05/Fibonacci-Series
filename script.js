const num = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const fibonacci = n => {

  const num=parseInt(n);
  
  if (isNaN(n) || n<=0) {
    alert('Please input correct value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  
  let a=0;
  let b=1;
  let series=[a,b];
  for(let i=1;i<=n;i++){
    c=a+b;
    series.push(c);
    a=b;
    b=c;
  }
  let result=`This is fibonacci series of the given number:<br>${series.join(', ')}`

  const para = document.createElement('p');
  para.className = 'user-input';
  para.innerHTML = result;
  resultDiv.appendChild(para);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkBtn.addEventListener('click', () => {
  fibonacci(num.value);
  num.value = '';
});

checkBtn.addEventListener('keydown',(e)=>{
  if(e.key==='Enter'){
    fibonacci(num.value);
    num.value='';
  }
});