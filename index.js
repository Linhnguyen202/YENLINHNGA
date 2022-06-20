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
const personOrder = document.querySelector('.person-order')
let city = []
let district = []
let ward = []
let listDataCall = [
  {
    id:1,
    name:"Ngọc Hà",
    phone: "0387 xxx 482",
    img: "https://kenh14cdn.com/2020/9/27/img3814-16008495660052057963035-16012244314321556076455.jpg"
  },
  {
    id:2,
    name:"Phương Thúy",
    phone: "0367 xxx 234",
    img: "https://cdn.baogiaothong.vn/files/nga.dinh/2015/04/18/hoa-hau-thu-thao-lam-banh-6-0746.jpg"
  },
  {
    id:3,
    name:"Khánh Nhi",
    phone: "0349 xxx 835",
    img: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/bientapkienthuc/2016_12_09/son9-12/newfolder4/su-that-phia-sau-co-gai-viet-xinh-dep-van-nguoi-me.jpg"
  },
  {
    id:4,
    name:"Mỹ Tâm",
    phone: "0349 xxx 311",
    img: "https://luv.vn/wp-content/uploads/2021/06/hinh-anh-gai-viet-nam-xinh-dep-20.jpg"
  },
  {
    id:5,
    name:"Minh Anh",
    phone: "0398 xxx 434",
    img: "https://i.pinimg.com/736x/03/8a/84/038a84602069d615eb54b5205bf5307d.jpg"
  },
  {
    id:6,
    name:"Bảo Vy",
    phone: "0364 xxx 050",
    img: "https://cdn.discordapp.com/attachments/818734712461721611/988440476543778866/gaixinh.jpg"
  },
  {
    id:7,
    name:"Khả Hân",
    phone: "0342 xxx 121",
    img: "https://cdn.discordapp.com/attachments/818734712461721611/988440559293202442/gaixinh.jpg"
  },
  {
    id:8,
    name:"Linh Chi",
    phone: "0375 xxx 626",
    img: "https://cdn.discordapp.com/attachments/818734712461721611/988440688217714748/gaixinh.jpg"
  }
]

const newDay = new Date();
newDay.setDate(newDay.getDate() + 3);
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

let list = listDataCall.map((item)=>{
  let randomIdx = Math.floor(Math.random() * 20) + 1;
  return `
  <div class="opcity-white"></div>
  <img src="${item.img}" alt="">
  <div class="content">
  
      <h3>${item.name}</h3>
      <span>${item.phone}</span>
      <span>Đặt ${Math.floor(Math.random() * 4) + 1} sản phẩm Yến Tinh Chế</span>
`
})
let i = 0
setInterval(()=>{
  if(personOrder.classList.contains('active')){
   
    personOrder.classList.remove('active')
    personOrder.innerHTML = ""
  
  }
  else{
    personOrder.innerHTML = list[i];
    personOrder.classList.add('active')
    i++
  }
  if(i == list.length){
    i = 0
  }
  
},2000)
