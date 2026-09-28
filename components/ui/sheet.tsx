"use client"

import * as React from "react"
import { Dialog } from "radix-ui"
import { cn } from "@/lib/utils"

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger
const SheetClose = Dialog.Close
const SheetTitle = Dialog.Title

type SheetContentProps = React.ComponentProps<typeof Dialog.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}

function SheetContent({ className, side = "right", ...props }: SheetContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="sheet-overlay" />
      <Dialog.Content
        data-side={side}
        className={cn("sheet-content", className)}
        {...props}
      />
    </Dialog.Portal>
  )
}

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetContent }