"use client";
import { Canvas } from "@react-three/fiber";
const Earth = dynamic(() => import("@/components/Earth"));
import dynamic from "next/dynamic";

export default function EarthCanvas() {
  return (
    <Canvas style={{ width: "600px", height: "360px" }}>
      <Earth />
    </Canvas>
  );
}