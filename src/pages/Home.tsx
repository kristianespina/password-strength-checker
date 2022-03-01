import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";

import useDebounce from "../hooks/use-debounce";
import FullscreenLayout from "../layouts/FullscreenLayout";
import MainContainer from "../components/Containers/MainContainer";
import PasswordField from "../components/Forms/PasswordField";
import PasswordMeter from "../components/Forms/PasswordMeter";
import testingTechAnimation from "../animations/testing_tech.json";
import {
  getPasswordStrength,
  IGetPasswordStrength,
} from "../services/api/password";

const Home = () => {
  const [passwordStrength, setPasswordStrength] =
    useState<IGetPasswordStrength>();
  // Isolate form component rendering
  const { register, watch, handleSubmit } = useForm();

  // Debounce inputs
  const password = watch("password");
  const debouncedPassword = useDebounce<string>(password, 350);

  // Placeholder
  const onSubmit = (data: any) => console.log(data);

  const fetchPasswordStrength = async (password: String) => {
    if (password) {
      try {
        // Create api call
        let response: IGetPasswordStrength = await getPasswordStrength(
          password
        );

        // Clear
        setPasswordStrength(undefined); // * Needs to clear the state due to truncated struct

        // Update
        setPasswordStrength(response);
      } catch (err) {
        console.error(err);
      }
    }
  };
  useEffect(() => {
    fetchPasswordStrength(debouncedPassword);
    console.log("debouncedPassword", debouncedPassword);
  }, [debouncedPassword]);

  return (
    <FullscreenLayout>
      <MainContainer>
        <div className="h-full w-full flex flex-col lg:flex-row">
          <div className="flex-grow max-w-xl">
            <Lottie
              animationData={testingTechAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <div className="flex-grow max-w-xl text-center">
            <p className="text-4xl text-primary-800 font-semibold mb-8">
              Is your password strong enough?
            </p>
            <form className="mb-2" onSubmit={handleSubmit(onSubmit)}>
              <PasswordField register={register} name="password" />
            </form>
            {passwordStrength && (
              <>
                <div className="mb-4">
                  <PasswordMeter
                    score={passwordStrength?.score || 0}
                    maxScore={4}
                  />
                </div>
                <p className="text-xl text-primary-800 font-medium mb-8">
                  {passwordStrength?.warning}
                </p>
                <p className="text-md text-primary-800 font-medium mb-8">
                  It will take {passwordStrength.guessTimeString} to guess your
                  password.
                </p>
                {passwordStrength.suggestions &&
                  passwordStrength.suggestions?.map((suggestion) => (
                    <p className="text-md text-primary-800 font-semibold">
                      {suggestion}
                    </p>
                  ))}
              </>
            )}
          </div>
        </div>
      </MainContainer>
    </FullscreenLayout>
  );
};

export default Home;
