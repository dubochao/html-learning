const fs = require('fs')
const util = require('util')  // 将函数转为promisify
const prom = util.promisify(fs.readFile)
prom('./file/1.html').then(value=>{console.log(value,'*************')})

// console.log(file,'-----');
// fs.readFile  不是promise对象  需要新建promise对象取出值
// promise对象  之呢以三种状态传递值   padding  rejected  resolve
// resolve 成功状态  回调 then
// rejected 失败状态  回调  catch
// promise 方法

let p = new Promise((resolve,reject)=>{
    fs.readFile('./file/1.html',(err,data)=>
    {
        if(err) reject(err);
        resolve([data]);
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./file/2.html',(err,data)=>
        {
            if(err) reject(err);
            value.push(data)
            resolve(value);
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./file/3.html',(err,data)=>
        {
            if(err) reject(err);
            value.push(data)
            resolve(value);
        })
    })
}).then(value=>{
    console.log(value.join(''));
})
.catch(reason=>{
    console.log(reason)
})


// async 方法  取出promise的返回值


async function main(){
    try{
        const one = await prom('./file/1.html');

        const  second =await prom('./file/2.html');
        const third = await prom('./file/3.html');
       console.log(one + second + third);
    }catch(e){
        console.log('读取文件出错',e)
    }

}
main();

