"use client";
import React from "react";
import { GeneratorResponse } from "./services/myIdService";

export default function Home() {
  const [secret, setSecret] = React.useState("");
  const isAllowed = secret.trim().toLowerCase() === "barajas";

  function navigateToSite(id: string) {

    fetch(`/api/?userId=${id}`)
      .then((res) => res.json())
      .then((response: GeneratorResponse) => {
        console.log("Redirecting to:", JSON.stringify(response));
        const newWindow = window.open(response.urlToRedirect, "_blank", "noopener,noreferrer");
        if (newWindow) { newWindow.opener = null };
      })
      .catch(console.error);

  }


  function renderUsers() {
    return <div className="grid grid-cols-2 gap-4">
      <div className="p-4">MARTINA	BRANDLI</div>
      <button onClick={() => navigateToSite("MARCOANTONIOPRIETO")} className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer">
        Book
      </button>
      <div className="p-4">JAVIER	GONZALEZ BARAHONA</div>
      <button onClick={() => navigateToSite("MARCOANTONIOPRIETO")} className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer">
        Book
      </button>

      <div className="p-4">Edison Lizano</div>
      <button onClick={() => navigateToSite("MARCOANTONIOPRIETO")} className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer">
        Book
      </button>


    </div>
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Book
          </h1>


          <input
            aria-label="secret-code"
            placeholder="Enter code"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="mb-4 w-full max-w-sm rounded border px-3 py-2 text-sm"
          />

          {
            isAllowed && renderUsers()
          }
        </div>
      </main>
    </div>
  );
}
