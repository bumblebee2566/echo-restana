import restana from "restana";
import { echoData, echoMiddleware } from "./echo-middleware";

const service = restana({
  errorHandler(err, req, res) {
    console.log(`Something was wrong: ${err.message || err}`)
    res.send(err)
  },
});

service.use(echoMiddleware);

service.get('/throw', (req, res) => {
  throw new Error('Upps!')
});

service.all('*', (req, res) => {
  const data: echoData = req.echoData;
  res.send(data);
});

service.start(3000);
