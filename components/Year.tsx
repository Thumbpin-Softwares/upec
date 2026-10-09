"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Read on the client only so the static prerender never bakes in a stale year
export default function Year() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => null);
  return <>{year}</>;
}
