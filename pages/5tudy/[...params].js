
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [id, title, poster_path] = params || [];
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        
        <h4>{poster_path}</h4>
        <h4>{id}</h4>
      <h4>{title}</h4>
    </div>
  );
}

export function getStaticProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}