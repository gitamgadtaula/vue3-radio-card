# A tailwind based card type radio button for Vue3

🥳 Supports dark mode 🌑

### Installation

```shell
npm install vue3-radio-card
yarn add vue3-radio-card
```

### Usage

```html
<template>
  <div>
    <RadioCard v-model="selected" :options="items" title="Choose your plan">
      <!-- Item slot start -->
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
      <!-- Item slot end -->
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
title: String // optional 
options: Array<ExtendedOption> // required
```

```js
interface Option {
    label: string;
    value: string;
  }
// Generic interface for object with optional Option keys and additional properties
interface ExtendedOption extends Option {
  [key: string]: any;
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

- #item

### Preview

![Preview Gif](https://github.com/gitamgadtaula/vue3-radio-card/blob/main/public/demo.gif?raw=true)

### Codesandbox

https://codesandbox.io/p/github/gitamgadtaula/vue-radio-card-demo/main

 <!-- <img src="/dist/demo.gif" alt="Preview of the component" /> -->

### Github

https://github.com/gitamgadtaula/vue3-radio-card.git
