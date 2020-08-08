import { Router } from 'next/router';

function Index() {
  return null;
}

Index.getInitialProps = async (ctx) => {
  const { res } = ctx;

  if (res) {
    res.writeHead(302, {
      Location: '/login',
    });
    res.end();
  } else {
    Router.push('/login');
  }
  return {};
};

export default Index;
