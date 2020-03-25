import {VratiNaslov,VratiFilm,VratiGlumca} from './Get.js';
import {CrtajSelect} from './Create.js'


VratiNaslov().then(film=>{
    CrtajSelect(document.body,film);
})

