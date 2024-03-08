"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export function NewRelationshipSubmit({ catName }: { catName: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="mt-4" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Finding cat
        </Button>
      ) : (
        <Button className="mt-4" type="submit">
          Meet {catName}
        </Button>
      )}
    </>
  );
}
