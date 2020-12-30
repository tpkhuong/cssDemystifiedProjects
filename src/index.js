var { namesObj, statesBorn } = require("./ourObjs");
import { sayHello } from "./ourFunc";

console.log(`this is from ourObjs.js ${namesObj.firstChar}`);
console.log(`this is from ourObjs.js ${statesBorn.firstState}`);
sayHello(namesObj.secondChar);
