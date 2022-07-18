import { Router } from "express";
import { newWifiController } from "../controllers/wifiControllers.js";
import { validateToken } from "../middlewares/validateToken.js"
import { newWifiMiddleware } from "../middlewares/wifiMiddleware.js";

const wifiRoute = Router();

wifiRoute.post('/new-wifi', validateToken, newWifiMiddleware, newWifiController );
wifiRoute.get('/get-wifi', validateToken, );
wifiRoute.get('/get-wifi/:id', validateToken, );
wifiRoute.delete('/delete-wifi/:id', validateToken, );

export default wifiRoute;
