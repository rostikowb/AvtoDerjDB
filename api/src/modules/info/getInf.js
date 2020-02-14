import { Router } from 'express';
import infoGetByNumber from './controllers/getInfo/infoGetByNumber';

const router = Router();

router.get('/', infoGetByNumber);

export default router;
