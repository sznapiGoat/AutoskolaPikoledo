import { Stars } from "./stars";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <Stars count={review.rating} size={15} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        „{review.text}"
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-stone-100 pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
          {review.name.charAt(0)}
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-foreground">{review.name}</div>
          <div className="text-xs text-slate-400">{review.date}</div>
        </div>
      </figcaption>
    </figure>
  );
}
