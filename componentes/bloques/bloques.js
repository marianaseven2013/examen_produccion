function cargarBloques(){

    let contt = document.createElement('div');
    contt.className = "bloquesc";

    //let ppct = document.createElement('div');
    //ppct.className = "bloquesc";
    //contt.appendChild(ppct);

    let blo1 = document.createElement('div');
    blo1.className = "bloque1";
    let x1 = document.createElement('button');
    x1.innerText = "X";
    x1.className = "xx1"
    let x2 = document.createElement('button');
    x2.innerText = "/";
    x2.className = "xx2"
    blo1.appendChild(x1);
    blo1.appendChild(x2);
    contt.appendChild(blo1);

    let blo2 = document.createElement('div');
    blo2.className = "bloque2";
    let x3 = document.createElement('button');
    x3.innerText = "X";
    x3.className = "xx3"
    let x4 = document.createElement('button');
    x4.innerText = "/";
    x4.className = "xx4"
    blo2.appendChild(x3);
    blo2.appendChild(x4);
    contt.appendChild(blo2);

    let blo3 = document.createElement('div');
    blo3.className = "bloque3";
    let x5 = document.createElement('button');
    x5.innerText = "X";
    x5.className = "xx5"
    let x6 = document.createElement('button');
    x6.innerText = "/";
    x6.className = "xx6"
    blo3.appendChild(x5);
    blo3.appendChild(x6);
    contt.appendChild(blo3);

    let blo4 = document.createElement('div');
    blo4.className = "bloque4";
    let x7 = document.createElement('button');
    x7.innerText = "X";
    x7.className = "xx7"
    let x8 = document.createElement('button');
    x8.innerText = "/";
    x8.className = "xx8"
    blo4.appendChild(x7);
    blo4.appendChild(x8);
    contt.appendChild(blo4);

    let blo5 = document.createElement('div');
    blo5.className = "bloque5";
    let x9 = document.createElement('button');
    x9.innerText = "X";
    x9.className = "xx9"
    let x10 = document.createElement('button');
    x10.innerText = "/";
    x10.className = "xx10"
    blo5.appendChild(x9);
    blo5.appendChild(x10);
    contt.appendChild(blo5);

    let blo6 = document.createElement('div');
    blo6.className = "bloque6";
    let x11 = document.createElement('button');
    x11.innerText = "X";
    x11.className = "xx11"
    let x12 = document.createElement('button');
    x12.innerText = "/";
    x12.className = "xx12"
    blo6.appendChild(x11);
    blo6.appendChild(x12);
    contt.appendChild(blo6);

    let blo7 = document.createElement('div');
    blo7.className = "bloque7";
    contt.appendChild(blo7);

    let blo8 = document.createElement('div');
    blo8.className = "bloque8";
    contt.appendChild(blo8);

    let blo9 = document.createElement('div');
    blo9.className = "bloque9";
    contt.appendChild(blo9);

    let blo10 = document.createElement('div');
    blo10.className = "bloque10";
    contt.appendChild(blo10);

    let blo11 = document.createElement('div');
    blo11.className = "bloque11";
    contt.appendChild(blo11);

    let blo12 = document.createElement('div');
    blo12.className = "bloque12";
    contt.appendChild(blo12);

    return contt;
}

export {cargarBloques}