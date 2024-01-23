// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Create an express application
const app = express();

// Enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Parse URL encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the app
app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('Event Received:', type);

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';
    console.log('Status: ', status);

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        content: data.content,
        status
      }
    });
  }

  res.send({});
});

// Start the app on port 4003
app.listen(4003, () => {
  console.log('Listening on 4003');
});