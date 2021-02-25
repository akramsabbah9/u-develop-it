const express = require("express");
const db = require("./db/database");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use("/api", apiRoutes);


// default catch-all response for any other request (Not Found)
// NEEDS TO BE PLACED AFTER OTHER ROUTES, OR ROUTING WILL PRIORITIZE THIS!
app.use((req, res) => {
    res.status(404).end();
});


// Start server AFTER db connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}.`);
    });
});