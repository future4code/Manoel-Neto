import express from 'express';
import { AddressInfo } from 'net';

export const app = express();
export default app;

app.use(express.json())

export const server = app.listen(process.env.PORT || 3000, () => {
  if(server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error('Failure uopn starting server.')
  }
});