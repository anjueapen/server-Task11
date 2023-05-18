const { add, sub, mul } = require('./util')

const fs = require("fs");
//synchronous oprations
fs.writeFileSync("doc.txt", "File is created as doc.txt");//to write 

const isExist = fs.existsSync("doc.txt");//to check whether file exist
console.log(isExist);

const text = fs.readFileSync("doc.txt", "utf8")//to read use utf 8 to get rid of buffer values
console.log(text);


/*NODEMON running repeatedly when  line 15-18  is uncommented*/
// const userList = [{ name: "Anju" }, { name: "Sanju" }, { name: "Manu" }];
// fs.writeFileSync("list.json", JSON.stringify(userList, undefined, 4));//stringify userlist to get as strings;give undefined & tabspace like 4 to get data in othr lines
// const users = fs.readFileSync("list.json", "utf8")//data is in strings so convert to object by parsedata
//console.log(JSON.parse(users));

fs.appendFileSync('doc.txt', "\n Hello World")//to append data

//fs.writeFileSync("bin.txt", "demo");
//fs.unlinkSync('bin.txt') //this will remove bin file

/******* Folder Creation *****/
// fs.mkdirSync("api")//creating
// fs.rmdirSync("api")//removing folder

/*** Asynchronous***/
fs.writeFile("val.txt", "asynchrouns data", (err) => {
    if (err) throw err;
    console.log("Text created");
})//we used callback type
fs.readFile("val.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log("data read");
})
fs.access("val.txt", (err) => {
    if (err) throw err
    console.log("file exist");
})

fs.writeFile("bin2.txt", "creating for delete purpose", (err, data) => {
    if (err) throw err;
    console.log(data);
})
fs.unlink("bin2.txt", (err) => {
    if (err) throw err
    console.log("file removed");
})
console.log(add(3, 2));
console.log(sub(5, 10));
console.log(mul(3, 2));
console.log(5 + 4);
console.log("ENDDDDDDDDD");