// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import express from "express";
// import { createServer } from "node:http";

// import {Server} from "socket.io";
// import mongoose from "mongoose";

// import cors from "cors";
// const app=express();
// app.get("/home",(req,res)=>{
//   return res.json({"hello": "world"})
// })
  

// const start =async()=>{
//   app.listen(8000, () => {
//     console.log("LISTENING ON PORT 8000")
//   });



// }
// start();


import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {

    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://password@meetsync.nvm4skn.mongodb.net/?retryWrites=true&w=majority&appName=MeetSync")

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();
