// Conditional Effect Execution
import type { Option } from "effect"
import { Effect, Random } from "effect"

const validateWeightOption = (
  weight: number
): Effect.Effect<Option.Option<number>> =>
  // Conditionally execute the effect if the weight is non-negative
  Effect.succeed(weight).pipe(Effect.when(() => weight >= 0))

// Run with a valid weight
Effect.runPromise(validateWeightOption(100)).then(console.log)
/*
Output:
{
  _id: "Option",
  _tag: "Some",
  value: 100
}
*/

// Run with an invalid weight
Effect.runPromise(validateWeightOption(-5)).then(console.log)
/*
Output:
{
  _id: "Option",
  _tag: "None"
}
*/

const randomIntOption = Random.nextInt.pipe(
  Effect.whenEffect(Random.nextBoolean)
)

console.log(Effect.runSync(randomIntOption))
/*
Example Output:
{ _id: 'Option', _tag: 'Some', value: 8609104974198840 }
*/
