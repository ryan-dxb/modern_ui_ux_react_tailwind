import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="billing" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="relative z-10 w-full h-full" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] w-1/2 h-1/2 -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="google_play"
            className="object-contain w-32 h-10 mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="object-contain h-10 cursor-pointer w-36"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
