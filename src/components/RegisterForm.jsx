import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Yup Validation Schema
const schema = yup.object({
  fullName: yup.string().required("Full Name is required").min(3),
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .min(8)
    .matches(/\d/, "Must include at least 1 number"),
  confirmPassword: yup
    .string()
    .required("Confirm password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup.boolean().oneOf([true], "Accept terms"),
});

function RegisterForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(true);
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>

        {/* Full Name */}
        <div className="form-group">
          <input placeholder=" " {...register("fullName")} />
          <label>Full Name</label>
          <p className="error">{errors.fullName?.message}</p>
        </div>

        {/* Email */}
        <div className="form-group">
          <input placeholder=" " {...register("email")} />
          <label>Email</label>
          <p className="error">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div className="form-group">
          <input type="password" placeholder=" " {...register("password")} />
          <label>Password</label>
          <p className="error">{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <input type="password" placeholder=" " {...register("confirmPassword")} />
          <label>Confirm Password</label>
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        {/* Terms Checkbox */}
        <div className="checkbox">
          <input type="checkbox" {...register("terms")} />
          <label>I accept Terms & Conditions</label>
        </div>
        <p className="error">{errors.terms?.message}</p>

        {/* Submit Button */}
        <button type="submit">Register</button>

        {/* Success Message */}
        {success && <p className="success">🎉 Registration Successful!</p>}
      </form>
    </div>
  );
}

export default RegisterForm;