import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import s5tudyCSS from '../public/styles/s5tudy.module.css'

export default function Check() {
  const [s5tudy, set5tudy] = useState();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/check/5tudy`)).json();
      set5tudy(results);
    })();
  }, []);
  const onClick = (original_title, poster_path, overview) => {
    router.push(
      {
        pathname:`/5tudy/${original_title}/${poster_path}`,
        query: {
          original_title: original_title,
          poster_path: poster_path,
          overview: overview}
    });
  };
  return (
    <div className={s5tudyCSS.containerCheck}>
    {!s5tudy && <h4>Loading...</h4>}
    {s5tudy?.map((movie) => (
      <div
      onClick={() => onClick(movie.original_title, movie.poster_path, movie.overview)}
      className={s5tudyCSS.contentsCheck}
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


