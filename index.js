const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('s');

const links = {
    p: "https://bloom-sidewalk-ccc.notion.site/Hey-I-m-Luc-s-Vabre-f6dd0bde211d4d03b12aff6db0954349"
}

if (links[search] !== undefined) window.location.replace(links[search]);
