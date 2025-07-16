import { getLocation } from "@/app/utils/ip";

export default function Home() {
  getLocation().then((res) => {
    console.log(res);
  })
  return (
    <div>Demo</div>
  );
}
