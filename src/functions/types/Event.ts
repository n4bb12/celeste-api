export interface Event {
  path: string;
  httpMethod: "get" | "head" | "post" | "put" | "delete" | "connect" | "options" | "trace" | "patch";
  headers: { [header: string]: string };
  queryStringParameters: { [parameter: string]: string };
  body: string;
  isBase64Encoded: boolean;
}
