import Image from 'next/image';
import placeholder from "../../public/assets/avatar-placeholder.png";
interface ICardAsideProps {
  photo: string;
  address: string;
  phone: string;
  email: string;
}

export default function CardAside({ photo, address, phone, email }:ICardAsideProps) {
  
console.log(photo)
  return (
    <aside
      className="bg-gray-300 p-7 flex flex-col gap-6"
      style={{ gridArea: "aside" }}
    >
      
      <Image
        width={100}
        height={100}
        src={photo || placeholder}
        alt="user avatar"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h3 className="border-b text-blue-900 border-gray-400 text-2xl font-semibold capitalize">
          personal details
        </h3>
        <h4 className="capitalize text-lg font-semibold text-gray-800">
          address
          <p className="text-base normal-case font-normal">{address}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-800">
          phone number
          <p className="text-base normal-case font-normal">{phone}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-800">
          email
          <p className="text-base normal-case font-normal">{email}</p>
        </h4>
      </div>
    </aside>
  );
}
