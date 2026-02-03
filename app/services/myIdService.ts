// lib/services/myIdTravelService.ts

export interface GeneratorResponse {
  urlToRedirect: string;
  [key: string]: unknown;
}

export async function createMyIdUrl(
  token: string
): Promise<GeneratorResponse> {
  const response = await fetch(
    "https://ibintranet.iberia.es/intranet/eticket/MyIDTravel",
    {
      method: "GET",
      headers: {
        accept: "application/json, text/plain, */*",
        authorization: `Bearer ${token}`,
        origin: "https://esencial.iberia.es",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    }
  );

  
  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `MyIDTravel request failed (${response.status}): ${text}`
    );
  }

  return response.json();
}
