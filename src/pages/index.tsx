export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/medicos",
      permanent: false,
    },
  };
}

const RedirectPage = () => {
  return null; // This will not be rendered
};

export default RedirectPage;
