"use client";
import { useFrame } from "@react-three/fiber";
import { Sphere, Html, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import cartesianTo3D from "@/util/cartesionTo3D";

import { useRef, useState } from "react";
import earth from "@/components/earthtexture.jpg";

let a = 0;
const markerA = cartesianTo3D({ lat: 20, long: -220 });
const markerB = cartesianTo3D({ lat: 15, long: 0 });
const markerC = cartesianTo3D({ lat: -10, long: 45 });
const markerD = cartesianTo3D({ lat: 35, long: -120 });

export default function Earth() {
  const colorMap = useTexture(earth.src);
  const cameraRef = useRef<any>();
  const [pointAVisible, setPointAVisible] = useState(true);
  const [pointBVisible, setPointBVisible] = useState(false);
  const [pointCVisible, setPointCVisible] = useState(false);
  const [pointDVisible, setPointDVisible] = useState(false);

  useFrame((state, delta) => {
    a += delta;
    cameraRef.current.rotation.y += (2 - 0.5 * Math.cos(delta)) * 0.002;
    // cameraRef.current.rotation.x = Math.sin(a * 2 + 3.14 / 2) * 0.1;
  });

  return (
    <group>
      <PerspectiveCamera ref={cameraRef}>
        <ambientLight intensity={10} />
        <Sphere args={[3, 40, 40]}>
          <meshStandardMaterial map={colorMap} />
        </Sphere>
        {[
          {
            marker: markerA,
            pointVisible: pointAVisible,
            setPointVisible: setPointAVisible,
            text: "The Pacific Ocean Cleanup",
          },
          {
            marker: markerB,
            pointVisible: pointBVisible,
            setPointVisible: setPointBVisible,
            text: "The Desert Cleanup",
          },
          {
            marker: markerC,
            pointVisible: pointCVisible,
            setPointVisible: setPointCVisible,
            text: "Rainforest Conservation Project",
          },
          {
            marker: markerD,
            pointVisible: pointDVisible,
            setPointVisible: setPointDVisible,
            text: "Urban Recycling Initiative",
          },
        ].map(({ marker, pointVisible, setPointVisible, text }) => (
          <group key={text} position={[marker.x, marker.y, marker.z]}>
            <Html occlude>
              <div style={{ pointerEvents: "none" }}>
                {pointVisible ? (
                  <div>
                    <div
                      style={{
                        position: "absolute",
                        top: "-14px",
                        left: "-14px",
                        background: "rgb(43, 173, 7)",
                        border: "solid 4px green",
                        borderRadius: "30px",
                        width: "28px",
                        height: "28px",
                      }}
                    ></div>
                    <div
                      style={{
                        lineHeight: "1.3em",
                        fontSize: "25px",
                        fontWeight: 550,
                        position: "absolute",
                        top: "18px",
                        right: "-100px",
                        width: "200px",
                        textAlign: "center",
                        color: "white",
                        textShadow: "rgba(0, 0, 0, 0.8) 2px 2px 4px",
                      }}
                    >
                      {text}
                    </div>
                  </div>
                ) : null}
              </div>
            </Html>
            <Html
              occlude
              onOcclude={(visible) => {
                setPointVisible(!visible);
                // setPointVisible(true);
                return null;
              }}
            ></Html>
          </group>
        ))}
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </PerspectiveCamera>
    </group>
  );
}