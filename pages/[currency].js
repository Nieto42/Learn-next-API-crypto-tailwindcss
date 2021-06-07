import Layout from "../components/Layout";

export default function Currency({ res }) {
  console.log(res);
  return (
    <Layout page={"Page" + res.name}>
      <div className="currency">
        <div className="logo">
          <img src={res.logo_url} alt={res.name} />
        </div>
        <h2>{res.name}</h2>
        <p className="description">{res.description}</p>
        <p className="url">
          <a href={res.reddit_url} target="_blank">
            {res.reddit_url}
          </a>
        </p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query.currency);
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=2e9e0c1b77b335991d43cd464cc2b9835ab65940&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
    );
    const result = await res.json();

    return {
      props: { res: result[0] },
    };
  } catch (err) {
    console.error(err);
  }
}
