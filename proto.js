let computer ={
    cpu:12,

};

let lenevo = {
    screen :"HD",
    __proto__:computer,
};
let tomHardware = {};
// console.log(`lenvo`,lenevo.__proto__,lenevo);


let generucCar = {tyres:4}

let tesla ={
    deriver :"Ai"
}

Object.setPrototypeOf(tesla,generucCar)


console.log(`tesla`,Object.getPrototypeOf(tesla));


