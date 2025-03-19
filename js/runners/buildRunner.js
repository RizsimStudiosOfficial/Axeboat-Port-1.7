// BUILD RUNNER SHIT
var pageExt, 
appBrowser, 
transitionEnd, 
animationEnd, 
iosVersion, 
iosVersionNumber, 
debugMute = getParameterByName("mute") || false;
debugGame = getParameterByName("game") || false;
debugScene = getParameterByName("scene") || false;
debugBonus = getParameterByName("bonus") || false;
build = { // BUILD STUFF HERE!
    id: "9PDJPP8SCS9K",
    store: "microsoft",
    platform: "desktop",
    os: "win",
    osMinimum: "",
    storeURL: "https://www.microsoft.com/store/apps/9PDJPP8SCS9K",
    version: "1.2.8",
    htmlExt: "html"
}, 
domainOnline = "https://www.incredibox.com/", 
sndExt = "mp3", // change "ogg" to mp3 for ios support otherwise leave this shit alone!
vidExt = "mp4",  // keep this at "mp4" for ios support can change to "webm" if you want to!
appCN = false, 
machine = {}, 
user = {}, 
hasNetwork = false, 
appBrowserDemo = false, 
appBrowserSchool = false, 
featureLocked = false, 
isMouseDevice = 
checkMouseDevice(), 
isTouchDevice = 
checkTouchDevice(), 
isMobile = false, 
trustAppMobile = window.cordova || false, 
isIframe = inIframe(), 
pointerEventType = {}, 
isIOS = false, 
isIOSMac = false, 
isOSX = false, 
isWin = false, 
isAndroid = false, 
isiPod = false, 
isiPhone = false, 
isiPad = false, 
isiPadPro = false, 
hasHBI = false, 
animSize = 1, 
cnvPXD = 2;
