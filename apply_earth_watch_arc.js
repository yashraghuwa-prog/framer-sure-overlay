const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "public", "index.html");
let html = fs.readFileSync(htmlPath, "utf8");

const customStyles = `
<style id="custom-enhancements">
  /* 1. Remove Made in Framer Badge completely */
  #__framer-badge-container, [data-framer-badge], .framer-badge {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
    visibility: hidden !important;
  }

  /* 2. Black Part & Text Moved Down Together */
  .framer-y1onvt {
    background: linear-gradient(180deg, 
      rgba(10, 13, 20, 0) 0%, 
      rgba(10, 13, 20, 0) 180px, 
      rgba(10, 13, 20, 0.85) 300px, 
      #0a0d14 380px, 
      #0a0d14 100%
    ) !important;
    padding-top: 100px !important;
  }
  @media (min-width: 720px) and (max-width: 1199.98px) {
    .framer-y1onvt {
      background: linear-gradient(180deg, 
        rgba(10, 13, 20, 0) 0%, 
        rgba(10, 13, 20, 0) 140px, 
        rgba(10, 13, 20, 0.85) 240px, 
        #0a0d14 300px, 
        #0a0d14 100%
      ) !important;
      padding-top: 80px !important;
    }
  }
  @media (max-width: 719.98px) {
    .framer-y1onvt {
      background: linear-gradient(180deg, 
        rgba(10, 13, 20, 0) 0%, 
        rgba(10, 13, 20, 0) 100px, 
        rgba(10, 13, 20, 0.85) 180px, 
        #0a0d14 240px, 
        #0a0d14 100%
      ) !important;
      padding-top: 60px !important;
    }
  }

  .framer-1nxi3rr {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    padding: 0 !important;
  }
  .framer-1ddg964 p, .framer-1tgfjm0 p, .framer-1bsnapa p, .framer-16ufupg p, .framer-155e7y5 p {
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.95), 0 0 28px rgba(0, 0, 0, 0.9), 0 4px 30px rgba(0, 0, 0, 0.85) !important;
  }

  /* 3. Earth Confined Inside the Watch: Moves from Middle to Right and Back to Middle */
  @keyframes earthWatchArc {
    0% {
      transform: rotate(-90deg); /* Middle of the watch (12 o'clock perpendicular) */
    }
    50% {
      transform: rotate(-15deg); /* Right side of the watch arch */
    }
    100% {
      transform: rotate(-90deg); /* Back to middle of the watch */
    }
  }

  .framer-gnpcaj, .framer-8Ymix {
    overflow: visible !important;
  }
  .framer-1w9q7pm {
    width: 78% !important;
    left: 11% !important;
    top: calc(48.9266% - 19px) !important;
    height: 38px !important;
    transform-origin: 50% 50% !important;
    animation: earthWatchArc 14s ease-in-out infinite !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 30 !important;
    pointer-events: none !important;
  }
  .framer-1ig6k18 {
    width: 36px !important;
    height: 36px !important;
    position: absolute !important;
    top: 50% !important;
    right: 0 !important;
    bottom: unset !important;
    transform: translateY(-50%) !important;
    border-radius: 50% !important;
    box-shadow: 0 0 20px rgba(70, 175, 255, 1), 0 0 40px rgba(0, 130, 255, 0.8), 0 0 60px rgba(0, 80, 220, 0.5) !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 35 !important;
  }
  .framer-1ig6k18 img {
    width: 36px !important;
    height: 36px !important;
    border-radius: 50% !important;
    display: block !important;
  }
  .framer-pj8xo4 {
    display: none !important;
  }

  /* 4. Top Nav Bar: Dark blurred background strip when scrolled down only */
  .framer-pa1xsi-container {
    transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.35s ease, -webkit-backdrop-filter 0.35s ease, border-bottom 0.35s ease, box-shadow 0.35s ease !important;
    background-color: transparent !important;
  }
  .framer-pa1xsi-container.scrolled-down {
    background-color: rgba(10, 13, 20, 0.92) !important;
    backdrop-filter: blur(20px) saturate(160%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(160%) !important;
    border-bottom: 1px solid rgba(253, 213, 144, 0.18) !important;
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.75) !important;
  }

  /* 5. Top-Right Fixed Language Switcher */
  #custom-language-switcher {
    position: fixed;
    top: 20px;
    right: 28px;
    z-index: 999999;
    display: flex;
    align-items: center;
    background: rgba(18, 22, 30, 0.88);
    border: 1px solid rgba(204, 158, 78, 0.5);
    border-radius: 100px;
    padding: 3px;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 12px rgba(253, 213, 144, 0.15);
    user-select: none;
    cursor: pointer;
    font-family: "Khand", "Khand Variable", sans-serif;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  #custom-language-switcher:hover {
    border-color: rgba(253, 213, 144, 0.8);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.7), 0 0 16px rgba(253, 213, 144, 0.3);
  }
  .lang-btn {
    position: relative;
    z-index: 2;
    padding: 6px 16px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(253, 213, 144, 0.75);
    transition: color 0.3s ease;
    border-radius: 100px;
  }
  .lang-btn.active {
    color: rgb(10, 13, 20);
    font-weight: 700;
  }
  .lang-slider {
    position: absolute;
    top: 3px;
    left: 3px;
    bottom: 3px;
    width: calc(50% - 3px);
    background: linear-gradient(135deg, #fdd590 0%, #e5b96c 100%);
    border-radius: 100px;
    box-shadow: 0 2px 10px rgba(253, 213, 144, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }
  #custom-language-switcher[data-lang="hi"] .lang-slider {
    transform: translateX(100%);
  }
  @media (max-width: 719.98px) {
    #custom-language-switcher {
      top: 14px;
      right: 14px;
      padding: 2px;
    }
    .lang-btn {
      padding: 4px 12px;
      font-size: 12px;
    }
  }
</style>
`;

html = html.replace(/<style id="custom-enhancements">[\s\S]*?<\/style>/, customStyles.trim());

fs.writeFileSync(htmlPath, html, "utf8");
console.log("Applied Earth watch arc styling to index.html!");
