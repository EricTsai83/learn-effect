// Applying a Discount
import { Effect, pipe } from "effect"

// Function to apply a discount safely to a transaction amount
const applyDiscount = (
  total: number,
  discountRate: number
): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100)

// Simulated asynchronous task to fetch a transaction amount from database
const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

// Chaining the fetch and discount application using `flatMap`
const finalAmount = pipe(
  fetchTransactionAmount,
  Effect.flatMap((amount) => applyDiscount(amount, 5))
)

Effect.runPromise(finalAmount).then(console.log)
// Output: 95

// Ensure All Effects Are Considered
Effect.flatMap((amount: number) => {
  // This effect will be ignored
  Effect.sync(() => console.log(`Apply a discount to: ${amount}`))
  return applyDiscount(amount, 5)
})
