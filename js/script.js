/*jshint esversion: 11 */

// =================================================================================================
var data = {
    "item/article":{"name":"Article", "data":{
        "0":{"name":"Basic", "count":-1, "err":0, "on":0, "add":1, "max":200}, 
        "200":{"name":"Rare", "count":-1, "err":0, "on":0, "add":1, "max":500}, 
        "500":{"name":"Raid", "count":-1, "err":0, "on":0, "add":1, "max":1000}, 
        "5001":{"name":"Stone", "count":-1, "err":0, "on":0, "add":10, "max":6000}, 
        "6000":{"name":"Rise of the Beasts", "count":-1, "err":0, "on":0, "add":1, "max":6500}, 
        "6500":{"name":"Eternals", "count":-1, "err":0, "on":0, "add":1, "max":6600}, 
        "10000":{"name":"Events", "count":-1, "err":0, "on":0, "add":1, "max":20000}, 
        "20000":{"name":"Coop I", "count":-1, "err":0, "on":0, "add":1, "max":20100}, 
        "20101":{"name":"Coop II", "count":-1, "err":0, "on":0, "add":10, "max":21000}, 
        "24999":{"name":"Arcarum", "count":-1, "err":0, "on":0, "add":1, "max":26000}, 
        "30000":{"name":"Premium", "count":-1, "err":0, "on":0, "add":1, "max":31000}, 
        "90000":{"name":"Points", "count":-1, "err":0, "on":0, "add":1, "max":91000}, 
        "91000":{"name":"Trade", "count":-1, "err":0, "on":0, "add":1, "max":92000}, 
        "92000":{"name":"Pendants", "count":-1, "err":0, "on":0, "add":1, "max":93000}, 
        "95000":{"name":"Spark", "count":-1, "err":0, "on":0, "add":1, "max":96000}, 
        "96000":{"name":"Birthday", "count":-1, "err":0, "on":0, "add":1, "max":97000}
    }},
    "item/normal":{"name":"Normal", "data":{
        "0":{"name":"Consumables", "count":-1, "err":0, "on":0, "add":1, "max":100}, 
        "1100":{"name":"Unique 1", "count":-1, "err":0, "on":0, "add":1, "max":2000}, 
        "2000":{"name":"Unique 2", "count":-1, "err":0, "on":0, "add":1, "max":3000}
    }},
    "item/evolution":{"name":"Evolution", "data":{
        "20000":{"name":"Uncap", "count":-1, "err":0, "on":0, "add":1, "max":20200}, 
        "20200":{"name":"Experience I", "count":-1, "err":0, "on":0, "add":1, "max":20300}, 
        "20500":{"name":"Experience II", "count":-1, "err":0, "on":0, "add":1, "max":20600}, 
        "20300":{"name":"Papers", "count":-1, "err":0, "on":0, "add":1, "max":20400}, 
        "20400":{"name":"Books", "count":-1, "err":0, "on":0, "add":1, "max":20500}, 
        "21000":{"name":"Chickens", "count":-1, "err":0, "on":0, "add":1, "max":21100}, 
        "21500":{"name":"Rise of the Beasts", "count":-1, "err":0, "on":0, "add":1, "max":21600},
        "21600":{"name":"Collabs", "count":-1, "err":0, "on":0, "add":1, "max":21700}
    }},
    "item/memorial":{"name":"Wonder", "data":{
        "0":{"name":"Story", "count":-1, "err":0, "on":0, "add":1, "max":1000}, 
        "1000":{"name":"Rise of the Beasts", "count":-1, "err":0, "on":0, "add":1, "max":2000}, 
        "9000":{"name":"Event", "count":-1, "err":0, "on":0, "add":1, "max":10000}, 
        "10000":{"name":"Rank", "count":-1, "err":0, "on":0, "add":1, "max":11000}
    }},
    "item/skillplus":{"name":"Skill", "data":{
        "10000":{"name":"Gauph I", "count":-1, "err":0, "on":0, "add":1, "max":11000}, 
        "11000":{"name":"Gauph II", "count":-1, "err":0, "on":0, "add":1, "max":12000}, 
        "17000":{"name":"Gauph III", "count":-1, "err":0, "on":0, "add":1, "max":18000}, 
        "12000":{"name":"C.C.W.", "count":-1, "err":0, "on":0, "add":1, "max":13000}, 
        "13000":{"name":"Pendulum I", "count":-1, "err":0, "on":0, "add":1, "max":14000}, 
        "14000":{"name":"Pendulum II", "count":-1, "err":0, "on":0, "add":1, "max":15000}, 
        "15000":{"name":"Teluma I", "count":-1, "err":0, "on":0, "add":1, "max":16000}, 
        "16000":{"name":"Teluma II", "count":-1, "err":0, "on":0, "add":1, "max":17000}
    }},
    "item/npcarousal":{"name":"Awakening", "data":{
        "0":{"name":"Awakening", "count":-1, "err":0, "on":0, "add":1, "max":100}
    }},
    "item/npcaugment":{"name":"Ring", "data":{
        "0":{"name":"Ring", "count":-1, "err":0, "on":0, "add":1, "max":100}
    }},
    "item/lottery":{"name":"Lottery", "data":{
        "0":{"name":"Lottery", "count":-1, "err":0, "on":0, "add":1, "max":100}
    }},
    "item/hiddenweapon":{"name":"Secret Gear", "data":{
        "0":{"name":"Secret Gear I", "count":-1, "err":0, "on":0, "add":10, "max":1000}, 
        "1":{"name":"Secret Gear II", "count":-1, "err":0, "on":0, "add":10, "max":1000}
    }},
    "bullet":{"name":"Bullet", "data":{
        "10100":{"name":"Parabellum I", "count":-1, "err":0, "on":0, "add":1, "max":10200}, 
        "10200":{"name":"Parabellum II", "count":-1, "err":0, "on":0, "add":1, "max":10300}, 
        "10300":{"name":"Parabellum III", "count":-1, "err":0, "on":0, "add":1, "max":10400}, 
        "10400":{"name":"Parabellum IV", "count":-1, "err":0, "on":0, "add":1, "max":10500}, 
        "10500":{"name":"Parabellum V", "count":-1, "err":0, "on":0, "add":1, "max":10600}, 
        "10600":{"name":"Parabellum VI", "count":-1, "err":0, "on":0, "add":1, "max":10700}, 
        "10700":{"name":"Parabellum VII", "count":-1, "err":0, "on":0, "add":1, "max":10800}, 
        "10800":{"name":"Parabellum VIII", "count":-1, "err":0, "on":0, "add":1, "max":10900}, 
        "10900":{"name":"Parabellum IX", "count":-1, "err":0, "on":0, "add":1, "max":11000}, 
        "11000":{"name":"Parabellum X", "count":-1, "err":0, "on":0, "add":1, "max":11100}, 
        "11100":{"name":"Parabellum XI", "count":-1, "err":0, "on":0, "add":1, "max":11200}, 
        "11200":{"name":"Parabellum XII", "count":-1, "err":0, "on":0, "add":1, "max":11300}, 
        "11300":{"name":"Parabellum XIII", "count":-1, "err":0, "on":0, "add":1, "max":11400}, 
        
        "20100":{"name":"Rifle I", "count":-1, "err":0, "on":0, "add":1, "max":20200}, 
        "20200":{"name":"Rifle II", "count":-1, "err":0, "on":0, "add":1, "max":20300}, 
        "20300":{"name":"Rifle III", "count":-1, "err":0, "on":0, "add":1, "max":20400}, 
        "20400":{"name":"Rifle IV", "count":-1, "err":0, "on":0, "add":1, "max":20500}, 
        "20500":{"name":"Rifle V", "count":-1, "err":0, "on":0, "add":1, "max":20600}, 
        "20600":{"name":"Rifle VI", "count":-1, "err":0, "on":0, "add":1, "max":20700}, 
        "20700":{"name":"Rifle VII", "count":-1, "err":0, "on":0, "add":1, "max":20800}, 
        "20800":{"name":"Rifle VIII", "count":-1, "err":0, "on":0, "add":1, "max":20900}, 
        "20900":{"name":"Rifle IX", "count":-1, "err":0, "on":0, "add":1, "max":21000}, 
        "21000":{"name":"Rifle X", "count":-1, "err":0, "on":0, "add":1, "max":21100}, 
        "21100":{"name":"Rifle XI", "count":-1, "err":0, "on":0, "add":1, "max":21200}, 
        
        "30100":{"name":"Cartridge I", "count":-1, "err":0, "on":0, "add":1, "max":30200}, 
        "30200":{"name":"Cartridge II", "count":-1, "err":0, "on":0, "add":1, "max":30300}, 
        "30300":{"name":"Cartridge III", "count":-1, "err":0, "on":0, "add":1, "max":30400}, 
        "30400":{"name":"Cartridge IV", "count":-1, "err":0, "on":0, "add":1, "max":30500}, 
        "30500":{"name":"Cartridge V", "count":-1, "err":0, "on":0, "add":1, "max":30600}, 
        "30600":{"name":"Cartridge VI", "count":-1, "err":0, "on":0, "add":1, "max":30700}, 
        "30700":{"name":"Cartridge VII", "count":-1, "err":0, "on":0, "add":1, "max":30800}, 
        "30800":{"name":"Cartridge VIII", "count":-1, "err":0, "on":0, "add":1, "max":30900}, 
        "30900":{"name":"Cartridge IX", "count":-1, "err":0, "on":0, "add":1, "max":31000}, 
        "31000":{"name":"Cartridge X", "count":-1, "err":0, "on":0, "add":1, "max":31100}, 
        "31100":{"name":"Cartridge XI", "count":-1, "err":0, "on":0, "add":1, "max":31200}, 
        "31200":{"name":"Cartridge XII", "count":-1, "err":0, "on":0, "add":1, "max":31300}, 
        "31300":{"name":"Cartridge XIII", "count":-1, "err":0, "on":0, "add":1, "max":31400}, 
        "31400":{"name":"Cartridge XIV", "count":-1, "err":0, "on":0, "add":1, "max":31500}, 
        "31500":{"name":"Cartridge XV", "count":-1, "err":0, "on":0, "add":1, "max":31600}, 
        "31600":{"name":"Cartridge XVI", "count":-1, "err":0, "on":0, "add":1, "max":31700}, 
        "31700":{"name":"Cartridge XVII", "count":-1, "err":0, "on":0, "add":1, "max":31800}, 
        
        "40100":{"name":"Aetherial I", "count":-1, "err":0, "on":0, "add":1, "max":40200}, 
        "40200":{"name":"Aetherial II", "count":-1, "err":0, "on":0, "add":1, "max":40300}, 
        "40300":{"name":"Aetherial III", "count":-1, "err":0, "on":0, "add":1, "max":40400}, 
        "40400":{"name":"Aetherial IV", "count":-1, "err":0, "on":0, "add":1, "max":40500}, 
        "40500":{"name":"Aetherial V", "count":-1, "err":0, "on":0, "add":1, "max":40600}, 
        "40600":{"name":"Aetherial VI", "count":-1, "err":0, "on":0, "add":1, "max":40700}, 
        "40700":{"name":"Aetherial VII", "count":-1, "err":0, "on":0, "add":1, "max":40800}, 
        "40800":{"name":"Aetherial VIII", "count":-1, "err":0, "on":0, "add":1, "max":40900}, 
        "40900":{"name":"Aetherial IX", "count":-1, "err":0, "on":0, "add":1, "max":41000}, 
        "41000":{"name":"Aetherial X", "count":-1, "err":0, "on":0, "add":1, "max":41100}, 
        "41100":{"name":"Aetherial XI", "count":-1, "err":0, "on":0, "add":1, "max":41200},
        "41200":{"name":"Aetherial XII", "count":-1, "err":0, "on":0, "add":1, "max":41300},
        "41300":{"name":"Aetherial XII", "count":-1, "err":0, "on":0, "add":1, "max":41400}
        
    }},
    "shield":{"name":"Shield", "data":{
        "2000":{"name":"R", "count":-1, "err":0, "on":0, "add":1, "max":3000}, 
        "3000":{"name":"SR", "count":-1, "err":0, "on":0, "add":1, "max":4000}, 
        "4000":{"name":"SSR", "count":-1, "err":0, "on":0, "add":1, "max":5000}, 
        
    }},
    "familiar":{"name":"Manatura", "data":{
        "0":{"name":"Manatura", "count":-1, "err":0, "on":0, "add":1, "max":1000}
    }},
    "item/cosmetic":{"name":"Vyrn's equipment", "data":{
        "0":{"name":"Armor", "count":-1, "err":0, "on":0, "add":1, "max":100},
        "100":{"name":"Weapon", "count":-1, "err":0, "on":0, "add":1, "max":200}
    }},
    "home/furniture_thumbnail":{"name":"Furniture", "extension":".png", "overridePre":"/frontier/assets/", "overridePost":"/img_m_", "data":{
        "10000":{"name":"Furniture I", "count":-1, "err":0, "on":0, "add":1, "max":20000}, 
        "20000":{"name":"Furniture II", "count":-1, "err":0, "on":0, "add":1, "max":30000}, 
        "30000":{"name":"Furniture III", "count":-1, "err":0, "on":0, "add":1, "max":40000}, 
        "40000":{"name":"Furniture IV", "count":-1, "err":0, "on":0, "add":1, "max":50000}
    }},
    "item/ticket":{"name":"Draw Tickets", "overridePost":"/", "data":{
        "100001":{"name":"Ticket I", "count":-1, "err":0, "on":0, "add":10, "max":101001},
        "101001":{"name":"Ticket II", "count":-1, "err":0, "on":0, "add":10, "max":102001},
        "102001":{"name":"Ticket III", "count":-1, "err":0, "on":0, "add":10, "max":103001},
        "103001":{"name":"Ticket IV", "count":-1, "err":0, "on":0, "add":10, "max":104001},
        "104001":{"name":"Ticket V", "count":-1, "err":0, "on":0, "add":10, "max":105001},
        "105001":{"name":"Ticket VI", "count":-1, "err":0, "on":0, "add":10, "max":106001},
        "106001":{"name":"Ticket VII", "count":-1, "err":0, "on":0, "add":10, "max":107001},
        "107001":{"name":"Ticket VIII", "count":-1, "err":0, "on":0, "add":10, "max":108001},
        "108001":{"name":"Ticket IX", "count":-1, "err":0, "on":0, "add":10, "max":109001},
        "109001":{"name":"Ticket X", "count":-1, "err":0, "on":0, "add":10, "max":110001},
        "110001":{"name":"Ticket XI", "count":-1, "err":0, "on":0, "add":10, "max":111001},
        "111001":{"name":"Ticket XII", "count":-1, "err":0, "on":0, "add":10, "max":112001},
        "112001":{"name":"Ticket XIII", "count":-1, "err":0, "on":0, "add":10, "max":113001},
        "113001":{"name":"Ticket XIV", "count":-1, "err":0, "on":0, "add":10, "max":200000},
        "10001":{"name":"Other", "count":-1, "err":0, "on":0, "add":1, "max":20000},
        "20001":{"name":"Limited", "count":-1, "err":0, "on":0, "add":1, "max":30000}
    }},
}

const ONGOING_LIMIT = 15;
const ERR_LIMIT = 30;

// endpoints
const ENDPOINTS = [
    "https://prd-game-a-granbluefantasy.akamaized.net/",
    "https://prd-game-a1-granbluefantasy.akamaized.net/",
    "https://prd-game-a2-granbluefantasy.akamaized.net/",
    "https://prd-game-a3-granbluefantasy.akamaized.net/",
    "https://prd-game-a4-granbluefantasy.akamaized.net/",
    "https://prd-game-a5-granbluefantasy.akamaized.net/"
];

// =================================================================================================
// initialization
function init() // entry point, called by body onload
{
    let container = document.getElementById('container');
    try
    {
        for(const [path, content] of Object.entries(data))
        {
            let keys = Object.keys(content.data);
            let l = keys.length;
            if(l == 0)
                continue;
            else if(l == 1)
            {
                elems = makeIndexSummary(container, content.name, false);
                {
                    const tmp = elems[0];
                    elems[1].onclick = function (){
                        display(tmp, keys[0], path);
                        this.onclick = null;
                    };
                }
            }
            else
            {
                parents = makeIndexSummary(container, content.name, false);
                for(const k of keys)
                {
                    elems = makeIndexSummary(parents[0], content.data[k].name, true);
                    const tmp = elems[0];
                    elems[1].onclick = function (){
                        display(tmp, k, path);
                        this.onclick = null;
                    };
                }
            }
        }
    }
    catch(err)
    {
        console.error(err);
    }
}

// =================================================================================================
// utility
function idToEndpoint(id) // use the id as a seed to return one of the endpoints (to benefit from the sharding)
{
    return ENDPOINTS[id % ENDPOINTS.length];
}

function makeIndexSummary(node, name, sub_level) // used for the html. make the details/summary elements.
{
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.classList.add("element-detail");
    if(sub_level > 0)
    {
        summary.classList.add("sub-detail");
        if(sub_level > 1) summary.classList.add("sub-detail-child");
    }
    let div = document.createElement("span");
    summary.appendChild(div);
    summary.appendChild(document.createTextNode(name));
    details.appendChild(summary);
    node.appendChild(details);
    let h3 = document.createElement("h3");
    h3.className = "container";
    details.appendChild(h3);
    return [h3, details];
}

// =================================================================================================
// visual elements management
function display(node, key, path)
{
    if(data[path].data[key].count == -1)
        data[path].data[key].count = parseInt(key);
    while(data[path].data[key].err < ERR_LIMIT && data[path].data[key].count < data[path].data[key].max)
    {
        if(data[path].data[key].on >= ONGOING_LIMIT)
        {
            setTimeout(display.bind(this, node, key, path), 500);
            return;
        }
        let a = document.createElement('a');
        let img = document.createElement('img');
        img.classList.add("loading");
        img.classList.add("preview");
        img.src = idToEndpoint(data[path].data[key].count) + "assets_en/img_low/sp" + (data[path].overridePre ? data[path].overridePre : "/assets/") + path + (data[path].overridePost ? data[path].overridePost : "/s/") + data[path].data[key].count + (data[path].extension ? data[path].extension : ".jpg");
        img.title = data[path].data[key].count;
        img.onload = function()
        {
            img.classList.remove("loading");
            data[path].data[key].err = 0;
            data[path].data[key].on -= 1;
        }
        img.onerror = function()
        {
            data[path].data[key].err += 1;
            data[path].data[key].on -= 1;
            this.parentNode.remove();
        }
        a.href = img.src.replace("_low", "");
        a.appendChild(img);
        node.appendChild(a);
        data[path].data[key].on += 1;
        data[path].data[key].count += data[path].data[key].add;
    }
}