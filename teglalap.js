function teruletkerulet() {
    let a = document.getElementById("aside").value;
    a = Number(a);
    let b = document.getElementById("bside").value;
    b = Number(b);

    var T = a * b;
    var K = 2*(a+b);

    document.getElementById("ter").innerText=T;
    document.getElementById("ker").innerText=K;

}