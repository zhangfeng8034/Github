var btn = document.getElementById('sousuo');
var p1 = document.getElementById('img1');
var p2 = document.getElementById('img2');
var p3 = document.getElementById('img3');
var p4 = document.getElementById('img4');
var p5 = document.getElementById('img5');
var p6 = document.getElementById('img6');
var p7 = document.getElementById('img7');
var p8 = document.getElementById('img8');
var p9 = document.getElementById('img9');
var p10 = document.getElementById('img10');
var p11 = document.getElementById('img11');
var p12 = document.getElementById('img12');
btn.onclick = function() {
	bg();
}

function bg() {
	var img=document.getElementsByClassName('img');
  	for(i=0;i<12;i++) {
    		img[i].style.background='white';
  	}
	var date = shuru.value;
	var x = date.substring(0, 4);
	var y = date.substring(5, 7);
	var z = date.substring(8, 10);
	var date_ = (x + '.' + y + '.' + z) || (x + ' ' + y + ' ' + z) || (x + ',' + y + ',' + z) || (x + '#' + y + '#' + z) || (x + '/' + y + '/' + z);
	if((y == 03 && z > 20 && z < 32) || (y == 04 && z > 0 && z < 20)) {
		p1.style.background = 'yellow';
	}
	if((y == 06 && z > 21 && z < 31) || (y == 07 && z > 0 && z < 23)) {
		p2.style.background = "yellow";
	}
	if((y == 09 && z > 22 && z < 31) || (y == 10 && z > 0 && z < 24)) {
		p3.style.background = "yellow";
	}
	if((y == 12 && z > 21 && z < 32) || (y == 01 && z > 0 && z < 20)) {
		p4.style.background = 'yellow';
	}
	if((y == 04 && z > 19 && z < 31) || (y == 05 && z > 0 && z < 21)) {
		p5.style.background = 'yellow';
	}
	if((y == 07 && z > 22 && z < 32) || (y == 08 && z > 0 && z < 23)) {
		p6.style.background = 'yellow';
	}
	if((y == 10 && z > 23 && z < 32) || (y == 11 && z > 0 && z < 23)) {
		p7.style.background = 'yellow';
	}
	if((y == 01 && z > 19 && z < 32) || (y == 02 && z > 0 && z < 19)) {
		p8.style.background = 'yellow';
	}
	if((y == 05 && z > 20 && z < 32) || (y == 06 && z > 0 && z < 22)) {
		p9.style.background = 'yellow';

	}
	if((y == 08 && z > 22 && z < 32) || (y == 09 && z > 0 && z < 23)) {
		p10.style.background = 'yellow';
	}
	if((y == 11 && z > 22 && z < 31) || (y == 12 && z > 0 && z < 22)) {
		p11.style.background = 'yellow';
	}
	if((y == 02 && z > 18 && z < 29) || (y == 03 && z > 0 && z < 21)) {
		p12.style.background = 'yellow';
	}

}