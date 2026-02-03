import { Router } from 'express';
import { validateApiKey } from '../middleware/auth';
import { requireSegmentScope } from '../middleware/segmentGuard';
import { apiKeyRateLimiter } from '../middleware/rateLimiter';
import { getBillsCatalog, postBillsPay } from '../controllers/billsController';

const router = Router();

router.use(validateApiKey);
router.use(requireSegmentScope('bills:read', 'bills:write'));
router.use(apiKeyRateLimiter);

router.get('/catalog', getBillsCatalog);
router.post('/pay', postBillsPay);

export default router;
