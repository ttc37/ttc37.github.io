import { robot, profpic } from "../assets";

import { projectdesc } from "../constants";
import styles from "../style";
import ProjectInfo from "./ProjectInfo";

const Main = () => {
  return (
    <><section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Thomas Cham <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Software Developer</span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A 24 year old Software Developer based out of New York City looking to improve upon his own current skillset.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={profpic} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

    </section>
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={styles.heading2}>
          Below are my current or finished personal projects: <br className="sm:block hidden" />
          </h2>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {projectdesc.map((card) => <ProjectInfo key={card.id} {...card} />)}
        </div>

    </section></>
  );
};

export default Main;