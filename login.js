function openpage(page) {
    document.getElementById("kontenview").innerHTML = '<object type="text/html" data="' + page + '"  width="1000" height="1000"></object>';
  }

if (document.getElementById("judul")) {
    document.getElementById("judul").innerHTML = "Form Login"; 
    document.getElementsByName("ussername")[0].value = "";
    }
    const username = "admin";
    const password = "123";
    
    function ceklogin(){    
    let userlogin = document.getElementById("ussername").value;
    let passlogin = document.getElementById("password").value;
        
    if (userlogin == "" || userlogin == null){
            // alert ("user wajib diisi");
            // document.getElementById("alert").innerHTML="user wajib diisi";
            // document.getElementById("alert").style.display ="inline";
            pesan("alert","user wajib diisi");
        }
        else if(passlogin == "" || passlogin == null){
            // alert ("password wajib diisi");
            // document.write("alert").innerHTML="password wajib diisi";
            // document.getElementById("alert").style.display ="inline";
            pesan("alert","password harap diisi")
        }
        else {
            if (userlogin == username && passlogin == password){
                alert("login berhasil");
                window.location.href = "index.html";
            }
            else {
                alert("usser atau password salah");
            }
        }
    }
    function pesan(id,text){
        document.getElementById(id).innerHTML= text;
        document.getElementById(id).style.display ="inline";
    }
    
    function hapushasil(){
        document.getElementById("hasilkalkulator").style.display ="none";
    }
    
    // document.getElementById("loginpage").onload=function(){
    //     alert("Selamat datang");
    // };
    
    function welcome(){
        alert("Selamat Datang, Login Dulu");
    };
    
    document.getElementById("ussername").onkeyup=function(){
        let uss=document.getElementById("ussername");
        uss.value=uss.value.toLowerCase();
    }
    