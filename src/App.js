import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="flex justify-center flex-col">
      <Navigation />
      <h1 className="text-4xl md:text-3xl font-bold underline bg-red-500">
        Hello world!
      </h1>
    </div>
  );
}
