import Logo from "./components/Logo";
import ImageUpload from "./components/ImageUpload";
import ThumbnailGenerator from "./components/ThumbnailGenerator";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-stone-50 ">
      <div className="w-36 p-4 ">
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-center pt-5 ">
        <ThumbnailGenerator></ThumbnailGenerator>
      </div>
    </main>
  );
}
