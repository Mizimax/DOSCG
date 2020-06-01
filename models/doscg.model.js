import axios from 'axios'

export default class Doscg {

  computeSeries(inputArr){
    let inputLength = inputArr.length;
    let diffValue = 0;
    let currentDiffValue = 0;
    let resultArr = [];
    let d = 0;
    let r = 0;
    let currentR = 0;
    let firstValue = 0;
    for(let i = 0; i < inputLength-1; i++) {
      currentDiffValue = inputArr[i+1]-inputArr[i];
      if(i !== 0) {
        currentR = currentDiffValue - diffValue;
      }
      if(r !== 0 && r !== currentR) {
        return [];
      }
      r = currentR;
      diffValue = currentDiffValue;
    }
    d = inputArr[inputLength-1] - Math.pow(r, (6-1));
    console.log('>> diffValue: ', diffValue)
    firstValue = (inputArr[0]-d) / Math.pow(r, (3-1)) + d;
    console.log('>> d: ', d)
    console.log('>> r: ', r)
    resultArr = [
      firstValue,
      (firstValue-d) * Math.pow(r, (2-1)) + d,
      ...inputArr,
      (firstValue-d) * Math.pow(r, (6-1)) + d,
    ]
    return resultArr;
  }

  computeBC(a, ab, ac){
    let b = ab - a;
    let c = ac - a;
    return {
      b,
      c
    }
  }

  getBestPathToCW(goTo){
    const fromScg = 'SCG+Bangsue';
    const apiKey = 'AIzaSyBuZw-uZ7-QCzHUXdmk7JxIdZRWK6jqknE';
    let apiUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + fromScg + '&destination=' + goTo + '&key=' + apiKey
    return axios.get(apiUrl);
  }

  getNotificationWhenNoAnswer() {

  }

  lineBotAnswer() {

  }

}