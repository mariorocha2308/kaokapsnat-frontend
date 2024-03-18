"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";
import { API } from "../api";

const AuthForm = () => {
  const router = useRouter()
  const [selected, setSelected] = useState<string | number>("login");
  const [credential, setCredential] = useState({
    username: "",
  })

  async function handleLogin() {
      await API.authentication.login(credential)
      router.push('/')
    }
    
  async function handleRegister() {
      await API.authentication.register(credential)
      router.push('/')
  }

  const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({...credential, [e.target.name]: e.target.value})
  }

  return ( 
    <Card className="max-w-full w-[350px] h-[250px] bg-stone-950">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="login" title="Login">
            <form className="flex flex-col h-[300px] mt-3">
              <Input isRequired label="Username" placeholder="Enter your username" type="text" name="username" onChange={eventInput}/>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={handleLogin}>
                  Sign up
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form className="flex flex-col h-[300px] mt-3">
              <Input isRequired label="Username" placeholder="Enter your username" type="text" name="username" onChange={eventInput}/>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={handleRegister}>
                  Sign up
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