import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <Head>
        <title>{page}</title>
      </Head>

      <header className="header">
        <h1>CRYPTO WATCH</h1>
        <div className="btn">
          <Link href="/">
            <button>Accueil</button>
          </Link>
          <Link href="/about">
            <button>À propos</button>
          </Link>
        </div>
        <div>
          <Image
            src="/main.jpg"
            alt="footer-pic"
            width="400"
            height="25"
            className="img"
            quality={100}
          ></Image>
        </div>
      </header>

      <main className="children">{children}</main>

      <footer className="footer">
        <Image
          src="/main.jpg"
          alt="footer-pic"
          width="1000"
          height="30"
          className="img"
          quality={100}
        />

        <ul className="footer-container">
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
