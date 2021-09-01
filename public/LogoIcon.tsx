import * as React from "react";

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#F72585"
        d="M25.667 0h4.667v4.667h-4.667zM25.667 51.333h4.667V56h-4.667z"
      />
      <path
        fill="#4CC9F0"
        d="M56 25.667v4.667h-4.667v-4.667zM4.666 25.667v4.667H0v-4.667z"
      />
      <path
        fill="#9D4EDD"
        d="M46.15 6.551l3.3 3.3-3.3 3.3-3.301-3.3zM9.851 42.85l3.3 3.3-3.3 3.3-3.3-3.3z"
      />
      <path
        fill="#FFBA08"
        d="M6.551 9.851l3.3-3.3 3.3 3.3-3.3 3.3zM42.849 46.15l3.3-3.3 3.3 3.3-3.3 3.3z"
      />
      <path fill="#3A0CA3" d="M25.667 9.333h4.667v37.333h-4.667z" />
      <path fill="#3A0CA3" d="M46.666 25.667v4.667H9.333v-4.667z" />
      <path fill="#3A0CA3" d="M39.549 13.15l3.3 3.3-26.398 26.4-3.3-3.301z" />
      <path fill="#3A0CA3" d="M13.151 16.45l3.3-3.3L42.85 39.55l-3.3 3.3z" />
    </svg>
  );
}

export default LogoIcon;