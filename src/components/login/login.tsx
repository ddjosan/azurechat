"use client";
import { signIn } from "next-auth/react";
import './login.css'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const LogIn = () => {
  return (
    <div className="wrapper" style={{height:"100%"}}>
      <div className="flex flex-col justify-center items-center p-5">
        <img src='/undp-logo.png' className="w-1/5"  style={{width:"20%"}}  />
        <CardHeader className="items-center">
          <CardTitle className="text-2xl flex gap-2">
            <span>
              Azure<span className="text-muted-foreground">ChatGPT</span>
            </span>
          </CardTitle>
          <CardDescription>
            Login in with your UNDP account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid">
          <button onClick={() => signIn("azure-ad")} className="button-login"> UNDP Serbia User</button>
          {/* <button onClick={() => signIn("github")} className="button-login">GitHub</button> */}
        </CardContent>
      </div>
      <div className="container" />
    </div>
  );
};
