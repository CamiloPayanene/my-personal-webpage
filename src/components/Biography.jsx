import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Biography = () => {
  return (
    <section
      id="biography"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span> I never{" "}
            <span className="text-white">stop </span> learning
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hi, I'm <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Camilo León</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <a href="https://www.linkedin.com/in/camilo1997/" target="_blank">
              {" "}
              <GetStarted />
            </a>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Welcome.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I am a telecommunications engineer. I have knowledge and skills in data analysis, software development: Backend (Python/Django, Java) and Frontend (React). Experience in implementation and maintenance of telecommunications networks, technical support and high capacity for troubleshoting.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[80%] h-[80%] relative z-[5]  mask-gradient-to-r mask-smooth"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Biography;
