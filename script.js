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
        } else if (operator === "-") {
            hasil = Number(angkaPertama) - Number(angkaKedua);
        } else if (operator === "×") {
            hasil = Number(angkaPertama) * Number(angkaKedua);
        } else if (operator === "÷") {
            hasil = Number(angkaPertama) / Number(angkaKedua);
        }

        if (Number.isNaN(hasil) || hasil === Infinity) {
            $("#display").text("tidak bisa dibagi 0");
        } else {
            $("#display").text(hasil);
        }
        
        angkaPertama = hasil.toString();
        angkaKedua = "";
        operator = "";
    });

    $(".ac").click(function () {
        angkaPertama = "";
        angkaKedua = "";
        operator = "";
        hasil = "";

        $("#display").text("0");
    });

    $(".ce").click(function () {
        if (operator === "") {
            angkaPertama = "";
        } else {
            angkaKedua = "";
        }

        $("#display").text("0");
    });
});
