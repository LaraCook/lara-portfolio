import type { CSSProperties } from "react";

interface OrganicShape_1Props {
  className?: string;
  style?: CSSProperties;
}

export default function FlowerShape({ className, style }: OrganicShape_1Props) {
  return (
    <svg
      width="205"
      height="209"
      viewBox="0 0 205 209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: "auto", ...style }}
    >
      <path
        d="M148.981 66.7687C176.422 -35.9441 60.3795 -3.79705 86.2554 54.2236C16.4773 -39.0803 -43.8989 117.733 43.1314 117.733C-29.7889 180.46 65.868 231.425 89.3902 171.835C134.866 258.083 201.512 168.699 148.981 139.687C237.58 147.529 205.433 44.0313 148.981 66.7687Z"
        fill="#9E2A2B"
      />
      <ellipse
        cx="99.5879"
        cy="105.189"
        rx="21.1699"
        ry="19.6018"
        fill="#5F1B1B"
      />
    </svg>
  );
}
