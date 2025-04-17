import useForm from "./hooks/useForm";

const App = () => {
  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Custom Hooks in Action</h1>
      <div className="mb-4">
        <h2 className="text-xl">Form Handling Example</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border p-2 mb-2"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="email"
            className="border p-2 mb-2"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit" className="border p-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
