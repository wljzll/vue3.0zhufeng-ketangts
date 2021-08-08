// 1) 接口：用来描述对象形状的 interface

interface ISchool {
    readonly name: string, // readonly 表示只读
    age: number,
    address?:string // ? 表示可填可不填
}

let school:ISchool = {
    name:'zf',
    age: 10,
    address: '回龙观东大街'
}

// 2) 接口可扩展
interface IZhufeng extends ISchool {
    type: string,
    [key:string]: any // 表示IZhufeng这个类型可以有任意类型的键值 除规定的外
}

let zhufeng:IZhufeng = {
    ...school,
    type: 'web',
    xxx:124,
    yyy: []
}

// 类型断言
let school2:ISchool = {
    name:'zf',
    age: 10,
    address: '回龙观东大街',
    lesson: ['架构课', '基础课']
} as ISchool