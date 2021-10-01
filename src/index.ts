export const genericProperty = <Name extends string, Value>(
  name: Name,
  value: Value
) =>
  ({
    [name]: value,
  } as { readonly [key in Name]: Value })
