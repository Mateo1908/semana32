function operacion ()
{
	var num1=Number(document.getElementById('n1').value);
	var num2=Number(document.getElementById('n2').value);
	var num3=Number(document.getElementById('n3').value);
	var total=num1+num2-num3;
	document.getElementById('total').value=total;
}