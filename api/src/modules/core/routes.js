import uploadsInf from '../info/uploadsInfo';
import getInf from '../info/getInf';

export default function routes(app) {
    app.use('/get', getInf);
    app.use('/uploads', uploadsInf);
}