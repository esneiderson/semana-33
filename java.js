 
	var teoria=function(){
		var n1=document.getElementById("c1");
		var n2=document.getElementById("c2");
		var n3=document.getElementById("c4");
	
		

		console.log("i know youre reading this");
		n3.className="c4";
		if(n3.className=="c4")
		{
			n3.className="c4a";
		}

		

		
	}

	var hide=function(){
		var n1=document.getElementById("c1");
		var n2=document.getElementById("c2");
		var n3=document.getElementById("c4");
		var n4=document.getElementById("c3");

		
		n3.className="c4a";
		if(n3.className=="c4a")
		{
			n3.className="c4";
		}
}

	var intentar=function(){
		var n1=document.getElementById("c5");
		var n2=document.getElementById("b1");
		var n3=document.getElementById("b2");
		var n4=document.getElementById("b3");
		var n5=document.getElementById("b4");
		

	
		n1.className="c5";
		if(n1.className=="c5")
		{
			n1.className="c5a";
		}

	
}

	var hide2=function(){
		var n1=document.getElementById("c5");
		var n2=document.getElementById("b1");
		var n3=document.getElementById("b2");
		var n4=document.getElementById("b3");
		var n5=document.getElementById("b4");
	
		n1.className="c5a";
		if(n1.className=="c5a")
		{
			n1.className="c5";
		}
}

var resultado=function(){
		var n2=document.getElementById("b1").value;
		var n3=document.getElementById("b2").value;
		var n4=document.getElementById("b3").value;
		console.log(n2);
		console.log(n3);
		console.log(n4);

			 suma = parseInt(n2) - parseInt(n3) + parseInt(n4);
  alert("La Operacion tiene como resultado: "+suma);

}
