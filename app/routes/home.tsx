import { Header } from "~/components/header/Header";
import type { Route } from "./+types/home";
import { Experience } from "~/components/experience/Experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Experience />
    </div>
  );
}
