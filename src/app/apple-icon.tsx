import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111517",
          color: "#e9ece8",
          fontFamily: "Arial, sans-serif",
          fontSize: 100,
          fontWeight: 600,
          letterSpacing: "-0.06em",
        }}
      >
        S
        <span
          style={{
            width: 16,
            height: 16,
            display: "flex",
            marginLeft: 8,
            borderRadius: 999,
            background: "#d3a36f",
          }}
        />
      </div>
    ),
    size,
  );
}
