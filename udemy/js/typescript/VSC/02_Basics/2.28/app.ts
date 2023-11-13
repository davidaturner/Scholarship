function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number) {
  console.log(`result: ${n}`);
}

// callback
function addAndHandle(n1: number, n2:number, callbackfn: (result: number) => void)
{
  callbackfn(add(n1, n2));
}

addAndHandle(13, 21, (result) => {console.log(result)});
addAndHandle(3, 14, printResult);
