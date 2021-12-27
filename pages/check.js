import s5tudy from '../public/styles/s5tudy.module.css'

export default function Check({ results }) {
  return (
    <div className={s5tudy.containerCheck}>
    {results?.map((movie) => (
      <div className={s5tudy.contentsCheck} key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h4>{movie.original_title}</h4>
      </div>
    ))}
  </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/check/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
