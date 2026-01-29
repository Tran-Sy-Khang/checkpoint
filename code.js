document.getElementById("btn").addEventListener("click", function () {
  const search = document.getElementById("search").value;

  console.log(search);
});

function searchProducts(search) {
  const lowerKeyword = search.toLowerCase();
  return San_pham.filter((product) => {
    return product.Name.toLowerCase().includes(lowerKeyword);
  });
}

console.log(searchProducts(search));
const Ket_qua = searchProducts(search).length;
console.log(Ket_qua);

for (let i = 0; i < searchProducts(search).length; i++) {
  document.getElementById("Cac_san_pham").innerHTML += `
    <div class="product">
      <img src="${
        searchProducts(search)[i].image
      }" alt="không có kết nối" style="width: 268.9px; height: 268.9px">
      <p>${searchProducts(search)[i].Name}</p>
      <p>Giá tiền: ${searchProducts(search)[i].price}</p>
      <button id="${searchProducts(search)[i].id}"> thêm vào giở hàng </button>
    </div>
  `;
}

document.getElementById(
  "So_san_pham"
).innerHTML = `Số sản phẩm tìm thấy: ${Ket_qua}`;
console.log(p.innerText);
