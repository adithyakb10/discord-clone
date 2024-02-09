import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const state = false;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello</p>;
      <Button className={cn("bg-black", state && "bg-white")}>Click me</Button>
    </div>
  );
}
