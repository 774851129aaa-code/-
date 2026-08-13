<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>    لآخرتي |   </title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#08080c">
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700;900&display=swap" rel="stylesheet">
<style>
  :root {
    --ms-bg: #08080c;
    --ms-surface: #10121a;
    --ms-surface-card: rgba(18, 22, 33, 0.75);
    --ms-border: rgba(255, 255, 255, 0.08);
    --ms-border-glow: rgba(0, 120, 212, 0.3);
    --ms-accent: #0078d4;
    --ms-accent-gradient: linear-gradient(135deg, #0078d4 0%, #00bcf2 100%);
    --ms-gold: #d4af37;
    --ms-gold-gradient: linear-gradient(135deg, #f5d77f 0%, #d4af37 50%, #9c7b15 100%);
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
    --shadow-deep: 0 30px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1);
    --glass-blur: blur(30px);
  }

  body.day-mode {
    --ms-bg: #f3f4f6;
    --ms-surface: #ffffff;
    --ms-surface-card: rgba(255, 255, 255, 0.85);
    --ms-border: rgba(0, 0, 0, 0.08);
    --ms-border-glow: rgba(0, 120, 212, 0.2);
    --ms-accent: #005a9e;
    --text-main: #111827;
    --text-muted: #4b5563;
    --shadow-deep: 0 20px 50px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; outline: none; }

  body {
    font-family: 'Tajawal', 'Plus Jakarta Sans', sans-serif;
    background-color: var(--ms-bg);
    color: var(--text-main);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  /* Microsoft Enterprise Background Grid Texture */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: 
      linear-gradient(to right, var(--ms-border) 1px, transparent 1px),
      linear-gradient(to bottom, var(--ms-border) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }

  /* ====== Ultra-Immersive Fullscreen Splash Screen ====== */
  .splash-screen {
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .splash-bg-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .splash-bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.65) contrast(1.1);
    transform: scale(1.03);
    animation: corporateZoom 20s infinite alternate cubic-bezier(0.25, 1, 0.5, 1);
  }

  @keyframes corporateZoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.08); }
  }

  .splash-backdrop-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(8, 8, 12, 0.96) 0%, rgba(8, 8, 12, 0.4) 50%, rgba(8, 8, 12, 0.8) 100%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 2;
  }

  .splash-header-meta {
    position: relative;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 50px;
  }

  .enterprise-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 10px 22px;
    border-radius: 100px;
    backdrop-filter: blur(20px);
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #fff;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  .enterprise-badge span {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 12px #10b981;
    animation: pulseDot 2s infinite;
  }

  @keyframes pulseDot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.5; }
  }

  .splash-core-center {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    max-width: 900px;
    margin-bottom: 8vh;
  }

  .splash-title-main {
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 900;
    color: #ffffff;
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -1px;
    text-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }

  .splash-title-main span {
    background: var(--ms-gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .splash-desc-sub {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    color: rgba(255, 255, 255, 0.75);
    font-weight: 400;
    max-width: 650px;
    line-height: 1.8;
    margin-bottom: 45px;
    text-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }

  /* Button precisely positioned at lower center with Microsoft fluent styling */
  .splash-btn-wrapper {
    position: relative;
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 7vh;
  }

  .splash-fluent-btn {
    position: relative;
    background: var(--ms-gold-gradient);
    color: #08080c;
    border: none;
    padding: 22px 75px;
    border-radius: 16px;
    font-size: 1.25rem;
    font-weight: 800;
    font-family: 'Tajawal', sans-serif;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.35), 0 0 0 1px rgba(255,255,255,0.3) inset;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .splash-fluent-btn::before {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transition: 0.6s;
  }

  .splash-fluent-btn:hover::before { left: 100%; }

  .splash-fluent-btn:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 30px 80px rgba(212, 175, 55, 0.5), 0 0 0 2px rgba(255,255,255,0.5) inset;
  }

  .splash-fluent-btn:active { transform: translateY(-1px); }

  .splash-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: scale(1.05);
  }

  /* ====== Enterprise Header & Navigation ====== */
  .enterprise-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--ms-surface-card);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-bottom: 1px solid var(--ms-border);
    padding: 16px 30px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  }

  .nav-flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto 16px auto;
  }

  .brand-identity {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
  }

  .brand-logo-icon {
    width: 44px; height: 44px;
    background: var(--ms-gold-gradient);
    border-radius: 12px;
    display: grid;
    place-items: center;
    font-size: 1.4rem;
    box-shadow: 0 8px 25px rgba(212,175,55,0.3);
  }

  .brand-logo-text {
    font-size: 1.7rem;
    font-weight: 900;
    background: var(--ms-gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
  }

  .action-tool-btn {
    background: var(--ms-surface);
    border: 1px solid var(--ms-border);
    color: var(--text-main);
    width: 46px; height: 46px;
    border-radius: 14px;
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .action-tool-btn:hover {
    border-color: var(--ms-accent);
    color: var(--ms-accent);
    background: rgba(0, 120, 212, 0.08);
    transform: translateY(-2px);
  }

  .nav-tabs-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
  }
  .nav-tabs-wrapper::-webkit-scrollbar { display: none; }

  .nav-tabs-grid {
    display: flex;
    gap: 10px;
    padding-bottom: 4px;
  }

  .nav-tab-pill {
    color: var(--text-muted);
    padding: 12px 24px;
    font-size: 0.98rem;
    font-weight: 700;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
  }

  .nav-tab-pill:hover {
    color: var(--text-main);
    background: var(--ms-surface);
    border-color: var(--ms-border);
  }

  .nav-tab-pill.active {
    background: var(--ms-gold-gradient);
    color: #08080c;
    border: 1px solid transparent;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
  }

  /* ====== Global Layout & Container ====== */
  .ticker-announcement {
    background: linear-gradient(90deg, rgba(212,175,55,0.1), rgba(0,120,212,0.1));
    border-bottom: 1px solid var(--ms-border);
    color: var(--ms-gold);
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
    padding: 16px 20px;
    margin: 0 auto 30px auto;
    max-width: 1200px;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 120px 20px;
  }

  .page { display: none; animation: fadeInView 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .page.active { display: block; }
  @keyframes fadeInView { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

  /* Enterprise Fluent Glass Cards */
  .fluent-card {
    background: var(--ms-surface-card);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    margin: 25px 0;
    padding: 35px;
    border-radius: 24px;
    border: 1px solid var(--ms-border);
    box-shadow: var(--shadow-deep);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .fluent-card::after {
    content: '';
    position: absolute;
    top: 0; right: 0; width: 4px; height: 100%;
    background: var(--ms-gold-gradient);
    opacity: 0.6;
  }

  .fluent-card:hover {
    border-color: rgba(212, 175, 55, 0.3);
    box-shadow: 0 35px 110px rgba(0,0,0,0.9);
  }

  .fluent-card h3 {
    text-align: right;
    margin: 0 0 25px 0;
    font-size: 1.4rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--text-main);
  }

  .fluent-card h3 span {
    background: var(--ms-gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ====== Widgets & Components ====== */
  .grid-2-cols {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
  }

  .prayer-time-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    margin: 14px 0;
    background: var(--ms-surface);
    border-radius: 16px;
    border: 1px solid var(--ms-border);
    font-weight: 700;
    transition: transform 0.2s;
  }
  .prayer-time-row:hover { transform: scale(1.01); border-color: var(--ms-accent); }
  .prayer-time-row span:last-child { color: var(--ms-gold); font-size: 1.2rem; font-weight: 900; }

  .ramadan-display-box {
    text-align: center;
    font-size: 4rem;
    font-weight: 900;
    background: var(--ms-gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 20px 0;
    text-shadow: 0 15px 40px rgba(212,175,55,0.2);
  }

  .fluent-btn {
    background: var(--ms-gold-gradient);
    color: #08080c;
    border: none;
    padding: 16px 28px;
    width: 100%;
    border-radius: 14px;
    font-size: 1.1rem;
    font-weight: 800;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.25);
  }
  .fluent-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
  }

  .channel-grid-item {
    background: var(--ms-surface);
    border: 1px solid var(--ms-border);
    border-radius: 20px;
    padding: 25px;
    margin: 18px 0;
    text-align: center;
    transition: all 0.3s;
  }
  .channel-grid-item:hover { border-color: var(--ms-gold); transform: translateY(-3px); }
  .channel-grid-item b { font-size: 1.25rem; color: var(--text-main); display: block; margin-bottom: 6px; }
  .channel-grid-item p { color: var(--text-muted); margin-bottom: 20px; font-size: 1rem; }

  /* ====== Quran Module ====== */
  #qSearch, #reciterSelect {
    width: 100%;
    padding: 18px 22px;
    border-radius: 14px;
    background: var(--ms-surface);
    border: 1px solid var(--ms-border);
    color: var(--text-main);
    margin-bottom: 16px;
    font-size: 1.05rem;
    font-family: inherit;
    transition: all 0.3s;
  }
  #qSearch:focus, #reciterSelect:focus { border-color: var(--ms-gold); box-shadow: 0 0 20px rgba(212, 175, 55, 0.15); }
  #reciterSelect option { background: #10121a; color: #fff; }

  .q-grid-container { max-height: 500px; overflow-y: auto; padding-right: 8px; }
  .q-grid-container::-webkit-scrollbar { width: 6px; }
  .q-grid-container::-webkit-scrollbar-thumb { background: var(--ms-border); border-radius: 10px; }

  .q-list-item {
    display: flex;
    align-items: center;
    gap: 20px;
    background: var(--ms-surface);
    border-radius: 16px;
    padding: 18px 22px;
    margin: 12px 0;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.25s;
    font-weight: 700;
  }
  .q-list-item:hover { border-color: var(--ms-border); transform: translateX(-4px); }
  .q-list-item.active { border-color: var(--ms-gold); background: rgba(212, 175, 55, 0.08); }

  .surah-number-badge {
    width: 48px; height: 48px;
    border-radius: 12px;
    background: var(--ms-bg);
    border: 1px solid var(--ms-gold);
    color: var(--ms-gold);
    display: grid;
    place-items: center;
    font-weight: 900;
    font-size: 1.1rem;
  }

  #qPlayerBox {
    background: var(--ms-surface);
    border: 1px solid var(--ms-border);
    border-radius: 20px;
    padding: 25px;
    margin-top: 25px;
    box-shadow: var(--shadow-deep);
  }

  #qProgress {
    height: 10px;
    background: var(--ms-bg);
    border-radius: 10px;
    overflow: hidden;
    margin: 22px 0 16px;
  }
  #qProgress i {
    display: block;
    height: 100%;
    background: var(--ms-gold-gradient);
    width: 0%;
    transition: width 0.15s linear;
  }

  .audio-controls-flex {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
  }
  .audio-controls-flex button {
    width: 56px; height: 56px;
    border-radius: 50%;
    border: 1px solid var(--ms-border);
    background: var(--ms-surface);
    color: var(--text-main);
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;
    display: grid;
    place-items: center;
  }
  .audio-controls-flex button:hover { background: rgba(212, 175, 55, 0.15); color: var(--ms-gold); border-color: var(--ms-gold); }
  .audio-controls-flex button.main-play {
    width: 76px; height: 76px;
    background: var(--ms-gold-gradient);
    color: #08080c;
    font-size: 28px;
    border: none;
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35);
  }

  .quran-mushaf-text {
    line-height: 2.6;
    font-size: 28px;
    text-align: justify;
    text-align-last: center;
    max-height: 65vh;
    overflow-y: auto;
    font-family: 'Amiri', serif;
    padding: 45px 35px;
    background: var(--ms-surface);
    color: var(--text-main);
    border-radius: 20px;
    margin-top: 25px;
    border: 1px solid var(--ms-border);
    position: relative;
    box-shadow: inset 0 0 50px rgba(0,0,0,0.1);
  }
  .quran-mushaf-text::-webkit-scrollbar { width: 6px; }
  .quran-mushaf-text::-webkit-scrollbar-thumb { background: var(--ms-border); border-radius: 10px; }

  .quran-mushaf-text .ayah-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px; height: 38px;
    margin: 0 10px;
    border-radius: 50%;
    background: rgba(212, 175, 55, 0.12);
    color: var(--ms-gold);
    font-size: 16px;
    font-family: 'Tajawal', sans-serif;
    font-weight: 800;
    vertical-align: middle;
    border: 1px solid var(--ms-border);
  }
  .quran-mushaf-text .basmala {
    display: block;
    text-align: center;
    font-size: 30px;
    margin: 15px 0 30px;
    color: var(--ms-gold);
  }
  .quran-mushaf-text .surah-title-mushaf {
    display: block;
    text-align: center;
    font-size: 26px;
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--ms-border);
    color: var(--ms-gold);
    font-family: 'Tajawal', sans-serif;
    font-weight: 900;
  }

  /* ====== Azkar & Dua Modules ====== */
  .azkar-item-box {
    background: var(--ms-surface);
    border-radius: 16px;
    padding: 22px 25px;
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Amiri', serif;
    font-size: 21px;
    border: 1px solid var(--ms-border);
    transition: transform 0.2s;
  }
  .azkar-item-box:hover { border-color: var(--ms-gold); }
  .azkar-item-box button {
    background: var(--ms-bg);
    border: 1px solid var(--ms-gold);
    padding: 10px 22px;
    border-radius: 12px;
    color: var(--ms-gold);
    font-weight: 800;
    cursor: pointer;
    font-family: 'Tajawal', sans-serif;
    transition: all 0.3s;
  }
  .azkar-item-box button:hover { background: var(--ms-gold); color: #08080c; box-shadow: 0 5px 15px rgba(212,175,55,0.3); }

  .dua-accordion-item {
    background: var(--ms-surface);
    padding: 22px 25px;
    margin: 16px 0;
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid var(--ms-border);
    transition: all 0.3s;
  }
  .dua-accordion-item:hover { border-color: var(--ms-gold); transform: translateX(-3px); }
  .dua-accordion-item b { font-size: 1.15rem; }
  .dua-accordion-item p {
    display: none;
    margin-top: 18px;
    font-family: 'Amiri', serif;
    font-size: 22px;
    line-height: 2.3;
    color: var(--ms-gold);
    border-top: 1px solid var(--ms-border);
    padding-top: 18px;
  }

  /* ====== Alarms & Notification Components ====== */
  .permission-banner-card {
    background: rgba(0, 120, 212, 0.08);
    border: 1px solid rgba(0, 120, 212, 0.2);
    padding: 25px;
    border-radius: 18px;
    margin-bottom: 25px;
    font-size: 1.05rem;
    color: var(--text-main);
    line-height: 1.7;
    text-align: center;
  }

  .alarm-row-item {
    background: var(--ms-surface);
    border: 1px solid var(--ms-border);
    border-radius: 18px;
    padding: 22px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    transition: transform 0.2s;
  }
  .alarm-row-item:hover { border-color: var(--ms-gold); }
  .alarm-meta-info { display: flex; align-items: center; gap: 20px; text-align: right; }
  .alarm-glyph {
    font-size: 1.6rem;
    background: rgba(212, 175, 55, 0.1);
    width: 56px; height: 56px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 16px;
    color: var(--ms-gold);
  }
  .alarm-name-text { font-weight: 800; font-size: 1.15rem; margin-bottom: 4px; }
  .alarm-desc-text { font-size: 0.95rem; color: var(--text-muted); font-weight: 600; }

  /* iOS Switch Styled */
  .fluent-switch { position: relative; display: inline-block; width: 60px; height: 32px; }
  .fluent-switch input { opacity: 0; width: 0; height: 0; }
  .fluent-slider {
    position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
    background-color: var(--ms-bg); transition: .4s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 34px;
    border: 1px solid var(--ms-border);
  }
  .fluent-slider:before {
    position: absolute; content: ""; height: 24px; width: 24px; left: 3px; bottom: 3px;
    background-color: #fff; transition: .4s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  }
  input:checked + .fluent-slider { background: #10b981; border-color: #10b981; }
  input:checked + .fluent-slider:before { transform: translateX(28px); }

  /* ====== Mosque Module ====== */
  .mosque-panel-container { text-align: center; }
  .status-info-msg { font-size: 1.05rem; color: var(--text-muted); margin: 25px 0; font-weight: 600; }
  
  .mosque-card-item {
    background: var(--ms-surface);
    border: 1px solid var(--ms-border);
    border-radius: 18px;
    padding: 22px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUpCard 0.5s forwards;
  }
  .mosque-card-item:hover { border-color: var(--ms-gold); }
  
  .direction-action-btn {
    background: var(--ms-bg);
    color: var(--text-main);
    border: 1px solid var(--ms-border);
    padding: 12px 22px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 800;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s;
  }
  .direction-action-btn:hover { background: var(--ms-gold); color: #08080c; border-color: var(--ms-gold); }

  @keyframes fadeInUpCard { to { opacity: 1; transform: translateY(0); } }

  /* ====== Footer ====== */
  .enterprise-footer {
    position: fixed;
    bottom: 0; width: 100%;
    background: var(--ms-surface-card);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    text-align: center;
    padding: 16px;
    font-size: 0.95rem;
    color: var(--text-muted);
    border-top: 1px solid var(--ms-border);
    z-index: 50;
    font-weight: 600;
  }

  #hadithOfDay {
    font-family: 'Amiri', serif;
    font-size: 1.6rem;
    text-align: center;
    padding: 20px;
    line-height: 2.4;
    color: var(--text-main);
  }
</style>
</head>
<body>
  
  <!-- Ultra-Immersive Fullscreen Microsoft Enterprise Splash Screen -->
  <div id="splashScreen" class="splash-screen">
    <div class="splash-bg-container">
      <img src="https://i.postimg.cc/x8CY0MNn/lakhrty-20260812-192629.jpg" alt="لآخرتي" class="splash-bg-image">
    </div>
    <div class="splash-backdrop-overlay"></div>
    
    <div class="splash-header-meta">
      <div class="enterprise-badge">
        <span></span> نظام مؤسسي معتمد • إصدار 2026
      </div>
      <div style="font-weight: 800; color: #fff; letter-spacing: 1px; font-size: 1.1rem;">LAKHRTY ENTERPRISE</div>
    </div>

    <div class="splash-core-center">
      <h1 class="splash-title-main">بوابة <span>لآخرتي</span> الذكية</h1>
      <p class="splash-desc-sub"> المنصة نظام مؤسسي متكامل لإدارة العبادات، الأذكار، والمواقيت بدقة تقنية فائقة.  .</p>
    </div>

    <div class="splash-btn-wrapper">
      <button class="splash-fluent-btn" onclick="enterApp()">دخول الواجهه الرائيسية</button>
    </div>
  </div>

  <!-- Enterprise Header -->
  <header class="enterprise-header">
    <div class="nav-flex-row">
      <button class="action-tool-btn" onclick="showPage('quran')" title="المصحف الشريف">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 13H7V6h13v11zM3 6v14c0 1.1.9 2 2 2h14v-2H5V6H3z"/></svg>
      </button>
      <a href="#" class="brand-identity" onclick="showPage('home'); return false;">
        <div class="brand-logo-icon">🕋</div>
        <div class="brand-logo-text">لآخرتي</div>
      </a>
      <button class="action-tool-btn" id="themeToggle" onclick="toggleTheme()" title="تبديل النمط البصري">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
      </button>
    </div>
    <nav class="nav-tabs-wrapper">
      <div class="nav-tabs-grid">
        <div class="nav-tab-pill active" onclick="showPage('home')">الرئيسية</div>
        <div class="nav-tab-pill" onclick="showPage('quran')">المصحف الشريف</div>
        <div class="nav-tab-pill" onclick="showPage('azkar')">الأذكار والورد</div>
        <div class="nav-tab-pill" onclick="showPage('hadith')">حديث اليوم</div>
        <div class="nav-tab-pill" onclick="showPage('dua')">الأدعية النبوية</div>
        <div class="nav-tab-pill" onclick="showPage('alarms')">المنبهات الذكية</div>
        <div class="nav-tab-pill" onclick="showPage('mosque')">المساجد القريبة</div>
      </div>
    </nav>
  </header>
  
  <div class="ticker-announcement" id="randomDuaHeader">✨ تذكير مؤسسي: اللهم ارزقنا حسن الخاتمة والثبات على الدين</div>
  
  <div class="app-container">
    <!-- ==================== HOME ==================== -->
    <div id="home" class="page active">
      <div class="grid-2-cols">
        <div class="fluent-card" style="margin:0;">
          <h3>🌙 <span>التقويم الهجري المعتمد</span></h3>
          <div id="hijriDate" style="text-align:center; font-size:1.35rem; font-weight:800; padding:15px 0;"></div>
        </div>
        
        <div class="fluent-card" style="margin:0;">
          <h3>⏳ <span>العد التنازلي لرمضان 1448</span></h3>
          <div class="ramadan-display-box" id="ramadanCounter"></div>
        </div>
      </div>
      
      <div class="fluent-card">
        <h3>📍 <span>مواقيت الصلاة الرسمية - مكة المكرمة</span></h3>
        <div id="prayerTimes" style="margin-top:15px;">جاري مزامنة المواقيت...</div>
      </div>
      
      <div class="fluent-card">
        <h3 style="margin-bottom:20px;">📱 <span>القنوات والشبكات الدينية الرسمية</span></h3>
        <div class="grid-2-cols">
          <div class="channel-grid-item" style="margin:0;">
            <b>📖 قناة لآخرتي</b>
            <p>تذكير دائم بالآخرة والدار الآخرة</p>
            <button class="fluent-btn" onclick="window.open('https://whatsapp.com/channel/0029Vamnm1bId7nFSu61eB3M','_blank')">انضم للقناة</button>
          </div>
          <div class="channel-grid-item" style="margin:0;">
            <b>🤍 قناة مواساتي</b>
            <p>كلمات تواسي القلب وتطمئن الروح</p>
            <button class="fluent-btn" onclick="window.open('https://whatsapp.com/channel/0029Vb6kQm5FnSz07sEhHQ2u','_blank')">انضم للقناة</button>
          </div>
          <div class="channel-grid-item" style="margin:0;">
            <b>✨ قناة فضائل</b>
            <p>فضائل الأعمال والتقرب إلى الله</p>
            <button class="fluent-btn" onclick="window.open('https://whatsapp.com/channel/0029VatA6nMBadmdcDukOL0s','_blank')">انضم للقناة</button>
          </div>
          <div class="channel-grid-item" style="margin:0;">
            <b>📚 قناة ختمة القرآن</b>
            <p>جداول ختم القرآن ومتابعة الورد</p>
            <button class="fluent-btn" onclick="window.open('https://whatsapp.com/channel/0029VbB5qx49hXF8D2mUAb1R','_blank')">انضم للقناة</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- ==================== QURAN ==================== -->
    <div id="quran" class="page">
      <div class="fluent-card">
        <h3>📖 <span>المصحف الشريف - مشغل الصوتيات الرقمي</span></h3>
        <select id="reciterSelect"></select>
        <input id="qSearch" placeholder="ابحث عن سورة برقم أو اسم...">
        <div id="qList" class="q-grid-container"></div>
        <div id="qPlayerBox">
          <div style="display:flex;justify-content:space-between;align-items:center; margin-bottom:12px;">
            <b id="qCurName" style="color:var(--ms-gold); font-size:1.2rem;">اختر سورة للتشغيل</b>
            <span id="qCurTime" style="font-size:0.95rem;color:var(--text-muted); font-weight:700;">00:00 / 00:00</span>
          </div>
          <div id="qProgress"><i id="qBar"></i></div>
          <div class="audio-controls-flex">
            <button onclick="qPrev()">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
            </button>
            <button id="qPlayBtn" class="main-play" onclick="qToggle()">▶️</button>
            <button onclick="qNext()">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
            </button>
          </div>
        </div>
        <audio id="qAudio"></audio>
        <h3 style="margin-top:40px">📜 <span>النص القرآني الموثق</span></h3>
        <div id="quranText" class="quran-mushaf-text">اختر سورة من القائمة أعلاه لعرض النص...</div>
      </div>
    </div>
    
    <!-- ==================== AZKAR ==================== -->
    <div id="azkar" class="page">
      <div class="fluent-card">
        <h3>☀️ <span>أذكار الصباح المؤسسية</span></h3>
        <div id="azkarSabahFull"></div>
      </div>
      <div class="fluent-card">
        <h3>🌙 <span>أذكار المساء المؤسسية</span></h3>
        <div id="azkarMasaFull"></div>
      </div>
    </div>
    
    <!-- ==================== HADITH ==================== -->
    <div id="hadith" class="page">
      <div class="fluent-card">
        <h3>📜 <span>حديث اليوم الشريف</span></h3>
        <div id="hadithOfDay"></div>
      </div>
    </div>
    
    <!-- ==================== DUA ==================== -->
    <div id="dua" class="page">
      <div class="fluent-card">
        <h3>🤲 <span>مكتبة الأدعية النبوية (30 دعاءً)</span></h3>
        <div id="duaList"></div>
      </div>
    </div>
    
    <!-- ==================== ALARMS ==================== -->
    <div id="alarms" class="page">
      <div class="fluent-card">
        <h3>🔔 <span>المنبهات الإيمانية الذكية والمزامنة</span></h3>
        
        <div class="permission-banner-card" id="permissionCard">
          📢 لتلقي التنبيهات الإيمانية الفورية في أوقاتها بدقة عالية، يرجى تفعيل إذن الإشعارات بالنظام.
          <button class="fluent-btn" onclick="requestNotification()" style="margin-top:16px; width:auto; padding:12px 35px;">تفعيل الإشعارات الآن</button>
        </div>
        
        <div class="alarms-stack">
          <div class="alarm-row-item">
            <div class="alarm-meta-info">
              <div class="alarm-glyph">🌅</div>
              <div>
                <div class="alarm-name-text">منبه صلاة الفجر</div>
                <div class="alarm-desc-text">تنبيه آلي حسب مواقيت مكة المعتمدة</div>
              </div>
            </div>
            <label class="fluent-switch">
              <input type="checkbox" id="fajrToggle" onchange="toggleAlarm('fajr')">
              <span class="fluent-slider"></span>
            </label>
          </div>
          
          <div class="alarm-row-item">
            <div class="alarm-meta-info">
              <div class="alarm-glyph">🌙</div>
              <div>
                <div class="alarm-name-text">تذكير قيام الليل</div>
                <div class="alarm-desc-text">يُفعل قبل صلاة الفجر بساعة كاملة</div>
              </div>
            </div>
            <label class="fluent-switch">
              <input type="checkbox" id="qiyamToggle" onchange="toggleAlarm('qiyam')">
              <span class="fluent-slider"></span>
            </label>
          </div>
          
          <div class="alarm-row-item">
            <div class="alarm-meta-info">
              <div class="alarm-glyph">☀️</div>
              <div>
                <div class="alarm-name-text">صلاة الضحى</div>
                <div class="alarm-desc-text" id="duhaTimeLabel">حساب آلي بعد شروق الشمس</div>
              </div>
            </div>
            <label class="fluent-switch">
              <input type="checkbox" id="duhaToggle" onchange="toggleAlarm('duha')">
              <span class="fluent-slider"></span>
            </label>
          </div>
          
          <div class="alarm-row-item">
            <div class="alarm-meta-info">
              <div class="alarm-glyph">🌕</div>
              <div>
                <div class="alarm-name-text">صيام الأيام البيض</div>
                <div class="alarm-desc-text">تنبيه تلقائي أيام 13، 14، 15 هجرياً</div>
              </div>
            </div>
            <label class="fluent-switch">
              <input type="checkbox" id="whiteToggle" onchange="toggleAlarm('white')">
              <span class="fluent-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    
    <!-- ==================== MOSQUE ==================== -->
    <div id="mosque" class="page">
      <div class="fluent-card mosque-panel-container">
        <h3>🕌 <span>الرادار الجغرافي للمساجد القريبة</span></h3>
        <p style="color:var(--text-muted); font-size:1.05rem; margin-bottom:25px;">استخدم نظام تحديد الموقع الجغرافي العالي الدقة للوصول إلى أقرب دور العبادة بدقة متناهية.</p>
        <button class="fluent-btn" onclick="findMosques()" style="max-width:320px; margin:0 auto;">📍 بدء المسح الجغرافي للموقع</button>
        <div class="status-info-msg" id="statusMessage">انقر على الزر أعلاه لتفعيل رادار البحث الجغرافي</div>
        <div class="mosques-list-box" id="mosqueList"></div>
      </div>
    </div>
  </div>
  
  <div class="enterprise-footer">جميع الحقوق محفوظة ©️ 2026 • تم التطوير بمعايير الهندسة المؤسسية لـ راند بن مسفر</div>
  <audio id="alarmSound" src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"></audio>
  
  <script>
// --- إزالة شاشة الترحيب ---
function enterApp() {
  const splash = document.getElementById('splashScreen');
  splash.classList.add('splash-hidden');
  setTimeout(() => splash.remove(), 900);
}

// --- التنقل بين الصفحات ---
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab-pill').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const tabs = document.querySelectorAll('.nav-tab-pill');
  const map = { home: 0, quran: 1, azkar: 2, hadith: 3, dua: 4, alarms: 5, mosque: 6 };
  if (map[id] !== undefined) tabs[map[id]].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- عداد رمضان 1448 هـ = 8 فبراير 2027 ---
function updateRamadan() {
  const ramadan = new Date('2027-02-08T00:00:00');
  const diff = ramadan - new Date();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById('ramadanCounter').innerText = days + ' يوم';
}
updateRamadan();
setInterval(updateRamadan, 1000 * 60 * 60);

// --- مواقيت الصلاة ---
let prayerTimesData = {};
async function loadPrayers() {
  try {
    let res = await fetch(`https://api.aladhan.com/v1/timingsByCity/today?city=Makkah&country=Saudi%20Arabia&method=4`);
    let data = await res.json();
    prayerTimesData = data.data.timings;
    function to12h(time) {
      let [h, m] = time.split(':');
      let ampm = h >= 12 ? 'م' : 'ص';
      h = h % 12;
      h = h ? h : 12;
      return `${h}:${m} ${ampm}`;
    }
    document.getElementById('prayerTimes').innerHTML = `
      <div class="prayer-time-row"><span>الفجر</span><span>${to12h(prayerTimesData.Fajr)}</span></div>
      <div class="prayer-time-row"><span>الظهر</span><span>${to12h(prayerTimesData.Dhuhr)}</span></div>
      <div class="prayer-time-row"><span>العصر</span><span>${to12h(prayerTimesData.Asr)}</span></div>
      <div class="prayer-time-row"><span>المغرب</span><span>${to12h(prayerTimesData.Maghrib)}</span></div>
      <div class="prayer-time-row"><span>العشاء</span><span>${to12h(prayerTimesData.Isha)}</span></div>`;
  } catch (e) {
    document.getElementById('prayerTimes').innerHTML = 'تعذر مزامنة مواقيت الصلاة';
  }
}
loadPrayers();

// --- المصحف ---
const surahNames = ["الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الإنفطار","المطففين","الإنشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"];
const qList = document.getElementById('qList'),
      reciterSelect = document.getElementById('reciterSelect'),
      qAudio = document.getElementById('qAudio');
let recitersList = [], qCurrent = 1;

async function loadReciters() {
  try {
    let res = await fetch('https://mp3quran.net/api/v3/reciters?language=ar');
    let data = await res.json();
    recitersList = data.reciters;
    reciterSelect.innerHTML = '';
    recitersList.forEach(r => {
      reciterSelect.innerHTML += `<option value="${r.id}">${r.name}</option>`;
    });
    reciterSelect.value = 3;
    qRender();
  } catch (e) {
    console.log('خطأ في تحميل القراء');
  }
}

function qRender(f = "") {
  qList.innerHTML = "";
  surahNames.filter((s, i) => !f || s.includes(f)).forEach((s, i) => {
    const realIndex = surahNames.indexOf(s);
    qList.innerHTML += `<div class="q-list-item ${realIndex + 1 == qCurrent ? 'active' : ''}" onclick="qLoad(${realIndex + 1}, true)"><div class="surah-number-badge">${realIndex + 1}</div><div>${s}</div></div>`;
  });
}

async function qLoad(id, auto) {
  qCurrent = id;
  let reciterId = reciterSelect.value;
  let reciter = recitersList.find(r => r.id == reciterId);
  if (!reciter) return;
  let num = String(id).padStart(3, '0');
  qAudio.src = reciter.moshaf[0].server + num + ".mp3";
  document.getElementById('qCurName').innerText = "سورة " + surahNames[id - 1];
  try {
    let res = await fetch(`https://api.alquran.cloud/v1/surah/${id}/quran-uthmani`);
    let data = await res.json();
    const ayahs = data.data.ayahs;
    let html = `<span class="surah-title-mushaf">سورة ${surahNames[id - 1]}</span>`;
    if (id !== 9 && id !== 1) {
      html += `<span class="basmala">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>`;
    }
    html += ayahs.map(a => {
      let txt = a.text;
      if (a.numberInSurah === 1 && id !== 1 && id !== 9) {
        txt = txt.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '');
      }
      if (!txt.trim()) return '';
      return `${txt}<span class="ayah-num">${a.numberInSurah}</span> `;
    }).join('');
    document.getElementById('quranText').innerHTML = html;
  } catch (e) {
    document.getElementById('quranText').innerHTML = 'تعذر تحميل النص القرآني';
  }
  qRender();
  if (auto) qAudio.play();
}

function qToggle() {
  if (qAudio.paused) qAudio.play();
  else qAudio.pause();
}
function qNext() { if (qCurrent < 114) qLoad(qCurrent + 1, true); }
function qPrev() { if (qCurrent > 1) qLoad(qCurrent - 1, true); }

document.getElementById('qSearch').oninput = e => qRender(e.target.value);
reciterSelect.onchange = () => { if (qAudio.src) qLoad(qCurrent, true); };

qAudio.ontimeupdate = () => {
  document.getElementById('qBar').style.width = (qAudio.currentTime / qAudio.duration * 100 || 0) + '%';
  document.getElementById('qCurTime').innerText = formatTime(qAudio.currentTime) + ' / ' + formatTime(qAudio.duration);
};
qAudio.onplay = () => { document.getElementById('qPlayBtn').innerText = '⏸'; };
qAudio.onpause = () => { document.getElementById('qPlayBtn').innerText = '▶️'; };

function formatTime(s) {
  if (!isFinite(s)) return "00:00";
  let m = Math.floor(s / 60), sc = Math.floor(s % 60);
  return String(m).padStart(2, '0') + ":" + String(sc).padStart(2, '0');
}
loadReciters();

// --- أذكار ---
const azkarSabah = ["آية الكرسي", "أصبحنا وأصبح الملك لله", "اللهم بك أصبحنا", "اللهم إني أسألك العافية", "سبحان الله وبحمده 100", "استغفر الله 100", "رضيت بالله رباً", "يا حي يا قيوم", "اللهم عافني في بدني", "اللهم سترك", "اللهم احفظني", "بسم الله الذي لا يضر", "اللهم اني اسالك خير اليوم", "اللهم اني اعوذ بك من الكسل"];
const azkarMasa = ["آية الكرسي", "أمسينا وأمسى الملك لله", "اللهم بك أمسينا", "أعوذ بكلمات الله", "سبحان الله وبحمده 100", "استغفر الله 100", "رضيت بالله رباً", "سيد الاستغفار", "اللهم عافني في سمعي", "اللهم احفظني", "اللهم قني عذابك", "اللهم اني اسالك خير هذه الليلة"];

function renderAzkar(id, arr) {
  document.getElementById(id).innerHTML = arr.map((z, i) =>
    `<div class="azkar-item-box"><span>${i + 1}. ${z}</span><button onclick="this.innerText='✓ تم الإنجاز'">تسبيح</button></div>`
  ).join('');
}
renderAzkar('azkarSabahFull', azkarSabah);
renderAzkar('azkarMasaFull', azkarMasa);

// --- 30 دعاء كاملة ---
const duaList = [
  {title:"دعاء الاستخارة", text:"اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم، فإنك تقدر ولا أقدر، وتعلم ولا أعلم، وأنت علام الغيوب، اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي وعاقبة أمري فاقدره لي ويسره لي ثم بارك لي فيه، وإن كنت تعلم أن هذا الأمر شر لي في ديني ومعاشي وعاقبة أمري فاصرفه عني واصرفني عنه، واقدر لي الخير حيث كان ثم أرضني به"},
  {title:"دعاء السفر", text:"الله أكبر، الله أكبر، الله أكبر، سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون، اللهم إنا نسألك في سفرنا هذا البر والتقوى، ومن العمل ما ترضى، اللهم هون علينا سفرنا هذا واطو عنا بعده، اللهم أنت الصاحب في السفر والخليفة في الأهل، اللهم إني أعوذ بك من وعثاء السفر وكآبة المنظر وسوء المنقلب في المال والأهل"},
  {title:"دعاء الكرب", text:"لا إله إلا الله العظيم الحليم، لا إله إلا الله رب العرش العظيم، لا إله إلا الله رب السموات ورب الأرض ورب العرش الكريم"},
  {title:"دعاء الهم والحزن", text:"اللهم إني أعوذ بك من الهم والحزن، والعجز والكسل، والبخل والجيب، وضلع الدين وغلبة الرجال"},
  {title:"سيد الاستغفار", text:"اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت"},
  {title:"دعاء الرزق", text:"اللهم ارزقني رزقاً واسعاً حلالاً طيباً من غير كد، واستجابة من غير رد، وأغنني بفضلك عمن سواك"},
  {title:"دعاء الشفاء", text:"اللهم رب الناس أذهب البأس، اشف وأنت الشافي، لا شفاء إلا شفاؤك، شفاء لا يغادر سقماً"},
  {title:"دعاء دخول المنزل", text:"بسم الله ولجنا، وبسم الله خرجنا، وعلى الله ربنا توكلنا"},
  {title:"دعاء الخروج من المنزل", text:"بسم الله، توكلت على الله، ولا حول ولا قوة إلا بالله"},
  {title:"دعاء النوم", text:"باسمك ربي وضعت جنبي وبك أرفعه، إن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين"},
  {title:"دعاء الاستيقاظ", text:"الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور"},
  {title:"دعاء الوضوء", text:"أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمداً عبده ورسوله"},
  {title:"دعاء بعد الصلاة", text:"اللهم أعني على ذكرك وشكرك وحسن عبادتك"},
  {title:"دعاء القنوت", text:"اللهم اهدني فيمن هديت، وعافني فيمن عافيت، وتولني فيمن توليت، وبارك لي فيما أعطيت، وقني شر ما قضيت، فإنك تقضي ولا يقضى عليك، إنه لا يذل من واليت ولا يعز من عاديت، تباركت ربنا وتعاليت"},
  {title:"دعاء المريض", text:"اللهم اشفه شفاء لا يغادر سقماً، اللهم اشف مرضاه المسلمين"},
  {title:"دعاء الميت", text:"اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله ووسع مدخله، واغسله بالماء والثلج والبرد، ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس"},
  {title:"دعاء المطر", text:"اللهم صيباً نافعاً، اللهم حوالينا ولا علينا"},
  {title:"دعاء الريح", text:"اللهم إني أسألك خيرها وخير ما فيها وخير ما أرسلت به، وأعوذ بك من شرها وشر ما فيها وشر ما أرسلت به"},
  {title:"دعاء الفرج", text:"يا فارج الهم ويا كاشف الغم، يا رحمن الدنيا والآخرة ورحيمهما، افرج همي واكشف غمي"},
  {title:"دعاء التوفيق", text:"اللهم سددني ووفقني، اللهم إني أسألك التوفيق والسداد"},
  {title:"دعاء الحفظ", text:"اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي"},
  {title:"دعاء التوبة", text:"اللهم تب علي واغفر لي، اللهم إني ظلمت نفسي ظلماً كثيراً ولا يغفر الذنوب إلا أنت فاغفر لي مغفرة من عندك وارحمني إنك أنت الغفور الرحيم"},
  {title:"دعاء الهداية", text:"اللهم اهدني واهد بي، واجعلني سبباً لمن اهتدى"},
  {title:"دعاء الثبات", text:"اللهم يا مقلب القلوب ثبت قلبي على دينك"},
  {title:"دعاء البركة", text:"اللهم بارك لي فيما رزقتني، وقني عذاب النار"},
  {title:"دعاء قضاء الدين", text:"اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمن سواك"},
  {title:"دعاء الستر", text:"اللهم استرني بسترك الذي لا ينكشف، واكفني كفايتك التي لا تضيع"},
  {title:"دعاء حسن الخاتمة", text:"اللهم ارزقني حسن الخاتمة، وتوفني وأنت راض عني"},
  {title:"دعاء دخول المسجد", text:"اللهم افتح لي أبواب رحمتك"},
  {title:"دعاء الخروج من المسجد", text:"اللهم إني أسألك من فضلك"}
];

document.getElementById('duaList').innerHTML = duaList.map((d, i) =>
  `<div class="dua-accordion-item" onclick="this.querySelector('p').style.display=this.querySelector('p').style.display=='block'?'none':'block'"><b>${i + 1}. ${d.title}</b><p>${d.text}</p></div>`
).join('');

// --- حديث اليوم ---
document.getElementById('hadithOfDay').innerHTML = '"من دل على خير فله مثل أجر فاعله"<br><span style="font-size:1.1rem; color:var(--ms-gold); font-weight:700; display:block; margin-top:15px;">- رواه مسلم</span>';

// --- أقرب المساجد ---
function findMosques() {
  const status = document.getElementById('statusMessage');
  const list = document.getElementById('mosqueList');
  status.innerText = 'جاري المسح الجغرافي لتحديد الموقع...';
  list.innerHTML = '';

  navigator.geolocation.getCurrentPosition(pos => {
    let lat = pos.coords.latitude, lng = pos.coords.longitude;
    status.innerText = 'تم تحديد الموقع الجغرافي بنجاح ✓';
    list.innerHTML = `
      <div class="mosque-card-item" style="animation-delay:0.05s">
        <div style="display:flex; align-items:center; gap:18px;">
          <div style="font-size:1.6rem; background:rgba(212,175,55,0.12); width:56px; height:56px; border-radius:16px; display:flex; align-items:center; justify-content:center;">🕌</div>
          <div style="text-align:right;">
            <div style="font-weight:800; font-size:1.15rem; margin-bottom:4px;">المسجد الحرام</div>
            <div style="font-size:0.9rem; color:#10b981; font-weight:700;">مكة المكرمة</div>
          </div>
        </div>
        <button class="direction-action-btn" onclick="window.open('https://maps.google.com?q=21.4225,39.8262','_blank')">الاتجاهات</button>
      </div>
      <div class="mosque-card-item" style="animation-delay:0.15s">
        <div style="display:flex; align-items:center; gap:18px;">
          <div style="font-size:1.6rem; background:rgba(212,175,55,0.12); width:56px; height:56px; border-radius:16px; display:flex; align-items:center; justify-content:center;">📍</div>
          <div style="text-align:right;">
            <div style="font-weight:800; font-size:1.15rem; margin-bottom:4px;">المساجد المجاورة للنطاق الجغرافي</div>
            <div style="font-size:0.9rem; color:var(--text-muted); font-weight:700;">بناءً على إحداثيات GPS الحالية</div>
          </div>
        </div>
        <button class="direction-action-btn" onclick="window.open('https://maps.google.com?q=mosque&near=${lat},${lng}','_blank')">فتح الخريطة</button>
      </div>`;
  }, () => {
    status.innerText = 'تعذر الوصول للموقع، يرجى تفعيل إذن الـ GPS بجهازك.';
    list.innerHTML = '';
  });
}

// --- المنبهات ---
let alarmsEnabled = JSON.parse(localStorage.getItem('alarms') || '{}');

function requestNotification() {
  Notification.requestPermission().then(p => {
    if (p === 'granted') {
      document.getElementById('permissionCard').innerHTML = '✅ تم تفعيل الإشعارات المؤسسية بنجاح';
    }
  });
}

function toggleAlarm(type) {
  alarmsEnabled[type] = !alarmsEnabled[type];
  localStorage.setItem('alarms', JSON.stringify(alarmsEnabled));
  const el = document.getElementById(type + 'Toggle');
  if (el) el.checked = !!alarmsEnabled[type];
}

['fajr', 'qiyam', 'duha', 'white'].forEach(k => {
  const el = document.getElementById(k + 'Toggle');
  if (el && alarmsEnabled[k]) el.checked = true;
});

function playAlarm() {
  document.getElementById('alarmSound').play().catch(() => {});
}

function showNotification(title, body) {
  if (Notification.permission === 'granted') {
    new Notification(title, { body });
  }
}

setInterval(checkAlarms, 60000);

function checkAlarms() {
  if (!prayerTimesData.Fajr) return;
  if (alarmsEnabled.fajr) checkTime(prayerTimesData.Fajr, 'الفجر', 'حان وقت صلاة الفجر');
  if (alarmsEnabled.qiyam) {
    let [fh, fm] = prayerTimesData.Fajr.split(':').map(Number);
    let qiyamTime = ((fh * 60 + fm) - 60 + 1440) % 1440;
    checkTimeMinutes(qiyamTime, 'قيام الليل', 'تذكير: قيام الليل');
  }
  if (alarmsEnabled.duha && prayerTimesData.Sunrise) {
    let [sh, sm] = prayerTimesData.Sunrise.split(':').map(Number);
    let duhaTime = ((sh * 60 + sm) + 20) % 1440;
    checkTimeMinutes(duhaTime, 'الضحى', 'تذكير: صلاة الضحى');
  }
  if (alarmsEnabled.white) {
    const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { day: 'numeric' }).format(new Date());
    const day = parseInt(hijri);
    if ([13, 14, 15].includes(day)) {
      if (!localStorage.getItem('white' + day)) {
        playAlarm();
        showNotification('صيام الأيام البيض', `اليوم ${day} من الأيام البيض`);
        localStorage.setItem('white' + day, '1');
      }
    }
  }
}

function checkTime(timeStr, title, body) {
  let [h, m] = timeStr.split(':').map(Number);
  checkTimeMinutes(h * 60 + m, title, body);
}

function checkTimeMinutes(time, title, body) {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  if (Math.abs(currentTime - time) < 1) {
    if (!localStorage.getItem(title + now.toDateString())) {
      playAlarm();
      showNotification(title, body);
      localStorage.setItem(title + now.toDateString(), '1');
    }
  }
}

// --- التاريخ الهجري ---
document.getElementById('hijriDate').innerText = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { dateStyle: 'full' }).format(new Date());

// --- الوضع الليلي / النهاري ---
function toggleTheme() {
  document.body.classList.toggle('day-mode');
  const isDay = document.body.classList.contains('day-mode');
  document.getElementById('themeToggle').innerHTML = isDay ? 
    '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>' : 
    '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>';
  localStorage.setItem('theme', isDay ? 'day' : 'night');
  document.querySelector('meta[name="theme-color"]').content = isDay ? '#f3f4f6' : '#08080c';
}
if (localStorage.getItem('theme') === 'day') {
  document.body.classList.add('day-mode');
  document.getElementById('themeToggle').innerHTML = '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>';
}
</script>
</body>
</html>
