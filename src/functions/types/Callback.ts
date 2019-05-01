import { Response } from "./Response"

export type Callback = (error: Error | null, response: Response) => void
