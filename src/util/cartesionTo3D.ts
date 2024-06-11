export default function cartesianTo3D({ lat, long }: { lat: number, long: number }) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (long) * (Math.PI / 180);
  return { x: 3.001 * Math.sin(phi) * Math.cos(theta), y: 3.001 * Math.cos(phi), z: 3.001 * Math.sin(phi) * Math.sin(theta) };
}