import express from "express";
import DoscgController from '../controllers/doscg.controller'

const router = express.Router()
const doscgController = new DoscgController();

router.post('/compute/series', doscgController.computeSeries);

router.post('/compute/bc', doscgController.computeBC);

router.get('/map/bpt/cw', doscgController.getBestPathToCW);

router.get('/line/noanswer', doscgController.getNotificationWhenNoAnswer);

export default router;