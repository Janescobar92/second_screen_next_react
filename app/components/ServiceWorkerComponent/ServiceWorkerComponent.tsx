"use client";

import { useEffect } from "react";

function ServiceWorkerComponent() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <></>;
}

export default ServiceWorkerComponent;
