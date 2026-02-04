"use client";
import React from "react";
import { GeneratorResponse } from "./services/myIdService";
import TableComponent from "./components/table";

export default function Home() {
  // const [secret, setSecret] = React.useState("");
  // const isAllowed = secret.trim().toLowerCase() === "barajas";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
            MyId 2.0
          </h1>

          {/* {!isAllowed && (
            <input
              aria-label="secret-code"
              placeholder="Enter code"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              className="mb-4 w-full max-w-sm rounded border px-3 py-2 text-sm"
            />
          )} */}

          {/* {
            !isAllowed && (<div className="text-sm text-red-600">
              Access denied. Please enter the correct secret code.
            </div>)
          } */}

          <TableComponent />

        </div>
      </main>
    </div>
  );
}
