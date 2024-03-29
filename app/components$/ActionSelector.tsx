import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const catEngagements = ["play", "feed", "pet", "ignore", "pss pss", "hold"];

export function ActionSelector({ handleInteraction }) {
  return (
    // 33% of the carousel width.
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {catEngagements.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                  <Button
                    onClick={() => handleInteraction(item)}
                    className="uppercase"
                  >
                    {item}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
