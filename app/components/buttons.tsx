"use client";
import { signIn, signOut } from "next-auth/react";

export const SigninButton = () => {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Sign In
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </button>
  );
};
