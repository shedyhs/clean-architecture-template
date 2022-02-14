import './config/module-alias';
import { app } from './config/app';

app.listen(3334, () =>
  console.log('🚀 Server started at http://localhost:3334'),
);
