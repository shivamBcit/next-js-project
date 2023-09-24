"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-[42px] w-full items-center justify-between rounded-md !border-2 border-primary bg-background px-3 py-2 text-t-20 ring-offset-background font-normal placeholder:text-[#64DDFF] !font-pt-sens  text-[#64DDFF] focus:outline-none focus:ring-0  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0599 16.0604C12.7787 16.3413 12.3974 16.4991 11.9999 16.4991C11.6024 16.4991 11.2212 16.3413 10.9399 16.0604L5.2819 10.4044C5.00064 10.123 4.84268 9.74138 4.84277 9.34352C4.84287 8.94567 5.00101 8.56414 5.2824 8.28288C5.56379 8.00162 5.9454 7.84366 6.34325 7.84375C6.74111 7.84384 7.12264 8.00198 7.4039 8.28338L11.9999 12.8794L16.5959 8.28338C16.8787 8.01 17.2575 7.85863 17.6508 7.86186C18.0441 7.86509 18.4204 8.02267 18.6986 8.30065C18.9769 8.57863 19.1348 8.95478 19.1384 9.34807C19.142 9.74137 18.991 10.1203 18.7179 10.4034L13.0609 16.0614L13.0599 16.0604Z"
            fill="#64DDFF"
          />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] font-public-sens overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
