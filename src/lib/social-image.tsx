import { ImageResponse } from "next/og";

const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#111517",
          color: "#e9ece8",
          fontFamily: "Arial, sans-serif",
          padding: "0 104px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#d3a36f",
              fontSize: 26,
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                display: "flex",
                borderRadius: 999,
                background: "#d3a36f",
              }}
            />
            Software Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 82,
              fontWeight: 600,
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            Shantanu Sutar
          </div>
          <div
            style={{
              width: 112,
              height: 2,
              display: "flex",
              marginTop: 68,
              background: "#d3a36f",
            }}
          />
        </div>
      </div>
    ),
    socialImageSize,
  );
}
