const purplePlanetElem = document.querySelector("#purple-planet");
const redPlanetElem = document.querySelector("#red-planet");
const TWITCH_LINK = "https://linktree.broslunas.com/twitch/";
const YOUTUBE_LINK = "https://linktree.broslunas.com/youtube/";
const DEFAULT_TARGET = "_blank";

purplePlanetElem.addEventListener("click", () => {
    window.open(TWITCH_LINK, DEFAULT_TARGET);
});

redPlanetElem.addEventListener("click", () => {
    window.open(YOUTUBE_LINK, DEFAULT_TARGET);
});