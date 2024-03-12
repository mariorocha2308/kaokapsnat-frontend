"use client";
import { useState } from "react";
import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";

const Auth = () => {
  const [selected, setSelected] = useState<string | number>("login");

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
            <form className="flex flex-col gap-4 mt-3">
              <Input isRequired label="Phone" placeholder="Enter your phone" type="number" />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary">
                  Login
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form className="flex flex-col gap-4 h-[300px] mt-3">
              <Input isRequired label="Name" placeholder="Enter your name" type="text" />
              <Input isRequired label="Phone" placeholder="Enter your name" type="number" />
              <Input isRequired label="Password" placeholder="Enter your password" type="password" />
              <Input
                isRequired
                label="Password"
                placeholder="Confirm your password"
                type="password"
              />
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary">
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

export default Auth;