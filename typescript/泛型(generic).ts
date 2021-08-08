// 泛型：用来在代码执行时传入的类型，来确定结果


// function createArray(len, value) {
//   let result = [];
//   for (let i = 0; i < len.length; i++) {
//     result.push(value)
//   }
//   return result;
// }
// let arr = createArray(3, 'zhufeng'); // arr: any[]


function createArray<T>(len, value:T):T[] {
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(value)
    }
    return result;
  }
  let arr = createArray<string>(3, 'zhufeng'); // arr: string[]

// 多个泛型
// 这种声明参数只能传递 string和number
// const swap = (tuple:[string, number]):[number,string] => {
//    return [tuple[1], tuple[0]]
// }


const swap = <T, K>(tuple:[T, K]):[K,T] => {
    return [tuple[1], tuple[0]]
 }

 swap([1,2]);
 swap([true, 1])