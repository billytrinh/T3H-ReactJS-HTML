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
