import Link from "next/link";

const TRI =
  "M341.789 333.872C342.586 333.781 343.375 333.72 344.175 333.678C347.756 333.488 352.866 333.742 355.6 336.293C364.313 344.428 393.908 398.905 401.489 411.799L424.366 450.509C431.081 461.909 453.479 490.737 426.753 498.512C421.124 500.149 406.107 499.358 399.382 499.36L353.438 499.331C341.813 499.345 274.459 500.864 266.871 498.334C262.475 496.868 258.316 493.482 256.332 489.251C254.561 485.474 254.641 481.171 256.038 477.297C258.378 470.809 262.573 464.551 266.03 458.593C271.426 449.361 276.766 440.096 282.049 430.798C293.193 410.527 304.525 390.359 316.043 370.298C321.643 360.362 327.369 349.806 333.419 340.131C335.29 337.137 338.692 335.35 341.789 333.872Z";
const CAT_BODY =
  "M340.704 363.381C349.871 376.059 358.359 386.013 348.98 401.393C349.578 406.143 350.252 410.789 352.069 415.275L352.683 415.48C357.848 417.175 363.273 417.599 368.39 419.233C386.927 425.134 395.128 450.915 389.576 468.199C384.085 485.29 361.541 478.766 348.035 480.145C344.041 480.553 338.269 480.504 338.94 475.096C342.27 470.72 345.802 474.067 345.117 470.329C344.344 466.107 342.889 462.305 343.263 457.883L342.386 457.785C340.997 463.979 339.303 474.721 333.877 478.625C331.834 480.095 326.345 480.205 324.052 478.991C323.497 477.057 323.596 477.796 324.149 475.683C329.832 470.075 332.064 475.603 332.502 461.72C333.297 436.52 311.962 426.138 328.971 402.273C324.188 398.247 318.42 392.816 316.661 386.63L316.919 384.922C321.051 382.206 330.116 377.141 334.638 375.488C336.587 371.27 338.3 367.374 340.704 363.381Z";
const CAT_TAIL =
  "M401.954 451.457C412.436 451.181 420.396 460.025 420.634 470.188C420.739 475.412 418.725 480.455 415.053 484.171C404.646 494.797 364.415 491.59 349.219 491.802C347.218 491.879 347 491.733 345.348 490.575C344.211 488.521 344.461 489.452 344.583 486.927C350.848 478.928 405.327 492.87 412.207 475.407C416.857 463.605 401.508 462.131 399.719 455.155C400.477 452.433 399.891 453.413 401.954 451.457Z";

/** Mark: thin outline triangle road sign + elegant cat. Colored via currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="248 322 208 192" fill="none" className={className} aria-hidden>
      <path d={TRI} stroke="currentColor" strokeWidth={9} strokeLinejoin="round" />
      <path d={CAT_BODY} fill="currentColor" />
      <path d={CAT_TAIL} fill="currentColor" />
    </svg>
  );
}

/** Full logo lockup. Wordmark uses the site's Fraunces serif for cohesion. */
export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Autoškola Pikoledo – úvod"
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
    >
      <LogoMark
        className={`h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-[1.04] ${
          dark ? "text-teal-50" : "text-pine"
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-tight ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          Pikoledo
        </span>
        <span
          className={`mt-[3px] text-[0.72rem] font-medium uppercase tracking-[0.3em] ${
            dark ? "text-teal-100/70" : "text-pine/80"
          }`}
        >
          autoškola Ostrava
        </span>
      </span>
    </Link>
  );
}
