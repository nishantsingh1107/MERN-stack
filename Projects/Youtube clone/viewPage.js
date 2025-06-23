const searchQueryStr = window.location.search;
const res = searchQueryStr.split("=");
const videoId = res[1];

const inframe = document.getElementsByTagName('iframe')[0];

inframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);