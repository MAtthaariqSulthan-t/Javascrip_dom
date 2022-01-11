// function result() {
// let tima = document.getElementById("tima").value;
// let timb = document.getElementById("timb").value;
// let s = document.getElementById("s").value;
// let h = 0;
// function tm()
//     for(h=0;h<150;h++){
//         }
//         if(s==0){
//             pesan("hper","Pertandingan Baru Dimulai");
//         }else if(s==15){
//             pesan("hper","Pertandingan Telah Berjalan 15 Menit");
//         }else if(s==30){
//             pesan("hper","Pertandingan Babak Pertama");
//         }else if(s==45){
//             pesan("hper","Pertandingan Telah Berjalan 45 Menit");
//         }else if(s==60){
//             pesan("hper","Pertandingan Telah Berjalan 60 Menit");
//         }else if(s==75){    
//             pesan("hper","Pertandingan Babak Kedua");
//         }else if(s==90||s==105||s==120){
//             pesan("hper","Perpanjangan Waktu 2x15 Menit")
//         }else if(s==135||s==150){
//             if(tima==timb){
//             pesan("hper","Adu Mekanik")
//             }
//             else if(tima>timb){
//             pesan("hper","Team A Menang")
//             }
//             else if(tima<timb){
//             pesan("s","Team B Menang")
//             }
//         }
// }


// function result() {
// let tima = document.getElementById("tima").value;
// let timb = document.getElementById("timb").value;
// let s = document.getElementById("s").value;
let h = 0;
// function tm()
    for(h=0;h<150;h=h+15){
            document.getElementById("waktu").innerHTML += "<option value = '"+h+"'>"+h+"Menit</option>"
        }

        function ing() {
            let tima = document.getElementById("tima").value;
            let timb = document.getElementById("timb").value;
            let waktu = document.getElementById("waktu").value;

        function haa() {
            document.getElementById("hper").innerHTML ="<h3>score</h3>";
            document.getElementById("hper").innerHTML +="<h1>"+tima+"-"+timb+"</h1>";
        }
        if(waktu==0){
            haa();
                document.getElementById("hper").innerHTML+="Babak Pertama dimulai"
        }else if(waktu==15){
            haa();
                document.getElementById("hper").innerHTML+="Petandingan Berjalan 15 menit"
        }else if(waktu==30){
            haa();
            document.getElementById("hper").innerHTML+="Pertandingan Babak Pertama"
        }else if(waktu==45){
            haa();
                document.getElementById("hper").innerHTML+="Pertandingan Berjalan 45 menit"
        }else if(waktu==60){
            haa();
                document.getElementById("hper").innerHTML+="Pertandingan Berjalan 60 menit"
        }else if(waktu==75){    
            haa();
            document.getElementById("hper").innerHTML+="Pertandingan Babak Kedua"
        }else if(waktu==90||waktu==105||waktu==120){
            haa();
                document.getElementById("hper").innerHTML+="perpanjangan waktu 2x15 menit"
        }else if(waktu==135||waktu==150){
            haa();
                document.getElementById("hper").innerHTML+="Adu Mekaniks"
            // if(tima==timb){
            //     haa();
            //     document.getElementById("hper").innerHTML="Adu Pinalti"
            // }
            // else if(tima>timb){
            //     haa();
            //     document.getElementById("hper").innerHTML="Team A menang"
            // }
            // else if(tima<timb){
            //     haa();
            //     document.getElementById("hper").innerHTML="Team B menang"
        }
    }  
document.getElementById("judulbola").onmouseover=function(){
    document.getElementById("judulbola").style.backgroundColor="yellow";
};
document.getElementById("judulbola").onmouseout=function(){
    document.getElementById("judulbola").style.backgroundColor="grey";
};
document.getElementById("tima").onmouseup=function(){
    document.getElementById("tima").style.color="yellow";
};
document.getElementById("timb").onmousedown=function(){
    document.getElementById("timb").style.color="green";
};


