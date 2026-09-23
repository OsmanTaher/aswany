const rows = [
  ["CREATIVE", "DEVELOPER", "DESIGNER", "INNOVATOR", "ENGINEER"],
  ["DESIGN", "CODE", "CREATE", "INNOVATE", "BUILD", "DREAM"],
  ["PASSION", "PRECISION", "POWER", "PERFORMANCE", "POSSIBILITY"],
  ["FUTURE", "FOCUSED", "FORWARD", "FEARLESS", "FANTASTIC"],
];

export default function Marquee() {
  return (
    <div aria-label="Skills marquee" className="grid">
      {rows.map((row, index) => {
        const content = [...row, ...row];
        return (
          <div className="marquee-row" key={index}>
            <div className={`marquee-track ${index % 2 ? "marquee-track--reverse" : ""}`}>
              {content.map((item, itemIndex) => (
                <div className="marquee-item" key={`${item}-${itemIndex}`}>
                  {item}<span>•</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
