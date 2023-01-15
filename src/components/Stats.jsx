import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section id="experience"className={`${styles.flexCenter} flex-col sm:mb-20 mb-6`}>
    <div className="mb-6">
    <h2 className="font-poppins font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Skills in ...
        </h2>
    </div>
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flew-row m-5`}
        >
          <img
            key={stat.id}
            src={stat.icon}
            alt={stat.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer`}
          />

          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
