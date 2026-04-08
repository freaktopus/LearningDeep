/**
 * ZoomImg — lightweight modal zoom for Markdown images
 * Usage: ZoomImg({ src, alt, caption, width })
 */
(function () {
  // Inject styles once
  if (!document.getElementById("zoomimg-style")) {
    const style = document.createElement("style");
    style.id = "zoomimg-style";
    style.textContent = `
      .zoomimg-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5rem auto;
      }
      .zoomimg-thumb {
        cursor: zoom-in;
        border-radius: 8px;
        transition: box-shadow 0.2s, transform 0.2s;
        display: block;
      }
      .zoomimg-thumb:hover {
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        transform: scale(1.01);
      }
      .zoomimg-caption {
        margin-top: 0.5rem;
        font-size: 0.85em;
        color: #888;
        text-align: center;
      }
      #zoomimg-overlay {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0,0,0,0.88);
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(4px);
      }
      #zoomimg-overlay.active { display: flex; }
      #zoomimg-close {
        position: fixed;
        top: 14px; right: 22px;
        color: #fff;
        font-size: 2rem;
        cursor: pointer;
        line-height: 1;
        opacity: 0.8;
        transition: opacity 0.15s;
        user-select: none;
        z-index: 10000;
      }
      #zoomimg-close:hover { opacity: 1; }
      #zoomimg-hint {
        position: fixed;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(255,255,255,0.45);
        font-size: 0.78rem;
        pointer-events: none;
        letter-spacing: 0.03em;
      }
      #zoomimg-canvas {
        cursor: grab;
        max-width: 92vw;
        max-height: 88vh;
        user-select: none;
      }
      #zoomimg-canvas:active { cursor: grabbing; }
      #zoomimg-modal-img {
        max-width: 92vw;
        max-height: 88vh;
        object-fit: contain;
        border-radius: 6px;
        display: block;
        transition: transform 0.15s ease;
        will-change: transform;
      }
    `;
    document.head.appendChild(style);
  }

  // Build overlay once
  if (!document.getElementById("zoomimg-overlay")) {
    const overlay = document.createElement("div");
    overlay.id = "zoomimg-overlay";
    overlay.innerHTML = `
      <span id="zoomimg-close" title="Close (Esc)">&times;</span>
      <div id="zoomimg-canvas">
        <img id="zoomimg-modal-img" draggable="false" />
      </div>
      <div id="zoomimg-hint">scroll to zoom &nbsp;·&nbsp; drag to pan &nbsp;·&nbsp; double-click to reset</div>
    `;
    document.body.appendChild(overlay);

    const canvas = document.getElementById("zoomimg-canvas");
    const modalImg = document.getElementById("zoomimg-modal-img");
    const close = document.getElementById("zoomimg-close");
    let scale = 1,
      ox = 0,
      oy = 0,
      dragging = false,
      sx,
      sy;

    const apply = () =>
      (modalImg.style.transform = `translate(${ox}px,${oy}px) scale(${scale})`);

    const reset = () => {
      scale = 1;
      ox = 0;
      oy = 0;
      apply();
    };

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    close.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        scale = Math.min(Math.max(0.5, scale - e.deltaY * 0.001), 6);
        apply();
      },
      { passive: false },
    );

    canvas.addEventListener("mousedown", (e) => {
      dragging = true;
      sx = e.clientX - ox;
      sy = e.clientY - oy;
    });
    window.addEventListener("mouseup", () => (dragging = false));
    canvas.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      ox = e.clientX - sx;
      oy = e.clientY - sy;
      apply();
    });
    canvas.addEventListener("dblclick", reset);

    function closeModal() {
      overlay.classList.remove("active");
      reset();
    }
  }

  /**
   * Render a zoomable image into the current script's placeholder.
   * @param {object} opts
   * @param {string} opts.src      - image path (required)
   * @param {string} [opts.alt]    - alt text
   * @param {string} [opts.caption]- caption shown below thumbnail
   * @param {string} [opts.width]  - CSS width of thumbnail, e.g. "80%", "600px"
   */
  window.ZoomImg = function ({
    src,
    alt = "",
    caption = "",
    width = "100%",
    targetScript = null,
  }) {
    // Replace placeholders in deterministic DOM order.
    // This avoids reverse/random ordering when calls are deferred.
    let target = null;

    if (
      targetScript &&
      document.contains(targetScript) &&
      targetScript.matches("script[image_tool]") &&
      targetScript.getAttribute("data-zoomimg-processed") !== "1"
    ) {
      target = targetScript;
    } else {
      target = document.querySelector(
        'script[image_tool]:not([data-zoomimg-processed="1"])',
      );
    }

    if (!target) return;
    target.setAttribute("data-zoomimg-processed", "1");

    const wrap = document.createElement("div");
    wrap.className = "zoomimg-wrap";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "zoomimg-thumb";
    img.style.width = width;
    img.onclick = () => {
      document.getElementById("zoomimg-modal-img").src = src;
      document.getElementById("zoomimg-overlay").classList.add("active");
    };

    wrap.appendChild(img);

    if (caption) {
      const cap = document.createElement("p");
      cap.className = "zoomimg-caption";
      cap.textContent = caption;
      wrap.appendChild(cap);
    }

    target.replaceWith(wrap);
  };
})();
