export function filterCruzVerde(array){
    const resultsCruzVerde = array.filter(e => e.farmacy === 'cruz verde')
    return resultsCruzVerde
}

export function filterQuintaNormal(array){
    const resultsQuintaNormal = array.filter(e => e.farmacy === 'quinta normal')
    return resultsQuintaNormal
}

export function filterCerrillos(array){
    const resultsCerrillos = array.filter(e => e.farmacy === 'cerrillos')
    return resultsCerrillos
}

export function filterVitacura(array){
    const resultsVitacura = array.filter(e => e.farmacy === 'vitacura')
    return resultsVitacura
}

export function filterIndependencia(array){
    const resultsIndependencia = array.filter(e => e.farmacy === 'independencia')
    return resultsIndependencia
}

export function filterLaGranja(array){
    const resultsLaGranja = array.filter(e => e.farmacy === 'la granja')
    return resultsLaGranja
}

export function filterLaReina(array){
    const resultsLaReina = array.filter(e => e.farmacy === 'la reina')
    return resultsLaReina
}

export function filterLasCondes(array){
    const resultsLasCondes = array.filter(e => e.farmacy === 'las condes')
    return resultsLasCondes
}

export function filterConchali(array){
    const resultsConchali = array.filter(e => e.farmacy === 'conchali')
    return resultsConchali
}

export function filterCerroNavia(array){
    const resultsCerroNavia = array.filter(e => e.farmacy === 'cerro navia')
    return resultsCerroNavia
}

export function filterEstacionCentral(array){
    const resultsEstacionCentral = array.filter(e => e.farmacy === 'estacion central')
    return resultsEstacionCentral
}

export function filterLaPintana(array){
    const resultsLaPintana = array.filter(e => e.farmacy === 'la pintana')
    return resultsLaPintana
}

export function filterLaFlorida(array){
    const resultsLaFlorida = array.filter(e => e.farmacy === 'la  florida')
    return resultsLaFlorida
}

export function filterLaCisterna(array){
    const resultsLaCisterna = array.filter(e => e.farmacy === 'la cisterna')
    return resultsLaCisterna
}

export function filterLoBarnecheda(array){
    const resultsLoBarnecheda = array.filter(e => e.farmacy === 'lo barnecheda')
    return resultsLoBarnecheda
}

export function filterLoEspejo(array){
    const resultsLoEspejo = array.filter(e => e.farmacy === 'lo espejo')
    return resultsLoEspejo
}

export function filterMacul(array){
    const resultsMacul = array.filter(e => e.farmacy === 'macul')
    return resultsMacul
}

export function filterÑuñoa(array){
    const resultsÑuñoa = array.filter(e => e.farmacy === 'ñuñoa')
    return resultsÑuñoa
}

export function filterSantiago(array){
    const resultsSantiago = array.filter(e => e.farmacy === 'santiago')
    return resultsSantiago
}

export function filterElBosque(array){
    const resultsElBosque = array.filter(e => e.farmacy === 'el bosque')
    return resultsElBosque
}

export function filterSanMiguel(array){
    const resultsSanMiguel = array.filter(e => e.farmacy === 'san miguel')
    return resultsSanMiguel
}

export function filterLoPrado(array){
    const resultsLoPrado = array.filter(e => e.farmacy === 'lo prado')
    return resultsLoPrado
}

export function filterPudahuel(array){
    const resultsPudahuel = array.filter(e => e.farmacy === 'pudahuel')
    return resultsPudahuel
}

export function filterPedroAguirreCerda(array){
    const resultsPedroAguirreCerda = array.filter(e => e.farmacy === 'pedro aguirre cerda')
    return resultsPedroAguirreCerda
}

export function filterHuechuraba(array){
    const resultsHuechuraba = array.filter(e => e.farmacy === 'huechuraba')
    return resultsHuechuraba
}

export function filterQuilicura(array){
    const resultsQuilicura = array.filter(e => e.farmacy === 'quilicura')
    return resultsQuilicura
}

export function filterRecoleta(array){
    const resultsRecoleta = array.filter(e => e.farmacy === 'recoleta')
    return resultsRecoleta
}

export function filterRenca(array){
    const resultsRenca = array.filter(e => e.farmacy === 'renca')
    return resultsRenca
}

export function filterMaipu(array){
    const resultsMaipu = array.filter(e => e.farmacy === 'maipu')
    return resultsMaipu
}

export function filterSanJoaquin(array){
    const resultsSanJoaquin = array.filter(e => e.farmacy === 'san joaquin')
    return resultsSanJoaquin
}

export function filterPeñalolen(array){
    const resultsPeñalolen = array.filter(e => e.farmacy === 'peñalolen')
    return resultsPeñalolen
}

export function filterProvidencia(array){
    const resultsProvidencia = array.filter(e => e.farmacy === 'providencia')
    return resultsProvidencia
}

export function filterSanRamon(array){
    const resultsSanRamon = array.filter(e => e.farmacy === 'san ramon')
    return resultsSanRamon
}

export function sortAtoZ(arr){
   let result = arr.sort((a,b) => (a.name > b.name ? 1 : -1));
   return result
}

export function sortZtoA(arr){
    let result3 = arr.sort((a,b) => (a.name > b.name ? -1 : 1));
    return result3
 }
