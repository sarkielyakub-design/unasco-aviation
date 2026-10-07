"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  MapPin,
  PackageSearch,
  Plane,
  Search,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Stage = {
  status: string;
  location: string;
  time: string;
  done: boolean;
  active?: boolean;
};

const mockShipment = {
  ref: "UNS-4471902",
  origin: "Lagos (LOS)",
  destination: "Dubai (DXB)",
  weight: "1,240 kg",
  eta: "Aug 02, 2026 · 14:20",
  stages: [
    {
      status: "Booking confirmed",
      location: "Lagos, NG",
      time: "Jul 28 · 09:12",
      done: true,
    },
    {
      status: "Cargo received at terminal",
      location: "Lagos, NG",
      time: "Jul 28 · 16:40",
      done: true,
    },
    {
      status: "Departed origin",
      location: "Lagos (LOS)",
      time: "Jul 29 · 22:05",
      done: true,
    },
    {
      status: "In transit",
      location: "En route to DXB",
      time: "Jul 30 · 06:30",
      done: false,
      active: true,
    },
    {
      status: "Arrival & customs",
      location: "Dubai (DXB)",
      time: "Est. Aug 02",
      done: false,
    },
    {
      status: "Delivered",
      location: "Dubai, AE",
      time: "Est. Aug 02",
      done: false,
    },
  ] as Stage[],
};

export function CargoTracking() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<typeof mockShipment | null>(null);
  const [notFound, setNotFound] = useState(false);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();

    if (!value.trim()) return;

    setResult({
      ...mockShipment,
      ref: value.trim().toUpperCase(),
    });

    setNotFound(false);
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
          <div className="grid lg:grid-cols-5">

            {/* =====================================================
                LEFT — GREY TRACKING PANEL
            ====================================================== */}

            <div
              className="
                bg-gray-600
                p-8
                text-white
                lg:col-span-2
                lg:p-12
              "
            >
              {/* Badge */}

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/15
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white
                "
              >
                <PackageSearch className="size-4 text-white" />
                Live Tracking
              </span>

              {/* Heading */}

              <h2
                className="
                  mt-5
                  font-display
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-white
                "
              >
                Track your shipment
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  text-pretty
                  leading-relaxed
                  text-white
                "
              >
                Enter your air waybill or booking reference to see real-time
                status updates from pickup through to final delivery.
              </p>

              {/* =================================================
                  TRACKING FORM
              ================================================== */}

              <form onSubmit={handleTrack} className="mt-8 space-y-3">
                <label
                  htmlFor="tracking"
                  className="text-sm font-medium text-white"
                >
                  Tracking / AWB number
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">

                  {/* GREY INPUT */}

                  <Input
                    id="tracking"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="e.g. UNS-4471902"
                    className="
                      h-12
                      border-gray-300
                      bg-gray-200
                      text-gray-900
                      placeholder:text-gray-500
                      shadow-sm
                      transition-all
                      duration-200
                      focus-visible:border-gray-400
                      focus-visible:bg-white
                      focus-visible:ring-2
                      focus-visible:ring-white/40
                    "
                  />

                  {/* TRACK BUTTON */}

                  <Button
                    type="submit"
                    className="
                      h-12
                      gap-2
                      rounded-md
                      bg-white
                      px-6
                      text-base
                      font-semibold
                      text-gray-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:bg-gray-100
                      hover:text-gray-900
                    "
                  >
                    <Search className="size-4" />
                    Track
                  </Button>
                </div>

                <p className="text-xs text-white/80">
                  Try any reference number to view a sample shipment.
                </p>
              </form>
            </div>

            {/* =====================================================
                RIGHT — TRACKING RESULT
            ====================================================== */}

            <div className="p-8 lg:col-span-3 lg:p-12">

              {/* =================================================
                  EMPTY STATE
              ================================================== */}

              {!result && !notFound && (
                <div
                  className="
                    flex
                    h-full
                    min-h-64
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <span
                    className="
                      flex
                      size-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F2C6CC]
                      text-[#561923]
                    "
                  >
                    <Plane className="size-8 -rotate-45" />
                  </span>

                  <p className="mt-5 max-w-xs text-muted-foreground">
                    Your shipment timeline will appear here once you enter a
                    reference number.
                  </p>
                </div>
              )}

              {/* =================================================
                  RESULT
              ================================================== */}

              {result && (
                <div>

                  {/* Header */}

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Reference
                      </p>

                      <p className="font-display text-xl font-bold text-foreground">
                        {result.ref}
                      </p>
                    </div>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#F2C6CC]
                        px-3
                        py-1.5
                        text-sm
                        font-semibold
                        text-[#561923]
                      "
                    >
                      <Plane className="size-4" />
                      In Transit
                    </span>
                  </div>

                  {/* Shipment Summary */}

                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-2
                      gap-4
                      rounded-xl
                      border
                      border-border
                      bg-background
                      p-4
                      sm:grid-cols-4
                    "
                  >
                    {[
                      {
                        label: "Origin",
                        value: result.origin,
                      },
                      {
                        label: "Destination",
                        value: result.destination,
                      },
                      {
                        label: "Weight",
                        value: result.weight,
                      },
                      {
                        label: "Est. Arrival",
                        value: result.eta,
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-wide
                            text-muted-foreground
                          "
                        >
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      SHIPMENT TIMELINE
                  ================================================== */}

                  <ol className="mt-8 space-y-1">
                    {result.stages.map((stage, i) => (
                      <li key={stage.status} className="flex gap-4">

                        {/* Timeline Icon */}

                        <div className="flex flex-col items-center">
                          {stage.done ? (
                            <CheckCircle2 className="size-6 text-[#561923]" />
                          ) : stage.active ? (
                            <span
                              className="
                                flex
                                size-6
                                items-center
                                justify-center
                                rounded-full
                                border-2
                                border-[#561923]
                              "
                            >
                              <span className="size-2.5 rounded-full bg-[#561923]" />
                            </span>
                          ) : (
                            <Circle className="size-6 text-border" />
                          )}

                          {i < result.stages.length - 1 && (
                            <span
                              className={cn(
                                "my-1 w-0.5 flex-1",
                                stage.done
                                  ? "bg-[#561923]"
                                  : "bg-border",
                              )}
                            />
                          )}
                        </div>

                        {/* Timeline Content */}

                        <div className="pb-6">
                          <p
                            className={cn(
                              "font-semibold",
                              stage.active
                                ? "text-[#561923]"
                                : "text-foreground",
                            )}
                          >
                            {stage.status}
                          </p>

                          <p
                            className="
                              mt-0.5
                              flex
                              items-center
                              gap-1.5
                              text-sm
                              text-muted-foreground
                            "
                          >
                            <MapPin className="size-3.5" />

                            {stage.location} · {stage.time}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}