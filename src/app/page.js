"use client";

import React, { useState } from 'react';
import { 
  Search, Lightbulb, Lock, Shield, 
  TrendingUp, Menu, X, ArrowRight, 
  Tag, Filter, DollarSign, FileText,
  ChevronLeft, FileLock, CheckCircle2,
  MessageSquare, Send, Globe, Users, 
  Code, PieChart, Download, Plus, 
  LayoutDashboard, LogOut, Euro, Crown, Sparkles, CreditCard, ShieldCheck, Info
} from 'lucide-react';

const TRANSLATIONS = {
  EN: {
    logo: "Ideaconomy",
    navMarketplace: "Marketplace",
    navHowItWorks: "How it Works",
    navDashboard: "Dashboard",
    navLogOut: "Log Out",
    navLogIn: "Log In",
    navSell: "Sell a Blueprint",
    aboutNav: "About Us",
    heroTitle: <>The Global <span className="text-blue-600">Ideaconomy</span> for Business Blueprints</>,
    heroSub: "The premier exchange for validated business models, market research, and expansion strategies. Connect with brilliant creators and industry experts.",
    searchPlaceholder: "Search blueprints, niches, or keywords...",
    searchBtn: "Search",
    exploreIdeas: "Browse Niches",
    catSearch: "Find a niche...",
    askingPrice: "Asking Price",
    details: "View Details",
    protectionNotice: "Execution blueprints & financials protected by NDA.",
    noIdeas: "No blueprints found",
    clearFilters: "Clear all filters",
    howTitle: "How It Works",
    howSub: "We bridge the gap between brilliant thinkers and capable executors, providing a secure marketplace for actionable business intelligence.",
    backToMarket: "Back to Marketplace",
    publicOverview: "Blueprint Overview",
    proofValidation: "Proof of Concept / Validation",
    confidentialInfo: "Confidential Data Room",
    confidentialSub: "Full financial models, go-to-market strategies, and technical blueprints are protected.",
    signNda: "Sign NDA to Unlock Details",
    ndaSigned: "NDA Signed. Access Granted.",
    makeOffer: "Make an Offer",
    mustSignNda: "Must sign NDA to make offers",
    includedFullAccess: "Included in this Blueprint:",
    listYourIdea: "List Your Blueprint",
    ideaTitle: "Blueprint Title",
    publicTeaser: "Public Teaser (Pitch)",
    protectedAssets: "Protected Assets (Data Room)",
    publish: "Publish to Marketplace",
    yourDashboard: "Your Dashboard",
    activeIdeas: "Your Active Listings",
    submitProposal: "Submit Proposal",
    upfrontBuyout: "Upfront Buyout",
    royaltyShare: "Royalty Share",
    messageSeller: "Message to Seller",
    sendOffer: "Send Offer to Seller",
    pricingTitle: "Choose Your Seller Plan",
    pricingSub: "Join thousands of creators selling blueprints globally. Cancel anytime.",
    basicPlan: "Basic Seller",
    premiumPlan: "Premium Pro",
    perMonth: "/month",
    unlimitedPosts: "Unlimited Blueprint Listings",
    standardSupport: "Standard Support",
    aiBusinessPlan: "AI Business Plan Generator",
    priorityPlacement: "Priority Placement",
    subscribeBtn: "Subscribe & Start Selling",
    aiGenerateBtn: "Auto-Generate with AI",
    premiumBadge: "PRO SELLER",
    checkoutTitle: "Complete your subscription",
    payNow: "Pay Now",
    nameOnCard: "Name on Card",
    cardNumber: "Card Number",
    expiry: "MM/YY",
    cvc: "CVC",
    secureCheckout: "Secure encrypted checkout",
    aboutTitle: "Our Mission",
    aboutText1: "Ideaconomy bridges the gap between brilliant thinkers and capable executors. We realized that many people have incredible, highly profitable ideas—like new franchise models or corporate expansion strategies—but lack the time, capital, or desire to build them from scratch.",
    aboutText2: "Our platform allows creators to securely sell their blueprints, prototypes, and market research directly to ambitious entrepreneurs, small businesses, and large corporations looking for their next major growth opportunity.",
    legalLinks: "Legal",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    disclaimer: "Legal Disclaimer",
    disclaimerText: "Disclaimer: Ideaconomy provides a platform for connecting buyers and sellers. We do not guarantee the financial success, accuracy, or legal viability of any purchased blueprints. All acquisitions are subject to the buyer's own due diligence.",
    footerDesc: "The global hub for high-value strategic expansion and business blueprints.",
    pasteLegalHere: "[Paste your legal text here. You can format it with standard paragraphs and bullet points.]"
  },
  DE: {
    logo: "Ideaconomy",
    navMarketplace: "Marktplatz",
    navHowItWorks: "So funktioniert's",
    navDashboard: "Dashboard",
    navLogOut: "Abmelden",
    navLogIn: "Einloggen",
    navSell: "Blueprint verkaufen",
    aboutNav: "Über uns",
    heroTitle: <>Die globale <span className="text-blue-600">Ideaconomy</span> für Business-Baupläne</>,
    heroSub: "Der führende Marktplatz für validierte Geschäftsmodelle und Expansionsstrategien. Verbinden Sie sich mit brillanten Köpfen und Experten.",
    searchPlaceholder: "Nach Blueprints, Nischen oder Keywords suchen...",
    searchBtn: "Suchen",
    exploreIdeas: "Nischen durchsuchen",
    catSearch: "Nische finden...",
    askingPrice: "Kaufpreis",
    details: "Details ansehen",
    protectionNotice: "Baupläne & Finanzen sind durch ein NDA geschützt.",
    noIdeas: "Keine Blueprints gefunden",
    clearFilters: "Filter löschen",
    howTitle: "Wie es funktioniert",
    howSub: "Wir schließen die Lücke zwischen brillanten Denkern und fähigen Machern und bieten einen sicheren Marktplatz für Geschäftswissen.",
    backToMarket: "Zurück zum Marktplatz",
    publicOverview: "Blueprint Übersicht",
    proofValidation: "Validierung / Konzeptnachweis",
    confidentialInfo: "Vertraulicher Datenraum",
    confidentialSub: "Finanzmodelle, Go-to-Market-Strategien und technische Pläne sind geschützt.",
    signNda: "NDA unterzeichnen & Details freischalten",
    ndaSigned: "NDA unterzeichnet. Zugang gewährt.",
    makeOffer: "Angebot machen",
    mustSignNda: "NDA muss für ein Angebot unterzeichnet sein",
    includedFullAccess: "In diesem Blueprint enthalten:",
    listYourIdea: "Blueprint eintragen",
    ideaTitle: "Titel des Blueprints",
    publicTeaser: "Öffentlicher Teaser (Pitch)",
    protectedAssets: "Geschützte Assets (Datenraum)",
    publish: "Auf Marktplatz veröffentlichen",
    yourDashboard: "Dein Dashboard",
    activeIdeas: "Deine aktiven Einträge",
    submitProposal: "Angebot einreichen",
    upfrontBuyout: "Sofortkauf",
    royaltyShare: "Umsatzbeteiligung",
    messageSeller: "Nachricht an den Verkäufer",
    sendOffer: "Angebot an Verkäufer senden",
    pricingTitle: "Wähle deinen Verkäufer-Plan",
    pricingSub: "Schließe dich Tausenden von Ideengebern an. Jederzeit kündbar.",
    basicPlan: "Basis Verkäufer",
    premiumPlan: "Premium Pro",
    perMonth: "/Monat",
    unlimitedPosts: "Unbegrenzte Blueprint-Einträge",
    standardSupport: "Standard Support",
    aiBusinessPlan: "KI Businessplan-Generator",
    priorityPlacement: "Priorisierte Platzierung",
    subscribeBtn: "Abonnieren & Verkaufen",
    aiGenerateBtn: "Mit KI generieren",
    premiumBadge: "PRO VERKÄUFER",
    checkoutTitle: "Abonnement abschließen",
    payNow: "Jetzt bezahlen",
    nameOnCard: "Name auf der Karte",
    cardNumber: "Kartennummer",
    expiry: "MM/JJ",
    cvc: "Prüfziffer",
    secureCheckout: "Sicherer, verschlüsselter Checkout",
    aboutTitle: "Unsere Mission",
    aboutText1: "Ideaconomy schließt die Lücke zwischen brillanten Denkern und fähigen Machern. Viele Menschen haben hochprofitable Ideen, aber nicht die Zeit oder das Kapital, sie umzusetzen.",
    aboutText2: "Unser Marktplatz ermöglicht es Ideengebern, ihre Baupläne und Marktforschung sicher an Unternehmer und Konzerne zu verkaufen.",
    legalLinks: "Rechtliches",
    terms: "Nutzungsbedingungen",
    privacy: "Datenschutzerklärung",
    disclaimer: "Haftungsausschluss",
    disclaimerText: "Haftungsausschluss: Ideaconomy garantiert nicht den finanziellen Erfolg der gekauften Pläne. Käufe unterliegen der eigenen Sorgfaltspflicht.",
    footerDesc: "Der globale Knotenpunkt für hochwertige strategische Expansion und Business-Baupläne.",
    pasteLegalHere: "[Fügen Sie hier Ihren Rechtstext ein. Sie können ihn mit Standardabsätzen formatieren.]"
  }
};

const INITIAL_CATEGORIES = [
  "All", "AI Businesses", "SaaS", "Franchise Expansion", "E-commerce", 
  "Corporate Strategy", "Food & Beverage", "Mobile Apps", "Real Estate", 
  "Healthcare & Biotech", "IT & Software", "Pet & Animal Services", "Hospitality"
];

const MOCK_IDEAS = [
  {
    id: 1,
    title: "AI-Powered Dermatological Diagnostics App",
    category: "AI Businesses",
    price: "$15,000",
    royaltyOption: "or $5k + 10% Royalty",
    shortDesc: "A mobile application utilizing machine learning to pre-screen common dermatological issues before booking a doctor.",
    listingDate: "2 days ago",
    validation: ["Working Prototype", "Domain Secured", "Algorithm Trained"],
    assets: ["Full Business Plan", "Financial Projections", "MVP Wireframes", "ML Source Code"]
  },
  {
    id: 2,
    title: "Italian Pet & Reptile Cafe Concept",
    category: "Hospitality",
    price: "$12,000",
    royaltyOption: "or $3k + 5% Royalty",
    shortDesc: "A unique restaurant blueprint for the Italian market combining premium coffee with an interactive, safe reptile and cat sanctuary experience.",
    listingDate: "12 hours ago",
    validation: ["Location Sourcing Strategy", "Italian Zoning Laws Cleared"],
    assets: ["Architectural Layouts", "Supplier List for Animals", "Operations Manual"]
  },
  {
    id: 3,
    title: "Zero-Trust Cybersecurity Framework for SMBs",
    category: "IT & Software",
    price: "$25,000",
    royaltyOption: "or $10k + 8% Royalty",
    shortDesc: "A turnkey IT service package designed to migrate small-to-medium businesses to military-grade zero-trust architectures in under 48 hours.",
    listingDate: "Just now",
    validation: ["Tested on 3 Beta Clients", "100% Audit Pass Rate"],
    assets: ["Deployment Scripts", "Client Pitch Deck", "Vendor White-label Agreements"]
  },
  {
    id: 4,
    title: "Telehealth Pediatric Triage System",
    category: "Healthcare & Biotech",
    price: "$45,000",
    royaltyOption: "Upfront buyout only",
    shortDesc: "A fully compliant B2B platform connecting exhausted parents with on-demand pediatric nurses for after-hours symptom checking.",
    listingDate: "1 week ago",
    validation: ["HIPAA/GDPR Compliant Architecture", "150 Parents Surveyed"],
    assets: ["Regulatory Compliance Roadmap", "Wireframes", "Go-To-Market Strategy"]
  },
  {
    id: 5,
    title: "CRISPR-based Agricultural Yield Optimizer",
    category: "Biotech",
    price: "$120,000",
    royaltyOption: "or $50k + 15% Royalty",
    shortDesc: "Research and theoretical application models for increasing drought resistance in Mediterranean olive trees using advanced gene editing.",
    listingDate: "3 days ago",
    validation: ["Peer-Reviewed Feasibility", "Patent Pending Status"],
    assets: ["Laboratory Protocols", "Patent Filing Documents", "Agri-Corp Buyer List"]
  },
  {
    id: 6,
    title: "National Food Truck Franchise Strategy",
    category: "Food & Beverage",
    price: "$35,000",
    royaltyOption: "or $8k + 5% Royalty",
    shortDesc: "Complete expansion blueprint for supermarket parking lots. Engineered for corporate retail giants looking to capture fast-food revenue.",
    listingDate: "5 days ago",
    validation: ["Location Analysis", "Supplier List"],
    assets: ["Franchise Agreement", "Operations Manual", "Equipment Specs"]
  },
  {
    id: 7,
    title: "Hyper-Local Sustainable Grocery Delivery",
    category: "E-commerce",
    price: "$8,500",
    royaltyOption: "or $2k + 12% Royalty",
    shortDesc: "E-commerce logistics model that connects local organic farms directly to neighborhood hubs via electric cargo bikes.",
    listingDate: "4 hours ago",
    validation: ["Logistics Route Optimized", "Farmer Network Built"],
    assets: ["Web App Source Code", "Fleet Management Plan", "Marketing Assets"]
  },
  {
    id: 8,
    title: "B2B Subscription Management API",
    category: "SaaS",
    price: "$60,000",
    royaltyOption: "Upfront buyout only",
    shortDesc: "A micro-SaaS blueprint that simplifies complex, multi-tiered enterprise billing. Perfect to build and flip to Stripe or Paddle.",
    listingDate: "1 month ago",
    validation: ["API Architecture Complete", "Competitor Gap Analysis"],
    assets: ["System Architecture", "Database Schema", "UI/UX Figma Files"]
  },
  {
    id: 9,
    title: "Remote-First Workforce Transition Plan",
    category: "Corporate Strategy",
    price: "$5,000",
    royaltyOption: "No royalty option",
    shortDesc: "A comprehensive consulting manual allowing HR agencies to charge premium fees to transition old-school companies to asynchronous remote work.",
    listingDate: "6 hours ago",
    validation: ["Used successfully by 2 Fortune 500s"],
    assets: ["Slide Decks", "Change Management Workbooks", "Legal Addendums"]
  },
  {
    id: 10,
    title: "Modular Urban Vertical Farming",
    category: "Pet & Animal Services",
    price: "$18,000",
    royaltyOption: "or $5k + 8% Royalty",
    shortDesc: "A scalable hardware and logistics blueprint for cultivating organic, high-protein insect feed for the premium pet food market.",
    listingDate: "2 weeks ago",
    validation: ["Hardware Prototypes", "Nutritional Lab Tests"],
    assets: ["CAD Models", "Supplier Contracts", "Financial ROI Calculator"]
  }
];

export default function App() {
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("USD");
  const [currentView, setCurrentView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userTier, setUserTier] = useState('none');
  const [pendingTier, setPendingTier] = useState(null);
  const [ideas, setIdeas] = useState(MOCK_IDEAS);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [ndaSigned, setNdaSigned] = useState(false);
  const [newIdea, setNewIdea] = useState({ title: "", category: "SaaS", price: "", shortDesc: "", assets: "" });

  const t = (key) => TRANSLATIONS[language][key] || key;

  const filteredIdeas = ideas.filter(idea => {
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          idea.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSellClick = () => {
    if (!isLoggedIn || !isSubscribed) {
      setCurrentView("pricing");
    } else {
      setCurrentView("create");
    }
    window.scrollTo(0,0);
  };

  const handleSubscribe = (tier) => {
    setPendingTier(tier);
    setCurrentView("checkout");
    window.scrollTo(0,0);
  };

  const finalizePayment = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsSubscribed(true);
    setUserTier(pendingTier);
    setCurrentView("create");
    window.scrollTo(0,0);
  };

  const handleAIGenerate = () => {
    setNewIdea({
      ...newIdea,
      shortDesc: "🤖 Ideaconomy AI Generated Strategy:\n\n1. Market Gap: High demand in suburban areas.\n2. Logistics: Modular setup reduces overhead by 30%.\n3. Scaling: Franchise model with centralized supply chain.\n4. Revenue: Projected ROI within 14 months based on current benchmarks."
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div onClick={() => {setCurrentView("home"); window.scrollTo(0,0);}} className="flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg shadow-sm"><Lightbulb className="h-6 w-6 text-white" /></div>
            <span className="font-black text-2xl tracking-tight">{t('logo')}</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => {setCurrentView('about'); window.scrollTo(0,0);}} className="text-slate-600 hover:text-blue-600 font-bold transition-colors">{t('aboutNav')}</button>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button onClick={() => setLanguage('EN')} className={`px-2 py-1 text-xs font-bold rounded ${language === 'EN' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>EN</button>
              <button onClick={() => setLanguage('DE')} className={`px-2 py-1 text-xs font-bold rounded ${language === 'DE' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>DE</button>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button onClick={() => setCurrency('USD')} className={`px-2 py-1 text-xs font-bold rounded ${currency === 'USD' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>USD</button>
              <button onClick={() => setCurrency('EUR')} className={`px-2 py-1 text-xs font-bold rounded ${currency === 'EUR' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>EUR</button>
            </div>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                 <button onClick={() => {setCurrentView('dashboard'); window.scrollTo(0,0);}} className="text-slate-600 hover:text-blue-600 font-bold flex items-center gap-1">
                   {userTier === 'premium' && <Crown size={14} className="text-yellow-500" />}
                   {t('navDashboard')}
                 </button>
                 <button onClick={() => {setIsLoggedIn(false); setIsSubscribed(false); setUserTier('none'); setCurrentView('home');}} className="text-slate-400 hover:text-red-600"><LogOut size={20} /></button>
              </div>
            ) : (
              <button onClick={() => setIsLoggedIn(true)} className="text-slate-600 hover:text-blue-600 font-bold">{t('navLogIn')}</button>
            )}
            <button onClick={handleSellClick} className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
              <Plus className="h-4 w-4" /> {t('navSell')}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 min-h-[80vh]">
        {currentView === "home" && (
          <>
            <section className="py-20 px-4 text-center max-w-5xl mx-auto bg-white rounded-3xl mt-8 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">{t('heroTitle')}</h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium">{t('heroSub')}</p>
              
              <div className="flex flex-col sm:flex-row max-w-2xl mx-auto bg-slate-50 rounded-full shadow-inner border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 mb-10">
                <div className="flex items-center pl-6 py-4 flex-grow">
                  <Search className="h-6 w-6 text-slate-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder={t('searchPlaceholder')}
                    className="w-full outline-none text-slate-700 text-lg bg-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-black transition-colors">
                  {t('searchBtn')}
                </button>
              </div>
            </section>

            <section id="marketplace" className="max-w-7xl mx-auto px-4 py-16">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <h2 className="text-3xl font-black text-slate-900">{t('exploreIdeas')}</h2>
                <div className="relative w-full md:w-72">
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full appearance-none bg-white border-2 border-slate-200 py-4 px-6 rounded-2xl font-bold text-lg focus:outline-none focus:border-blue-600 cursor-pointer shadow-sm hover:border-blue-300"
                  >
                    {INITIAL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat === "All" ? t('exploreIdeas') : cat}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-blue-600">
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredIdeas.map(idea => (
                  <div key={idea.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col cursor-pointer transform hover:-translate-y-1" onClick={() => {setSelectedIdea(idea); setNdaSigned(false); setCurrentView("details"); window.scrollTo(0,0);}}>
                    <div className="h-2 bg-blue-600 group-hover:bg-cyan-500 transition-colors"></div>
                    <div className="p-8 flex-grow">
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-black uppercase text-slate-600">{idea.category}</span>
                        <span className="text-2xl font-black text-green-600">{idea.price}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{idea.title}</h3>
                      <p className="text-slate-500 leading-relaxed line-clamp-3 mb-6">{idea.shortDesc}</p>
                      <div className="bg-blue-50 p-3 rounded-xl flex items-center gap-2 border border-blue-100 mb-4">
                        <Lock className="h-4 w-4 text-blue-600" />
                        <p className="text-xs font-bold text-blue-800">{t('protectionNotice')}</p>
                      </div>
                      <button className="w-full py-4 bg-slate-50 rounded-xl font-black text-blue-600 group-hover:bg-blue-50 transition-colors border border-slate-100">{t('details')} &rarr;</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Pricing, Checkout, About... */}
        {currentView === "pricing" && (
          <div className="max-w-5xl mx-auto py-16 px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6">{t('pricingTitle')}</h2>
              <p className="text-xl text-slate-500 font-medium">{t('pricingSub')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 flex flex-col hover:border-blue-300 transition-colors shadow-sm">
                <h3 className="text-3xl font-black mb-4">{t('basicPlan')}</h3>
                <div className="text-6xl font-black mb-8">$9<span className="text-lg text-slate-400 font-bold">{t('perMonth')}</span></div>
                <ul className="space-y-4 mb-10 flex-grow font-bold text-slate-500 text-lg">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> {t('unlimitedPosts')}</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> {t('standardSupport')}</li>
                </ul>
                <button onClick={() => handleSubscribe('basic')} className="w-full py-4 rounded-xl font-black border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all text-lg">{t('subscribeBtn')}</button>
              </div>
              <div className="bg-slate-900 text-white p-10 rounded-3xl flex flex-col relative transform md:-translate-y-4 shadow-2xl">
                <div className="absolute -top-4 right-8 bg-blue-500 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Most Popular</div>
                <h3 className="text-3xl font-black mb-4 flex items-center gap-2"><Crown className="text-yellow-400" /> {t('premiumPlan')}</h3>
                <div className="text-6xl font-black mb-8">$49<span className="text-lg text-slate-400 font-bold">{t('perMonth')}</span></div>
                <ul className="space-y-4 mb-10 flex-grow font-bold text-slate-300 text-lg">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400" /> {t('unlimitedPosts')}</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400" /> {t('aiBusinessPlan')}</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-blue-400" /> {t('priorityPlacement')}</li>
                </ul>
                <button onClick={() => handleSubscribe('premium')} className="w-full py-4 rounded-xl font-black bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 text-lg">{t('subscribeBtn')}</button>
              </div>
            </div>
          </div>
        )}

        {currentView === "checkout" && (
          <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="bg-slate-50 p-10 md:w-1/3 border-b md:border-r md:border-b-0 border-slate-200">
                <h3 className="font-black uppercase text-xs text-slate-400 tracking-widest mb-8">Summary</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">{pendingTier === 'premium' ? t('premiumPlan') : t('basicPlan')}</span>
                  <span className="font-black text-2xl">{pendingTier === 'premium' ? '$49' : '$9'}</span>
                </div>
                <p className="text-xs text-slate-400 font-bold mb-8">Billed monthly. Cancel anytime.</p>
                <div className="flex items-center gap-2 text-green-600 font-black text-xs bg-green-50 p-3 rounded-xl border border-green-100"><ShieldCheck size={16} /> {t('secureCheckout')}</div>
              </div>
              <div className="p-10 md:w-2/3">
                <h2 className="text-3xl font-black mb-8">{t('checkoutTitle')}</h2>
                <form onSubmit={finalizePayment} className="space-y-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-500 mb-2">{t('nameOnCard')}</label>
                    <input required type="text" className="w-full p-4 border-2 border-slate-100 rounded-xl focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="ANITA FOUNDER" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-500 mb-2">{t('cardNumber')}</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-5 text-slate-300" />
                      <input required type="text" className="w-full pl-12 p-4 border-2 border-slate-100 rounded-xl focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="0000 0000 0000 0000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><input required className="w-full p-4 border-2 border-slate-100 rounded-xl font-bold outline-none focus:border-blue-500 text-lg" placeholder={t('expiry')} /></div>
                    <div><input required className="w-full p-4 border-2 border-slate-100 rounded-xl font-bold outline-none focus:border-blue-500 text-lg" placeholder={t('cvc')} /></div>
                  </div>
                  <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-xl">{t('payNow')}</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {currentView === "about" && (
          <div className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-6xl font-black text-slate-900 mb-8 tracking-tight">{t('aboutTitle')}</h1>
            <div className="w-24 h-2 bg-blue-600 mb-12 rounded-full"></div>
            <div className="space-y-8 text-xl font-medium text-slate-600 leading-relaxed">
              <p className="text-3xl font-bold text-slate-900 leading-snug">{t('aboutText1')}</p>
              <p>{t('aboutText2')}</p>
              <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 mt-16 shadow-sm">
                <h3 className="text-3xl font-black text-blue-900 mb-4 tracking-tight">Strategic expansion, democratized.</h3>
                <p className="text-blue-800 mb-8 font-semibold">Join the premier marketplace where high-value business concepts are securely traded.</p>
                <button onClick={() => {setCurrentView('home'); window.scrollTo(0,0);}} className="bg-blue-600 text-white font-black py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-lg text-lg">Start Exploring</button>
              </div>
            </div>
          </div>
        )}

        {/* Blueprint Details View */}
        {currentView === "details" && selectedIdea && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <button onClick={() => {setCurrentView('home'); window.scrollTo(0,0);}} className="font-bold text-slate-400 hover:text-blue-600 mb-8 flex items-center gap-2 transition-colors">&larr; {t('backToMarket')}</button>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="mb-6"><span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-black uppercase border border-blue-100 tracking-wider">{selectedIdea.category}</span></div>
                  <h1 className="text-5xl font-black mb-8 leading-tight text-slate-900">{selectedIdea.title}</h1>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Info className="text-blue-600" size={20}/> {t('publicOverview')}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{selectedIdea.shortDesc}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedIdea.validation?.map((v, i) => (
                      <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-sm text-slate-700">
                        <CheckCircle2 className="text-green-500 h-5 w-5" /> {v}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-10 rounded-3xl border-2 border-dashed transition-all duration-500 ${ndaSigned ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-100 border-slate-300'}`}>
                   {!ndaSigned ? (
                     <div className="text-center py-12">
                        <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md mx-auto mb-6"><Lock className="h-10 w-10 text-blue-600" /></div>
                        <h3 className="text-3xl font-black mb-4">{t('confidentialInfo')}</h3>
                        <p className="text-slate-500 font-bold mb-8 max-w-sm mx-auto leading-relaxed">{t('confidentialSub')}</p>
                        <button onClick={() => setNdaSigned(true)} className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3 mx-auto transform hover:-translate-y-1">
                          <FileLock /> {t('signNda')}
                        </button>
                     </div>
                   ) : (
                     <div className="animate-in fade-in zoom-in duration-700">
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                          <ShieldCheck className="text-green-500 h-10 w-10" />
                          <h3 className="text-3xl font-black text-slate-900">{t('ndaSigned')}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                           {selectedIdea.assets?.map((a, i) => (
                             <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:border-blue-200 transition-colors">
                                <div className="flex items-center gap-4">
                                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors"><FileText /></div>
                                  <span className="font-bold text-slate-700">{a}</span>
                                </div>
                                <Download className="text-slate-300 cursor-pointer hover:text-blue-600 transition-colors" />
                             </div>
                           ))}
                        </div>
                     </div>
                   )}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 sticky top-24 shadow-xl">
                  <span className="text-xs font-black uppercase text-slate-400 tracking-widest mb-2 block">{t('askingPrice')}</span>
                  <div className="text-5xl font-black text-slate-900 mb-2">{selectedIdea.price}</div>
                  <div className="text-sm font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-lg inline-block mb-8 border border-green-100 shadow-sm">{selectedIdea.royaltyOption}</div>
                  <button disabled={!ndaSigned} className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-lg ${ndaSigned ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' : 'bg-slate-100 text-slate-300 cursor-not-allowed border-2 border-slate-200'}`}>
                    {t('makeOffer')}
                  </button>
                  {!ndaSigned && <p className="text-center text-xs font-black text-amber-600 mt-4 bg-amber-50 py-2 rounded-lg"><Lock size={12} className="inline mr-1" /> {t('mustSignNda')}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard and Create Views */}
        {currentView === "create" && (
          <div className="max-w-3xl mx-auto py-16 px-4">
             <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl relative">
                {userTier === 'premium' && (
                  <div className="absolute top-10 right-10 flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest border border-yellow-100">
                    <Crown size={14} /> {t('premiumBadge')}
                  </div>
                )}
                <h2 className="text-4xl font-black mb-8 tracking-tight">{t('navSell')}</h2>
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setIdeas([{...newIdea, id: ideas.length + 1, price: '$' + newIdea.price}, ...ideas]); setCurrentView('home'); window.scrollTo(0,0); }}>
                   <div>
                     <label className="block text-xs font-black uppercase text-slate-500 mb-3 tracking-widest">{t('ideaTitle')}</label>
                     <input required type="text" value={newIdea.title} onChange={(e) => setNewIdea({...newIdea, title: e.target.value})} className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="e.g. Smart Logistics Network" />
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-black uppercase text-slate-500 mb-3 tracking-widest">Niche</label>
                        <select className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-bold text-lg bg-white appearance-none cursor-pointer" value={newIdea.category} onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}>
                          {INITIAL_CATEGORIES.slice(1).map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase text-slate-500 mb-3 tracking-widest">{t('askingPrice')}</label>
                        <input required type="number" value={newIdea.price} onChange={(e) => setNewIdea({...newIdea, price: e.target.value})} className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-bold text-lg" placeholder="50000" />
                      </div>
                   </div>
                   <div>
                     <div className="flex justify-between items-end mb-3">
                        <label className="block text-xs font-black uppercase text-slate-500 tracking-widest">{t('publicTeaser')}</label>
                        {userTier === 'premium' && (
                          <button type="button" onClick={handleAIGenerate} className="text-xs font-black flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl border border-blue-100 hover:bg-blue-100 transition-all">
                            <Sparkles size={14} /> {t('aiGenerateBtn')}
                          </button>
                        )}
                     </div>
                     <textarea required rows="5" value={newIdea.shortDesc} onChange={(e) => setNewIdea({...newIdea, shortDesc: e.target.value})} className="w-full p-4 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all font-bold text-lg resize-none" placeholder="Elevator pitch for your blueprint..."></textarea>
                   </div>
                   <div className="flex gap-4 pt-6 border-t border-slate-100">
                      <button type="button" onClick={() => setCurrentView('home')} className="px-10 py-4 font-black border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all text-slate-500">{t('cancel')}</button>
                      <button type="submit" className="flex-grow py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-lg uppercase tracking-wider">{t('publish')}</button>
                   </div>
                </form>
             </div>
          </div>
        )}

        {currentView === "dashboard" && (
          <div className="max-w-5xl mx-auto py-16 px-4">
             <div className="flex justify-between items-end mb-12">
               <h1 className="text-5xl font-black tracking-tight">{t('yourDashboard')}</h1>
               <button onClick={handleSellClick} className="bg-blue-600 text-white px-8 py-3 rounded-full font-black shadow-lg shadow-blue-200">{t('navSell')}</button>
             </div>
             <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
                <h3 className="text-sm font-black uppercase text-slate-400 tracking-widest mb-8">{t('activeIdeas')}</h3>
                {ideas.map(idea => (
                  <div key={idea.id} className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer rounded-xl mb-2" onClick={() => {setSelectedIdea(idea); setCurrentView('details'); window.scrollTo(0,0);}}>
                    <div className="flex items-center gap-6 mb-4 sm:mb-0">
                      <div className="bg-blue-100 p-4 rounded-2xl text-blue-600"><FileText /></div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{idea.title}</h4>
                        <span className="text-xs font-black uppercase bg-blue-50 text-blue-600 px-3 py-1 rounded-md">{idea.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-slate-900">{idea.price}</div>
                      <div className="text-xs font-bold text-slate-400">{idea.listingDate}</div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Legal Pages */}
        {currentView === "terms" && (
          <div className="max-w-4xl mx-auto py-16 px-4 min-h-[50vh]">
            <h1 className="text-5xl font-black mb-8 text-slate-900">{t('terms')}</h1>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-slate-600 font-medium">
              <p>{t('pasteLegalHere')}</p>
            </div>
          </div>
        )}

        {currentView === "privacy" && (
          <div className="max-w-4xl mx-auto py-16 px-4 min-h-[50vh]">
            <h1 className="text-5xl font-black mb-8 text-slate-900">{t('privacy')}</h1>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-slate-600 font-medium">
              <p>{t('pasteLegalHere')}</p>
            </div>
          </div>
        )}

        {currentView === "disclaimer" && (
          <div className="max-w-4xl mx-auto py-16 px-4 min-h-[50vh]">
            <h1 className="text-5xl font-black mb-8 text-slate-900">{t('disclaimer')}</h1>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-slate-600 font-medium">
              <p>{t('disclaimerText')}</p>
              <br/>
              <p>{t('pasteLegalHere')}</p>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
               <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => {setCurrentView('home'); window.scrollTo(0,0);}}>
                <div className="bg-blue-600 p-2 rounded-lg shadow-sm"><Lightbulb className="h-6 w-6 text-white" /></div>
                <span className="font-black text-2xl tracking-tight">{t('logo')}</span>
              </div>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">{t('footerDesc')}</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs text-slate-400 tracking-widest mb-8">{t('legalLinks')}</h4>
              <ul className="space-y-4 font-bold text-slate-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => {setCurrentView('terms'); window.scrollTo(0,0);}}>{t('terms')}</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => {setCurrentView('privacy'); window.scrollTo(0,0);}}>{t('privacy')}</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => {setCurrentView('disclaimer'); window.scrollTo(0,0);}}>{t('disclaimer')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8">
            <p className="text-xs text-slate-400 text-center italic">{t('disclaimerText')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}