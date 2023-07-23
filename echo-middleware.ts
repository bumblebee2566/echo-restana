export type echoData = {
  method: string;
  url: string;
  headers: Record<string, string>;
  rawHeaders: string[];
}

export function echoMiddleware(req: any, res: any, next: any) {
  const data: echoData = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    rawHeaders: req.rawHeaders,
  }
  req.echoData = data;
  return next();
}
