function sumFor(list: number[]) :number {
  let sum: number = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list: number[]): number {
  let sum: number = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }
  return sumRecursion(list.slice(1)) + list[0];
}

function sumTheFunctionalWay(list: number[]): number {
  return list.reduce((arr, curr) => arr + curr, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
