import { FC, Fragment } from "react";

import classess from "./hero.module.css";
import Image from "next/image";
const Hero: FC = () => {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/introvert-event.jpg"
          alt="image hero"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im *****</h1>
      <p>This website is made with nextjs from </p>
    </section>
  );
};

export default Hero;
