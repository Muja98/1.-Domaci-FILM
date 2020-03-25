const URL_FILMA = "http://localhost:3000/film";
const URL_GLUMCA = "http://localhost:3000/glumac";

async function VratiNaslov2()
{
    return await(await fetch(URL_FILMA)).json().then(data=>data.map((el)=>{return {id: el.id, naziv: el.naziv}}))
}
export function VratiNaslov(){
    return new Promise((resolve,reject)=>{
        resolve(VratiNaslov2())
    })
}

async function VratiFilm2(id)
{
    return await(await fetch(`${URL_FILMA}/${id}`)).json();
}
export function VratiFilm(id)
{
    return new Promise((resolve,reject)=>{
        resolve(VratiFilm2(id))
    })
}

async function VratiGlumca2(id)
{
    return await(await fetch(`${URL_GLUMCA}/${id}`)).json();
}
async function VratiGlumceIzFilma(idFilma)
{
    return await(await fetch(`${URL_FILMA}/${idFilma}`)).json().then(podaci => podaci.glumacId)
}
export function VratiGlumca(id)
{
    return VratiGlumceIzFilma(id).then(rezultat=>
        Promise.all(rezultat.map(el => VratiGlumca2(el)))
        )
}
