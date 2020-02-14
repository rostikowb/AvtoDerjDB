import { Router } from 'express';
import uploadInfo from './controllers/uploadInfo/uploadInfo';
import uploadInfoStart from './controllers/uploadInfo/uploadInfoStart';
import uploadInfoStatus from './controllers/uploadInfo/uploadInfoStatus';
import checkAccess from './../middleware/checkAuth'
const router = Router();

router.post('/', checkAccess, uploadInfo);
router.post('/start', checkAccess, uploadInfoStart);
router.post('/status', checkAccess, uploadInfoStatus);

export default router;