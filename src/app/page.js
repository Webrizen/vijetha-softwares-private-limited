import HeroIMG from '@/assets/phoenix.webp';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { BsFillBuildingsFill, BsCheckCircle, BsQuestion } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section className={styles.hero}>
        <div
          className={styles.leftHero}
        >
          <span
          >
            <BsFillBuildingsFill /> Elevating Your Digital Presence
          </span>
          <h1
          >
            Crafting Dynamic Web Applications That Inspire.
          </h1>
          <p
          >
            Embark on a digital journey where innovation meets functionality. At
            WebRizen, we're more than developers; we're architects of
            exceptional online experiences. With unwavering passion and
            cutting-edge expertise, we transform your visionary concepts into
            tangible web solutions.
          </p>
          <button>
            <AiOutlineDoubleRight />
            Discover the Possibilities
          </button>
        </div>
        <div
          className={styles.rightHero}
        >
          <Image
            src={HeroIMG}
            alt="Hero Image"
          />
        </div>
      </section>
    </>
  )
}