import { Request, Response, NextFunction } from 'express';

export default function makeHandlerAwareOfAsyncErrors(handler: any) {
	return async function(req: Request, res: Response, next: NextFunction) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}