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

  async getBestPathToCW(req, res, next) {
    const doscg = new Doscg()

    try {
      const response = await doscg.getBestPathToCW('central+world+thailand')
      return res.status(200).json({
        status : 200,
        message: 'You got best path to Central world !',
        data   : response.data.routes[0].legs[0].steps,
      })
    } catch (error) {
      console.log('>> error: ', error)
      return res.status(400).json({
        status : 400,
        message: 'Request error !',
      })
    }
  }

  async getNotificationWhenNoAnswer(req, res, next) {
    const doscg = new Doscg()
    try {
      //Find item
      let itemData = await doscg.getNotificationWhenNoAnswer()
      return res.status(200).json({
        status : 200,
        message: 'Get notifications !',
        data   : itemData,
      })
    } catch (error) {
      return res.status(400).json({
        status : 400,
        message: 'Error get notifications !',
        error  : error,
      })
    }
  }

  async addNotificationWhenNoAnswer(req, res, next) {
    const doscg = new Doscg()
    if (!req.body.hasOwnProperty('events')) {
      return res.status(200).json({
        status : 200,
        message: 'MaxBot only accept !',
      })
    }
    let reply_token = req.body.events[0].replyToken
    let name        = req.body.events[0].source.userId

    req.setTimeout(10000, async () => {

      try {
        let itemData = await doscg.addNotificationWhenNoAnswer(name)
        console.log('>> itemData: ', itemData)
        return res.status(200).json({
          status : 200,
          message: 'Add notifications !',
        })
      } catch (error) {
        return res.status(400).json({
          status : 400,
          message: 'Error add notifications !',
        })
      }

    })
    setTimeout(async () => {
      try {
        const data = await doscg.lineBotAnswer(reply_token)
        return res.status(200).json({
          status     : 200,
          message    : 'Sending message !',
          apiResponse: data,
        })
      } catch (error) {
        return res.status(200).json({
          status     : 400,
          message    : 'Error sending message !',
          apiResponse: error,
        })
      }
    }, 12000)

  }
}