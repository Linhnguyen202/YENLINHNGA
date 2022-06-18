const day = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const second = document.querySelector("#second")
const CitySelect = document.querySelector('#CitySelect')
const DistrictSelect = document.querySelector('#DistrictSelect')
const WardSelecr = document.querySelector('#WardSelecr')
const btnBuy = document.querySelector('.BuyNow-btn')
const buyForm = document.querySelector('#form-order')
const btnOrder = document.querySelector('.btn-tag')
let city = []
let district = []
let ward = []
const newDay = 'June 20, 2022'
function timeCountDown() {
    const nowDate = new Date().getTime();
    const newYearDate = new Date(newDay).getTime();
    
    const gap = newYearDate - nowDate
    
    const sc= 1000;
    const mn = sc * 60
    const hour = mn * 60
    const days = hour * 24
    const textDay = Math.floor(gap/days)
    const textHour = Math.floor((gap % days) / hour)
    const textMinute = Math.floor((gap % hour) / mn)
    const textSecond = Math.floor((gap % mn) /sc)
    
    day.innerHTML = textDay
    hours.innerHTML = textHour
    minutes.innerHTML = textMinute
    second.innerHTML = textSecond
  }

  setInterval(timeCountDown,1000)
async function detData(){
   await fetch("https://vapi.vnappmob.com/api/province/")
    .then(response => response.json())
    .then(data => city = data ? data.results : []);
    let list = city.map((item)=>{

        return `
         <option id=${item.province_id} data-rc=${item.province_id} >${item.province_name}</option>
        `
    })
    CitySelect.innerHTML = list.join('')
}
detData()
CitySelect.addEventListener("change",(e)=>{
  var rc = e.target.options[e.target.selectedIndex].dataset.rc;
  getDistrict(rc)
})
async function getDistrict(id){
  await await fetch(`https://vapi.vnappmob.com/api/province/district/${id}`)
  .then(response => response.json())
  .then(data =>  district = data ? data.results : []);
  let list = district.map((item)=>{

    return `
     <option id=${item.district_id} data-rc=${item.district_id} >${item.district_name}</option>
    `
})
DistrictSelect.innerHTML = list.join('')
}

DistrictSelect.addEventListener('change',(e)=>{
  var rc = e.target.options[e.target.selectedIndex].dataset.rc;
  getWard(rc)
})
async function getWard(id){
  await await fetch(`https://vapi.vnappmob.com//api/province/ward/${id}`)
  .then(response => response.json())
  .then(data => ward = data ? data.results : []);
  let list = ward.map((item)=>{

    return `
     <option id=${item.ward} data-rc=${item.ward} >${item.ward_name}</option>
    `
})
WardSelecr.innerHTML = list.join('')
}
btnBuy.addEventListener('click',()=>{
  buyForm.scrollIntoView({
    behavior: 'smooth'
  });
})
btnOrder.addEventListener('click',()=>{
  buyForm.scrollIntoView({
    behavior: 'smooth'
  });
})
