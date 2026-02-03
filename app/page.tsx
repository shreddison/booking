"use client";
import React from "react";
import { GeneratorResponse } from "./services/myIdService";

export default function Home() {
  const [secret, setSecret] = React.useState("");
  const [loadingId, setLoadingId] = React.useState<boolean>(false);
  const isAllowed = secret.trim().toLowerCase() === "barajas";

  function navigateToSite(id: string) {
    setLoadingId(true);

    fetch(`/api/?userId=${id}`)
      .then((res) => res.json())
      .then((response: GeneratorResponse) => {
        console.log("Redirecting to:", JSON.stringify(response));
        const newWindow = window.open(response.urlToRedirect, "_blank", "noopener,noreferrer");
        if (newWindow) { newWindow.opener = null };
      })
      .catch(console.error)
      .finally(() => setLoadingId(false));
  }


  function renderUsers() {
    if (loadingId) {
      return (
        <div className="w-full py-8 flex items-center justify-center">
          <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            Autenticando...
          </span>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">MARTINA BRANDLI</div>
        <button
          onClick={() => navigateToSite("ALBERTO_MEDINA")}
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
          Book
        </button>
        <div className="p-4">AGUSTINA	DIETRICH CARAMES</div>
        <button
          onClick={() => navigateToSite("MARCO_ANTONIO_PRIETO")}
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
          Book
        </button>

        <div className="p-4">EDISON LIZANO</div>
        <button
          onClick={() => navigateToSite("JORGE_WILFREDO_PERALTA")}
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
          Book
        </button>
      </div>
    );
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
