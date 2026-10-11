export function FooterEasterEgg() {
  return (
    <details className="footer-easter-egg">
      <summary>
        <span aria-hidden="true">&gt;_</span>
        <span className="sr-only">Toggle a small footer message</span>
      </summary>
      <span className="footer-easter-egg__message">
        connection established — curiosity rewarded.
      </span>
    </details>
  );
}
