const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log('App listening ON Port: ${PORT}');
});