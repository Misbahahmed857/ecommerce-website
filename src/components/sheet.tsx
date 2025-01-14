"use client"

import { Button } from "@/components/ui/button"
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetSide() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button  className="p-3">
          <TiThMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-4 flex flex-col gap-4">
        <SheetHeader className="flex justify-center items-center"> 
          <SheetTitle className="font-bold text-xl">Shop.co</SheetTitle> 
        </SheetHeader>
        <ul className="flex flex-col gap-5"> 
          <li>
            <a className="hover:text-gray-900" href="">Shop</a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="">On Sale</a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="">New Arrivals</a>
          </li>
          <li>
            <a className="hover:text-gray-900" href="">Brands</a>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
