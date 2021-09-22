const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port);
