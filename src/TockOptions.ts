export interface TockOptions {
  // An optional function supplying extra HTTP headers for chat requests.
  // Extra headers must be explicitly allowed by the server's CORS settings.
  extraHeadersProvider?: () => Promise<Record<string, string>>;
  timeoutBetweenMessage?: number;
  widgets?: any;
}

export default TockOptions;
