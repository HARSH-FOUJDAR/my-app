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
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";

export function SingUp() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    // Password live match
    if (e.target.name === "confirmpassword") {
      if (user.password === e.target.value) {
        setMessage("✔ Password Matched");
      } else {
        setMessage("❌ Password Not Matching");
      }
    }

    if (e.target.name === "password") {
      setMessage("");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setErr("");
    setMessage("");

    if (!user.name || !user.email || !user.password || !user.confirmpassword) {
      setErr("All fields are required!");
      return;
    }

    if (user.password.length < 6) {
      setErr("Password must be at least 6 characters long");
      return;
    }

    if (user.password !== user.confirmpassword) {
      setErr("Passwords do not match!");
      return;
    }

    // ✅ Save to LocalStorage
    localStorage.setItem("userData", JSON.stringify(user));

    // ✅ Redirect to Profile page
    router.push("/profile");
  };

  const handleReset = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    setErr("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-5 px-4 bg-background">
      <Card className="w-200 mt-10 max-w-md rounded-2xl border shadow-md p-6">
        <div className="text-center space-y-3">
          <CardTitle className="text-3xl font-bold">Create your account</CardTitle>
          <CardDescription>
            Already have an account?{" "}
            <Link href="/login" className="underline text-green-400 hover:underline font-medium text-[1rem] ml-2">
              Login
            </Link>
          </CardDescription>
        </div>

        {/* FORM */}
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="John Doe"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                name="email"
                type="email"
                placeholder="example@mail.com"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                name="confirmpassword"
                type="password"
                value={user.confirmpassword}
                onChange={handleChange}
                required
              />
            </div>

            {message && (
              <p className={`font-medium ${message.includes("✔") ? "text-green-500" : "text-red-500"}`}>
                {message}
              </p>
            )}

            {err && <p className="text-red-500 text-sm">{err}</p>}

            <Button type="submit" onClick={handleReset} className="w-full py-5 font-semibold">Sign Up</Button>
           
          </form>
        </CardContent>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4 px-6">
          <div className="flex-1 border-t"></div>
          <span className="text-xs text-muted-foreground">Or continue with</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Social Login */}
        <CardFooter className="flex gap-2">
          <Button onClick={() => signIn("google", { callbackUrl: "/" })} variant="outline" className="w-45 flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" /> Google
          </Button>
          <Button onClick={() => signIn("github")} variant="outline" className="w-45 flex items-center justify-center gap-2">
            <Github /> GitHub
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
