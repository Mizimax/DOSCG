import Doscg from '../models/doscg.model'

export default class DoscgController{

  computeSeries(req, res, next){
    const inputs = req.body;
    const doscg = new Doscg();

    const result = doscg.computeSeries(inputs.series);

    res.status(200).json({
      status: 200,
      message: "You got series !",
      data: result
    })
  }

  computeBC(req, res, next){
    const inputs = req.body;
    const doscg = new Doscg();

    const result = doscg.computeBC(inputs.a, inputs.equationAb, inputs.equationAc);

    res.status(200).json({
      status: 200,
      message: "You got B,C !",
      data: result
    })
  }

  getBestPathToCW(req, res, next){
    const doscg = new Doscg();

    const result = doscg.getBestPathToCW('Central World');

    res.status(200).json({
      status: 200,
      message: "You got best path to Central world !",
      data: result
    })
  }

  getNotificationWhenNoAnswer(req, res, next){
    const doscg = new Doscg();

    const result = doscg.getNotificationWhenNoAnswer();

    res.status(200).json({
      status: 200,
      message: "You got notification because of no answer !",
      data: result
    })
  }

}