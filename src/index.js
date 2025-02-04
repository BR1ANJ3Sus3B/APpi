import app from './app.js';
import './db.js';

app.listen(app.get('port'),()=>console.log("server listening on port  3000"));