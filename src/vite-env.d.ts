/// <reference types="vite/client" />

interface Option {
    label: string;
    value: string;
  }
  // Generic interface for object with optional Option keys and additional properties
// interface ExtendedOption<T extends object = {}> extends Option {
//     [K in keyof T]: T[K];
//   }
//   // Example:
options = [
  {
    label: "50", // required
    value: "50", // required
    price: 5, // optional
    user: { name: "John" }, // optional
  },
];
