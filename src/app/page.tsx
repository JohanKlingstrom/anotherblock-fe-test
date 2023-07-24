import { getData } from "../lib/queryFns/getData";
import Posts from "./Posts";

export default async function Home() {
  const initialData = await getData();
  return (
    <main>
      <Posts posts={initialData} />
      <footer className="my-20 flex gap-5 justify-center text-white opacity-50 font-light">
        <span>anotherblock code test</span>
        <span>johan klingström 2023</span>
      </footer>
    </main>
  );
}
