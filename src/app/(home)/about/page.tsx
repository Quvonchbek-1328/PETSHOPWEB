import Partners from "@/components/partners/partners";

const About = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="py-8 bg-lightblue">
        <div className="flex flex-col gap-y-8 container">
          <h1 className="text-5xl font-semibold text-darkindigo">Biz haqimizda</h1>
          <div
            className="bg-white flex lg:flex-row flex-col-reverse items-center lg:justify-between justify-center 2xl:gap-x-4 gap-x-0 lg:gap-y-0 gap-y-8 lg:px-16 px-8 rounded-xl md:py-16 py-0">
            <div className="flex flex-col lg:w-[600px] w-fit gap-y-10">
              <span className="flex items-center text-black sm:text-6xl text-5xl font-roboto font-bold gap-x-1.5">
                <img src="/dark-logo.svg" alt="" className={"sm:w-14 w-12 sm:h-14 h-12"}/>
                <span className="text-darkblue">UZ</span>WORKS
              </span>
              <p className="text-lg text-darkindigo">
                Biz &quot;UZWORKS&quot; nomli platformamiz 2024 yilida tashkil etilgan, va foydalanuvchilarga uydan chiqmasdan
                oson va qulay ish yoki ishchi topa olishini taminlash maqsad qilgan. Bizning platformamiz orqali
                insonlar o’zlariga qulay bo’lgan ishni topa olishlari mumkin hamda kompayinalar o’zlariga munosib
                hodimlarni xechqanday ovvoragarchiliklarsiz topishlari mumkin.
              </p>
            </div>
            <div className="">
              <img src="/about.svg" alt="" className="w-[600px] object-contain"/>
            </div>
          </div>
        </div>
      </div>
      <div className={"mb-8"}>
        <Partners/>
      </div>
    </div>
  )
}

export default About