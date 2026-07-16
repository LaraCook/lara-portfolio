import type { CSSProperties } from "react";

interface OrganicShape_1Props {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function OrganicShape_2({
  color = "#E6655B",
  className,
  style,
}: OrganicShape_1Props) {
  return (
    <svg
      width={713}
      height={970}
      viewBox="0 0 713 970"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", ...style }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M294.567 2.63203C432.766 29.7906 401.28 248.938 488.257 359.606C547.102 434.479 682.526 434.615 706.487 526.752C732.241 625.786 669.282 725.005 603.725 803.631C534.593 886.546 446.435 958.686 338.802 967.737C227.829 977.069 104.865 941.08 39.397 851.088C-20.5134 768.736 44.5603 659.005 40.2055 557.291C35.878 456.214 -27.814 358.459 14.3673 266.479C69.9403 145.296 163.654 -23.0946 294.567 2.63203Z"
        fill={color}
      />
    </svg>
  );
}
