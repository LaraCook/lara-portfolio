import type { CSSProperties } from "react";

interface OrganicShape_1Props {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function OrganicShape_1({
  color = "currentColor",
  className,
  style,
}: OrganicShape_1Props) {
  return (
    <svg
      viewBox="0 0 670 673"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "auto", ...style }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.1117 650.267C4.79791 602.981 -4.49281 504.902 1.56217 422.644C7.02064 348.49 37.9201 266.915 101.382 225.461C160.571 186.798 244.599 263.063 304.155 224.989C378.782 177.279 360.58 36.2845 443.519 6.731C518.006 -19.8106 609.149 36.2354 645.897 103.217C682.17 169.332 616.034 251.011 619.535 327.555C622.667 396.024 686.939 455.246 665.024 521.338C642.28 589.929 575.718 641.419 507.434 665.635C442.773 688.566 378.701 649.19 311.202 646.819C229.047 643.932 135.376 697.518 70.1117 650.267Z"
      />
    </svg>
  );
}
