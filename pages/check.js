import Link from "next/link";
import { useRouter } from "next/router";
import s5tudy from '../public/styles/s5tudy.module.css'

export default function Check({ results }) {
  const router = useRouter();
  const onClick = (id, title, poster_path) => {
    router.push(`/5tudy/${id}/${title}/${poster_path}`);
  };
  return (
    <div className={s5tudy.containerCheck}>
    {results?.map((movie) => (
      <div
          onClick={() => onClick(movie.id, movie.original_title, movie.poster_path)}
          className={s5tudy.contentsCheck}
          key={movie.id}
      >
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h4>
        <Link href={`/5tudy/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
      </div>
    ))}
  </div>
  );
}

export async function getStaticProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/check/5tudy`)).json();
  return {
    props: {
      results,
    },
  };
}
