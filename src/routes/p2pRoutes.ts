import { Router } from 'express';
import { validateApiKey } from '../middleware/auth';
import { requireSegmentScope } from '../middleware/segmentGuard';
import { apiKeyRateLimiter } from '../middleware/rateLimiter';
import { postTransfers, getTransfers, getTransferById } from '../controllers/transferController';

const router = Router();

router.use(validateApiKey);
router.use(requireSegmentScope('p2p:read', 'p2p:write'));
router.use(apiKeyRateLimiter);

router.post('/send', postTransfers);
router.get('/history', getTransfers);
router.get('/:id', getTransferById);

export default router;
