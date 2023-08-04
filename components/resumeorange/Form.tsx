'use client'

import Fieldset from './Fieldset'
import Input from './Input'
import Button from './Button'

import { experienceData, educationData } from '../../utils/constants'
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react'



interface IStates {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  surname: string;
  setSurname: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  experiences: ReactNode[];
  setExperiences: Dispatch<SetStateAction<ReactNode[]>>;
  education: ReactNode[];
  setEducation: Dispatch<SetStateAction<ReactNode[]>>;
}

interface IFormProps {
  states: IStates;
  handleResetClick: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, changeState: Dispatch<SetStateAction<string>>) => void;
  handleAddClick: (e: React.MouseEvent<HTMLButtonElement>, data: any, changeState: Dispatch<SetStateAction<ReactNode[]>>) => void;
  handlePDFclick: () => void;
}
interface IInput {
  id: string;
  type: string;
  placeholder: string;
  data: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => void;
  setter?: Dispatch<SetStateAction<string>>; 
  custom:string
}



export default function Form({
  states,
  handleResetClick,
  handleChange,
  handleAddClick,
  handlePDFclick,
}:IFormProps) {
  return (
    <form
      name="cv"
      className="w-full max-w-6xl bg-blue-200 rounded-xl shadow-lg p-7 font-sans flex flex-col gap-14"
    >
      <Fieldset key={'first'} title="Information about You">
        <Input
          handleChange={handleChange}
          key={0}
          type="text"
          data={states.name}
          setter={states.setName}
          placeholder="First name" id={''} custom={''}        />
        <Input
          handleChange={handleChange}
          key={1}
          type="text"
          data={states.surname}
          setter={states.setSurname}
          placeholder="Last name" id={''} custom={''}        />
        <Input
          handleChange={handleChange}
          key={2}
          type="text"
          data={states.title}
          setter={states.setTitle}
          placeholder="Title" id={''} custom={''}        />
        <Input
          handleChange={handleChange}
          key={3}
          type="file"
          data={states.image}
          setter={states.setImage}
          placeholder="Your photo" id={''} custom={''}        />
          
          
        <Input
          handleChange={handleChange}
          key={4}
          type="text"
          data={states.address}
          setter={states.setAddress}
          placeholder="Address" id={''} custom={''}        />
        <Input
          handleChange={handleChange}
          key={5}
          type="tel"
          data={states.number}
          setter={states.setNumber}
          placeholder="Phone number" id={''} custom={''}        />
        <Input
          handleChange={handleChange}
          key={6}
          type="email"
          data={states.email}
          setter={states.setEmail}
          placeholder="Email" id={''} custom={''}        />
        <Input
          handleChange={handleChange}
          key={7}
          type="text"
          data={states.description}
          setter={states.setDescription}
          placeholder="Description" id={''} custom={''}        />
      </Fieldset>

      <Fieldset key={'second'} title="experience">
        {states.experiences}
        <Button
          text="add"
          handleClick={(e) =>
            handleAddClick(e, experienceData, states.setExperiences)
          }
        />
      </Fieldset>

      <Fieldset key={'third'} title="education">
        {states.education}
        <Button
          text="add"
          handleClick={(e) =>
            handleAddClick(e, educationData, states.setEducation)
          }
        />
      </Fieldset>

      <div className="flex flex-col gap-5">
        <Button
          type="reset"
          text="reset"
          bg="bg-red-700"
          handleClick={handleResetClick}
        />

        <Button
          type="button"
          handleClick={handlePDFclick}
          text="generate PDF"
          bg="bg-green-800"
        />
      </div>
    </form>
  )
}
