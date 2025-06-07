import { Effect, Option } from "effect"

// Returning None for Invalid Weight
// ================================
// Function to validate weight and return an Option
const _validateWeightOption = (
  weight: number
): Effect.Effect<Option.Option<number>> => {
  if (weight >= 0) {
    // Return Some if the weight is valid
    return Effect.succeed(Option.some(weight))
  } else {
    // Return None if the weight is invalid
    return Effect.succeed(Option.none())
  }
}

// Returning Error for Invalid Weight
// ================================

// Function to validate weight or fail with an error
const _validateWeightOrFail = (
  weight: number
): Effect.Effect<number, string> => {
  if (weight >= 0) {
    // Return the weight if valid
    return Effect.succeed(weight)
  } else {
    // Fail with an error if invalid
    return Effect.fail(`negative input: ${weight}`)
  }
}
