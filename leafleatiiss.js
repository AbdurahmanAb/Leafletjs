drawmap()

let map = L.map('leaf').setView([0, 0], 5);
let myicon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94]})
let marker = L.marker([0, 0],{icon:myicon}).addTo(map);
async function drawmap(){
    await iss()
       let leaf = document.getElementById('leaf');


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

}
function iss(){
     first = true;
    fetch('https://api.wheretheiss.at/v1/satellites/25544').then(res=>{
    return res.json()
}).then(data =>{
  let a = data.longitude;
  let b = data.latitude;
  document.getElementById('lat').textContent = b;
  document.getElementById('lon').textContent = a;
  marker.setLatLng([a,b])
  if(first ===true){
      map.setView([a,b])
      first = false;
  }
})}
setInterval(drawmap, 1000)
