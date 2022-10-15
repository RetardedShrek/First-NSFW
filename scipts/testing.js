window.addEventListener("DOMContentLoaded", () => {
    // (A) PLAYER INIT
    // (A1) PLAYLIST - CHANGE TO YOUR OWN!
    let playlist = [
      {name: "NicoleBelle Humiliation workout", src: "../vids/NicoleBelle_Humiliation-workout-for-this-slut.mp4"},
      {name: "Lissie Belle take my cock and my cum", src: "../vids/Lissie Belle take my cock and my cum.mp4"},
      {name: "NicoleBelle A GOOD BOY EATS HIS OWN CUM", src: "../vids/NicoleBelle A GOOD BOY EATS HIS OWN CUM.mp4"},
      {name: "KarmaRX Sister", src: "../vids/KarmaRX-sister.mp4"},
    ];
  
    // (A2) VIDEO PLAYER & GET HTML CONTROLS
    const video = document.getElementById("vVid"),
          vList = document.getElementById("vList");
  
    // (A3) BUILD PLAYLIST
    for (let i in playlist) {
      let row = document.createElement("div");
      row.className = "vRow";
      row.innerHTML = playlist[i]["name"];
      row.addEventListener("click", () => { vidPlay(i); });
      playlist[i]["row"] = row;
      vList.appendChild(row);
    }
  
    // (B) PLAY MECHANISM
    // (B1) FLAGS
    var vidNow = 0, // current video
        vidStart = false, // auto start next video
  
    // (B2) PLAY SELECTED VIDEO
    vidPlay = (idx, nostart) => {
      vidNow = idx;
      vidStart = nostart ? false : true;
      video.src = playlist[idx]["src"];
      for (let i in playlist) {
        if (i == idx) { playlist[i]["row"].classList.add("now"); }
        else { playlist[i]["row"].classList.remove("now"); }
      }
    };
  
    // (B3) AUTO START WHEN SUFFICIENTLY BUFFERED
    video.addEventListener("canplay", () => { if (vidStart) {
      video.play();
      vidStart = false;
    }});
  
    // (B4) AUTOPLAY NEXT VIDEO IN THE PLAYLIST
    video.addEventListener("ended", () => {
      vidNow++;
      if (vidNow >= playlist.length) { vidNow = 0; }
      vidPlay(vidNow);
    });
  
    // (B5) INIT SET FIRST VIDEO
    vidPlay(0, true);
  });