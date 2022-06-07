import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
      </Head>
      <div>
        <h1>About</h1>
        <p>
          My name is Khang and this is my website, is builded by NextJs framework.
          It is very basic about knowledge of NextJs.
          If you have some feedback, you can contact me through 
              <Link><a>Phone</a></Link>: 0385019964
              <Link href="https://www.facebook.com/KDVIT0301/"><a>FACEBOOK: https://www.facebook.com/KDVIT0301/</a></Link>
              Email: voduykhang312001@gmail.com
        </p>
      </div>
    </>
  );
};

export default About;
