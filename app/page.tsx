import { getLocation } from "@/app/utils/ip";
import HomeIndex from "@/app/home/HomeIndex";

export default function Home() {
  getLocation().then((res) => {
    console.log(res);
  })
  return (
    <div>
      <HomeIndex></HomeIndex>
    </div>
  );
}
