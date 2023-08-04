import { ReactNode } from 'react';

interface IFieldsetProps {
  title: string;
  children: ReactNode;
}

export default function Fieldset({ title, children }:IFieldsetProps) {
  return (
    <fieldset className={`flex flex-col gap-5 ${title}`}>
      <legend className=" text-2xl font-semibold capitalize mb-7">
        {title}
      </legend>
      {children}
    </fieldset>
  )
}
