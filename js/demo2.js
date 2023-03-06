// alert("Cảnh báo, nơi này cấm người dưới 18 tuổi?");
// var f = confirm("Bạn chắc chắn chưa?");
// console.log(f);

// var t = prompt("Vui lòng nhập số tuổi của bạn:");

// console.log(t);
// t = parseInt(t);
// console.log(t);
/**
 *  18 => 18
 *  18a => 18
 *  18a2 => 18
 *  a18 = > NaN : not a number  => isNaN()
 */
/**
 * Yêu cầu người dùng nhập tên và tuổi của mình
 * Nếu từ 18 tuổi trở lên thì thông báo: Chào mừng Nguyễn Văn An
 * Ngược lại thì thông báo: yêu cầu rời khỏi nơi này
 */
// var ten = prompt("Vui lòng nhập tên của bạn:")
// var tuoi = prompt("Vui lòng cho biết tuổi của bạn");
// if(tuoi >=18){
//     // alert("Chào mừng "+ten+" đã tham gia với chúng tôi");
//     alert(`Chào mừng ${ten} đã tham gia với chúng tôi`);
// }else{
//     alert("Bạn chưa đủ tuổi yêu cầu, vui lòng quay trở lại sau.");
// }

// setTimeout(function(){
//     var tuoi = prompt("Vui lòng cho biết tuổi của bạn");//abc
//     tuoi = parseInt(tuoi);// NaN
//     while(isNaN(tuoi)){// true
//         tuoi = prompt("Vui lòng cho biết tuổi của bạn");
//         tuoi = parseInt(tuoi);
//     }
//     alert("Chúc mừng bạn đã có câu trả lời đúng");
// },5000);

// 0->1 : 0.314159 * 100->31.4159 -> 31
/**
 * Viết chương trình con số may mắn (Lucky number)
 * Sinh ra ngẫu nhiên 1 số từ 0->99
 * Cho người chơi  nhập 1 số
 * Kiểm tra xem có trúng giải thưởng hay không
 * 
 */

var r = parseInt(Math.random()*100);

var slc = 5;
while(slc > 0){
    slc--;
    var t = prompt("Vui long nhap 1 so tu 0->99:");
    t = parseInt(t);
    if(t<0){
        t = NaN;
    }else if(t>99){
        t = NaN;
    }
    while(isNaN(t)){
        var t = prompt("Vui long nhap 1 so tu 0->99:");
        t = parseInt(t);
        if(t<0){
            t = NaN;
        }else if(t>99){
            t = NaN;
        }
    }

    if(t== r){
        alert("CHúc mừng bạn đã trúng giải thưởng!");
        slc = -1;
    }else{
        alert("Chúc bạn may mắn vào ngày mai");
    }
    
}
if(slc==0){
    alert("Rất tiếc, bạn đã hết lượt chơi");
}
// sinh ra 6 so ngau nhien tu 1->55
var x1=0,x2=0,x3=0,x4=0,x5=0,x6=0;
x1 = parseInt(Math.random()*54+1);
while(x2 == x1 || x2 == 0){
    x2 = parseInt(Math.random()*54+1);
}
while(x3 == x2 || x3 == x1 || x3 == 0){
    x3 = parseInt(Math.random()*54+1);
}

while(x4== x3 || x4 == x2 || x4 == x1 || x4 == 0){
    x4 = parseInt(Math.random()*54+1);
}
while(x5 == x4 || x5== x3 || 
    x5 == x2 || x5 == x1 || x5 == 0){
    x5 = parseInt(Math.random()*54+1);
}
while(x6 == x5 || x6 == x4 || x6== x3 || 
    x6 == x2 || x6 == x1 || x6 == 0){
    x6 = parseInt(Math.random()*54+1);
}

var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
while(a1 == 0 || a1>55 || a1<1 || isNaN(a1)){
    a1 = prompt("Chọn số thứ nhất:");
    a1 = parseInt(a1);
}

while(a2 == 0 || a2>55 || a2<1 || isNaN(a2) || a2 == a1){
    a2 = prompt("Chọn số thứ hai:");
    a2 = parseInt(a2);
}

while(a3 == 0 || a3>55 || a3<1 || isNaN(a3) 
    || a3 == a1 || a3 == a2){
    a3 = prompt("Chọn số thứ ba:");
    a3 = parseInt(a3);
}

while(a4 == 0 || a4>55 || a4<1 || isNaN(a4) 
    || a4 == a1 || a4 == a2 || a4 == a3){
    a4 = prompt("Chọn số thứ tư:");
    a4 = parseInt(a4);
}

while(a5 == 0 || a5>55 || a5<1 || isNaN(a5) 
    || a5 == a1 || a5 == a2 || a5 == a3 || a5 == a4){
    a5 = prompt("Chọn số thứ năm:");
    a5 = parseInt(a5);
}

while(a6 == 0 || a6>55 || a6<1 || isNaN(a6) 
    || a6 == a1 || a6 == a2 || a6 == a3 
    || a6 == a4 || a6 == a5){
    a6 = prompt("Chọn số thứ sau:");
    a6 = parseInt(a6);
}

var gt = 0;

if(a1 == x1 || a1 == x2 || a1 == x3 || a1 == x4 
    || a1 == x5 || a1 == x6){
        gt++;
    }
if(a2 == x1 || a2 == x2 || a2 == x3 || a2 == x4 
|| a2 == x5 || a2 == x6){
    gt++;
}
if(a3 == x1 || a3 == x2 || a3 == x3 || a3 == x4 
    || a3 == x5 || a3 == x6){
        gt++;
}
if(a4 == x1 || a4 == x2 || a4 == x3 || a4 == x4 
    || a4 == x5 || a4 == x6){
        gt++;
}
if(a5 == x1 || a5 == x2 || a5 == x3 || a5 == x4 
    || a5 == x5 || a5 == x6){
        gt++;
}
if(a1 == x1 || a6 == x2 || a6 == x3 || a6 == x4 
    || a6 == x5 || a6 == x6){
        gt++;
}

if(gt == 6){
    // jackpot
}else if(gt==5){
    // giai 5 so
}else if(gt == 4){
    // giai4 so
}else if(gt == 3){
    // giai 3 so
}else{
    // chuc may man lan sau
}
