import bodyParser from 'body-parser';

export default function parseResponse(app) {
    app.use(bodyParser.raw({inflate: true, limit: '100kb', type: 'application/octet-stream'}));
    app.use(bodyParser.urlencoded({ extended: false, type: 'application/urlencoded' })); // support encoded bodies
    app.use(bodyParser.json({ type: 'application/json' })); // support json encoded bodies
}
