"use client";
import React, { useEffect, useState } from "react";
import { API } from "../api";
import { Button } from "@nextui-org/react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import useWebSocket from "react-use-websocket";

interface SidebarProps {
  user: {
    _id: string,
    nickname: string
  }
}

export const Sidebar = (props: SidebarProps) => {
  const router = useRouter()
  const [contacts, setContacts] = useState<{_id: string, nickname: string, telephone: string}[]>([])
  useWebSocket(`${process.env.WS_URL}?_id=${props.user._id}&nickname=${props.user.nickname}`, {
    onOpen: (event) => console.log('opened', event),
    onMessage: (event) => console.log(event.data),
  });

  useEffect(() => {
    API.contacts.getContacts()
    .then(result => setContacts(result))
  }, [])
  
  const handleLogOut = () => {
    deleteCookie("isAuthenticated")
    router.refresh()
  }

  return (
      <div className="flex-none w-20 md:w-64 h-screen">
        <div className="flex sm:items-center justify-between py-10 px-5">
          <div className="flex items-center space-x-2">
            <Image
              src={`https://source.boringavatars.com/beam/40/${props.user.nickname}?colors=264653,f4a261,e76f51`}
              alt=""
              width={2}
              height={2}
              className="w-8 rounded-full"
            />
            <div className="text-2xl invisible md:visible">
              <span className="text-white mr-3 font-bold">Chats</span>
            </div>
          </div>
          <Button isIconOnly color="secondary" aria-label="Logout" onClick={handleLogOut} className="rounded-full">
            <LuLogOut />
          </Button>    
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {contacts.filter((contact: {_id: string, nickname: string }) => contact._id !== props.user._id).map(contact => (
              <div key={contact._id}>
                <Button fullWidth className="rounded-sm font-bold h-14 bg-gray-700"
                  // onClick={() => setTarget(client)}
                >
                  <Image
                    src={`https://source.boringavatars.com/beam/40/${contact.nickname}?colors=264653,f4a261,e76f51`}
                    alt={`Avatar of ${contact.nickname}`}
                    width={2}
                    height={2}
                    className="w-4 sm:w-8 h-10 sm:h-8 rounded-full"
                  />
                  <div className="flex items-center">
                    <span className="mr-3 ml-2">{contact.nickname}</span>
                    {/* <span className="text-green-500">
                      <svg width="10" height="10">
                        <circle
                          cx="5"
                          cy="5"
                          r="5"
                          fill="currentColor"
                        ></circle>
                      </svg>
                    </span> */}
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Sidebar;