export interface Context {
  isBase64Encoded: boolean;
  statusCode: number;
  headers: { [header: string]: string };
  body: string;
}
