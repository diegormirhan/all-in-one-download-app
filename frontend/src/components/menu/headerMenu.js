import { MenuContent } from "./menuContent";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Sheet,
  SheetContent,
  SheetDescription,
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
            <DrawerDescription>Search for other Social Media Platforms</DrawerDescription>
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
        <SheetContent className="flex flex-col overflow-auto">
          <SheetHeader>
            <SheetTitle>Explore</SheetTitle>
            <SheetDescription>Search for other Social Media Platforms</SheetDescription>
          </SheetHeader>
          {menuContent}
        </SheetContent>
      </Sheet>
        </>
    );
}