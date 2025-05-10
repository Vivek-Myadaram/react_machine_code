import React from "react";
import useOnlineStatus from "./useDebugValue";

export default function Home() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>{isOnline ? "You are Online ✅" : "You are Offline ❌"}</h1>
    </div>
  );
}
