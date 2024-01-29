import type { NextPage } from 'next';
import Default from 'templates/Default';
import Home from 'templates/Home';

const HomePage: NextPage = () => {
  return (
    <Default pageName="The Simpsols">
      <Home/>
    </Default>
  );
};

export default HomePage;