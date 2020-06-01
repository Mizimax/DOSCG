import Doscg from '../models/doscg.model'

export default class DoscgController {

  computeSeries(req, res, next) {
    const inputs = req.body
    const doscg  = new Doscg()

    const result = doscg.computeSeries(inputs)

    if (result.length === 0) {
      res.status(400).json({
        status : 400,
        message: 'Can\'t compute this series !',
      })
    }

    return res.status(200).json({
      status : 200,
      message: 'You got series !',
      data   : result,
    })
  }

  computeBC(req, res, next) {
    const inputs = req.body
    const doscg  = new Doscg()

    const result = doscg.computeBC(inputs.a, inputs.ab, inputs.ac)

    return res.status(200).json({
      status : 200,
      message: 'You got B,C !',
      data   : result,
    })
  }

  getBestPathToCW(req, res, next) {
    const doscg = new Doscg()

    return doscg.getBestPathToCW('central+world+thailand').then(response => {
      return res.status(200).json({
        status : 200,
        message: 'You got best path to Central world !',
        data   : response.data.routes[0].legs[0].steps,
      })
    }).catch(error => {
      console.log('>> error: ', error)
      return res.status(400).json({
        status : 400,
        message: 'Request error !',
      })
    })
  }

  getNotificationWhenNoAnswer(req, res, next) {
    const doscg = new Doscg()
    if (!req.body.hasOwnProperty('events')) {
      return res.status(200).json({
        status : 200,
        message: 'MaxBot only accept !',
      })
    }

    req.setTimeout(10000, () => {
      doscg.getNotificationWhenNoAnswer()
    })

    let reply_token = req.body.events[0].replyToken

    return doscg.lineBotAnswer(reply_token).then(data => {
      return res.status(200).json({
        status     : 200,
        message    : 'Sending message !',
        apiResponse: data,
      })
    }).catch(error => {
      return res.status(200).json({
        status     : 400,
        message    : 'Error sending message !',
        apiResponse: error,
      })
    })

  }
}