let num1 = +prompt("Birinchi sonni kiriting:");
let num2 = +prompt("Ikkinchi sonni kiriting:");
let choice = prompt(
  "Amalni tanlang:\n1. qo'shish.\n2. ayirish.\n3. kopaytirish.\n4. bo'lish.\n amalni Tanlang: (1/2/3/4): "
);

let natija;
let amal;
if (choice === "1") {
  natija = num1 + num2;
  amal = "+";
} else if (choice === "2") {
  natija = num1 - num2;
  amal = "-";
} else if (choice === "3") {
  natija = num1 * num2;
  amal = "*";
} else if (choice === "4") {
  if (num2 === 0) {
    console.log("Xatolik. 0ga bo'lib bo'lmaydi");
    natija = null;
  } else {
    natija = num1 / num2;
    amal = "/";
  }
} else {
  console.log("Yaroqsiz malumot");
}
if (natija !== null && natija !== undefined) {
  console.log(`${num1} ${amal} ${num2} = ${natija}`);
}
