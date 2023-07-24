function add()
{

  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;  document.getElementById("answer").value = sum;
}
add()
function Subtraction()
{

  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne - numTwo;

  document.getElementById("answer").value = sum;
}
function Multiply()
{

  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne * numTwo;

  document.getElementById("answer").value = sum;
}
function Division()
{

  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne % numTwo;

  document.getElementById("answer").value = sum;
}
function Clear(){
  document.getElementById('first').value = " ";
  document.getElementById('second').value = " ";
  document.getElementById('answer').value = 0 ;
}