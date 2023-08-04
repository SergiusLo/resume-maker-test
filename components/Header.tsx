import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="pl-1 pr-1 border-b-2 drop-shadow-md flex justify-between items-center">
          <div className="p-2">
            <Link href="/">
              <Image
                alt="logo"
                width={200}
                height={50}
                src="./assets/flattr.svg"
              />
            </Link>
          </div>
          <div>
            <p className="flex justify-center text-3xl">
              Hi, Welcome to Resume Builder
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
