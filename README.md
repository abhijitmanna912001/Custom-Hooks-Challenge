# 🚀 Custom Hooks Challenge

This project showcases a series of reusable **React custom hooks** in action. Each section demonstrates a practical use case for a custom hook — from local storage management and form handling to API fetching, debouncing, and tracking previous values.

🔗 Live Demo : [https://merry-mooncake-1a843d.netlify.app/](https://merry-mooncake-1a843d.netlify.app/)

## 📦 Installation

```bash
npm install
```

## 🧪 Run the Project

```bash
npm run dev
```

---

## 🧠 Custom Hooks Used

### 1. `useLocalStorage`

- **Purpose**: Manage and persist state in `localStorage`.
- **Usage Example**: Storing and retrieving a name across sessions.

### 2. `useFetch`

- **Purpose**: Fetch data from any API with loading and error states.
- **Usage Example**: Displaying posts from a placeholder API.

### 3. `useForm`

- **Purpose**: Handle form inputs, changes, and submission.
- **Usage Example**: A simple form that collects `username` and `email`.

### 4. `useDebounce`

- **Purpose**: Debounce a changing value after a specified delay.
- **Usage Example**: Debouncing user input for optimized operations (e.g., API calls).

### 5. `usePrevious`

- **Purpose**: Track the previous value of a variable or state.
- **Usage Example**: Displaying the previous value of an input.

---

## 🧩 Features Demonstrated

- ✅ **Form Handling Example**  
  Fill out a form with username and email. Input state is managed via `useForm`.

- ⌛ **Debounced Input Example**  
  Type into an input field to see how `useDebounce` updates the value after a delay.

- 🔁 **Previous Value Example**  
  View the current and previous value of an input side-by-side using `usePrevious`.

- 💾 **Local Storage Example**  
  Enter and save a value that persists even after refreshing the page, powered by `useLocalStorage`.

- 🌐 **Fetch Data Example**  
  Fetch and display JSON data from an API using `useFetch`.

---

## 🛠️ Built With

- **React** (with Hooks)
- **Vite** (for lightning-fast dev server)
- **TypeScript**
- **Tailwind CSS**

---

## 📂 Project Status

✅ Custom hooks created and tested  
✅ Hooks demonstrated in a simple UI  

---

## 🙌 Contributions & Feedback

Contributions are welcome! If you find a bug or have suggestions to improve the project, feel free to open an issue or submit a PR.

---
