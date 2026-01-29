import { San_pham } from "./data.js";
console.log(San_pham);

document.getElementById("btn").addEventListener("click", function () {
  const search = document.getElementById("search").value;

  window.location.href = `Search.html?q=${search}`;

  console.log(search);
});

// Sử dụng hàm include để search

// const search = document.getElementById("Search");

// function removeVietnameseTones(str) {
//   return (
//     str
//       // .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .replace(/đ/g, "d")
//       .replace(/Đ/g, "D")
//       .toLowerCase()
//   );
// }

// function searchProducts(search) {
//   const normalizedKeyword = removeVietnameseTones(search);
//   return San_pham.filter((product) => {
//     return removeVietnameseTones(product.name).includes(normalizedKeyword);
//   });
// }
