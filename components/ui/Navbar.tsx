"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, User2 } from "lucide-react";
import { ModeToggle } from "../dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-lg border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition cursor-pointer">
          Harsh<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-medium font-medium hover:text-primary transition cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <ModeToggle />

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full cursor-pointer"
              >
                <User2 className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <Link href="/Profile">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/login">
            <Button variant="outline" size="sm" className="cursor-pointer">
              Login
            </Button>
          </Link>
          <Link href="/singup">
            <Button size="sm" className="cursor-pointer">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="md:hidden flex items-center gap-3 relative right-1">
          <ModeToggle />
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md border hover:bg-accent transition cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetHeader>
              <SheetDescription className="text-xl font-bold mt-4">Harsh Blogs</SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-5 text-lg font-medium mt-6">
              {["Home", "About", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition hover:bg-accent p-2 rounded-xl cursor-pointer"
                >
                  {item}
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-8">
                <Link href="/login">
                  <Button className="cursor-pointer justify-center w-full py-2" onClick={() => setOpen(false)}>
                    Login
                  </Button>
                </Link>
                <Button className="cursor-pointer " onClick={() => setOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
}
