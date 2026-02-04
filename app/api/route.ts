import { NextRequest, NextResponse } from "next/server";
import { getTokenByUserId } from "../utils/token";
import { createMyIdUrl, GeneratorResponse } from "../services/myIdService";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const token = getTokenByUserId(userId);
  
  if (!token) {
    return NextResponse.json({ error: "Token not found for this user" }, { status: 404 });
  }

  const myIdTravelResponse: GeneratorResponse = await createMyIdUrl(token);

  // console.log("Generated MyIDTravel response:", myIdTravelResponse);

  if (!myIdTravelResponse) {
    return NextResponse.json({ error: "Failed to generate MyIDTravel URL" }, { status: 404 });
  }

  if (!myIdTravelResponse.urlToRedirect) {
    return NextResponse.json({ error: "Failed to generate MyIDTravel URL" }, { status: 404 });
  }

  return NextResponse.redirect(myIdTravelResponse.urlToRedirect, 302);

}
