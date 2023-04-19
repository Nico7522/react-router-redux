import ProgressBar from "../../components/progress-bar/progress-bar";

const HomePage = () => {
  return (
    <>
      <h1>Page d'acceuil</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        perferendis quis optio officiis enim libero aliquam iusto numquam
        nesciunt quasi necessitatibus aut unde aspernatur est! Quasi laudantium
        saepe nesciunt similique?
        <h2>Demo Progress bar</h2>
        <ProgressBar val={10} />
      </p>
    </>
  );
};

export default HomePage;
