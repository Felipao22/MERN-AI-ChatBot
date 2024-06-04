import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";

//Connections and listeners
const PORT = process.env.PORT || 5000;
connectToDataBase()
  .then(() => {
    app.listen(5000, () => console.log("Server Open & Connected to Database"));
  })
  .catch((err) => console.log(err));
