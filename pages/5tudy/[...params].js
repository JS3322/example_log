export default function Detail({ params }) {
  
  const [original_title, id, poster_path] = params || [];
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <h4>{original_title}</h4>
        <h4>{poster_path}</h4>
        <h4>{id}</h4>
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
