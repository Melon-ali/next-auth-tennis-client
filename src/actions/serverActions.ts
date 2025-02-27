/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const registerUser = async (data: any) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  console.log(result);
  return result;
};
