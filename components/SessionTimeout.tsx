"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

// Session timeout in milliseconds (20 minutes)
const SESSION_TIMEOUT = 20 * 60 * 1000;

export default function SessionTimeout() {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const logout = useCallback(async () => {
    try {
      // Call the logout API
      await fetch("/api/admin/logout", { method: "POST" });
      
      // Redirect to home page
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Auto logout failed:", error);
    }
  }, [router]);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(logout, SESSION_TIMEOUT);
  }, [logout]);

  useEffect(() => {
    // List of events that define "activity"
    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
      "click"
    ];

    // Initialize timer
    resetTimer();

    // Add event listeners
    const handleActivity = () => resetTimer();
    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [resetTimer]);

  return null; // This component doesn't render anything
}
