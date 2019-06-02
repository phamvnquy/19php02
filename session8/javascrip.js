document.write('Bài 1: ');

function bai1() {
	var	binh = 27;
	var minh =27/3;
	var chuyen= 0;
	while (minh != binh/2)
	{
		chuyen=chuyen+1;
		binh= binh-1;
		minh=minh+1;
	}
	document.write('Bình cần chuyển cho Minh: '+chuyen+' quyển  sách');
}
bai1();
//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
document.write('<br>');
document.write('Bài 2: ');
function bai2() {
	var tien = 3000;
	var gia = 200;
	var dem  = 0;
	var keo  = 0;
	for (var i = tien ; i >= gia; i=i-200) {
		dem++;
	}
	keo=dem+(dem/2);
	document.write('Số kẹo mua được là: ' + Math.floor(keo));
}
bai2();
//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
document.write('<br>');
document.write('Bài 3: ');
function bai3() {
	var usa = 0;
	var euro = 0;
	var keo = 0;
	while(keo<50) 
	{
		usa=usa+5;
		keo++;
		euro=euro+3;
		while(euro>1)
		{
			keo++;
			euro=euro-2;
			usa=usa-3;
		}
	}
	document.write('Số tiền USA phải bỏ ra:'+usa+' USA');
}
bai3();
//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
document.write('<br>');
document.write('Bài 4: ');
function bai4() 
{
for(var blue  = 50; blue > 0 ;blue--)
  {
    for (var red = 50; red>0 ;red--)
      {
        if((blue + red == 50) && (2/5*blue + 3/4*red == 27) )
          {
            document.writeln('Bi xanh: ' + blue+' ------ ');
            document.writeln('Bi đỏ: ' + red );
          }  
      }
  }

}
bai4();
//-------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------//
document.write('<br>');
document.write('Bài 5: ');
function bai5() 
{
	var tong = 120;
	var red = tong/5;
	var blue = (30*120)/100;
	document.write('Câu A: Số bi đỏ:'+red+' ------ số bi xanh: '+blue);
	for (var white = 60; white >= 0; white--)
	{
		for (var yellow = 60; yellow >= 0; yellow--) 
		{
			if( (white / yellow == 3/7 ) && white + yellow == (tong-(red + blue)))
			{
				document.write(' -------- Câu B: Số bi trắng:'+white+' ------ số bi vàng: '+yellow);
			}
		}
	}
	
}
bai5();