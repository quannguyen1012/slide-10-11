function tinhLai() {
    let tienBanDau = parseInt(document.getElementById('tien').value);
    let thangVay = parseInt(document.getElementById('thang').value);
    let lai = document.getElementById('lai').value;
    console.log(lai)
    let sum = tienBanDau;

    for(let i=1; i<=thangVay; i++){
        let tienLai = sum*Number(lai)/100;
        sum += tienLai;
        document.write("tháng: " + i + " " + "tiền lãi: " + sum + "<br>");
    }

}