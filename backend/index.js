import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import adminRoutes from "./routes/admin.route.js"
import songRoute from "./routes/song.route.js"
import albumRoute from "./routes/album.route.js"
import statRoute from "./routes/stat.route.js"


dotenv.config();


const app = express(); 


const PORT = process.env.PORT || 5000;

app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/admin" , adminRoutes);
app.use("/api/songs" , songRoute);
app.use("/api/albums" , albumRoute);
app.use("/api/stats" , statRoute);



app.listen(PORT , () => {
    console.log("Server 🗄️ is running 🚀 on " + PORT);
});