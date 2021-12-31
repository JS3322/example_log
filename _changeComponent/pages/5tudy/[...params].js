
// import { useRouter } from "next/router";

// export default function Detail({ params }) {
//   const router = useRouter();
//   const [title, id, poster_path] = params || [];
//   return (
//     <div>
//         <img src={`https://api.cleancode.kr/t/p/w500/${poster_path}`} />
//         <h4>{title}</h4>
//     </div>
//   );
// }

// export function getServerSideProps({ params: { params } }) {
//   return {
//     props: {
//       params,
//     },
//   };
// }