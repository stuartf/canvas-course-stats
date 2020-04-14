In order to run this you need to:

1. Go to https://gatech.instructure.com/profile/settings and at the bottom of the page click "New Access Token" for "purpose" enter "canvas-course-stats" and leave expiration blank.
Copy the token it gives you (it will start with `2096~` and create a file named `.env` in the directory where you saved the code. Paste the token into that file such that it's contents are:

    CANVAS_TOKEN=2096~...

That effectively works as your username and password so the code can act as you, so don't share that file with anyone.

Next you'll need nodejs get the LTS version from https://nodejs.org/en/

Then you can open a console and navigate to where you saved the code.
Once you're there you can run:

    npm install

That will get some additional libraries that the code needs in order to run (so you only have to do it the first time).

Now that that's all done, you can run:

    node index.js 6434

And it will write out a JSON containing the activity summary and all the users for the course with id `6434` to the screen. You can save it to a file instead by redirecting the output like:

    node index.js 6434 > 6434.json

