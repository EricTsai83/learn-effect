import { Effect } from "effect"

const effect1 = Effect.succeed(5)
const _mapped = Effect.map(effect1, (x) => x * 2) // Effect<number>
// 结果：Effect.succeed(10)

// 使用 map 會產生嵌套
const _nested = Effect.map(effect1, (x) => Effect.succeed(x * 2))
// 類型：Effect<Effect<number>> ❌

// 使用 flatMap 避免嵌套
const _flattened = Effect.flatMap(effect1, (x) => Effect.succeed(x * 2))
// 類型：Effect<number> ✅
