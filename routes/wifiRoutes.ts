import { Router } from "express";
import { deleteWifiController, getAllWifiController, getWifiByIdController, newWifiController } from "../controllers/wifiControllers.js";
import { validateToken } from "../middlewares/validateToken.js"
import { newWifiMiddleware } from "../middlewares/wifiMiddleware.js";

const wifiRoute = Router();

wifiRoute.post('/new-wifi', validateToken, newWifiMiddleware, newWifiController );
wifiRoute.get('/get-wifi', validateToken, getAllWifiController);
wifiRoute.get('/get-wifi/:id', validateToken, getWifiByIdController);
wifiRoute.delete('/delete-wifi/:id', validateToken, deleteWifiController);

export default wifiRoute;
