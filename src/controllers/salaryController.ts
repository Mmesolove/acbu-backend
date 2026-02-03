import { Request, Response, NextFunction } from 'express';
import { AppError } from '../middleware/errorHandler';

export async function postSalaryDisburse(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // TODO: batch salary disbursement via transfer service; idempotency; approvals
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Salary disburse endpoint not yet implemented. Use /transfers for single transfers.',
    });
  } catch (e) {
    next(e);
  }
}

export async function getSalaryBatches(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // TODO: list salary batches and status
    res.status(200).json({ batches: [] });
  } catch (e) {
    next(e);
  }
}

export async function postSalarySchedule(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    // TODO: schedule recurring salary batch
    res.status(501).json({
      error: 'NOT_IMPLEMENTED',
      message: 'Salary schedule endpoint not yet implemented.',
    });
  } catch (e) {
    next(e);
  }
}
