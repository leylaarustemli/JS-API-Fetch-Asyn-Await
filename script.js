const row=document.getElementById("cards")
const azCox=document.getElementById("az-cox")
const coxAz=document.getElementById("cox-az")
const az=document.getElementById("a-z")
const za=document.getElementById("z-a")

function renderUI(list) {
    let innerHTML = "";
    for (let i = 0; i < list.length; i++) {
      innerHTML += `
      <div class="card" style="width: 18rem">
      <img height="280px  " src="${list[i].image}" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">${list[i].title}</h5>
        <p class="card-price">${list[i].price}$</p>
        <p class="card-text">${list[i].description}</p>
      </div>
    </div>
      `
      ;
    }
    row.innerHTML = innerHTML;
  }
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then((data)=>{

renderUI(data)
azCox.addEventListener("click",(e)=>{
    e.preventDefault()
renderUI(data.sort((a,b)=>a.price-b.price));
})
coxAz.addEventListener("click",(e)=>{
    e.preventDefault()
  renderUI(data.sort((a,b)=>b.price-a.price));

})
az.addEventListener("click",(e)=>{
    e.preventDefault()
renderUI(data.sort((a,b)=>a.title.localeCompare(b.title)));
})
za.addEventListener("click",(e)=>{
    e.preventDefault()
  renderUI(data.sort((a,b)=>b.title.localeCompare(a.title)));

})
})









