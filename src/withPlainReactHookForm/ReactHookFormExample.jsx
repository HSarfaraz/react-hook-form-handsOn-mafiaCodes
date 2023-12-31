import React from "react";
import "../../src/App.css";
import { useForm } from "react-hook-form";

function ReactHookFormExample() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "Sarfaraz",
      lastName: "Hussain",
      email: "",
    },
    mode: "all",
  });

  console.log(errors);

  return (
    <div className="App">
      <h1 className="font-black text-2xl">React Hook Form</h1>
      <form
        onSubmit={handleSubmit((value) => {
          alert(JSON.stringify(value, null, 2));
        })}
        className="p-4 shadow-lg flex flex-col space-y-4"
      >
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="First name"
            {...register("firstName", {
              required: { value: true, message: "First Name is required" },
              minLength: { value: 4, message: "Must be 4 chars in length" },
              maxLength: { value: 10, message: "too long" },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 inline-flex">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="Last name"
            {...register("lastName", {
              required: { value: true, message: "Last Name is required" },
              minLength: { value: 4, message: "Must be 4 chars in length" },
            })}
          />
          {errors.lastName && (
            <p className="text-red-500 inline-flex">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="flex flex-col  items-start space-y-1 ">
          <input
            type="text"
            className="min-w-full"
            placeholder="Email"
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Email should be a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 inline-flex">Should be a valid email</p>
          )}
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase">
          submit
        </button>
      </form>
      <div className="my-4 p-4 bg-gray-300">
        <h3 className="font-bold">Form values:</h3>
        <pre className="">{JSON.stringify({}, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ReactHookFormExample;
