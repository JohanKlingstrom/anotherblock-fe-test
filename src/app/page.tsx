import { getData } from "./_lib/queryFns/getData";
import TrackView from "./_components/TrackView";
import { Songs } from "./_lib/songs-interface";

export default async function Home() {
  const initialData: Songs[] = await getData();
  return (
    <>
      <main>
        <TrackView props={initialData} />
      </main>
      <footer className="my-20 flex gap-2 md:gap-5 justify-center text-white opacity-50 font-light text-xs sm:text-base">
        <span>anotherblock code test</span>
        <span>johan klingström 2023</span>
      </footer>
    </>
  );
}
