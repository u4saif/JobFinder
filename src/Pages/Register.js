import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormInput } from "../components/FormInput";
import Logo from "../components/Logo";
import { loginUser, newUser } from "../feature/users/UserSlice";

export const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!values.email || !values.password || (!values.isMember && !values.name)){
      toast.error("Please fill all the fields.");
      return;
    }
    const {email,password,name} = values;
    (values.isMember) ? dispatch(loginUser({email,password})) :  dispatch(newUser({email,password,name}));
  };

  const ChangeEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
    console.log(values);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name input */}
        {!values.isMember && (
          <FormInput
            type="text"
            name="name"
            value={values.name}
            labelText="Name"
            handleChange={ChangeEvent}
          />
        )}

        {/* email input */}
        <FormInput
          type="email"
          name="email"
          value={values.email}
          labelText="Email"
          handleChange={ChangeEvent}
        />

        {/* password input */}
        <FormInput
          type="password"
          name="password"
          value={values.password}
          labelText="Password"
          handleChange={ChangeEvent}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {!isLoading ? "Submit" : "Wait..."}
        </button>

        {/* right after submit btn */}
        {/* toggle button */}

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>

          {/* {user && user.name} */}
        </p>
      </form>
    </Wrapper>
  );
};
