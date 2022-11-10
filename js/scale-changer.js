import { img } from "./filterchanger.js"
const scaleDown = document.querySelector('.scale__control--smaller')
const scaleUp = document.querySelector('.scale__control--bigger')
const DEFAULT_SCALE_VALUE = "55%"
const stepScale = 25
let scaleValue = document.querySelector('.scale__control--value')
const scaleLower = function () {
  let scaleNumber = Number(scaleValue.value.replace(/[^0-9]/g,""))
      scaleNumber=scaleNumber-stepScale
      scaleValue.value=scaleNumber+'%'
        if (scaleNumber<=0) {
        scaleNumber=0;
        scaleValue.value=scaleNumber +"%"
        }
        const scaleFactor = scaleNumber/100
        img.setAttribute("style", `transform:scale(${scaleFactor})`);
}
const scaleUpper = function () {
  let scaleNumber = Number(scaleValue.value.replace(/[^0-9]/g,""))
      scaleNumber=scaleNumber+stepScale
      scaleValue.value=scaleNumber+'%'
      if (scaleNumber>=100) {
        scaleNumber=100;
        scaleValue.value=scaleNumber +"%"
        }
        const scaleFactor = scaleNumber/100
        img.setAttribute("style", `transform:scale(${scaleFactor})`);
}

export {scaleDown, scaleUp, scaleLower, scaleUpper, scaleValue, DEFAULT_SCALE_VALUE}
