window.addEventListener("DOMContentLoaded", () => {
    // (A) PLAYER INIT
    // (A1) PLAYLIST - CHANGE TO YOUR OWN!
    let playlist = [
      {name: "Ari Love Sister part 1", src: "../vids/Ari Love Sister Part 1.mp4"},
      //{name: "Ari Love Sister part 2", src: "../vids/Ari Love Sister Part 2.mp4"},
      {name: "Karma RX Sister", src: "../vids/KarmaRX-sister.mp4"},
      {name: "Sweetkiss_69 Sister", src: "../vids/Sweetkiss_69-sister.mp4"},
      //{name: "Brazilian Girl Sister", src: "../vids/Brazilian girl Sister.mp4"},
      {name: "Isla White Sister", src: "../vids/Isla White Sister custom.mp4"},
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