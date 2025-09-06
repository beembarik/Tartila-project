import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

interface CustomSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  colorOn?: string
  colorOff?: string
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  CustomSwitchProps
>(
  (
    {
      className,
      colorOn = "bg-green-600",   // ✅ default warna ON
      colorOff = "bg-gray-300",   // ✅ default warna OFF
      ...props
    },
    ref
  ) => (
    <SwitchPrimitives.Root
      ref={ref}
      className={cn(
        `peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors 
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
         focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50
         data-[state=checked]:${colorOn} data-[state=unchecked]:${colorOff}`,
        className
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform " +
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  )
)

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }