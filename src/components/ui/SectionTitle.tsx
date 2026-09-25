import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "red" | "yellow" | "plain";
  align?: "center" | "left";
  children?: ReactNode;
};

export default function SectionTitle({ eyebrow, title, description, tone = "red", align = "center", children }: Props) {
  const toneClass = tone === "yellow" ? "section-tag--yellow" : tone === "plain" ? "" : "section-tag--red";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className={`section-tag ${toneClass}`}>{eyebrow}</span>
      <h2 className="display-font mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl">{title}</h2>
      {description && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-(--muted) sm:text-lg">{description}</p>}
      {children}
    </div>
  );
}
