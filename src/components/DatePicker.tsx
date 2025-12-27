"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  value: string;
  onDateChange: (value: string) => void;
};

function formatDate(date: Date | undefined) {
  if (!date) return "";

  return date.toISOString().split("T")[0]; // YYYY-MM-DD (BEST for backend)
}

export function DatePicker({ value, onDateChange }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="relative flex gap-2">
      <Input
        value={value}
        placeholder="YYYY-MM-DD"
        readOnly
        className="bg-background pr-10"
      />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
          >
            <CalendarIcon className="size-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              const formatted = formatDate(selectedDate);
              onDateChange(formatted); // 🔥 SEND TO PARENT
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
