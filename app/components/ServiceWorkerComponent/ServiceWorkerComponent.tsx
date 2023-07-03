"use client";

import { useEffect } from "react";

function ServiceWorkerComponent() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <div id="service-worker-component" />;
}

export default ServiceWorkerComponent;
