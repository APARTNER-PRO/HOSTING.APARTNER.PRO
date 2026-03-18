import { useState, useEffect, useRef } from "react";

const translations = {
  uk: {
    nav: { features: "Переваги", pricing: "Тарифи", who: "Для кого", cta: "Розпочати" },
    hero: {
      badge: "⚡ NVMe SSD · 99.9% Uptime · cPanel",
      title1: "Хостинг, який",
      title2: "просто працює",
      sub: "Швидкі SSD-сервери, безкоштовний SSL, cPanel та підтримка 24/7. Запустіть свій сайт за хвилини.",
      cta: "Почати зараз",
      ctaSub: "Без прихованих платежів · Скасування в будь-який час",
      stat1: "Активних сайтів",
      stat2: "Час завантаження",
      stat3: "Uptime SLA",
    },
    features: {
      title: "Все, що потрібно для успіху",
      sub: "Ми подбали про інфраструктуру — ви зосередьтесь на бізнесі",
      items: [
        { icon: "⚡", title: "NVMe SSD", desc: "Швидкість у 3× швидша за звичайний SSD. Ваш сайт завантажується миттєво." },
        { icon: "🔒", title: "SSL безкоштовно", desc: "Let's Encrypt SSL для кожного домену. Автоматично й без доплат." },
        { icon: "📋", title: "cPanel", desc: "Зручна панель управління для всіх ваших сайтів і поштових скриньок." },
        { icon: "💾", title: "Щоденний бекап", desc: "Автоматичні резервні копії щодня. Відновлення в один клік." },
        { icon: "🌐", title: "99.9% Uptime", desc: "Гарантована доступність. SLA-угода з кожним тарифом." },
        { icon: "🎧", title: "Підтримка 24/7", desc: "Живі спеціалісти щодня. Середній час відповіді — 5 хвилин." },
      ],
    },
    billing: { monthly: "Щомісяця", quarterly: "Щоквартально", yearly: "Щорічно", save10: "−10%", save20: "−20%" },
    pricing: {
      title: "Прозорі тарифи",
      sub: "Оберіть план і масштабуйтесь без обмежень",
      popular: "Найпопулярніший",
      mo: "/міс",
      cta: "Обрати план",
      features_label: "Включено:",
      plans: [
        {
          name: "Starter",
          desc: "Ідеально для першого сайту",
          price: 2.99,
          color: "#6EE7B7",
          ssd: "5 GB SSD",
          sites: "1 сайт",
          email: "1 email",
          ssl: "SSL",
          backup: "—",
          support: "Стандартна",
          whitelabel: "—",
          extras: ["1 сайт", "5 GB NVMe SSD", "1 Email акаунт", "Безкоштовний SSL", "cPanel"],
        },
        {
          name: "Business",
          desc: "Для зростаючих проєктів",
          price: 5.99,
          color: "#60A5FA",
          ssd: "15 GB SSD",
          sites: "до 5 сайтів",
          email: "10 email",
          ssl: "SSL",
          backup: "Щоденний",
          support: "Стандартна",
          whitelabel: "—",
          popular: true,
          extras: ["до 5 сайтів", "15 GB NVMe SSD", "10 Email акаунтів", "Безкоштовний SSL", "Щоденний бекап", "cPanel"],
        },
        {
          name: "Pro",
          desc: "Для серйозних проєктів",
          price: 9.99,
          color: "#A78BFA",
          ssd: "30 GB SSD",
          sites: "до 15 сайтів",
          email: "Необмежено",
          ssl: "SSL",
          backup: "Щоденний",
          support: "Пріоритетна",
          whitelabel: "—",
          extras: ["до 15 сайтів", "30 GB NVMe SSD", "Необмежено Email", "Безкоштовний SSL", "Пріоритетний бекап", "Пріоритетна підтримка"],
        },
        {
          name: "Agency",
          desc: "Для агентств і розробників",
          price: 19.99,
          color: "#FB923C",
          ssd: "60 GB SSD",
          sites: "до 30 сайтів",
          email: "Необмежено",
          ssl: "Wildcard SSL",
          backup: "Щоденний",
          support: "24/7 VIP",
          whitelabel: "✓",
          extras: ["до 30 сайтів", "60 GB NVMe SSD", "Необмежено Email", "Wildcard SSL", "White-label готовий", "VIP підтримка 24/7"],
        },
      ],
    },
    who: {
      title: "Для кого підходить?",
      sub: "Масштабоване рішення для будь-якого розміру бізнесу",
      items: [
        { icon: "🏢", title: "Бізнес", desc: "Корпоративні сайти, лендинги, CRM. Надійність і швидкість для вашого бренду." },
        { icon: "👨‍💻", title: "Розробники", desc: "Перепродавайте хостинг клієнтам під власним брендом. White-label рішення." },
        { icon: "🛒", title: "Інтернет-магазини", desc: "WooCommerce, PrestaShop, OpenCart. Швидкий хостинг для e-commerce." },
        { icon: "🚀", title: "Стартапи", desc: "Почніть малим і масштабуйтесь миттєво. Без переїздів і простоїв." },
      ],
    },
    footer: {
      copy: "© 2025 HostPro. Усі права захищені.",
      tagline: "Сучасний хостинг для сучасних проєктів.",
    },
  },
  ru: {
    nav: { features: "Преимущества", pricing: "Тарифы", who: "Для кого", cta: "Начать" },
    hero: {
      badge: "⚡ NVMe SSD · 99.9% Uptime · cPanel",
      title1: "Хостинг, который",
      title2: "просто работает",
      sub: "Быстрые SSD-серверы, бесплатный SSL, cPanel и поддержка 24/7. Запустите сайт за минуты.",
      cta: "Начать сейчас",
      ctaSub: "Без скрытых платежей · Отмена в любое время",
      stat1: "Активных сайтов",
      stat2: "Время загрузки",
      stat3: "Uptime SLA",
    },
    features: {
      title: "Всё, что нужно для успеха",
      sub: "Мы позаботились об инфраструктуре — вы сосредоточьтесь на бизнесе",
      items: [
        { icon: "⚡", title: "NVMe SSD", desc: "Скорость в 3× быстрее обычного SSD. Ваш сайт загружается мгновенно." },
        { icon: "🔒", title: "SSL бесплатно", desc: "Let's Encrypt SSL для каждого домена. Автоматически и без доплат." },
        { icon: "📋", title: "cPanel", desc: "Удобная панель управления для всех сайтов и почтовых ящиков." },
        { icon: "💾", title: "Ежедневный бекап", desc: "Автоматические резервные копии каждый день. Восстановление в один клик." },
        { icon: "🌐", title: "99.9% Uptime", desc: "Гарантированная доступность. SLA-соглашение с каждым тарифом." },
        { icon: "🎧", title: "Поддержка 24/7", desc: "Живые специалисты каждый день. Среднее время ответа — 5 минут." },
      ],
    },
    billing: { monthly: "Ежемесячно", quarterly: "Ежеквартально", yearly: "Ежегодно", save10: "−10%", save20: "−20%" },
    pricing: {
      title: "Прозрачные тарифы",
      sub: "Выберите план и масштабируйтесь без ограничений",
      popular: "Самый популярный",
      mo: "/мес",
      cta: "Выбрать план",
      features_label: "Включено:",
      plans: [
        { name: "Starter", desc: "Идеально для первого сайта", price: 2.99, color: "#6EE7B7", popular: false, extras: ["1 сайт", "5 GB NVMe SSD", "1 Email аккаунт", "Бесплатный SSL", "cPanel"] },
        { name: "Business", desc: "Для растущих проектов", price: 5.99, color: "#60A5FA", popular: true, extras: ["до 5 сайтов", "15 GB NVMe SSD", "10 Email аккаунтов", "Бесплатный SSL", "Ежедневный бекап", "cPanel"] },
        { name: "Pro", desc: "Для серьёзных проектов", price: 9.99, color: "#A78BFA", popular: false, extras: ["до 15 сайтов", "30 GB NVMe SSD", "Безлимитный Email", "Бесплатный SSL", "Приоритетный бекап", "Приоритетная поддержка"] },
        { name: "Agency", desc: "Для агентств и разработчиков", price: 19.99, color: "#FB923C", popular: false, extras: ["до 30 сайтов", "60 GB NVMe SSD", "Безлимитный Email", "Wildcard SSL", "White-label готов", "VIP поддержка 24/7"] },
      ],
    },
    who: {
      title: "Для кого подходит?",
      sub: "Масштабируемое решение для любого размера бизнеса",
      items: [
        { icon: "🏢", title: "Бизнес", desc: "Корпоративные сайты, лендинги, CRM. Надёжность и скорость для вашего бренда." },
        { icon: "👨‍💻", title: "Разработчики", desc: "Перепродавайте хостинг клиентам под своим брендом. White-label решения." },
        { icon: "🛒", title: "Интернет-магазины", desc: "WooCommerce, PrestaShop, OpenCart. Быстрый хостинг для e-commerce." },
        { icon: "🚀", title: "Стартапы", desc: "Начните малым и масштабируйтесь мгновенно. Без переездов и простоев." },
      ],
    },
    footer: { copy: "© 2025 HostPro. Все права защищены.", tagline: "Современный хостинг для современных проектов." },
  },
  en: {
    nav: { features: "Features", pricing: "Pricing", who: "Who It's For", cta: "Get Started" },
    hero: {
      badge: "⚡ NVMe SSD · 99.9% Uptime · cPanel",
      title1: "Hosting that",
      title2: "just works",
      sub: "Fast SSD servers, free SSL, cPanel, and 24/7 support. Launch your site in minutes.",
      cta: "Get Started",
      ctaSub: "No hidden fees · Cancel anytime",
      stat1: "Active Websites",
      stat2: "Load Time",
      stat3: "Uptime SLA",
    },
    features: {
      title: "Everything you need to succeed",
      sub: "We handle the infrastructure — you focus on your business",
      items: [
        { icon: "⚡", title: "NVMe SSD", desc: "3× faster than regular SSD. Your website loads instantly, every time." },
        { icon: "🔒", title: "Free SSL", desc: "Let's Encrypt SSL for every domain. Automatic and always free." },
        { icon: "📋", title: "cPanel", desc: "Industry-standard control panel for all your sites and email accounts." },
        { icon: "💾", title: "Daily Backups", desc: "Automatic daily backups. One-click restore whenever you need it." },
        { icon: "🌐", title: "99.9% Uptime", desc: "Guaranteed uptime with SLA agreement included in every plan." },
        { icon: "🎧", title: "24/7 Support", desc: "Real humans every day. Average response time under 5 minutes." },
      ],
    },
    billing: { monthly: "Monthly", quarterly: "Quarterly", yearly: "Yearly", save10: "−10%", save20: "−20%" },
    pricing: {
      title: "Transparent pricing",
      sub: "Pick a plan and scale without limits",
      popular: "Most Popular",
      mo: "/mo",
      cta: "Choose Plan",
      features_label: "Included:",
      plans: [
        { name: "Starter", desc: "Perfect for your first website", price: 2.99, color: "#6EE7B7", popular: false, extras: ["1 Website", "5 GB NVMe SSD", "1 Email Account", "Free SSL", "cPanel"] },
        { name: "Business", desc: "For growing projects", price: 5.99, color: "#60A5FA", popular: true, extras: ["Up to 5 Websites", "15 GB NVMe SSD", "10 Email Accounts", "Free SSL", "Daily Backups", "cPanel"] },
        { name: "Pro", desc: "For serious projects", price: 9.99, color: "#A78BFA", popular: false, extras: ["Up to 15 Websites", "30 GB NVMe SSD", "Unlimited Email", "Free SSL", "Priority Backups", "Priority Support"] },
        { name: "Agency", desc: "For agencies & developers", price: 19.99, color: "#FB923C", popular: false, extras: ["Up to 30 Websites", "60 GB NVMe SSD", "Unlimited Email", "Wildcard SSL", "White-label Ready", "VIP 24/7 Support"] },
      ],
    },
    who: {
      title: "Who is it for?",
      sub: "Scalable solution for every business size",
      items: [
        { icon: "🏢", title: "Businesses", desc: "Corporate sites, landing pages, CRM. Reliability and speed for your brand." },
        { icon: "👨‍💻", title: "Developers", desc: "Resell hosting to clients under your own brand. White-label solutions." },
        { icon: "🛒", title: "Online Stores", desc: "WooCommerce, PrestaShop, OpenCart. Fast hosting for e-commerce." },
        { icon: "🚀", title: "Startups", desc: "Start small and scale instantly. No migrations, no downtime." },
      ],
    },
    footer: { copy: "© 2025 HostPro. All rights reserved.", tagline: "Modern hosting for modern projects." },
  },
};

const DISCOUNT = { monthly: 1, quarterly: 0.9, yearly: 0.8 };

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function AnimSection({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease", ...style }}>
      {children}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("uk");
  const [billing, setBilling] = useState("monthly");
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const t = translations[lang];

  const getPrice = (base) => {
    const p = base * DISCOUNT[billing];
    return p.toFixed(2);
  };

  return (
    <div style={{ fontFamily: "'Syne', 'DM Sans', sans-serif", background: "#050810", color: "#F0F4FF", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050810; }
        ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
        .glow-dot { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
        .plan-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .plan-card:hover { transform: translateY(-8px); }
        .feat-card { transition: transform 0.25s ease, background 0.25s ease; }
        .feat-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.06) !important; }
        .who-card { transition: transform 0.25s ease, background 0.25s ease; }
        .who-card:hover { transform: translateY(-4px); }
        .btn-primary { transition: all 0.2s ease; }
        .btn-primary:hover { transform: scale(1.04); filter: brightness(1.12); }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #60A5FA; }
        .lang-btn { transition: all 0.2s; }
        .lang-btn:hover { color: #F0F4FF; }
        .billing-btn { transition: all 0.2s; }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-glow { 0%,100%{opacity:0.4} 50%{opacity:0.8} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .hero-orb { animation: pulse-glow 4s ease-in-out infinite; }
        .float-badge { animation: floatUp 3s ease-in-out infinite; }
        .grid-bg { background-image: linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px); background-size: 48px 48px; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(20px)", background: "rgba(5,8,16,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
            <span style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>HostPro</span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["features", "pricing", "who"].map(k => (
              <a key={k} href={`#${k}`} className="nav-link" style={{ color: "rgba(240,244,255,0.6)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>{t.nav[k]}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "3px" }}>
              {["uk", "ru", "en"].map(l => (
                <button key={l} onClick={() => setLang(l)} className="lang-btn" style={{ background: lang === l ? "rgba(96,165,250,0.2)" : "transparent", color: lang === l ? "#60A5FA" : "rgba(240,244,255,0.4)", border: "none", padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>
                  {l}
                </button>
              ))}
            </div>
            <button className="btn-primary" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#fff", padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              {t.nav.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 80, overflow: "hidden" }} className="grid-bg">
        <div className="glow-dot hero-orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(59,130,246,0.25), transparent)", top: "10%", left: "50%", transform: "translateX(-50%)" }} />
        <div className="glow-dot" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent)", bottom: "20%", right: "10%" }} />
        <div className="glow-dot" style={{ width: 200, height: 200, background: "radial-gradient(circle, rgba(251,146,60,0.15), transparent)", top: "30%", left: "5%" }} />

        <div style={{ textAlign: "center", maxWidth: 820, padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div className="float-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.25)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#93C5FD", marginBottom: 32, fontWeight: 500 }}>
            {t.hero.badge}
          </div>

          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 24 }}>
            <span style={{ display: "block", color: "#F0F4FF" }}>{t.hero.title1}</span>
            <span style={{ display: "block", background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #FB923C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.hero.title2}</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(240,244,255,0.6)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px", fontWeight: 300 }}>
            {t.hero.sub}
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
            <button className="btn-primary" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#fff", padding: "16px 36px", borderRadius: 12, fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}>
              {t.hero.cta} →
            </button>
          </div>
          <p style={{ fontSize: 13, color: "rgba(240,244,255,0.35)", fontWeight: 400 }}>{t.hero.ctaSub}</p>

          <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 64, flexWrap: "wrap" }}>
            {[{ val: "12K+", label: t.hero.stat1 }, { val: "0.3s", label: t.hero.stat2 }, { val: "99.9%", label: t.hero.stat3 }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Syne", fontSize: 36, fontWeight: 800, background: "linear-gradient(135deg, #60A5FA, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "rgba(240,244,255,0.45)", marginTop: 4, fontWeight: 400 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "120px 24px", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 style={{ fontFamily: "Syne", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 }}>{t.features.title}</h2>
            <p style={{ fontSize: 18, color: "rgba(240,244,255,0.5)", fontWeight: 300 }}>{t.features.sub}</p>
          </AnimSection>

          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              {t.features.items.map((f, i) => (
                <div key={i} className="feat-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 28px", cursor: "default" }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "Syne", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(240,244,255,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "120px 24px", position: "relative", background: "rgba(255,255,255,0.015)" }}>
        <div className="glow-dot" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)", top: "0%", right: "0%" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <AnimSection style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Syne", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 }}>{t.pricing.title}</h2>
            <p style={{ fontSize: 18, color: "rgba(240,244,255,0.5)", fontWeight: 300 }}>{t.pricing.sub}</p>
          </AnimSection>

          {/* Billing toggle */}
          <AnimSection style={{ display: "flex", justifyContent: "center", marginBottom: 60 }}>
            <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 4, gap: 4 }}>
              {["monthly", "quarterly", "yearly"].map(b => (
                <button key={b} onClick={() => setBilling(b)} className="billing-btn" style={{ background: billing === b ? "rgba(96,165,250,0.2)" : "transparent", color: billing === b ? "#60A5FA" : "rgba(240,244,255,0.5)", border: billing === b ? "1px solid rgba(96,165,250,0.3)" : "1px solid transparent", padding: "10px 20px", borderRadius: 9, cursor: "pointer", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}>
                  {t.billing[b]}
                  {b === "quarterly" && <span style={{ background: "rgba(251,146,60,0.2)", color: "#FB923C", fontSize: 11, padding: "1px 6px", borderRadius: 100, fontWeight: 700 }}>{t.billing.save10}</span>}
                  {b === "yearly" && <span style={{ background: "rgba(110,231,183,0.2)", color: "#6EE7B7", fontSize: 11, padding: "1px 6px", borderRadius: 100, fontWeight: 700 }}>{t.billing.save20}</span>}
                </button>
              ))}
            </div>
          </AnimSection>

          {/* Plan cards */}
          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, alignItems: "start" }}>
              {t.pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className="plan-card"
                  onMouseEnter={() => setHoveredPlan(i)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  style={{
                    background: plan.popular ? `linear-gradient(160deg, rgba(96,165,250,0.1), rgba(139,92,246,0.08))` : "rgba(255,255,255,0.03)",
                    border: plan.popular ? "1px solid rgba(96,165,250,0.35)" : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 20,
                    padding: "32px 28px",
                    position: "relative",
                    boxShadow: plan.popular ? "0 0 60px rgba(59,130,246,0.12)" : "none",
                    cursor: "default",
                  }}
                >
                  {plan.popular && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 100, whiteSpace: "nowrap" }}>
                      {t.pricing.popular}
                    </div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: plan.color, boxShadow: `0 0 12px ${plan.color}` }} />
                    <h3 style={{ fontFamily: "Syne", fontSize: 22, fontWeight: 800 }}>{plan.name}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(240,244,255,0.45)", marginBottom: 24, fontWeight: 300 }}>{plan.desc}</p>

                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontFamily: "Syne", fontSize: 44, fontWeight: 800, color: plan.color }}>${getPrice(plan.price)}</span>
                    <span style={{ fontSize: 14, color: "rgba(240,244,255,0.4)", fontWeight: 300 }}>{t.pricing.mo}</span>
                  </div>

                  <button className="btn-primary" style={{ width: "100%", background: plan.popular ? "linear-gradient(135deg, #3B82F6, #8B5CF6)" : "rgba(255,255,255,0.07)", border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "12px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 24 }}>
                    {t.pricing.cta}
                  </button>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 20 }}>
                    <p style={{ fontSize: 12, color: "rgba(240,244,255,0.35)", marginBottom: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.pricing.features_label}</p>
                    {plan.extras.map((e, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill={plan.color} fillOpacity="0.15"/><path d="M4 7l2 2 4-4" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{ fontSize: 13, color: "rgba(240,244,255,0.7)", fontWeight: 400 }}>{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section id="who" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection style={{ textAlign: "center", marginBottom: 72 }}>
            <h2 style={{ fontFamily: "Syne", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16 }}>{t.who.title}</h2>
            <p style={{ fontSize: 18, color: "rgba(240,244,255,0.5)", fontWeight: 300 }}>{t.who.sub}</p>
          </AnimSection>

          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {t.who.items.map((w, i) => {
                const colors = ["#6EE7B7", "#60A5FA", "#A78BFA", "#FB923C"];
                return (
                  <div key={i} className="who-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "32px 28px", textAlign: "center", cursor: "default" }}>
                    <div style={{ fontSize: 40, marginBottom: 20, display: "inline-block", background: `rgba(${i === 0 ? "110,231,183" : i === 1 ? "96,165,250" : i === 2 ? "167,139,250" : "251,146,60"},0.1)`, borderRadius: 16, width: 72, height: 72, lineHeight: "72px", textAlign: "center" }}>{w.icon}</div>
                    <h3 style={{ fontFamily: "Syne", fontSize: 20, fontWeight: 700, marginBottom: 10, color: colors[i] }}>{w.title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(240,244,255,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))", border: "1px solid rgba(96,165,250,0.2)", borderRadius: 24, padding: "60px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div className="glow-dot" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(59,130,246,0.2), transparent)", top: "-50%", left: "50%", transform: "translateX(-50%)" }} />
              <h2 style={{ fontFamily: "Syne", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 16, position: "relative", zIndex: 1 }}>
                {lang === "uk" ? "Готові розпочати?" : lang === "ru" ? "Готовы начать?" : "Ready to launch?"}
              </h2>
              <p style={{ fontSize: 16, color: "rgba(240,244,255,0.55)", marginBottom: 32, fontWeight: 300, position: "relative", zIndex: 1 }}>
                {lang === "uk" ? "Запустіть перший сайт вже сьогодні — без технічних знань." : lang === "ru" ? "Запустите первый сайт уже сегодня — без технических знаний." : "Launch your first site today — no technical skills required."}
              </p>
              <button className="btn-primary" style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#fff", padding: "16px 40px", borderRadius: 12, fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 0 40px rgba(59,130,246,0.3)", position: "relative", zIndex: 1 }}>
                {t.nav.cta} →
              </button>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚡</div>
          <span style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 16 }}>HostPro</span>
        </div>
        <p style={{ fontSize: 13, color: "rgba(240,244,255,0.3)", marginBottom: 4 }}>{t.footer.tagline}</p>
        <p style={{ fontSize: 12, color: "rgba(240,244,255,0.2)" }}>{t.footer.copy}</p>
      </footer>
    </div>
  );
}
