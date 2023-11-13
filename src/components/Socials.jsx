import styles from "../style";
import { socialMedia } from "../constants";

const Socials = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
       <p className= "text-white my-10"> Social Links: </p>
      <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
      </div>
    </section>
  )
}

export default Socials