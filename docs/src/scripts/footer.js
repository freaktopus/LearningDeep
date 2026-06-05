/**
 * SiteFooter — injects site-wide branding into every page.
 * 1. A GitHub button in the top-right toolbar (star the repo).
 * 2. A professional footer with a GitHub star link and an eSewa
 *    "buy me a coffee" button that navigates to the esewa_account
 *    page (QR & details).
 */
(function () {
  "use strict";

  var GITHUB_URL = "https://github.com/freaktopus/LearningDeep";

  var GITHUB_SVG =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>' +
    "</svg>";

  // Resolve the site root from this script's own src attribute, which
  // mdBook prefixes with the correct path_to_root for each page depth.
  function siteRoot() {
    var me = document.currentScript || document.querySelector('script[src$="footer.js"]');
    if (me) {
      var src = me.getAttribute("src");
      var idx = src.indexOf("src/scripts/footer.js");
      if (idx !== -1) return src.slice(0, idx);
    }
    // Fallback: count directory depth of the current page.
    var depth = (location.pathname.match(/\//g) || []).length - 2;
    return depth > 0 ? new Array(depth + 1).join("../") : "./";
  }

  // Inject styles once
  if (!document.getElementById("sitefooter-style")) {
    var style = document.createElement("style");
    style.id = "sitefooter-style";
    style.textContent = `
      /* GitHub button in the top toolbar */
      .gh-toolbar-btn {
        display: inline-flex;
        align-items: center;
        padding: 0.25rem 0.4rem;
        border-radius: 6px;
        color: var(--icons, #8a8a8a);
        text-decoration: none !important;
        transition: color 0.15s;
      }
      .gh-toolbar-btn:hover { color: var(--icons-hover, var(--fg, inherit)); }
      .gh-toolbar-btn svg { display: block; }

      /* Footer on every page */
      .site-footer {
        margin-top: 3rem;
        padding: 1.5rem 0 2rem;
        border-top: 1px solid var(--table-border-color, #d8d8d8);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.9rem;
        text-align: center;
      }
      .site-footer .footer-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.8rem;
      }
      .site-footer .footer-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.6rem 1.3rem;
        border-radius: 8px;
        font-size: 1.02rem;
        font-weight: 600;
        text-decoration: none !important;
        border: 1px solid var(--table-border-color, #d8d8d8);
        background: var(--sidebar-bg, #f5f5f5);
        color: var(--fg, inherit);
        transition: transform 0.15s, box-shadow 0.15s;
      }
      .site-footer .footer-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
      }
      .site-footer .footer-btn .star {
        color: #e3b341;
        font-size: 1.15rem;
      }
      .site-footer .footer-btn img.esewa-logo {
        height: 1.5rem;
        width: auto;
        display: block;
      }
      .site-footer .footer-note {
        font-size: 0.92rem;
        opacity: 0.75;
      }
    `;
    document.head.appendChild(style);
  }

  // GitHub button in the top-right toolbar of every page.
  function buildToolbarButton() {
    if (document.querySelector(".gh-toolbar-btn")) return;
    var rightButtons = document.querySelector(".right-buttons");
    if (!rightButtons) return;

    var btn = document.createElement("a");
    btn.className = "gh-toolbar-btn";
    btn.href = GITHUB_URL;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.title = "Star this book on GitHub";
    btn.setAttribute("aria-label", "GitHub repository");
    btn.innerHTML = GITHUB_SVG;
    rightButtons.insertBefore(btn, rightButtons.firstChild);
  }

  // Footer with GitHub star + eSewa support button.
  function buildFooter() {
    if (document.querySelector(".site-footer")) return;
    var content =
      document.querySelector("#mdbook-content main") ||
      document.querySelector("#content main") ||
      document.querySelector("main");
    if (!content) return;

    var root = siteRoot();

    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="footer-actions">' +
      '<a class="footer-btn" href="' + GITHUB_URL + '" target="_blank" rel="noopener" title="Star this project on GitHub">' +
      '<span class="star">&#9733;</span> Star on GitHub' +
      "</a>" +
      '<a class="footer-btn" href="' + root + 'esewa_account.html" title="Support me via eSewa">' +
      '<img class="esewa-logo" src="' + root + 'assets/Esewa_logo.webp" alt="eSewa" /> Support me' +
      "</a>" +
      "</div>" +
      '<div class="footer-note">Raising Funds to Become Independent</div>';

    content.appendChild(footer);
  }

  function init() {
    buildToolbarButton();
    buildFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
