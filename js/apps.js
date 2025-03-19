// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Axe Boat",
  version: "mixforpiss", // mix servers arent used in the uhhh rem modding shit thing idfk
  date: "2014",
  folder: "asset-v1/", // ← If you are adding more versions, make sure folder is correct, for example "asset-v2/" for v2
  looptime: 8000,
  bpm: 120,
  totalframe: 384,
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#313187",
  col0: "#476bc7",
  col1: "#4849a8",
  col2: "#2c2d69",
  col3: "#3a3b8a",
  col4: "#011342",
  animearray: [
    {
      name: "kick-mfp",
      color: "d7a267",
      uniqsnd: false // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "snare-mfp",
      color: "d7a267",
      uniqsnd: false
    },
    {
      name: "touti-mfp",
      color: "d7a267",
      uniqsnd: true
    },
    {
      name: "charley-mfp",
      color: "d7a267",
      uniqsnd: true,
    },
    {
      name: "chatom-mfp",
      color: "d7a267",
      uniqsnd: false
    },
    {
      name: "bass-mfp",
      color: "09b7c8",
      uniqsnd: false
    },
    {
      name: "enigmatic-mfp",
      color: "09b7c8",
      uniqsnd: true
    },
    {
      name: "cry-mfp",
      color: "09b7c8",
      uniqsnd: true
    },
    {
      name: "odoyouno-mfp",
      color: "09b7c8",
      uniqsnd: true
    },
    {
      name: "oua-mfp",
      color: "09b7c8",
      uniqsnd: true
    },
    {
      name: "toun-mfp",
      color: "f04040",
      uniqsnd: false
    },
    {
      name: "flute-mfp",
      color: "f04040",
      uniqsnd: false
    },
    {
      name: "neou-mfp",
      color: "f04040",
      uniqsnd: false
    },
    {
      name: "hu-mfp",
      color: "f04040",
      uniqsnd: false
    },
    {
      name: "ah-mfp",
      color: "f04040",
      uniqsnd: true
    },
    {
      name: "feel-mfp",
      color: "7a7ff6",
      uniqsnd: true
    },
    {
      name: "chillin-mfp",
      color: "7a7ff6",
      uniqsnd: true
    },
    {
      name: "yeah-mfp",
      color: "7a7ff6",
      uniqsnd: true
    },
    {
      name: "filback-mfp",
      color: "7a7ff6",
      uniqsnd: false
    },
    {
      name: "teylo-mfp",
      color: "7a7ff6",
      uniqsnd: true
    },
	{
      name: "feel-love",
      color: "787DFF",
      uniqsnd: false
    }
  ],
  bonusarray: [
    {
      name: "Da Love",
      src: "b1-love",
      code: "1,2,6,11,17",
      sound: "bonus-love",
      aspire: "aspire",
      loop: 1 // ← Every bonus have its own loops in this version
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...