import { Inter } from "@next/font/google";
import SideCard from "../Components/SideCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="upper-layer">
        <SideCard />
      </div>
    </>
  );
}
