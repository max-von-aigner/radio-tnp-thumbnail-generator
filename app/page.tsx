import Logo from "./components/Logo";
// import ThumbnailGenerator from "./components/ThumbnailGenerator";
import dynamic from "next/dynamic";

// Dynamic import with no SSR
const ThumbNailGenerator = dynamic(
  () => import("./components/ThumbnailGenerator"), // Adjust path as necessary
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-stone-50 ">
      <div className="w-36 p-4 ">
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-center pt-5 ">
        {/* <ThumbnailGenerator></ThumbnailGenerator> */}
        <ThumbNailGenerator></ThumbNailGenerator>
      </div>
    </main>
  );
}
