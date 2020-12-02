//------------------Basic Calculator-----------------//
var input = document.getElementById('screen1').value;
var count=0
function power()
	{
			
		if (count==0)
		{	
        document.getElementById('featuresicon').style.color='#00ffff';	document.getElementById('screen1').style.display="block";
			clearall();
			count++;
		}
		else if (count==1)
		{	

			if(y.length!=0)
			{
				alert("Complete your calculation");
			}
			else
			{
			document.getElementById('featuresicon').style.color='';
			document.getElementById('screen1').style.display="";
			clearall();
			}
			count--;
		}

	}
	var y='';
    var z=0;
    var data;
	var show;
	var	previous="0";
	var cal="+";
	var result;
	var hold;
	var k=0;
	var reset=0;

function val(data)
	{
	// document.getElementById('screen1').value="";
	if(reset==1){
		clearall();
		reset=0;
	}
	y+=data;
	document.getElementById('screen1').value+=data;
	show = previous+cal+y;
	// document.getElementById('screen1').value=show;

}
	
function opr(o)
	{   reset=0;
		switch (cal){
			case "+":
			result=parseFloat(previous)+parseFloat(y);
			hold=result+o;
			document.getElementById("screen1").value=hold;
			break;
			case "-":
			result=parseFloat(previous)-parseFloat(y);
			hold=result+o;
			document.getElementById("screen1").value=hold;
			break;
			case "*":
			result=parseFloat(previous)*parseFloat(y);
			hold=result+o;
			document.getElementById("screen1").value=hold;
			break;
			case "/":
			result=parseFloat(previous)/parseFloat(y);
			hold=result+o;
			document.getElementById("screen1").value=hold;
			break;
		}
		previous=result;
		cal = o;
		y="";
		
	}
// function backsp()
// 	{
// 		document.getElementById('screen1').value=y.substring(0,y.length-1);
		
// 	}
function clearall()
	{
		document.getElementById('screen1').value="";
		reset=0;
		hold="";
		previous="0";
		cal="+";
		y="";
	}
function enter()
	{
			switch (cal){
			case "+":
			result=parseFloat(previous)+parseFloat(y);
			hold=result;
			document.getElementById("screen1").value=hold;
			break;
			case "-":
			result=parseFloat(previous)-parseFloat(y);
			hold=result;
			document.getElementById("screen1").value=hold;
			break;
			case "*":
			result=parseFloat(previous)*parseFloat(y);
			hold=result;
			document.getElementById("screen1").value=hold;
			break;
			case "/":
			result=parseFloat(previous)/parseFloat(y);
			hold=result;
			document.getElementById("screen1").value=hold;
			break;
		}
		reset=1;
		
	}

//-----------------Scientific Calculator---------

//-----------------Heath calculator--------------

function noAge()
{
	document.getElementById('age').value="";
}

function noHeight()
{
	document.getElementById('height').value="";
}

function noWeight()
{
	document.getElementById('weight').value="";
}

function noName()
{
	document.getElementById('nami').value="";
}
function startcal()
{
	var bmiResult;
	var bfResult;
	var result3;
	var result4;
	var gen=document.getElementById('gender').value;
	var w=document.getElementById('weight').value;
	var h=document.getElementById('height').value;
	var a=document.getElementById('age').value;
	var age=document.getElementById('age').value;
	var name=document.getElementById('nami').value
	var activity=document.getElementById('activity').value;


	if(a=="" || w=="" || nami=="" || age=="")
	{
		document.getElementById('bmi').innerText="!data";
		document.getElementById('bmi').style.color="#ff3300";
		document.getElementById('bf').innerText="!data";
		document.getElementById('bf').style.color="#ff3300";
		document.getElementById('cr').innerText="!data";
		document.getElementById('cr').style.color="#ff3300";		
		document.getElementById('lh').innerText="!data";
		document.getElementById('lh').style.color="#ff3300";		
		document.getElementById('st').innerText="!data";
		document.getElementById('st').style.color="#ff3300";
	}
//---------------------BMI---------------------
	bmiResult=parseFloat(parseFloat(w)/((parseFloat(h)/100)*(parseFloat(h)/100))).toFixed(2);
	document.getElementById('bmi').innerText=bmiResult;
	var bmiout=document.getElementById('bmi').innerText;
//--------------------BF%----------------------
	if (gen=="male")
	{
	lbm=parseFloat(parseFloat(0.41*parseFloat(w))+parseFloat(0.27*parseFloat(h))-19.2);
	bfw=parseFloat(parseFloat(w)-lbm);
	bfResult=parseFloat((bfw*100)/parseFloat(w)).toFixed(2);
	document.getElementById('bf').innerText=bfResult;
	}
	else if (gen=="female")
	{
	lbm=parseFloat(parseFloat(0.25*parseFloat(w))+parseFloat(0.47*parseFloat(h))-48.3);
	bfw=parseFloat(parseFloat(w)-lbm);
	bfResult=parseFloat((bfw*100)/parseFloat(w)).toFixed(2);
	document.getElementById('bf').innerText=bfResult;
	}
	else if (gen=="other")
	{
	lbm=parseFloat(parseFloat(0.41*parseFloat(w))+parseFloat(0.27*parseFloat(h))-19.2);
	bfw=parseFloat(parseFloat(w)-lbm);
	bfResult=parseFloat((bfw*100)/parseFloat(w)).toFixed(2);
	document.getElementById('bf').innerText=bfResult;
	}
//-----------------Calories--------------------
	if(gen=="male" && bfResult > 17 && bfResult < 25)
	{
	document.getElementById('cr').innerText="Balanced";
	document.getElementById('cr').style.color="#00cc00";
	}
	else if(gen=="male" && bfResult <18)
	{
	document.getElementById('cr').innerText="Needed";
	document.getElementById('cr').style.color="#ff0000";	
	}
	else if(gen=="male" && bfResult >24)
	{
	document.getElementById('cr').innerText="Reduce it";
	document.getElementById('cr').style.color="#ff0000";	
	}
	if(gen=="female"  && bfResult > 24 && bfResult < 32)
	{
	document.getElementById('cr').innerText="Balanced";
	document.getElementById('cr').style.color="#00cc00";
	}
	else if(gen=="female" && bfResult <25)
	{
	document.getElementById('cr').innerText="Needed";
	document.getElementById('cr').style.color="#ff0000";	
	}
	else if(gen=="female" && bfResult >31)
	{
	document.getElementById('cr').innerText="Reduce it";
	document.getElementById('cr').style.color="#ff0000";	
	}
	if(gen=="other" && bfResult > 17 && bfResult < 25)
	{
	document.getElementById('cr').innerText="Balanced";
	document.getElementById('cr').style.color="#00cc00";
	}
	else if(gen=="other" && bfResult <18)
	{
	document.getElementById('cr').innerText="Needed";
	document.getElementById('cr').style.color="#ff0000";	
	}
	else if(gen=="other" && bfResult >24)
	{
	document.getElementById('cr').innerText="Reduce it";
	document.getElementById('cr').style.color="#ff0000";	
	}
//-------------------------Good health Weight---
//---------------male------------------------------
	
	if(gen=="male" && h>="137" && h<="140")
	{
		document.getElementById('lh').innerText="32KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="141" && h<="145")
	{
		document.getElementById('lh').innerText="35KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="146" && h<="150")
	{
		document.getElementById('lh').innerText="42KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="151" && h<="155")
	{
		document.getElementById('lh').innerText="52KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="156" && h<="160")
	{
		document.getElementById('lh').innerText="58KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="161" && h<="165")
	{
		document.getElementById('lh').innerText="64KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="166" && h<="170")
	{
		document.getElementById('lh').innerText="70KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="171" && h<="175")
	{
		document.getElementById('lh').innerText="71KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="176" && h<="178")
	{
		document.getElementById('lh').innerText="78KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="male" && h>="179" && h<="183")
	{
		document.getElementById('lh').innerText="85KG";
		document.getElementById('lh').style.color="#00cc00";
	}
//---------------------Female--------------------
	if(gen=="female" && h>="137" && h<="140")
	{
		document.getElementById('lh').innerText="32KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="141" && h<="145")
	{
		document.getElementById('lh').innerText="39KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="146" && h<="150")
	{
		document.getElementById('lh').innerText="44KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="151" && h<="155")
	{
		document.getElementById('lh').innerText="49KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="156" && h<="160")
	{
		document.getElementById('lh').innerText="54KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="161" && h<="165")
	{
		document.getElementById('lh').innerText="59KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="166" && h<="170")
	{
		document.getElementById('lh').innerText="64KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="171" && h<="175")
	{
		document.getElementById('lh').innerText="69KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="176" && h<="178")
	{
		document.getElementById('lh').innerText="72KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="female" && h>="179" && h<="183")
	{
		document.getElementById('lh').innerText="77KG";
		document.getElementById('lh').style.color="#00cc00";
	}
//---------------other------------------------------
	
	if(gen=="other" && h>="137" && h<="140")
	{
		document.getElementById('lh').innerText="32KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="141" && h<="145")
	{
		document.getElementById('lh').innerText="35KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="146" && h<="150")
	{
		document.getElementById('lh').innerText="42KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="151" && h<="155")
	{
		document.getElementById('lh').innerText="52KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="156" && h<="160")
	{
		document.getElementById('lh').innerText="58KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="161" && h<="165")
	{
		document.getElementById('lh').innerText="64KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="166" && h<="170")
	{
		document.getElementById('lh').innerText="70KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="171" && h<="175")
	{
		document.getElementById('lh').innerText="71KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="176" && h<="178")
	{
		document.getElementById('lh').innerText="78KG";
		document.getElementById('lh').style.color="#00cc00";
	}
	else if(gen=="other" && h>="179" && h<="183")
	{
		document.getElementById('lh').innerText="85KG";
document.getElementById('lh').style.color="#00cc00";
	}
//-----------------Overall status-------------------
//-----------------Male-----------------------
	if( bmiout < 18.5)
	{
		document.getElementById('st').innerText="Improve";
		document.getElementById('st').style.color="#ff0000";

	}
	else if(bmiout >= 18.5 && bmiout<=24.9)
	{
		document.getElementById('st').innerText="Great!";
		document.getElementById('st').style.color="#00cc00";

	}
	else if( bmiout >= 25 && bmiout<=29.9)
	{
		document.getElementById('st').innerText="Improve";
		document.getElementById('st').style.color="#ff6600";

	}
	else if( bmiout >= 30)
	{
		document.getElementById('st').innerText="Risky";
		document.getElementById('st').style.color="#ff0000";

	}
if (age>="2" && age<="21")
	{
		document.getElementById('js').innerText= name[0].toUpperCase() + name.substring(1) +  " Since you are " + age + " years than remain active, and you are " + activity + " active.";
	}
else if (age>="22" && age<="30")
	{
		document.getElementById('js').innerText= name[0].toUpperCase() + name.substring(1) +  " Since you are " + age + " years than remain strongly active, and you are " + activity + " active.";
	}
else if (age>="31" && age<="50")
	{
		document.getElementById('js').innerText= name[0].toUpperCase() + name.substring(1) +  " Since you are " + age + " years than remain moderately active, and you are " + activity + " active.";
	}
else if (age>="51")
	{
		document.getElementById('js').innerText= name[0].toUpperCase() + name.substring(1) + " Since you are " + age + " years than try to remain  active, and you are " + activity + " active.";
	}
}

function clearcal()
{
	document.getElementById('age').value="";
	document.getElementById('height').value="";
	document.getElementById('weight').value="";
	document.getElementById('nami').value="";
	document.getElementById('bmi').innerText="";
	document.getElementById('bf').innerText="";
	document.getElementById('cr').innerText="";	
	document.getElementById('lh').innerText="";		
	document.getElementById('st').innerText="";
	document.getElementById('js').innerText="";

}
sharecal()
id-bmi,bf,cr,lh,st,age,activity,gender,height,weight,waist,startit,clearit,shareit