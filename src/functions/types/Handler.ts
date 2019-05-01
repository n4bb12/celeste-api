import { Callback } from "./Callback"
import { Context } from "./Context"
import { Event } from "./Event"

export type Handler = (event: Event, context: Context, callback: Callback) => void
