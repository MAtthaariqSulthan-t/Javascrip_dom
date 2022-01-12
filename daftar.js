document.getElementById("nama").onkeyup=function(){
    let nama=document.getElementById("nama");
    nama.value=nama.value.toUpperCase();
}

document.getElementById("daftar").disabled=true;

let today=new Date();
let tahun=today.getFullYear();

document.getElementById("tala").onchange=function(){
    let input=document.getElementById("tala").value;
    let tel=new Date(input);

    year=tel.getFullYear;
    let umur=(tahun-year);

    document.getElementById("umrskar").innerHTML= umur+" tahun";{

    if(umur<=18){
        alert("umur harus 18 tahun ke atas");
    }
    else{
        document.getElementById("daftar").disabled=false;
    }
    }
}

document.getElementById("alamat").onchange=function(){
    let cekal=document.getElementById("alamat").value;
    let p=cekal.length;

    if(p<=30){
        document.getElementById("alaert").style.display="inline:block";
    }
    else{
        document.getElementById("alaert").style.display="none";
    }
}