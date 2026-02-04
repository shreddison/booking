import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { GeneratorResponse } from '../services/myIdService'
import React from 'react'

type Person = {
  id: string
  name: string
  activationDate?: string
  status?: 'activo' | 'renovar' | string

}

const defaultPeople: Person[] = [
  {
    id: "ALBERTO_MEDINA",
    name: 'MARTINA BRANDLI'
  },
  {
    id: "MARCO_ANTONIO_PRIETO",
    name: 'AGUSTINA	DIETRICH',
  },
  {
    id: "JORGE_WILFREDO_PERALTA",
    name: 'EDISON LIZANO',
  },
  {
    id: "MILAGROS_VARGAS_GUERRA",
    name: 'FEDERICO JAVIER VICCO',
  }
]


export default function TableComponent() {

  const [loading, setLoadingId] = React.useState<boolean>(false);


  function navigateToSite(id: string) {
    setLoadingId(true);
    window.location.href = `/api?userId=${id}`;

    // fetch(`/api/?userId=${id}`)
    //   .then((res) => res.json())
    //   .then((response: GeneratorResponse) => {
    //     console.log("Redirecting to:", JSON.stringify(response));
    //     const newWindow = window.open(response.urlToRedirect, "noopener,noreferrer");
    //     if (newWindow) { newWindow.opener = null };
    //   })
    //   .catch(console.error)
    //   .finally(() => setLoadingId(false));
  }


  if (loading) {
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
    )
  }

  return (
    <ul role="list" className="divide-y divide-gray-100 dark:divide-white/5">
      {defaultPeople?.map((person) => (
        <li
          key={person.name}
          onClick={() => navigateToSite(person.id)}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8 dark:hover:bg-white/5 cursor-pointer"
        >
          <div className="min-w-0 flex-auto">
            <p className="text-sm leading-6 font-semibold text-gray-900 dark:text-white">
              <span className="absolute inset-x-0 -top-px bottom-0" />
              {person.name}
            </p>

          </div>
          <div className="flex shrink-0 items-center gap-x-4">

            <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400 dark:text-gray-500" />
          </div>
        </li>
      ))}
    </ul>
  )
}
