"use client";

import * as React from "react";
import { MenuContent } from "./menuContent";
import { Button } from "./ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const menuContent = MenuContent()

export function SectionMenu() {
    return (
        <>
        {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
        <button className="flex md:hidden items-center bg-main-color text-white rounded-lg py-3 px-6 shadow-md shadow-main-color mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105">
            Explore All Social Media We Support
            <img src="/arrow_right.svg" className="ml-1 w-7 h-7 transform transition-transform duration-200 group-hover:translate-x-2"></img>
          </button>
        </DrawerTrigger>
        <DrawerContent >
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>Select an Option.</DrawerDescription>
          </DrawerHeader>
          {menuContent}
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>

      {/* Sheet Desktop */}
      <Sheet>
      <SheetTrigger asChild>
      <button className="hidden md:flex  items-center bg-main-color text-white rounded-lg py-3 px-6 shadow-md shadow-main-color mb-10 m-auto text-left md:text-center group ease-in-out transition-all hover:scale-105">
            Explore All Social Media We Support
            <img src="/arrow_right.svg" className="ml-1 w-7 h-7 transform transition-transform duration-200 group-hover:translate-x-2"></img>
          </button>
          </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Select an Option.</SheetDescription>
          </SheetHeader>
          {menuContent}
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
        </>
    );
}