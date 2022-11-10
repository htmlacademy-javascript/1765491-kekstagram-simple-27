import { img } from "./filterchanger.js"
const scaleDown = document.querySelector('.scale__control--smaller')
const scaleUp = document.querySelector('.scale__control--bigger')
let scaleValue = document.querySelector('.scale__control--value')
const scaleLower = function () {
  let scaleNumber = Number(scaleValue.value.replace(/[^0-9]/g,""))
      scaleNumber=scaleNumber-25
      scaleValue.value=scaleNumber+'%'
        if (scaleNumber<=0) {
        scaleNumber=0;
        scaleValue.value=scaleNumber +"%"
        }
        img.setAttribute("style", `transform:scale(${scaleNumber/100})`);
}
const scaleUpper = function () {
  let scaleNumber = Number(scaleValue.value.replace(/[^0-9]/g,""))
      scaleNumber=scaleNumber+25
      scaleValue.value=scaleNumber+'%'
      if (scaleNumber>=100) {
        scaleNumber=100;
        scaleValue.value=scaleNumber +"%"
        }
        img.setAttribute("style", `transform:scale(${scaleNumber/100})`);
}

export {scaleDown, scaleUp, scaleLower, scaleUpper, scaleValue}
