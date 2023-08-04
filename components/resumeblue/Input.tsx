"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import uniqid from "uniqid";

interface IInput {
  id: string;
  type: string;
  placeholder: string;
  data: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => void;
  setter?: Dispatch<SetStateAction<string>>; 
  custom:string
}

export default function Input({
  id = uniqid(),
  type,
  placeholder,
  data,
  handleChange,
  setter,
  custom = "",
}:IInput) {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      className={`text-black w-full text-xl py-2 px-4 rounded-lg ${custom}`}
      type={type}
      id={id}
      placeholder={placeholder}
      value={data === undefined ? inputValue : data}
      onChange={(e) => {
        handleChange(e, setter === undefined ? setInputValue : setter);
      }}
    />
  );
}
