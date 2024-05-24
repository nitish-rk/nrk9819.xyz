export default async function Preflight({ req }) {
  const path = req.path;
  return {
    metadata: {
      url: `https://nrk9819.xyz/${path === "/" ? "" : path}`,
      ...getPageData(path),
    },
  };
}

function getPageData(path) {
  const data = {
    "/": {
      title: "NRK - web designer and developer",
      description:
        "NRK (nrk9819) is a web designer and developer based in Bhutan.",
      alt: "Personal website of NRK (nrk9819)",
    },
  };

  return data[path] || data["/"];
}
