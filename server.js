import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';

// Are we running in dev mode?
const dev = process.env.NODE_ENV !== 'production';

// Next.js stuff.
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		server.get('*', (req, res) => handle(req, res));

		server.listen(3000, err => {
			if (err) {
				throw err;
			}

			console.log('> Server running at http://localhost:3000');
		});
	});