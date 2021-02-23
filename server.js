const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default catch-all response for any other request (Not Found)
// NEEDS TO BE PLACED AFTER OTHER ROUTES, OR ROUTING WILL PRIORITIZE THIS!
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});