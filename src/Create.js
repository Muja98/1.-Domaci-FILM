import {VratiFilm,VratiGlumca} from "./Get.js";

export function CrtajSelect(tajo, nizFilmova)
{
    const sel = document.createElement("select");
    tajo.appendChild(sel);

    let opt = document.createElement("option");
    opt.value = 0;
    opt.text = "Izaberi...";
    sel.options.add(opt);

    nizFilmova.forEach(element => {
        opt = document.createElement("option");
        opt.value = element.id;
        opt.text = element.naziv;
        sel.options.add(opt);
    });

    

    sel.onchange =(ev)=>{
        if(ev.target.value != 0)
        {
            // const film = VratiFilm(ev.target.value);
        
            // Promise.all([film]).then((mess)=>{
            //     Selektovano(mess[0],tajo)
            // })

            VratiFilm(ev.target.value).then(podaci=>Selektovano(podaci,tajo))
        }
    }
}



function Selektovano(film,tajo)
{
    let niz = document.querySelectorAll("p");
    niz.forEach(element => {
        element.remove();
    });

    let ulNiz = document.querySelectorAll("ul");
    ulNiz.forEach(el=>{
        el.remove();
    })

    const ul = document.createElement("ul");
    tajo.appendChild(ul);


    const p = document.createElement("p");
    p.innerHTML = "";
    p.innerText = film.opis;
    tajo.appendChild(p);

    VratiGlumca(film.id).then(gl=> gl.forEach(el => Glumci(el,ul)))
}

function Glumci(Glumci,ul)
{
    const li = document.createElement("li");
    li.innerText= Glumci.ime;
    ul.appendChild(li);
}