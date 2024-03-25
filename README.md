# A tailwind based card type radio button for Vue3

### Installation

```
npm install vue3-radio-card
yarn install vue3-radio-card
```

### Usage

```
<template>
  <div>
    <AtomsRadioCard v-model="selected" :options="items" title="Choose your plan">
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
    </AtomsRadioCard>
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

### Preview
![Preview Gif](https://github.com/gitamgadtaula/vue3-radio-card/blob/main/public/demo.gif?raw=true)
 <!-- <img src="/dist/demo.gif" alt="Preview of the component" /> -->



### Github
https://github.com/gitamgadtaula/vue3-radio-card.git