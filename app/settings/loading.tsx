import { Loader } from "../components";

function Loading() {
  return (
    <div style={{ zIndex: 1301, height: "100vh", width: "100vw" }}>
      <Loader fontSize="7rem" showText />
    </div>
  );
}

export default Loading;
