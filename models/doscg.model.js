import axios from 'axios'

export default class Doscg {

  computeSeries(inputArr) {
    let inputLength      = inputArr.length
    let diffValue        = 0
    let currentDiffValue = 0
    let resultArr        = []
    let d                = 0
    let r                = 0
    let currentR         = 0
    let firstValue       = 0
    for (let i = 0; i < inputLength - 1; i++) {
      currentDiffValue = inputArr[i + 1] - inputArr[i]
      if (i !== 0) {
        currentR = currentDiffValue - diffValue
      }
      if (r !== 0 && r !== currentR) {
        return []
      }
      r         = currentR
      diffValue = currentDiffValue
    }
    d = inputArr[inputLength - 1] - Math.pow(r, (6 - 1))
    console.log('>> diffValue: ', diffValue)
    firstValue = (inputArr[0] - d) / Math.pow(r, (3 - 1)) + d
    console.log('>> d: ', d)
    console.log('>> r: ', r)
    resultArr = [
      firstValue,
      (firstValue - d) * Math.pow(r, (2 - 1)) + d,
      ...inputArr,
      (firstValue - d) * Math.pow(r, (6 - 1)) + d,
    ]
    return resultArr
  }

  computeBC(a, ab, ac) {
    let b = ab - a
    let c = ac - a
    return {
      b,
      c,
    }
  }

  getBestPathToCW(goTo) {
    const fromScg = 'SCG+Bangsue'
    const apiKey  = 'AIzaSyBuZw-uZ7-QCzHUXdmk7JxIdZRWK6jqknE'
    let apiUrl    = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + fromScg + '&destination=' + goTo + '&key=' + apiKey
    return axios.get(apiUrl)
  }

  getNotificationWhenNoAnswer() {

  }

  lineBotAnswer(reply_token) {
    const channelToken = 'R2aU/WXyc7BpyPj+8r6RTo6NnHof4D0fBk2iaYoX4gQvM7GnsOAil6yU49pLA1R2E5Na5wa1llckqmb5/y0o+ArzDmhJqQeFXAp9i4eEGYrsILmV5DAxIzoRqbf1fVNv0OAISK1uWyDOsKVzHoBxqAdB04t89/1O/w1cDnyilFU='
    let headers        = {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer {' + channelToken + '}',
    }
    let body           = JSON.stringify({
      replyToken: reply_token,
      messages  : [{
        type: 'text',
        text: 'What\'s up guy.',
      }],
    })
    return axios.post('https://api.line.me/v2/bot/message/reply', body, {
      headers: headers,
    })
      .then(response => {
        if (response.statusCode === 200) {
          return response.data
        }
      })
  }

}