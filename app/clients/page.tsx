"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const clientLogos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
]

export function Clients() {
  return (
    <section id="services" className="text-gray-600 body-font">

      {/* <div className="container px-5 py-5 mx-auto flex flex-wrap"></div> */}
      <div className="text-center px-5 py-15 mb-2">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Our Clients
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Trusted by top industry leaders for our high-precision machining and engineering solutions.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <Carousel className="w-full max-w-4xl overflow-hidden">
          <CarouselContent>
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:basis-1/3 lg:basis-1/5">
                <div className="p-2 flex justify-center items-center">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}
