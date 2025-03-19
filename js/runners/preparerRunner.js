// here you can modify the contents like the polo stuff for example!
function preparerArray() { /* PLEASE DONT TOUCH UNLESS YOU WHAT YOUR DOING! */
    var o = gE
      , t = {
        uMYBw: function(o, t) {
            return o + t
        },
        WsWpv: o(1731),
        WYWVs: function(o, t) {
            return o < t
        }
    };
    frameTotal = app.totalframe,
    frameHalf = frameTotal / 2,
    tabBuffer = {},
    tabAnime = [],
    nbSound = app.animearray.length,
    nbSoundBonus = app.bonusarray.length,
    nbSoundTotal = nbSound * 2 + nbSoundBonus + 1,
    nbBonus = app.bonusarray.length,
    nbAnime = app.animearray.length,
    nbData = app.animearray.length,
    nbTotalAsset = nbSoundTotal + nbBonus + nbAnime + nbData + 2,
    tabToLoad = [];
    var e = cntLoad = cntTotalAsset = 0
      , n = "";
    for (tabBuffer.sound = [],
    e = 0; e < nbSound; e++)
        tabBuffer.sound.push({
            sndA: 0,
            sndB: 0
        }),
        tabAnime.push({
            imgSprite: null,
            ratio: null,
            width: null,
            height: null,
            headWidth: null,
            headHeight: null,
            totalFrames: null,
            imgData: null,
            color: app.animearray[e].color
        });
    for (tabBuffer.bonus = [],
    e = 0; e < nbSoundBonus; e++)
        tabBuffer.bonus.push({
            snd: 0,
            aspire: 0
        });
    for (tabBuffer.metro = [{
        snd: 0
    }],
    tabToLoad = [{ // the only important shit
        func: loadImage,
        params: {
            keyname: "spritePolo", // empty polo sprite when booted in-game
            "path": "./" + app.folder + (1 == animSize ? appBrowserSchool ? "img/polo-sprite-tshirt.png" : "img/polo-sprite.png" : nameToHD(appBrowserSchool ? "img/polo-sprite-tshirt.png" : "img/polo-sprite.png")) // bring back old format
        }
    }, {
        func: loadImage,
        params: {
            keyname: "gameBck",
            path: "./" + app.folder + "img/game-bck@2x.jpg" // game bck file when booted in-game
        }
    }, {
        func: loadImage,
        params: {
            keyname: "gamePicto",
            path: "./" + app.folder + "img/game-picto@2x.png" // game picto file when booted in-game
        }
    }],
    miniPlayer && (4, appVersion) && tabToLoad.pop(),
    e = 0; e < nbSound; e++)
        app.animearray[e].uniqsnd ? (tabToLoad.push({
            func: loadSound,
            params: ["sound", app.animearray[e].soundA, e, "sndA", true]
        }),
        nbTotalAsset--) : (tabToLoad.push({
            func: loadSound,
            params: ["sound", app.animearray[e].soundA, e, "sndA"]
        }),
        tabToLoad.push({
            func: loadSound,
            params: ["sound", app.animearray[e].soundB, e, "sndB"]
        }));
    for (e = 0; e < nbSoundBonus; e++)
        tabToLoad.push({
            func: loadSound,
            params: ["bonus", app.bonusarray[e].sound, e, "snd"]
        }),
        app.bonusarray[e].aspire && tabToLoad.push({
            func: loadSound,
            params: ["bonus", app.bonusarray[e].aspire, e, "aspire"]
        }),
        n = renameFile(app.bonusarray[e].src),
        tabToLoad.push({
            func: loadVideoBonus,
            params: [n, e]
        });
    for (e = 0; e < nbAnime; e++)
        n = app.animearray[e].animeData,
        tabToLoad.push({
            func: loadAnimeData,
            params: [n, e]
        }),
        n = renameFile(app.animearray[e].anime),
        tabToLoad.push({
            func: loadAnime,
            params: [n, e]
        });
    checkTabToLoad()
}


function initRulesCSS() { // for the splash stuff and css
    var o = gE, 
	t = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sal")), 
	e = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sar")), 
	n = (t = Math.max(t, e, 20),
    e = ":root {",
    t = (pageApp && (e += "\n\t\t\t--app-v : " + appVersion + ";\n\t\t\t--colBck : " + app.colBck + ";\n\t\t\t--col0 : " + app.col0 + ";\n\t\t\t--col1 : " + app.col1 + ";\n\t\t\t--col2 : " + app.col2 + ";\n\t\t\t--col3 : " + app.col3 + ";\n\t\t\t--col4 : " + app.col4 + ";\n\t\t\t--url-img-home-screen : url(../asset-v" + appVersion + "/img/home-screen@2x.jpg);\n\t\t\t--url-img-home-titre : url(../asset-v" + appVersion + "/img/home-titre@2x.png);\n\t\t\t--url-img-home-version : url(../asset-v" + appVersion + "/img/home-version@2x.png);\n\t\t"),
    e = e + ("\n\t\t\t--fullfill-padding : " + t + "px;\n\t\t\t--url-img-bt-stores : url(") + domainOnline + "img/bt-stores-" + currentLanguage.split("-")[0] + ".png);\n\t\t" + "}",
    document.head || document.getElementsByTagName("head")[0]),
    document.createElement("style"));
    t.appendChild(n),
    n.type = "text/css",
    n.appendChild(document.createTextNode(e))
}