"use client";
import CardAside from "./CardAside";
import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import styles from './styles.module.css'
import { ForwardedRef, forwardRef } from "react";

interface IExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  // Add more properties as per your actual data structure
}

interface IEducation {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  // Add more properties as per your actual data structure
}

interface IStates {
  name: string;
  surname: string;
  title: string;
  description: string;
  experState: [string, string][]; // Change this type to match your data structure
  eduState: [string, string][];
  experiences: IExperience[];
  education: IEducation[];
  image: string;
  address: string;
  number: string;
  email: string;
  // Add other properties from your 'states' object
}
interface ICardProps {
  states: IStates;
}

const Card = forwardRef<HTMLDivElement, ICardProps>(function Card(
  { states },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <section
      ref={ref}
      className={`${styles.grid} w-full max-h-full max-w-6xl  shadow-2xl`}
    >
      <CardHeader
        firstName={states.name}
        lastName={states.surname}
        title={states.title}
      />
      <CardMain
        description={states.description}
        // experience={states.experiences}
        // education={states.education}
        experState={states.experState}
        eduState={states.eduState}
      />
      <CardAside
        photo={states.image}
        address={states.address}
        phone={states.number}
        email={states.email}
      />
    </section>
  );
});

export default Card;
