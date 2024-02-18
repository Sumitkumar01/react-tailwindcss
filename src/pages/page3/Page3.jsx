import React, { useContext, useState } from "react";
import NavBar from "../../components/NavBar";

function Page3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext()

  const handleSubmit = () => {
    
  };



  return (
    <>
      <NavBar />
      <section className="py-5">
        <div className="c_container">
          <h1 className="capitalize text-3xl font-serif font-bold text-center tracking-widest text-indigo-700">
            log in
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <form className="flex flex-col items-center justify-center py-5 rounded-2xl overflow-hidden bg-purple-500 w-[50%]">
            <div className="">
              <input
                type="text"
                placeholder="user name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="user-name"
                className="border-b-2 capitalize  bg-transparent text-black p-2 placeholder:text-black outline-none placeholder:capitalize"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="user-name"
                className="border-b-2  bg-transparent text-black p-2 placeholder:text-black outline-none placeholder:capitalize"
              />
            </div>
            <div className="mt-3">
              <button
                onClick={handleSubmit}
                className="capitalize font-semibold px-3 py-2 bg-slate-200 rounded-md hover:bg-white"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Page3;
