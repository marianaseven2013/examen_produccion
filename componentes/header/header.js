function cargarMenu(){
    let hheader = document.createElement('div');
    hheader.className = "headerPP";
    hheader.innerText = "";

    let ttotal = document.createElement('div');
    ttotal.innerText = "Total X = ";
    ttotal.className = "equistt";
    hheader.appendChild(ttotal);

    let ttottal = document.createElement('div');
    ttottal.innerText = "Total / =  0";
    ttottal.className = "diatext";
    hheader.appendChild(ttottal);

    return hheader;
}

export {cargarMenu}