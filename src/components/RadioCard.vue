<template>
  <div>
    <body class="p-4 flex min-h-screen">
      <form class="w-full max-w-screen-md mx-auto">
        <fieldset class="space-y-6">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-300"
            v-if="title"
          >
            <legend class="text-2xl text-gray-700 mr-4">{{ title }}</legend>
            <!-- <a href="#" class="font-medium text-gray-500 hover:text-gray-700"
              >Cancel your plan</a
            > -->
          </div>
          <div class="grid sm:grid-cols-4 gap-6">
            <label
              @click="handleOptionClick(option.value)"
              v-for="option in options"
              :for="option.value"
              class="relative flex flex-col bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <slot name="item" v-bind="option">
                <span class="text-black dark:text-white">
                  {{ option.label }}
                </span>
              </slot>

              <input
                type="radio"
                :name="option.value"
                :id="option.value"
                :value="option.value"
                class="absolute h-0 w-0 appearance-none"
                :checked="option.value === model"
              />
              <span
                aria-hidden="true"
                class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
              >
                <span
                  class="absolute top-2 right-2 h-4 w-4 md:h-6 md:w-6 inline-flex items-center justify-center rounded-full bg-green-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </form>
    </body>
  </div>
</template>

<script lang="ts" setup>
interface Option {
  label: string;
  value: string;
}
// Generic interface for object with optional Option keys and additional properties
interface ExtendedOption<T extends object = {}> extends Option {
  [key: string]: any;
}
const model = defineModel();
defineProps({ options: Array<ExtendedOption>, title: String });

function handleOptionClick(option: string | number) {
  model.value = option;
}
</script>
<style scoped>
input[type="radio"]:checked + span {
  display: block;
}
</style>
