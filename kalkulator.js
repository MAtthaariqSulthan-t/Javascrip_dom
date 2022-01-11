function hitung() {
    let nilai1 = document.getElementById("nilai1").value;
    let nilai2 = document.getElementById("nilai2").value;
    let action = document.getElementById("action").value;
    let hasil =0;
        
        if (action == "+") {
            hasil = Number(nilai1) + Number(nilai2);
            cleartext();
        }
        else if (action == "-") {
            hasil = nilai1 - nilai2;
            cleartext();
        }
        else if (action == "/") {
            hasil = nilai1 / nilai2;
            cleartext();
        }
        else if (action == "*") {
            hasil = nilai1 * nilai2;
            cleartext();
        }
        pesan("hasilkalkulator","hasil perhitungan "+ nilai1 + action + nilai2 +" = "+ Math.ceil(hasil) );
            cleartext();
    }
    
    //1.ketika klik button proses ,sebelum di hitung ,validasi bahwa form nilai 1 dan nilai 2 sudah diisi
    //2.buat fungsi membersihkan form
    //jadi ketika button di klik , hasil di tampilkan,
    //maka form nilai1, nilai 2 kosong/clear.
    
    function cleartext(){
        document.getElementById("nilai1").value = "";
        document.getElementById("nilai2").value = "";
    }
    
    