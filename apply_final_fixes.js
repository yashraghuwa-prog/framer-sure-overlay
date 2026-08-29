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

  /* 3. Earth: Touching the Outer Golden Watch Rim & Orbiting Smoothly Across the Top Arch */
  @keyframes earthWatchArc {
    0% {
      transform: rotate(-90deg); /* Middle (perpendicular / 12 o'clock touching top arch) */
    }
    50% {
      transform: rotate(-20deg); /* Right side of the watch arch */
    }
    100% {
      transform: rotate(-90deg); /* Back to middle of the watch */
    }
  }

  .framer-gnpcaj, .framer-8Ymix {
    overflow: visible !important;
  }
  .framer-1w9q7pm {
    width: 96% !important;
    left: 2% !important;
    top: calc(48.9266% - 20px) !important;
    height: 40px !important;
    transform-origin: 50% 50% !important;
    animation: earthWatchArc 14s ease-in-out infinite !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 30 !important;
    pointer-events: none !important;
  }

  /* White pointer line: Only from center point forward to Earth, ZERO tail in the back */
  .framer-qbqywg, .framer-8Ymix .framer-qbqywg {
    position: absolute !important;
    left: 50% !important;
    right: 22px !important;
    top: calc(50% - 1px) !important;
    height: 1.5px !important;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.85) 60%, rgba(120, 210, 255, 1) 100%) !important;
    box-shadow: 0 0 8px rgba(100, 200, 255, 0.75) !important;
    border: none !important;
    border-radius: 2px !important;
    z-index: 25 !important;
    inset: unset !important;
  }

  /* Earth planet: Touching the golden watch rim */
  .framer-1ig6k18 {
    width: 40px !important;
    height: 40px !important;
    position: absolute !important;
    top: 50% !important;
    right: 0 !important;
    bottom: unset !important;
    transform: translateY(-50%) !important;
    border-radius: 50% !important;
    box-shadow: 0 0 22px rgba(70, 175, 255, 1), 0 0 45px rgba(0, 130, 255, 0.85), 0 0 70px rgba(0, 80, 220, 0.5) !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 35 !important;
  }
  .framer-1ig6k18 img {
    width: 40px !important;
    height: 40px !important;
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

const scriptEnhancements = `
<div id="custom-language-switcher" data-lang="en" role="button" aria-label="Toggle Language English / Hindi">
  <div class="lang-slider"></div>
  <div class="lang-btn active" id="btn-lang-en">ENGLISH</div>
  <div class="lang-btn" id="btn-lang-hi">हिंदी</div>
</div>

<script id="custom-interactions">
(function() {
  function handleNavScroll() {
    var nav = document.querySelector('.framer-pa1xsi-container');
    if (nav) {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled-down');
      } else {
        nav.classList.remove('scrolled-down');
      }
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  window.addEventListener('DOMContentLoaded', handleNavScroll);
  setTimeout(handleNavScroll, 100);

  var translations = [
    // Navbar
    { en: "The Idea", hi: "विचार" },
    { en: "Journey", hi: "यात्रा" },
    { en: "Installations", hi: "स्थापनाएं" },
    { en: "App", hi: "ऐप" },
    { en: "Products", hi: "उत्पाद" },
    { en: "Get the app", hi: "ऐप प्राप्त करें" },
    
    // Hero
    { en: "Time, as the", hi: "समय, जैसा" },
    { en: "Vedas measured it.", hi: "वेदों ने मापा।" },
    { en: "Patented · 30-Hour Vedic Time System", hi: "पेटेंटकृत · ३० घंटे की वैदिक समय प्रणाली" },
    { en: "Aarohanam Labs has revived the world’s oldest cosmology of time — a 30-hour day, anchored to the sun, divided into 30 muhurats — and rebuilt it as a living digital instrument. From the first tower clock at Ujjain to the device on your wrist.", hi: "आरोहणम् लैब्स ने समय की विश्व की सबसे प्राचीन खगोलीय प्रणाली को पुनर्जीवित किया है — एक ३० घंटे का दिन, जो सूर्य पर आधारित, ३० मुहूर्तों में विभाजित है — और इसे एक जीवंत डिजिटल उपकरण के रूप में पुनः निर्मित किया है। उज्जैन की पहली टॉवर घड़ी से लेकर आपकी कलाई तक।" },
    { en: "Aarohanam Labs has revived the world's oldest cosmology of time — a 30-hour day, anchored to the sun, divided into 30 muhurats — and rebuilt it as a living digital instrument. From the first tower clock at Ujjain to the device on your wrist.", hi: "आरोहणम् लैब्स ने समय की विश्व की सबसे प्राचीन खगोलीय प्रणाली को पुनर्जीवित किया है — एक ३० घंटे का दिन, जो सूर्य पर आधारित, ३० मुहूर्तों में विभाजित है — और इसे एक जीवंत डिजिटल उपकरण के रूप में पुनः निर्मित किया है। उज्जैन की पहली टॉवर घड़ी से लेकर आपकी कलाई तक।" },
    { en: "Aarohanam Labs has revived the world’s oldest cosmology of time —", hi: "आरोहणम् लैब्स ने समय की विश्व की सबसे प्राचीन खगोलीय प्रणाली को पुनर्जीवित किया है —" },
    { en: "Aarohanam Labs has revived the world's oldest cosmology of time —", hi: "आरोहणम् लैब्स ने समय की विश्व की सबसे प्राचीन खगोलीय प्रणाली को पुनर्जीवित किया है —" },
    { en: "a 30-hour", hi: "३० घंटे का" },
    { en: "30 muhurats", hi: "३० मुहूर्त" },
    { en: "— and rebuilt it as a living digital instrument. From the first tower clock at Ujjain to the device on your wrist.", hi: "— और इसे एक जीवंत डिजिटल साधन के रूप में पुनः निर्मित किया है। उज्जैन की पहली टॉवर घड़ी से लेकर आपकी कलाई तक।" },
    { en: ", anchored to the sun, divided into", hi: ", जो सूर्य पर आधारित," },
    
    // Section Idea & Patent
    { en: "The Idea & The Patent", hi: "विचार और पेटेंट" },
    { en: "The Idea &amp; The Patent", hi: "विचार और पेटेंट" },
    { en: "THE PATENT", hi: "और पेटेंट" },
    { en: "The Patent", hi: "और पेटेंट" },
    { en: "& THE PATENT", hi: "और पेटेंट" },
    { en: "&amp; THE PATENT", hi: "और पेटेंट" },
    { en: "A clock that turns", hi: "एक घड़ी जो घूमती है" },
    { en: "with the sun.", hi: "सूर्य के साथ।" },
    { en: "For five thousand years, India measured time not by the swing of a", hi: "पाँच हज़ार वर्षों तक, भारत ने समय को लोलक के दोलन से नहीं बल्कि" },
    { en: "pendulum but by the rising of the sun. Sūryodaya to sūryodaya —", hi: "सूर्योदय से मापा। सूर्योदय से सूर्योदय —" },
    { en: "pendulum but by the rising of the sun.", hi: "सूर्योदय से मापा।" },
    { en: "Sūryodaya to sūryodaya", hi: "सूर्योदय से सूर्योदय" },
    { en: "one full day, divided into thirty equal muhurats. We hold the patent", hi: "एक पूर्ण दिन, तीस समान मुहूर्तों में विभाजित। इस प्रणाली के डिजिटल" },
    { en: "on the digital reconstruction of that system.", hi: "पुनर्निर्माण का पेटेंट हमारे पास है।" },
    
    // Muhurats vs Hours
    { en: "Vedic · Muhurats", hi: "वैदिक · मुहूर्त" },
    { en: "Anchored to your sunrise. Each muhurat a 48-minute window, named for a deva, suited to a sādhana.", hi: "आपके सूर्योदय से जुड़ा हुआ। प्रत्येक मुहूर्त ४८ मिनट की अवधि, एक देवता के नाम पर, साधना के अनुकूल।" },
    { en: "Western · Hours", hi: "पाश्चात्य · घंटे" },
    { en: "Anchored to the mean solar day, decoupled from your local sky. The same minute everywhere.", hi: "औसत सौर दिवस पर आधारित, आपके स्थानीय आकाश से अलग। हर जगह एक ही मिनट।" },
    
    // Recognition & Journey
    { en: "Recognition & Journey", hi: "मान्यता और यात्रा" },
    { en: "From a foundation stone to a national symbol.", hi: "शिलान्यास से लेकर राष्ट्रीय प्रतीक तक।" },
    { en: "From a foundation stone", hi: "शिलान्यास से लेकर" },
    { en: "to a national symbol.", hi: "राष्ट्रीय प्रतीक तक।" },
    { en: "Three years. Three sacred installations. One ancient idea, returning.", hi: "तीन वर्ष। तीन पवित्र स्थापनाएं। एक प्राचीन विचार की वापसी।" },
    { en: "Each tower is more than a timekeeper. It is a public reassertion that India’s astronomical heritage is precise, alive, and worth standing 85 feet tall for.", hi: "प्रत्येक टॉवर केवल एक समयमापक से कहीं अधिक है। यह एक सार्वजनिक उद्घोष है कि भारत की खगोलीय धरोहर सटीक, जीवंत और ८५ फीट ऊंची शान से खड़े होने योग्य है।" },
    { en: "Each tower is more than a timekeeper. It is a public reassertion that India's astronomical heritage is precise, alive, and worth standing 85 feet tall for.", hi: "प्रत्येक टॉवर केवल एक समयमापक से कहीं अधिक है। यह एक सार्वजनिक उद्घोष है कि भारत की खगोलीय धरोहर सटीक, जीवंत और ८५ फीट ऊंची शान से खड़े होने योग्य है।" },
    
    // Cards (Image 1, 2, 3)
    { en: "UJJAIN · MP", hi: "उज्जैन · मध्य प्रदेश" },
    { en: "Ujjain · MP", hi: "उज्जैन · मध्य प्रदेश" },
    { en: "Jantar Mantar Tower", hi: "जंतर मंतर टॉवर" },
    { en: "Inaugurated virtually by PM Narendra Modi on Feb 29, 2024. The flagship installation, adjacent to the Government Jiwaji Observatory.", hi: "२९ फरवरी २०२४ को प्रधानमंत्री नरेंद्र मोदी द्वारा वर्चुअल उद्घाटन। शासकीय जीवाजी वेधशाला के समीप प्रमुख स्थापना।" },
    { en: "85-FOOT LANDMARK · 2024", hi: "८५ फीट ऐतिहासिक स्थल · २०२४" },
    { en: "85-foot landmark · 2024", hi: "८५ फीट ऐतिहासिक स्थल · २०२४" },
    { en: "85-FOOT LANDMARK", hi: "८५ फीट ऐतिहासिक स्थल" },
    { en: "85-foot landmark", hi: "८५ फीट ऐतिहासिक स्थल" },
    { en: "India’s flagship Vedic Clock installation beside the Government Jiwaji Observatory, calibrated to reconnect public life with solar time.", hi: "शासकीय जीवाजी वेधशाला के समीप भारत की प्रमुख वैदिक घड़ी स्थापना, जो सार्वजनिक जीवन को सौर समय से पुनः जोड़ने के लिए समायोजित है।" },
    { en: "India's flagship Vedic Clock installation beside the Government Jiwaji Observatory, calibrated to reconnect public life with solar time.", hi: "शासकीय जीवाजी वेधशाला के समीप भारत की प्रमुख वैदिक घड़ी स्थापना, जो सार्वजनिक जीवन को सौर समय से पुनः जोड़ने के लिए समायोजित है।" },
    { en: "India’s flagship Vedic Clock installation, beside the Government Jiwaji Observatory. A living public landmark calibrated to the sun.", hi: "शासकीय जीवाजी वेधशाला के समीप भारत की प्रमुख वैदिक घड़ी स्थापना। सूर्य के अनुसार समायोजित एक जीवंत सार्वजनिक स्थल।" },
    { en: "India's flagship Vedic Clock installation, beside the Government Jiwaji Observatory. A living public landmark calibrated to the sun.", hi: "शासकीय जीवाजी वेधशाला के समीप भारत की प्रमुख वैदिक घड़ी स्थापना। सूर्य के अनुसार समायोजित एक जीवंत सार्वजनिक स्थल।" },
    
    { en: "BHOPAL · MP", hi: "भोपाल · मध्य प्रदेश" },
    { en: "Bhopal · MP", hi: "भोपाल · मध्य प्रदेश" },
    { en: "CM Official Residence", hi: "मुख्यमंत्री आधिकारिक निवास" },
    { en: "CIVIC INSTALLATION · 2024", hi: "नागरिक स्थापना · २०२४" },
    { en: "Civic installation · 2024", hi: "नागरिक स्थापना · २०२४" },
    { en: "CIVIC INSTALLATION", hi: "नागरिक स्थापना" },
    { en: "Civic installation", hi: "नागरिक स्थापना" },
    { en: "A monumental Vedic timepiece created for the official residence—placing the panchang in a daily civic setting.", hi: "मुख्यमंत्री निवास के लिए निर्मित एक भव्य वैदिक कालमापक — जो पंचांग को दैनिक नागरिक परिवेश में स्थापित करता है।" },
    { en: "A monumental Vedic timepiece created for the official residence—bringing the panchang into a daily civic setting.", hi: "मुख्यमंत्री निवास के लिए निर्मित एक भव्य वैदिक कालमापक — जो पंचांग को दैनिक नागरिक परिवेश में लाता है।" },
    
    { en: "VARANASI · UP", hi: "वाराणसी · उत्तर प्रदेश" },
    { en: "Varanasi · UP", hi: "वाराणसी · उत्तर प्रदेश" },
    { en: "Vishwanath Corridor", hi: "विश्वनाथ कॉरिडोर" },
    { en: "HERITAGE CORRIDOR · 2024", hi: "विरासत कॉरिडोर · २०२४" },
    { en: "Heritage corridor · 2024", hi: "विरासत कॉरिडोर · २०२४" },
    { en: "HERITAGE CORRIDOR", hi: "विरासत कॉरिडोर" },
    { en: "Heritage corridor", hi: "विरासत कॉरिडोर" },
    { en: "A heritage-facing clock installation connecting ancient Indian timekeeping with one of the country’s most visited sacred corridors.", hi: "देश के सबसे प्रतिष्ठित पवित्र गलियारों में से एक के साथ प्राचीन भारतीय काल-गणना को जोड़ने वाली एक ऐतिहासिक घड़ी स्थापना।" },
    { en: "A heritage-facing clock installation connecting ancient Indian timekeeping with one of the country's most visited sacred corridors.", hi: "देश के सबसे प्रतिष्ठित पवित्र गलियारों में से एक के साथ प्राचीन भारतीय काल-गणना को जोड़ने वाली एक ऐतिहासिक घड़ी स्थापना।" },
    
    { en: "Installed", hi: "स्थापित" },
    { en: "Tower HEIGHT", hi: "टॉवर ऊंचाई" },
    { en: "Tower Height", hi: "टॉवर ऊंचाई" },
    { en: "85 ft", hi: "८५ फीट" },
    
    // Timeline events
    { en: "Foundation Stone, Ujjain", hi: "शिलान्यास, उज्जैन" },
    { en: "Jantar Mantar · Madhya Pradesh", hi: "जंतर मंतर · मध्य प्रदेश" },
    { en: "Foundation laid for the world’s first Vedic clock by then- Higher Education Minister, Dr. Mohan Yadav.", hi: "तत्कालीन उच्च शिक्षा मंत्री डॉ. मोहन यादव द्वारा विश्व की पहली वैदिक घड़ी का शिलान्यास किया गया।" },
    { en: "Foundation laid for the world's first Vedic clock by then- Higher Education Minister, Dr. Mohan Yadav.", hi: "तत्कालीन उच्च शिक्षा मंत्री डॉ. मोहन यादव द्वारा विश्व की पहली वैदिक घड़ी का शिलान्यास किया गया।" },
    { en: "PM Narendra Modi inaugurates the Vedic Ghadi", hi: "प्रधानमंत्री नरेंद्र मोदी ने वैदिक घड़ी का उद्घाटन किया" },
    { en: "Ujjain · 85-foot tower", hi: "उज्जैन · ८५ फीट टॉवर" },
    { en: "Prime Minister Modi virtually unveils the world’s first Vedic Clock at Jantar Mantar — reclaiming Ujjain’s ancient role as the centre of timekeeping.", hi: "प्रधानमंत्री मोदी ने जंतर मंतर पर विश्व की पहली वैदिक घड़ी का वर्चुअल अनावरण किया — समय मापन के केंद्र के रूप में उज्जैन की प्राचीन भूमिका को पुनः स्थापित किया।" },
    { en: "Prime Minister Modi virtually unveils the world's first Vedic Clock at Jantar Mantar — reclaiming Ujjain's ancient role as the centre of timekeeping.", hi: "प्रधानमंत्री मोदी ने जंतर मंतर पर विश्व की पहली वैदिक घड़ी का वर्चुअल अनावरण किया — समय मापन के केंद्र के रूप में उज्जैन की प्राचीन भूमिका को पुनः स्थापित किया।" },
    { en: "Tower Clock at CM House", hi: "मुख्यमंत्री निवास पर टॉवर क्लॉक" },
    { en: "Shyamla Hills, Bhopal", hi: "श्यामला हिल्स, भोपाल" },
    { en: "Second installation at the official residence of the Chief  Minister of Madhya Pradesh.", hi: "मध्य प्रदेश के माननीय मुख्यमंत्री के आधिकारिक निवास पर दूसरी स्थापना।" },
    { en: "Varanasi · Uttar Pradesh", hi: "वाराणसी · उत्तर प्रदेश" },
    { en: "Presented by CM Mohan Yadav to UP CM Yogi Adityanath. PM Modi’s subsequent visit pushed digital reach past 7.8 million.", hi: "मुख्यमंत्री मोहन यादव द्वारा यूपी के मुख्यमंत्री योगी आदित्यनाथ को भेंट। प्रधानमंत्री मोदी के दौरे ने डिजिटल पहुंच को ७.८ मिलियन के पार पहुंचाया।" },
    { en: "Presented by CM Mohan Yadav to UP CM Yogi Adityanath. PM Modi's subsequent visit pushed digital reach past 7.8 million.", hi: "मुख्यमंत्री मोहन यादव द्वारा यूपी के मुख्यमंत्री योगी आदित्यनाथ को भेंट। प्रधानमंत्री मोदी के दौरे ने डिजिटल पहुंच को ७.८ मिलियन के पार पहुंचाया।" },
    { en: "Gifted by CM Yadav to UP CM Yogi Adityanath. PM Modi’s visit drove a digital reach of 7.8 million across India and abroad.", hi: "मुख्यमंत्री यादव द्वारा यूपी के मुख्यमंत्री योगी आदित्यनाथ को भेंट। प्रधानमंत्री मोदी के दौरे ने भारत और विदेश में ७.८ मिलियन की डिजिटल पहुंच बनाई।" },
    { en: "Gifted by CM Yadav to UP CM Yogi Adityanath. PM Modi's visit drove a digital reach of 7.8 million across India and abroad.", hi: "मुख्यमंत्री यादव द्वारा यूपी के मुख्यमंत्री योगी आदित्यनाथ को भेंट। प्रधानमंत्री मोदी के दौरे ने भारत और विदेश में ७.८ मिलियन की डिजिटल पहुंच बनाई।" },
    { en: "All Twelve Jyotirlingas", hi: "सभी बारह ज्योतिर्लिंग" },
    { en: "Phase I Rollout · Pan-India", hi: "चरण १ प्रसार · अखिल भारतीय" },
    { en: "Aarohanam is now in talks to install Vedic Ghadis at every Jyotirlinga site, with international shrines to follow.", hi: "आरोहणम् अब प्रत्येक ज्योतिर्लिंग स्थल पर वैदिक घड़ियां स्थापित करने के लिए वार्ता में है, जिसके बाद अंतरराष्ट्रीय तीर्थस्थल भी शामिल होंगे।" },
    
    // Enquiry & App Section
    { en: "For Governments · Temples · Heritage Sites", hi: "सरकारों · मंदिरों · विरासत स्थलों के लिए" },
    { en: "Commission a Vedic Tower Clock", hi: "वैदिक टॉवर घड़ी का निर्माण" },
    { en: "Custom heights, regional panchang calibration, multi-language displays. We work with state governments, temple trusts and heritage bodies for installation, integration and maintenance.", hi: "अनुकूलित ऊंचाई, क्षेत्रीय पंचांग गणना, बहुभाषी प्रदर्शन। हम स्थापना, एकीकरण और रखरखाव के लिए राज्य सरकारों, मंदिर ट्रस्टों और विरासत निकायों के साथ काम करते हैं।" },
    { en: "Raise an Enquiry", hi: "पूछताछ दर्ज करें" },
    { en: "Vedic Ghadi · App", hi: "वैदिक घड़ी · ऐप" },
    { en: "The temple tower,", hi: "मंदिर का शिखर," },
    { en: "on your phone.", hi: "आपके फोन पर।" },
    { en: "Launched alongside the Ujjain installation, the Vedic Ghadi app brings every reading the tower displays to your pocket; auto-calibrated to your latitude, longitude and the local sunrise.", hi: "उज्जैन स्थापना के साथ लॉन्च किया गया, वैदिक घड़ी ऐप टॉवर द्वारा प्रदर्शित हर गणना को आपकी जेब में लाता है; आपके अक्षांश, देशांतर और स्थानीय सूर्योदय के अनुसार स्वतः समायोजित।" },
    { en: "30 Muhurat live tracking", hi: "३० मुहूर्त लाइव ट्रैकिंग" },
    { en: "Watch your day flow through Rudra, Ahi, Mitra and on. The current muhurat highlighted, with start and end timestamps.", hi: "अपने दिन को रुद्र, अहि, मित्र आदि के माध्यम से देखें। वर्तमान मुहूर्त हाइलाइट किया गया, प्रारंभ और समाप्ति समय के साथ।" },
    { en: "Full Panchang", hi: "संपूर्ण पंचांग" },
    { en: "Tithi, nakshatra, yoga, karana, rahu-kalam, choghadiya, shubh muhurat —", hi: "तिथि, नक्षत्र, योग, करण, राहु-काल, चौघड़िया, शुभ मुहूर्त —" },
    { en: "calculated for your exact location.", hi: "आपके सटीक स्थान के लिए गणना।" },
    { en: "Sunrise-anchored time", hi: "सूर्योदय-आधारित समय" },
    { en: "Vedic Standard Time updated locally each dawn. IST and GMT shown alongside.", hi: "प्रत्येक भोर में स्थानीय रूप से अद्यतन वैदिक मानक समय। IST और GMT साथ में प्रदर्शित।" },
    { en: "200+ languages", hi: "२००+ भाषाएं" },
    { en: "Hindi, Sanskrit, Marathi, Tamil, Telugu… and foreign tongues including Hebrew, Spanish, French, German.", hi: "हिंदी, संस्कृत, मराठी, तमिल, तेलुगु… और हिब्रू, स्पेनिश, फ्रेंच, जर्मन सहित विदेशी भाषाएं।" },
    { en: "Download now", hi: "अभी डाउनलोड करें" },
    { en: "App Store", hi: "ऐप स्टोर" },
    { en: "Google Play", hi: "गूगल प्ले" },
    
    // Products
    { en: "Physical Products", hi: "भौतिक उत्पाद" },
    { en: "From the tower", hi: "टॉवर से लेकर" },
    { en: "to the wrist.", hi: "कलाई तक।" },
    { en: "One time system, four scales. Available now, or arriving soon.", hi: "एक समय प्रणाली, चार रूप। अभी उपलब्ध, या शीघ्र आने वाले।" },
    { en: "Tower Clock", hi: "टॉवर क्लॉक" },
    { en: "Kiosk · Coming soon", hi: "कियोस्क · शीघ्र आ रहा है" },
    { en: "Table Clock · Coming soon", hi: "टेबल क्लॉक · शीघ्र आ रहा है" },
    { en: "Wristwatch · Coming soon", hi: "स्मार्ट वॉच · शीघ्र आ रहा है" },
    { en: "Share your email to get notified at every launch.", hi: "प्रत्येक लॉन्च की सूचना प्राप्त करने के लिए अपना ईमेल साझा करें।" },
    { en: "Notify Me", hi: "मुझे सूचित करें" },
    { en: "Bridging India’s astronomical wisdom with modern digital tools. Patent-holders of the 30-hour Vedic Time System.", hi: "भारत के खगोलीय ज्ञान को आधुनिक डिजिटल उपकरणों से जोड़ना। ३० घंटे की वैदिक समय प्रणाली के पेटेंट धारक।" },
    { en: "Bridging India's astronomical wisdom with modern digital tools. Patent-holders of the 30-hour Vedic Time System.", hi: "भारत के खगोलीय ज्ञान को आधुनिक डिजिटल उपकरणों से जोड़ना। ३० घंटे की वैदिक समय प्रणाली के पेटेंट धारक।" },
    { en: "Product", hi: "उत्पाद" },
    { en: "Vedic Ghadi App", hi: "वैदिक घड़ी ऐप" },
    { en: "Company", hi: "कंपनी" },
    { en: "Contact", hi: "संपर्क" },
    { en: "Connect", hi: "जुड़ें" }
  ];

  translations.sort(function(a, b) { return b.en.length - a.en.length; });

  var currentLang = 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    var switcher = document.getElementById('custom-language-switcher');
    var btnEn = document.getElementById('btn-lang-en');
    var btnHi = document.getElementById('btn-lang-hi');

    if (switcher) switcher.setAttribute('data-lang', lang);
    if (btnEn && btnHi) {
      if (lang === 'hi') {
        btnEn.classList.remove('active');
        btnHi.classList.add('active');
      } else {
        btnHi.classList.remove('active');
        btnEn.classList.add('active');
      }
    }

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while (node = walker.nextNode()) {
      if (node.parentElement && (node.parentElement.closest('#custom-language-switcher') || node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE')) {
        continue;
      }
      var text = node.nodeValue;
      if (!text || !text.trim()) continue;

      for (var i = 0; i < translations.length; i++) {
        var t = translations[i];
        if (lang === 'hi') {
          if (node.nodeValue.indexOf(t.en) !== -1) {
            node.nodeValue = node.nodeValue.split(t.en).join(t.hi);
          }
        } else {
          if (node.nodeValue.indexOf(t.hi) !== -1) {
            node.nodeValue = node.nodeValue.split(t.hi).join(t.en);
          }
        }
      }
    }
  }

  function initLanguageSwitcher() {
    var switcher = document.getElementById('custom-language-switcher');
    var btnEn = document.getElementById('btn-lang-en');
    var btnHi = document.getElementById('btn-lang-hi');

    if (btnEn) {
      btnEn.addEventListener('click', function(e) {
        e.stopPropagation();
        applyLanguage('en');
      });
    }
    if (btnHi) {
      btnHi.addEventListener('click', function(e) {
        e.stopPropagation();
        applyLanguage('hi');
      });
    }
    if (switcher) {
      switcher.addEventListener('click', function() {
        applyLanguage(currentLang === 'en' ? 'hi' : 'en');
      });
    }

    var observer = new MutationObserver(function() {
      if (currentLang === 'hi') {
        applyLanguage('hi');
      }
    });
    var main = document.getElementById('main');
    if (main) {
      observer.observe(main, { childList: true, subtree: true, characterData: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
</script>
`;

html = html.replace(/<style id="custom-enhancements">[\s\S]*?<\/style>/, customStyles.trim());
html = html.replace(/<div id="custom-language-switcher"[\s\S]*?<\/script>/, scriptEnhancements.trim());

fs.writeFileSync(htmlPath, html, "utf8");
console.log("Successfully applied all final fixes!");
