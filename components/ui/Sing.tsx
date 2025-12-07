"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function SingUp() {
    const router = useRouter();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const handelsubmit = async (event) => {

    event.preventDefault()

    const res = await fetch("http://localhost:3000/singup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();


  if (res.status === 201) {
      router.push(`/profile?name=${data.user.name}&email=${data.user.email}`);
    } else {
      alert(data.message);
    }
  };



  return (

    <div className="flex justify-center items-center min-h-screen mt-5 px-4 bg-background">
      <Card className="w-200 mt-10 max-w-md rounded-2xl border shadow-md p-6">
        <div className="text-center space-y-3">
          <CardTitle className="text-3xl font-bold">
            Create your account
          </CardTitle>

          <CardDescription>
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline text-green-400 hover:underline font-medium text-[1rem] ml-2"
            >
              Login
            </Link>
          </CardDescription>
        </div>

        {/* Form */}
        <CardContent className="mt-6">
          <form onSubmit={handelsubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                required placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full py-5 cursor-pointer font-medium font-semibold">
              Sign Up
            </Button>
          </form>
        </CardContent>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4 px-6">
          <div className="flex-1 border-t"></div>
          <span className="text-xs text-muted-foreground">Or continue with</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Social Sign Up */}
        <CardFooter className="flex gap-2">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            variant="outline"
            className="w-45 cursor-pointer flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Google
          </Button>

          <Button
            onClick={() => signIn("github")}
            variant="outline"
            className="w-45 cursor-pointer flex items-center justify-center gap-2"
          >
            <Github />
            GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>

  );
}
