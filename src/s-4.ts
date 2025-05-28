// eslint-disable
// @ts-nocheck

import { Effect } from "effect"

const delay = (message: string) =>
  Effect.promise<string>(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(message)
        }, 2000)
      })
  )

//      ┌─── Effect<string, never, never>
//      ▼
const _program = delay("Async operation completed successfully!")

const getTodo = (id: number) =>
  // Will catch any errors and propagate them as UnknownException
  Effect.tryPromise(() => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`))

//      ┌─── Effect<Response, UnknownException, never>
//      ▼
const _program2 = getTodo(1)

// Customizing Error Handling
const getTodo2 = (id: number) =>
  Effect.tryPromise({
    try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
    // remap the error
    catch: (unknown) => new Error(`something went wrong ${unknown}`)
  })

//      ┌─── Effect<Response, Error, never>
//      ▼
const _program3 = getTodo2(1)
