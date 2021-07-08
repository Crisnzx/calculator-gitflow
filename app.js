Calculator = {

   calculate: (num1, num2, operation) => {


      if(operation === '+') {
         return Calculator.sum(num1, num2);
      } else if(operation === '/') {
         return Calculator.div(num1, num2);
      }

   },

   sum: (num1, num2) => {
      return num1+num2;
   },

   sub: () => {

   },

   multi: () => {

   },

   div: (num1, num2) => {
      return (num1 / num2);
   }
}

let operation = '+';

document.querySelector('#operation').addEventListener('change', changeOperation);
document.querySelector('form').addEventListener('submit', runApp);



function changeOperation(e) {
   operation = e.target.value;
}

function runApp(e) {
   e.preventDefault();
   let result;
   let num1 = Number(document.querySelector('#num1').value);
   let num2 = Number(document.querySelector('#num2').value);

   result = Calculator.calculate(num1, num2, operation);


   document.querySelector('#result').textContent = result;
   
   document.querySelector('#num1').value = '';
   document.querySelector('#num2').value = '';
}


