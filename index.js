const dotenv = require('dotenv').config();
const Canvas = require('canvas-lms-api');

const canvas = new Canvas('https://gatech.instructure.com', {'accessToken': process.env.CANVAS_TOKEN});

const course_id = process.argv[2];

Promise.all([
  canvas.get(`courses/${course_id}/analytics/student_summaries`),
  canvas.get(`courses/${course_id}/users`)
]).then((activity, users) => console.log(JSON.stringify({ activity, users })));
