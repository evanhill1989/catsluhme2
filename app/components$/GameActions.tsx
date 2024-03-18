"use client";

import * as React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

const catEngagements = [
  {
    value: "play",
    label: "Play",
  },
  {
    value: "feed",
    label: "Feed",
  },
  {
    value: "pet",
    label: "Pet",
  },
  {
    value: "ignore",
    label: "Ignore",
  },
  {
    value: "pss pss",
    label: "Psst Psst",
  },
  {
    value: "hold",
    label: "Hold",
  },
];

export function GameActions({ handleInteraction }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="w-full p-0 border-radius-full">Do something</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 flex gap-1 bg-transparent border-none">
        <Button onClick={() => handleInteraction("play")}>Play</Button>
        <Button onClick={() => handleInteraction("feed")}>Treat</Button>
        <Button onClick={() => handleInteraction("pet")}>Pet</Button>
        <Button onClick={() => handleInteraction("pss pss")}>Psst Psst</Button>
        <Button onClick={() => handleInteraction("hold")}>Hold</Button>
        <Button onClick={() => handleInteraction("ignore")}>Ignore</Button>
      </PopoverContent>
    </Popover>
  );
}
