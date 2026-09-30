import { NextResponse } from "next/server";
import { logoutCustomer } from "@/lib/portal/auth";

export async function POST() {
  try {
    await logoutCustomer();
    const response = NextResponse.json({ success: true, message: "Logged out successfully." });
    response.cookies.delete("customer_session");
    return response;
  } catch (err) {
    console.error("Portal Logout Route Error:", err);
    return NextResponse.json({ error: "Logout failed." }, { status: 500 });
  }
}
