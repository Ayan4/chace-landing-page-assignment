import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-between items-center mt-7">
      <div className="w-32">
        <Image
          src="https://www.chace.co.in/images/chace.svg"
          width={200}
          height={100}
          alt="logo"
        />
      </div>
      <button className="px-6 py-2 text-lg font-semibold tracking-wide border border-primary rounded-lg hover:bg-primary hover:text-black">
        fellowship program
      </button>
    </div>
  );
}

export default Navbar;
