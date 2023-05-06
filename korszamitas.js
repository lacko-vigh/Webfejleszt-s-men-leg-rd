function korszamitas() {
    let r = document.getElementById("korsugar").value;
    r = Number(r);

    var K = 2*r*Math.PI;
    var T = r*r*Math.PI;

    document.getElementById("ter").innerText=T;
    document.getElementById("ker").innerText=K;

}
