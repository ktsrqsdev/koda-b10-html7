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
            hasil = "";
        } else {
            let hasilFormat = Number(hasil.toFixed(8));

            $("#display").text(hasilFormat);
            angkaPertama = hasilFormat.toString();
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

    $(".del").click(function () {
        if (operator === "") {
            angkaPertama = angkaPertama.slice(0, -1);
            $("#display").text(angkaPertama || "0");
        } else {
            angkaKedua = angkaKedua.slice(0, -1);
            $("#display").text(angkaKedua || "0");
        }
    });

    $(".percent").click(function () {
        if (operator === "") {
            angkaPertama = (Number(angkaPertama) / 100).toString();
            $("#display").text(angkaPertama);
        } else {
            angkaKedua = (Number(angkaKedua) / 100).toString();
            $("#display").text(angkaKedua);
        }
    });

    $(".sign").click(function () {
        if (operator === "") {
            angkaPertama = (Number(angkaPertama) * -1).toString();
            $("#display").text(angkaPertama);
        } else {
            angkaKedua = (Number(angkaKedua) * -1).toString();
            $("#display").text(angkaKedua);
        }
    });

    $(".mplus").click(function () {
        memory += Number($("#display").text());
    });

    $(".mminus").click(function () {
        memory -= Number($("#display").text());
    });

    $(".mr").click(function () {
        $("#display").text(memory);
        angkaPertama = memory.toString();
    });
});
