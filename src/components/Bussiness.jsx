import { experiences } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== experiences.length - 1 ? "mb-6" : "mb - 0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px* leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[68px* leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Bussiness = () => (
  <section id="experience" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> My work experience ...</h2>
      <p className={`${styles.paragraph} max-w-[470x] mt-5`}>
        During my time at university I was working on some projects in the field
        of telecommunications and I had the opportunity to put into practice
        knowledge of <span className="text-red-500 font-bold">networking</span>,
        <span className="text-yellow-500 font-bold">
          {" "}
          Business process management
        </span>{" "}
        and programming to automate and streamline tasks, mainly using{" "}
        <span className="text-green-500 font-bold">Python</span>{" "}
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <div className="mb-6">
        <h2 className={styles.heading2}>My last positions...</h2>
      </div>
      {experiences.map((experience, index) => (
        <FeatureCard key={experience.id} {...experience} index={index} />
      ))}
    </div>
  </section>
);

export default Bussiness;
