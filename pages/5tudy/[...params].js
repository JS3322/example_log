export default function Detail({ params }) {
  
  const [title, poster_path] = params || [];
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}