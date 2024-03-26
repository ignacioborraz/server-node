const suma = (...nums) => {
/*   if (nums.length === 0) return 0;
  if (nums.some((num) => typeof num !== "number")) return null;
  return nums.reduce((suma, num) => suma + num); */
};

let testOk = 0;
let testTotal = 0;

function test1() {
  testTotal++;
  console.log("Test 1: Devuelve null si algun parametro no es numérico");
  const test = suma("2", 2);
  if (test === null) {
    console.log("Test 1: OK");
    testOk++;
  } else console.log(`Test 1: FAIL! EXPECTED null, GOT ${typeof test}`);
}
test1();

function test2() {
  testTotal++;
  console.log("Test 2: Devuelve 0 si no recibe parámetros");
  const test = suma();
  if (test === 0) {
    console.log("Test 2: OK");
    testOk++;
  } else console.log(`Test 2: FAIL! EXPECTED 0, GOT ${test}`);
}
test2();

function test3() {
  testTotal++;
  console.log("Test 3: Devuelve correctamente la suma");
  const test = suma(2, 3);
  if (test === 5) {
    console.log("Test 3: OK");
    testOk++;
  } else console.log(`Test 3: FAIL! EXPECTED 5, GOT ${test}`);
}
test3();

function test4() {
  testTotal++;
  console.log("Test 4: Devuelve la suma de cualquier cantidad de números");
  const test = suma(1, 2, 3, 4);
  if (test === 10) {
    console.log("Test 4: OK");
    testOk++;
  } else console.log(`Test 4: FAIL! EXPECTED 10, GOT ${test}`);
}
test4();

console.log(`Se pasaron ${testOk} tests de un total de ${testTotal}`);


