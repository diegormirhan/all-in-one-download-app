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

export function HeaderMenu() {
    return (
        <>
        {/* Drawer Mobile */}
      <Drawer>
        <DrawerTrigger asChild>
            <div className="md:hidden cursor-pointer">
                <img className="w-8" src="/menu.svg"></img>
            </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Explore</DrawerTitle>
            <DrawerDescription>Search for other Social Media Platforms.</DrawerDescription>
          </DrawerHeader>
          {menuContent}
        </DrawerContent>
      </Drawer>

      {/* Sheet Desktop */}
      <Sheet>
      <SheetTrigger asChild>
          <div className="hidden md:inline cursor-pointer">
                <img className="w-8" src="/menu.svg"></img>
            </div>
          </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Explore</SheetTitle>
            <SheetDescription>Explore other Social Media Platforms</SheetDescription>
          </SheetHeader>
          {menuContent}
          <SheetFooter>
          </SheetFooter>
        </SheetContent>
      </Sheet>
        </>
    );
}