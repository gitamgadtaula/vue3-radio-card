# A tailwind based card type radio button for Vue3

### Installation

```shell
npm install vue3-radio-card
yarn install vue3-radio-card
```

### Usage

```html
<template>
  <div>
    <RadioCard v-model="selected" :options="items" title="Choose your plan">
      <!-- Default slot start -->
      <template #item="{ value, price }">
        <span class="font-bold text-gray-900">
          <span class="text-4xl">{{ value }}</span>
          <span class="text-2xl uppercase">GB</span>
        </span>
        <span>
          <span class="text-xl font-bold text-gray-500">$</span>
          <span class="text-xl font-bold text-gray-900 -ml-1"
            >&nbsp;{{ price }}</span
          >
          <span class="text-xl font-semibold text-gray-500">/</span>
          <span class="text-lg font-semibold text-gray-500">mo</span>
        </span>
      </template>
      <!-- Default slot end -->
    </RadioCard>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import { RadioCard } from "vue3-radio-card";
  import "vue3-radio-card/style.css";
  const selected = ref();
  const items = [
    { label: "50", value: "50", price: 5 },
    { label: "80", value: "80", price: 7 },
    { label: "100", value: "100", price: 10 },
    { label: "200", value: "200", price: 18 },
  ];
</script>
```

### Props

```js
title: String

options: Array<ExtendedOption>

```

```js
interface Option {
    label: string;
    value: string;
  }
// Generic interface for object with optional Option keys and additional properties
interface ExtendedOption<T extends object = {}> extends Option {
    [K in keyof T]: T[K];
  }
// Example:
options = [
  {
    label: "50", // required
    value: "50", // required
    price: 5, // optional, useful for sending data in the slot template
    user: { name: "John" }, // optional
  },
];
```

### Slots

- default slot

### Preview

![Preview Gif](https://github.com/gitamgadtaula/vue3-radio-card/blob/main/public/demo.gif?raw=true)

 <!-- <img src="/dist/demo.gif" alt="Preview of the component" /> -->

### Github

https://github.com/gitamgadtaula/vue3-radio-card.git
