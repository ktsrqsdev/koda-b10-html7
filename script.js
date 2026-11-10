$(document).ready(function () {
    let angkaPertama = "";
    let angkaKedua = "";
    let operator = "";
    let hasil = "";
    let memory = 0;

    $(".num").click(function () {
        let angka = $(this).text();
        let display = $("#display");

        if (operator === "") {
            angkaPertama += angka;
            display.text(angkaPertama);
        } else {
            angkaKedua += angka;
            display.text(angkaKedua);
        }
    });

    $(".op").click(function () {
        operator = $(this).text();
    });

    $(".equals").click(function () {
        if (operator === "+") {
            hasil = Number(angkaPertama) + Number(angkaKedua);
        }

        $("#display").text(hasil);

        angkaPertama = hasil.toString();
        angkaKedua = "";
        operator= "";
    });
});
