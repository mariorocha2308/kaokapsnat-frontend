"use client";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation'
import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";
import { API } from "../api";

const AuthForm = () => {
  const router = useRouter()
  const [selected, setSelected] = useState<string | number>("login");
  const [credentials, setCredentials] = useState({
    name: "",
    phone: 0,
    password: ""
  })

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await API.authentication.login(credentials)
    router.push('/')
  }

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await API.authentication.register(credentials)
    setSelected('login')
  }

  const eventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return ( 
    <Card className="max-w-full w-[340px] h-[450px] bg-stone-950">
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="login" title="Login">
            <form className="flex flex-col gap-4 mt-3" onSubmit={handleLogin}>
              <Input isRequired label="Phone" placeholder="Enter your phone" type="number" name="phone" onChange={eventInput}/>
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                onChange={eventInput}
              />
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form className="flex flex-col gap-4 h-[300px] mt-3" onSubmit={handleRegister}>
              <Input isRequired label="Name" placeholder="Enter your name" type="text" name="name" onChange={eventInput}/>
              <Input isRequired label="Phone" placeholder="Enter your phone" type="number" name="phone" onChange={eventInput}/>
              <Input isRequired label="Password" placeholder="Enter your password" type="password" name="password" onChange={eventInput}/>
              <Input
                isRequired
                label="Password"
                placeholder="Confirm your password"
                type="password"
              />
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" type="submit">
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