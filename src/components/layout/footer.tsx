import {FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkindigo py-8">
      <div className="container flex flex-col">
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 justify-between items-center">
          <span className="flex items-center text-white text-6xl font-roboto font-bold gap-x-1.5">
            <img src="/logo.svg" alt="" className={"w-14 h-14"}/>
            <span className="text-darkblue">UZ</span>WORKS
          </span>
          <div className="flex flex-row gap-x-4">
            <div className="p-2 bg-white rounded-full">
              <FaFacebook/>
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaWhatsapp/>
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaLinkedin/>
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaInstagram/>
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaTelegram/>
            </div>
          </div>
        </div>
        <div
          className="py-12 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-stretch gap-4 content-center w-full text-white">
          <div className="flex flex-col font-roboto justify-self-start">
            <span className="font-semibold py-4">Menu</span>
            <div className="flex flex-col gap-y-1">
              <span>Ishlar</span>
              <span>Ishchilar</span>
              <span>Yangiliklar</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-center">
            <span className="font-semibold py-4">Mizjozlar</span>
            <div className="flex flex-col gap-y-1">
              <span>Kompaniyalar</span>
              <span>Ishchilar</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-center">
            <span className="font-semibold py-4">Ma’lumot</span>
            <div className="flex flex-col gap-y-1">
              <span>FAQ</span>
              <span>Yangiliklar</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-end">
            <span className="font-semibold py-4">Kompaniya</span>
            <div className="flex flex-col gap-y-1">
              <span>Biz haqimizda</span>
              <span>Aloqa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
