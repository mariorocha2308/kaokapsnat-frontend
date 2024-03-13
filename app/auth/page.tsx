import AuthForm from "../components/AuthForm";

const Auth = () => {
  return (  
    <section className="dark grid place-content-center text-white w-full h-screen gap-7">
      <div>
        <h2 className="text-2xl font-bold">KOAKAPSNAT</h2>
        <h5>Chat in real time with your contacts</h5>
      </div>
      <AuthForm/>
    </section>
  );
}

export default Auth;