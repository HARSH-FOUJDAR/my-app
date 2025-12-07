"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
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

export function CardDemo() {
    const [password, SetPassword] = useState()
    return (
        <div className="flex justify-center items-center min-h-screen px-4 bg-background">

            <Card className="w-200 mt-10 max-w-md rounded-2xl border shadow-md p-6 ">
                <div className="text-center space-y-3">

                    <CardTitle className="text-3xl font-bold">
                        Sign in to your account
                    </CardTitle>

                    <CardDescription>
                        Don't have an account?{" "}
                        <Link href="/Singup" className=" underline text-green-400 hover:underline font-medium text-[1rem] ml-2">
                            SingUp
                        </Link>
                    </CardDescription>
                </div>

                {/* Form */}
                <CardContent className="mt-6">
                    <form className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address...</Label>
                            <Input id="email" type="email" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password...</Label>
                            <Input id="password"
                                type="password" required
                                name="password" />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border"
                                />
                                <Label htmlFor="remember-me" className="text-sm">
                                    Remember me
                                </Label>
                            </div>

                            <Link href="#" className="text-sm text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <Button type="submit" className="w-full py-5 cursor-pointer font-medium font-semibold">
                            Log In
                        </Button>
                    </form>
                </CardContent>

                {/* Divider */}
                <div className="flex items-center gap-4 my-4 px-6">
                    <div className="flex-1 border-t"></div>
                    <span className="text-xs text-muted-foreground">Or continue with</span>
                    <div className="flex-1 border-t"></div>
                </div>

                {/* Social Login */}
                <CardFooter className="flex gap-2  ">
                    <Button onClick={() => signIn("google", { callbackUrl: "/" })}
                        variant="outline"
                        className="w-45 flex items-center justify-center gap-2 cursor-pointer"
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
                        className="w-45 flex items-center justify-center gap-2 cursor-pointer"
                    > <Github />
                        GitHub
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
