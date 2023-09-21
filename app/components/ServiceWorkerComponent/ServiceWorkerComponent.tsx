"use client";
import React, { useEffect } from "react";

/**
 * ServiceWorkerComponent is a React component that registers a service worker in production environment.
 * The service worker file should be located at the root directory with the name "sw.js".
 * @returns {JSX.Element} - The rendered component.
 */
function ServiceWorkerComponent() {
  useEffect(() => {
    // Register service worker in production environment
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <div id="service-worker-component" style={{ display: "none" }} />;
}

export default ServiceWorkerComponent;
