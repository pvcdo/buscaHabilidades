const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.99freelas.com.br/projects?categoria=web-mobile-e-software&page=';

let habilidade_req = []

async function habilidades(){
    for(let n = 1; n < 54; n++){
        console.log(url+n)
        const {data} = await axios.get(url+n)
        const $ = cheerio.load(data)

        const habilidades = $('.habilidade')

        //console.log(/*'COMEÇOU **************\n\n\n' + */habilidades[0].children[0].data/* + '\n\n\n ***************** TERMINOU'*/)
        
        for(let i = 0; i < habilidades.length; i++){
            console.log(habilidades[i].children[0].data)
        }

        /*Object.keys(habilidades).forEach((i,index)=>{ 
            console.log(habilidades.length)
            /*if(habilidades[i] !== undefined){
                if(typeof(habilidades[i].children[0].data) === 'string'){
                    //habilidade_req.push(habilidades[i].children[0].data)
                    //console.log(habilidades[i].children[0].data)
                }
            }
        })*/
        //console.log(habilidade_req)
    }
}

habilidades()



