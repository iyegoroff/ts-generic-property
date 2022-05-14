# ts-generic-property

[![npm](https://img.shields.io/npm/v/ts-generic-property)](https://npm.im/ts-generic-property)
[![build](https://github.com/iyegoroff/ts-generic-property/workflows/build/badge.svg)](https://github.com/iyegoroff/ts-generic-property/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/ts-generic-property/workflows/publish/badge.svg)](https://github.com/iyegoroff/ts-generic-property/actions/workflows/publish.yml)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/ts-generic-property)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/ts-generic-property?label=min+gzip)](https://bundlephobia.com/package/ts-generic-property)
[![npm](https://img.shields.io/npm/l/ts-generic-property.svg?t=1495378566925)](https://www.npmjs.com/package/ts-generic-property)

Creates object with generic property

## Getting started

`$ npm i ts-generic-property`

## Overview

```typescript
export const genericProperty = <Name extends string, Value>(
  name: Name,
  value: Value
) =>
  ({
    [name]: value,
  } as { readonly [key in Name]: Value })
```
