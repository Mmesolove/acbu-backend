import { Router } from 'express';
import { validateApiKey } from '../middleware/auth';
import { requireSegmentScope } from '../middleware/segmentGuard';
import { apiKeyRateLimiter } from '../middleware/rateLimiter';
import { postLendingDeposit, postLendingWithdraw, getLendingBalance } from '../controllers/lendingController';

const router = Router();

router.use(validateApiKey);
router.use(requireSegmentScope('lending:read', 'lending:write'));
router.use(apiKeyRateLimiter);

router.post('/deposit', postLendingDeposit);
router.post('/withdraw', postLendingWithdraw);
router.get('/balance', getLendingBalance);

export default router;
