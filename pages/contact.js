import Link from "next/link";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Contact </title>
      </Head>
      <div>
        <h1>Contact</h1>
        <p>Contact with me!</p>
        <p>Phone/Zalo: 0385019964</p>
        <p>Email: Voduykhang312001@gmail.com</p>
        <Link href="https://www.facebook.com/KDVIT0301/">
          <a>Facebook: Võ Duy Khang</a>
        </Link>
      </div>
    </>
  );
};

export default Contact;
