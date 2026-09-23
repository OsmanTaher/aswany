export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.1em] text-black/60 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="transition-colors hover:text-black">Back to top ↑</a>
        <span>© {new Date().getFullYear()} Portfolio. All rights reserved.</span>
      </div>
    </footer>
  );
}
