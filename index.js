const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('portfolio');

console.log()

const links = {
    "portfolio": "https://bloom-sidewalk-ccc.notion.site/Hey-I-m-Luc-s-Vabre-f6dd0bde211d4d03b12aff6db0954349"
}

Object.keys(links).forEach(key => {
    const search = urlParams.get(key);
    if (search !== null) window.location.replace(links[key]);
})
