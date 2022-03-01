import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  name: string;
}

const PasswordField = ({ register, name }: Props) => {
  const [show, setShow] = useState(false);
  const toggleVisibility = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="relative w-full">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <label
            className="rounded px-2 py-1 text-sm text-gray-600 w-10 cursor-pointer text-center"
            onClick={toggleVisibility}
          >
            <FontAwesomeIcon icon={show ? faEyeSlash : faEye} className="w-8" />
          </label>
        </div>

        <input
          className="appearance-none border rounded-[16px] w-full py-3 px-12 border-gray-300 bg-white focus:outline-none focus:border-primary-800 text-gray-700 text-center"
          id="password"
          type={show ? "text" : "password"}
          autoComplete="off"
          data-lpignore="true" // Disable lastpass
          {...register(name)}
        />
      </div>
    </div>
  );
};

export default PasswordField;
