// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];
let danhSach = document.getElementById("list");
danhSach.innerHTML = "";

function init(){
  for(let i=0; i<books.length; i++){
    let danhSach = document.getElementById("list");
    
    // tao the div
    let sach = document.createElement("div");
    //them the class vao div sach
    sach.className = "item";
    //them hinh anh vao class
    let hinh = document.createElement("img");
    hinh.src = "./images/0"+ books[i].id +".jpg";
    sach.appendChild(hinh);
    //them tieu de h2
    let h2 = document.createElement("h2");
    h2.innerHTML = books[i].name;
    sach.appendChild(h2);
    //the gia cua cuon sach
    let giaSach = document.createElement("p");
    giaSach.innerHTML = books[i].price;
    sach.appendChild(giaSach);
    //them div sach vao danh sach
    danhSach.appendChild(sach);
    console.log(sach);
  }
}
init();

function timSachTheoGia(min, max){
  console.log(min, max);
  let danhSach = document.getElementById("list");
  danhSach.innerHTML = "";
  
  for(let i=0 ; i < books.length; i++){
    let sachDangTim = books[i];
    if(min <= sachDangTim.price && sachDangTim.price <= max){
        // tao the div
        let sach = document.createElement("div");
        //them the class vao div sach
        sach.className = "item";
        //them hinh anh vao class
        let hinh = document.createElement("img");
        hinh.src = "./images/0"+ books[i].id +".jpg";
        sach.appendChild(hinh);
        //them tieu de h2
        let h2 = document.createElement("h2");
        h2.innerHTML = books[i].name;
        sach.appendChild(h2);
        //the gia cua cuon sach
        let giaSach = document.createElement("p");
        giaSach.innerHTML = books[i].price;
        sach.appendChild(giaSach);
        //them div sach vao danh sach
        danhSach.appendChild(sach);
        console.log(sach);
    }
  } 
}
let nutBamApDung = document.getElementById("apply-price-filter");
nutBamApDung.addEventListener("click",function(){
  let minPrice = Number(document.getElementById("min-price").value);
  let maxPrice = Number(document.getElementById("max-price").value);
  timSachTheoGia(minPrice, maxPrice);
})

let nutFaha = document.getElementById("provider-1");
nutFaha.addEventListener("click",function(){
  let danhSach = document.getElementById("list");
  danhSach.innerHTML = "";
  for(let i =0; i < books.length; i++){
    let sachDangXet = books[i];
    if (sachDangXet.provider === "Fahasha") {
      // tao the div
      let sach = document.createElement("div");
      //them the class vao div sach
      sach.className = "item";
      //them hinh anh vao class
      let hinh = document.createElement("img");
      hinh.src = "./images/0"+ books[i].id +".jpg";
      sach.appendChild(hinh);
      //them tieu de h2
      let h2 = document.createElement("h2");
      h2.innerHTML = books[i].name;
      sach.appendChild(h2);
      //the gia cua cuon sach
      let giaSach = document.createElement("p");
      giaSach.innerHTML = books[i].price;
      sach.appendChild(giaSach);
      //them div sach vao danh sach
      danhSach.appendChild(sach);
      console.log(sach);
    }
  }
})

let nutTuoiTre = document.getElementById("provider-2");
nutTuoiTre.addEventListener("click",function(){
  let danhSach = document.getElementById("list");
  danhSach.innerHTML = "";
  for(let i =0; i < books.length; i++){
    let sachDangXet = books[i];
    if (sachDangXet.provider === "Tuổi trẻ") {
      // tao the div
      let sach = document.createElement("div");
      //them the class vao div sach
      sach.className = "item";
      //them hinh anh vao class
      let hinh = document.createElement("img");
      hinh.src = "./images/0"+ books[i].id +".jpg";
      sach.appendChild(hinh);
      //them tieu de h2
      let h2 = document.createElement("h2");
      h2.innerHTML = books[i].name;
      sach.appendChild(h2);
      //the gia cua cuon sach
      let giaSach = document.createElement("p");
      giaSach.innerHTML = books[i].price;
      sach.appendChild(giaSach);
      //them div sach vao danh sach
      danhSach.appendChild(sach);
      console.log(sach);
    }
  }
})

let nutKmin = document.getElementById("provider-3");
nutKmin.addEventListener("click",function(){
  let danhSach = document.getElementById("list");
  danhSach.innerHTML = "";
  for(let i =0; i < books.length; i++){
    let sachDangXet = books[i];
    if (sachDangXet.provider === "Kmin Books") {
      // tao the div
      let sach = document.createElement("div");
      //them the class vao div sach
      sach.className = "item";
      //them hinh anh vao class
      let hinh = document.createElement("img");
      hinh.src = "./images/0"+ books[i].id +".jpg";
      sach.appendChild(hinh);
      //them tieu de h2
      let h2 = document.createElement("h2");
      h2.innerHTML = books[i].name;
      sach.appendChild(h2);
      //the gia cua cuon sach
      let giaSach = document.createElement("p");
      giaSach.innerHTML = books[i].price;
      sach.appendChild(giaSach);
      //them div sach vao danh sach
      danhSach.appendChild(sach);
      console.log(sach);
    }
  }
})
let hd =document.getElementById("hd");
let nutAS = document.getElementById("asi");
let nutYellow = document.getElementById("yellow");
nutYellow.addEventListener("click",function(){
  hd.style.background = "#fcbf16";
  nutAS.style.background = "#fcbf16";
})

let nutRed = document.getElementById("red");
nutRed.addEventListener("click",function(){
  hd.style.background = "#992154";
  nutAS.style.background = "#992154";
})

let nutBlue = document.getElementById("blue");
nutBlue.addEventListener("click",function(){
  hd.style.background = "#173451";
  nutAS.style.background = "#173451";
})

let nutGra = document.getElementById("gradient");
nutGra.addEventListener("click",function(){
  hd.style.backgroundImage = "linear-gradient(to right, #fcbf16, #992154)";
  nutAS.style.background = "linear-gradient(to right, #fcbf16, #992154)";
})

  


