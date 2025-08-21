import { Request, Response } from 'express';

export class HealthController {
  static async healthCheck(req: Request, res: Response): Promise<void> {
    try {
      // For mock database, we'll just return healthy
      res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: 'connected (mock)',
      });
    } catch (error) {
      res.status(503).json({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}