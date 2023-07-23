import restana from "restana";

const service = restana({
  errorHandler(err, req, res) {
    console.log(`Something was wrong: ${err.message || err}`)
    res.send(err)
  }
});

service.use((req, res, next) => {
  console.log(req);
  return next();
});

service.get('/throw', (req, res) => {
  throw new Error('Upps!')
});

service.start(3000);
