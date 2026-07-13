"use client";

import { useEffect } from "react";

export function ViewPing() {
  useEffect(() => {
    // Count this visit once per page load.
    fetch("/api/track", { method: "POST" }).catch(() => {});
  }, []);
  return null;
}
