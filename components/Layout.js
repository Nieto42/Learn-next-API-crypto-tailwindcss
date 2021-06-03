import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>

      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/">
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Accueil
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/main.jpg"
            alt="footer-pic"
            width="400"
            height="25"
            className="rounded-3xl object-cover"
            quality={100}
          ></Image>
        </div>
      </header>
      <main className="pt-4 mx-20">{children}</main>

      <footer className="p-10">
        <Image
          src="/main.jpg"
          alt="footer-pic"
          width="1000"
          height="30"
          className="rounded-3xl objcct-cover"
          quality={100}
        />

        <ul className="pt-10 pb-4 flex justify-around">
          <li>À propos</li>
          <li>Qui sommes-nous</li>
          <li>From Scratch - 2021</li>
        </ul>
        <p>
          Twitch Chat:: Prime Gamingmartth_stark: não tem nada no git hehe Prime
          Gamingmartth_stark: estou remodelando ele kyofugod: c ja trabalha
          certo ? Prime Gamingmartth_stark: sim, na verdade faz um pouco mais de
          2 meses que estou como backend, mas estudo python desde 2016
          ModérateurVérifiéStreamElements: Pomodoro Technique : Caso eu não
          responda a sua mensagem é porque estou concentrado no trabalho. Ja ja
          respondo . (30 min de concentração e 5 min de break, faço isso para
          poder trabalhar com voces) Prime Gamingmartth_stark: antes trabalhava
          com infra-de redes
        </p>
      </footer>

      <style jsx>
        {`
          p {
            color: grey;
          }
        `}
      </style>
    </div>
  );
}
