import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "40+ Projects Developed",
  "2+ Years of Freelancing",
  "Expert in web development",
];

export default function AboutLayout({ children }) {
  return (
    <main>
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
