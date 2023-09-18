"use client";
import { AppContext } from "@/app/providers";
import { useContext } from "react";
import { Loader } from "../Loader";

import styles from "./tpvLoader.module.css";

function TPVLoader() {
  const { state } = useContext(AppContext);
  const loading = state.tpv_loader;

  return (
    <>
      {loading && (
        <div className={styles.container}>
          <Loader fontSize="7rem" />
        </div>
      )}
    </>
  );
}

export default TPVLoader;
