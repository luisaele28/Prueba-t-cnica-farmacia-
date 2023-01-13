import data from 'data/comuna.js';
import {filterCruzVerde, filterQuintaNormal, filterCerrillos, ilterVitacura, filterCerroNavia, filterElBosque, filterEstacionCentral, filterConchali, filterHuechuraba, filterIndependencia, filterLaCisterna, filterLaFlorida, filterLaGranja, filterLaPintana, filterLaReina, filterLasCondes, filterLoBarnecheda, filterLoEspejo, filterLoPrado, filterMacul, filterMaipu, filterPedroAguirreCerda, filterPeñalolen, filterProvidencia, filterPudahuel, filterQuilicur, filterQuilicura, filterRecoleta, filterRenca, filterSanJoaquin, filterSanMiguel, filterSanRamon, filterSantiago, filterVitacura, filterÑuñoa, sortAtoZ, sortZtoA} from './data.js'

document.getElementById(orderAZ).addEventListener("change"), () => {
    const orderName = document.getElementById('orderAZ');
    const typeSelected = orderName.value;
    if(typeSelected === "a-z"){
        var result = sortAtoZ(dataComuna);    
    }else if (typeSelected === 'z-a') {
        var result3 = sortZtoA(dataComuna);
    }
}