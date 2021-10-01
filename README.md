# ts-generic-property

[![npm version](https://badge.fury.io/js/ts-generic-property.svg?t=1495378566925)](https://badge.fury.io/js/ts-generic-property)
[![CircleCI](https://circleci.com/gh/iyegoroff/ts-generic-property.svg?style=svg)](https://circleci.com/gh/iyegoroff/ts-generic-property)
[![Dependency Status](https://david-dm.org/iyegoroff/ts-generic-property.svg?t=1495378566925)](https://david-dm.org/iyegoroff/ts-generic-property)
[![devDependencies Status](https://david-dm.org/iyegoroff/ts-generic-property/dev-status.svg)](https://david-dm.org/iyegoroff/ts-generic-property?type=dev)
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
