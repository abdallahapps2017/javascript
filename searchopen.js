 function openSosprofil() {
    var e = document.getElementById("sos-profil");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("search-box");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
    var e = document.getElementById("search-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("close-icon");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  };
