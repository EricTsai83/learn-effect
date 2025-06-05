// pipe
import { Effect, pipe } from "effect"

// Define simple arithmetic operations
const increment = (x: number) => x + 1
const double = (x: number) => x * 2
const subtractTen = (x: number) => x - 10

// Sequentially apply these operations using `pipe`
const result = pipe(5, increment, double, subtractTen)

console.log(result)
// Output: 2

// Function to add a small service charge to a transaction amount
const addServiceCharge = (amount: number) => amount + 1

// Simulated asynchronous task to fetch a transaction amount from database
const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

// Apply service charge to the transaction amount
const finalAmount = pipe(
  fetchTransactionAmount,
  Effect.map(addServiceCharge)
)

Effect.runPromise(finalAmount).then(console.log) // Output: 101
