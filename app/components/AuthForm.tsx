"use client";
import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { API } from "../api";
import { User } from "../lib/types/user.type";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../lib/const";
import { setCookie } from 'cookies-next';

let initUserState = {
  nickname: "",
  telephone: "",
  keypass: ""
}

const AuthForm = () => {
  const router = useRouter()
  const [selected, setSelected] = useState<string | number>("login");
  const [credential, setCredential] = useState<User>(initUserState);

  async function handlerForm(action: String) {
    // VALIDATION FORM
    if (action === "login" && credential.keypass === "" && credential.nickname == "") return toast.error("Submitting empty credentials", TOAST_OPTIONS);
    if (action === "register" && Object.values(credential).includes("")) return toast.error("Submitting empty credentials", TOAST_OPTIONS);

    const res = await API.authentication[action as keyof typeof API.authentication](credential)

    // VALIDATION RESPONSE SERVER
    if (action === "login") {
      if (res.status_code === 401 || res.status_code === 404) return toast.error(res.message, TOAST_OPTIONS)
      toast.success(res.message, TOAST_OPTIONS)
      setCookie("isAuthenticated", res.data)
      setCredential(initUserState);
      router.push('/')
    };

    if (action === "register" && res.status_code === 201) {
      toast.success(res.message, TOAST_OPTIONS);
      return setSelected("login")
    }
  }

  const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({...credential, [e.target.name]: String(e.target.value)})
  }

  return ( 
    <Card className="max-w-full w-[350px] h-[350px] bg-stone-950">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="login" title="Login">
            <form className="flex flex-col mt-3 gap-5">
              <div className="grid gap-3">
                <Input isRequired label="Nickname" placeholder="Enter your nickname" type="text" name="nickname" onChange={eventInput} 
                  defaultValue={credential.nickname}/>
                <Input isRequired label="Keypass" placeholder="Enter your keypass" type="password" name="keypass" onChange={eventInput} 
                  defaultValue={credential.keypass}/>
              </div>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={() => handlerForm("login")}>
                  Submit
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form className="flex flex-col h-[850px] mt-3 gap-5">
              <div className="grid gap-3">
                <Input isRequired label="Nickname" placeholder="Enter your nickname" type="text" name="nickname" onChange={eventInput}/>
                <Input isRequired label="Telephone" placeholder="Enter your telephone" type="number" name="telephone" onChange={eventInput}/>
                <Input isRequired label="Keypass" placeholder="Enter your keypass" type="password" name="keypass" onChange={eventInput}/>
              </div>
            
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={() => handlerForm("register")}>
                  Submit
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default AuthForm;