import axios from 'axios'
import {} from 'dotenv/config'
import connection from '../connection'

export default class Doscg {

  computeSeries(inputArr) {
    let inputLength      = inputArr.length
    let diffValue        = []
    let currentDiffValue = 0
    let resultArr        = []
    let r               = 0
    let currentR         = 0
    let firstValue       = 0
    for (let i = 0; i < inputLength - 1; i++) {
      currentDiffValue = inputArr[i + 1] - inputArr[i]
      if (i !== 0) {
        currentR = currentDiffValue - diffValue[diffValue.length-1]
      }
      if (r !== 0 && r !== currentR) {
        return []
      }
      r         = currentR
      diffValue.push(currentDiffValue);
    }
    let secondNo = inputArr[0]-(diffValue[0]+(r*(-1)));
    resultArr = [
      secondNo-(diffValue[0]+(r*(-2))),
      secondNo,
      ...inputArr,
      inputArr[inputLength-1]+(diffValue[diffValue.length-1]+(r*(1)))

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
    const apiKey  = process.env.GOOGLE_API
    let apiUrl    = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + fromScg + '&destination=' + goTo + '&key=' + apiKey
    return axios.get(apiUrl)
  }

  addNotificationWhenNoAnswer(name) {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO line_noti(user_name, noti_type) VALUES(?,?)`, [name, 1], function (err, result) {
          if (err) {
            return reject(err)
          }
          resolve(result)
        },
      )
    })
  }

  getNotificationWhenNoAnswer() {
    return new Promise((resolve, reject) => {
      connection.query(
        `
          SELECT *
          FROM line_noti
          WHERE noti_type = 1
        `, function (err, result) {
          if (err) {
            return reject(err)
          }
          resolve(result)
        },
      )
    })
  }

  lineBotAnswer(reply_token) {
    const channelToken = process.env.CHANNEL_TOKEN
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
  }

}