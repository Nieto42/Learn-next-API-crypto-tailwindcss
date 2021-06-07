import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Modal from "react-modal";
import React, { useState } from "react";

// Modal.setAppElement("#root"); //Retirer l'erreur du DOM Modal, marche pas MDR
export default function Home({ res }) {
  // console.log(res);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout page="Crypto Watch - Accueil">
      <ul className="cyptoContainer">
        {res.map((crypto, index) => (
          <li key={index} className="List">
            <Link href={`/${crypto.id}`}>
              <a className="linkList">
                <div className="imgList">
                  <img
                    src={crypto.logo_url}
                    alt={"Logo" + crypto.name}
                    className="img"
                  />
                </div>
                <h2>{crypto.name}</h2>
                <h3>{parseFloat(crypto.price).toFixed(2)} USD</h3>
                <p>
                  1 jours :{" "}
                  <span className="priceChange">
                    {parseFloat(crypto["1d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}
                  </span>
                  {crypto["1d"].price_change_pct < 0 ? (
                    <span style={{ color: "red" }}> &#x2798;</span>
                  ) : (
                    <span style={{ color: "green" }}> &#x279A;</span>
                  )}
                </p>
                <p>
                  1 mois :{" "}
                  <span className="priceChange">
                    {parseFloat(crypto["30d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}
                  </span>
                  {crypto["30d"].price_change_pct < 0 ? (
                    <span style={{ color: "red" }}> &#x2798;</span>
                  ) : (
                    <span style={{ color: "green" }}> &#x279A;</span>
                  )}
                </p>
                <p>
                  1 an :{" "}
                  <span className="priceChange">
                    {parseFloat(crypto["365d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}
                  </span>
                  {crypto["365d"].price_change_pct < 0 ? (
                    <span style={{ color: "red" }}> &#x2798;</span>
                  ) : (
                    <span style={{ color: "green" }}> &#x279A;</span>
                  )}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="more" onClick={() => setModalIsOpen(true)}>
        <Image
          src="/plus.svg"
          alt="logo plus"
          width="400"
          height="25"
          quality={100}
        ></Image>
      </div>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <p>I need to paid API for this Functionallity </p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </Modal>
    </Layout>
  );
}

////// Server side rendered /// Recup API sans backend///
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=2e9e0c1b77b335991d43cd464cc2b9835ab65940&ids=BTC,ETH,AAVE&interval=1d,30d,365d"
    ).then((res) => res.json());
    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}
