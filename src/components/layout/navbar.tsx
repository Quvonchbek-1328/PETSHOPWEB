import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container py-4">
        <div className="h-10 py-4 md:flex flex-row justify-between w-full items-center hidden">
          <div className="lg:hidden block font-mulish">
            <Link href="/" className={"flex gap-x-2 items-center"}>
              <img src='/dark-logo.svg' alt="" className={"w-10 h-10"}/>
              <span className="text-black text-4xl font-roboto font-bold">
            <span className="text-darkblue">Pet</span>Shop
          </span>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center lg:gap-x-16 gap-x-8 font-mulish font-bold text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">Biz haqimizda</Link>
            <Link href="/contact">Aloqa</Link>
          </div>
          <div className="lg:block hidden font-mulish">
            <Link href="/" className={"flex gap-x-2 items-center"}>
              <img src='/dark-logo.svg' alt="" className={"w-10 h-10"}/>
              <span className="text-black text-4xl font-roboto font-bold">
            <span className="text-darkblue">PET</span>SHOP

          </span>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center lg:gap-x-16 gap-x-8 font-mulish font-bold text-lg">
            <Link href="/jobs">Uy hayvonlari</Link>
            <Link href="/workers">Sellerlar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;