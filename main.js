let size=16;
let randomNumbers=new Array(size);
let colors=["navy","aqua","orange","purple","green","yellow","red","darkslategray"];
let count=0;
let selectButton=new Array(0);
let timer=60;
let ans=0;

window.onload= function () {
	fillColor();
	reduceTimer();
}

function reduceTimer(){
	document.getElementById('timer').innerHTML=timer;
	timer--;
	if(timer<0) {
		$('#myModal').modal('show');
		document.getElementById('text').innerHTML='You Loss The Game!';
		return;
	};
	setTimeout(reduceTimer,1000);
}

function btnClick(values){
	if(selectButton[0]!=values.id){
		$('#'+values.id).addClass('reverse'+values.id);
		$('#'+values.id).removeClass('start');
		selectButton.push(values.id);
		count++;

		if(count==2){
			var color1=($('#'+selectButton[0]).css('background-color'));
			var color2=($('#'+selectButton[1]).css('background-color'));
			if(color1===color2){
				document.getElementById(selectButton[0]).disabled =true;
				document.getElementById(selectButton[1]).disabled =true;
				selectButton=[];
				count=0;
				ans=ans+2;
				if(ans==size){
					$('#myModal').modal('show');
					document.getElementById('text').innerHTML='You Win The Game!';
					return;
				}
			}
			else{
				$(document).ready(function () {
					setTimeout( function(){
						$('#'+selectButton[0]).addClass("start");
						$('#'+selectButton[0]).removeClass("reverse"+selectButton[0]);
						$('#'+selectButton[1]).addClass("start");
						$('#'+selectButton[1]).removeClass("reverse"+selectButton[1]);
						selectButton=[];
						count=0;
					},500);
				});
			}
		}
	}
}

function fillColor(){
	var check=0;
	for(var i=0;i<size;i++){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.reverse'+(getRandom())+' {'+ 
		'height:5em;'+
		'width:5em;'+
		'border: solid 1px #d3cece;'+
		'border-radius:10px;'+
		'background-color: '+colors[check]+'; }';
		document.getElementsByTagName('head')[0].appendChild(style);

		if(i%2!=0){
			check++;
		}
	}
}

function getRandom(){
	var random = Math.floor(Math.random() * size)+1;
	if(randomNumbers.includes(random)){
		return getRandom();
	}
	else{
		randomNumbers.push(random);
		return random;
	}
}

function restart(){
	window.location.reload();
}