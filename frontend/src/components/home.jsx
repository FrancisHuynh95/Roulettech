import Posts from './posts';
import CreateButton from './create';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome</h1>
      <Posts />
      <CreateButton/>
    </div>
  );
}

export default Home;
