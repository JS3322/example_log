import { useRouter } from "next/router";
import { Back, WorkImage } from '../../components/work'

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      <Back>
      <h4>{router.query.original_title}</h4>
      </Back>
      <WorkImage src={`https://image.tmdb.org/t/p/w500/${router.query.poster_path}`} alt="ImageLoading" />
      <span>{router.query.overview}</span>
    </div>
  );
}
