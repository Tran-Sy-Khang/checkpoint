import { San_pham } from "./data.js";

document.getElementById("btn").addEventListener("click", function () {
  const search = document.getElementById("search").value;

  window.location.href = `Search.html?q=${search}`;

  console.log(search);
});

const getParams = new URLSearchParams(location.search);
const search = getParams.get("q");
console.log(search);
function searchProducts(search) {
  const lowerKeyword = search.toLowerCase();
  return San_pham.filter((product) => {
    return product.Name.toLowerCase().includes(lowerKeyword);
  });
}

document.getElementById("sanpham").innerText += " " + search;
console.log(searchProducts(search));
const Ket_qua = searchProducts(search).length;
console.log(Ket_qua);

document.getElementById("Cac_san_pham").innerHTML = "";
for (let i = 0; i < searchProducts(search).length; i++) {
  document.getElementById("Cac_san_pham").innerHTML += `
    <div class="product">
      <img src="${
        searchProducts(search)[i].image
      }" alt="không có kết nối" style="width: 268.9px; height: 268.9px">
      <p>${searchProducts(search)[i].Name}</p>
      <p>Giá tiền: ${searchProducts(search)[i].price}₫</p>
      <button id="${
        searchProducts(search)[i].id
      }" class="Buy" type="Submit"> thêm vào giở hàng </button>
    </div>
  `;
}

document.getElementById(
  "So_san_pham"
).innerHTML = `Số sản phẩm tìm thấy: ${Ket_qua}`;

const login = true;
let Tong_tien = 0;

document.getElementsByClassName("Buy").addEventListener("click", function () {
  if ((login = false)) {
    window.location.href = "signIn.html";
  } else {
    for (let i = 0; i < San_pham.length; i++) {
      document.getElementById(i).addEventListener("click", function () {
        let gia_tien = Number(San_pham[i].price);
        Tong_tien = Tong_tien + gia_tien;
      });
    }
  }
});

console.log(Tong_tien);
