"use client"
import { getCookie } from "cookies-next";
import { User } from "./lib/types/user.type";
import useWebSocket from 'react-use-websocket';

export default function Home() {
  const auth = getCookie("isAuthenticated")
  const user: User = auth ? JSON.parse(auth?.toString()) : { _id: "", nickname: "" }
  const {
    // sendMessage,
    // sendJsonMessage,
    // lastMessage,
    // lastJsonMessage,
    // readyState,
    // getWebSocket,
  } = useWebSocket(`${process.env.WS_URL}?_id=${user._id}&nickname=${user.nickname}`, {
    onOpen: (event) => console.log('opened', event)
  });

  return (
    <main className="dark grid place-content-center text-white w-full h-screen gap-7">
      <h2 className="text-4xl font-bold">BIENVENIDO KOAKAPSNAT</h2>
    </main>
  );
}
