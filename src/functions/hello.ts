import { Handler } from "./types"

export const handler: Handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "Hello, World",
  })
}
