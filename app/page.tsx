import { cookies } from 'next/headers'
import Sidebar from "./components/Sidebar";

export default function Home() {
  const auth = cookies().get("isAuthenticated")
  const user: { _id: string, nickname: string } = auth ? JSON.parse(auth.value) : { _id: "", nickname: "" }

  return (
    <main className="dark text-white w-full h-screen">
      <Sidebar user={user}/>
    </main>
  );
}
