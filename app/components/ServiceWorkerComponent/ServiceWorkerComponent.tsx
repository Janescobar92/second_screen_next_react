"use client";
import React from "react";

function ServiceWorkerComponent() {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <></>;
}

export default ServiceWorkerComponent;
