import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { FormValues } from "../types/formValues";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert(JSON.stringify(data)); // For demonstration purposes, you might want to stringify the data for better readability
  };

  const password = watch("password");

  return (
    <div className="canvas">
      <div className="wrapper wider-form"> {/* Adjusted class name */}
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            {/* New fields: Name, Age, Email, Registration Number */}
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                className="input-fields"
                {...register("name", { required: true })}
                id="name"
              />
              {errors.name && (
                <span className="error">This field is required</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="age">Age</label>
              <input
                className="input-fields"
                {...register("age", { required: true })}
                id="age"
                type="number"
              />
              {errors.age && (
                <span className="error">Please provide your age</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                className="input-fields"
                {...register("email", {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                id="email"
              />
              {errors.email && (
                <span className="error">Invalid email address</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="registrationNumber">Registration Number</label>
              <input
                className="input-fields"
                {...register("registrationNumber", { required: true })}
                id="registrationNumber"
              />
              {errors.registrationNumber && (
                <span className="error">Registration number is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div id="submit-button">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
