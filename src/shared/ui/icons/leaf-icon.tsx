import type { SVGProps } from "react";

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.49939 15.75C1.49939 13.4999 2.88697 11.7298 5.3096 11.2498C7.1247 10.8898 8.99981 9.74975 9.74985 8.99972M8.24957 15C6.93254 15.004 5.66211 14.5128 4.69026 13.624C3.7184 12.7351 3.11611 11.5135 3.00283 10.2014C2.88955 8.88922 3.27356 7.58243 4.0787 6.54017C4.88384 5.49792 6.05129 4.79632 7.34952 4.57453C11.6248 3.7495 12.7498 3.35948 14.2499 1.4994C14.9999 2.99947 15.75 4.63454 15.75 7.49966C15.75 11.6248 12.1648 15 8.24957 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}