"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const I = "https://saraya.website/wp-content/uploads/";
const P = "2025/01/https___websitedemos.net_";
const e1 = (s: string) => `${P}${s}__customizetemplate1-558x1024.jpg`;
const e11 = (s: string) => `${P}${s}__customizetemplate1-1-558x1024.jpg`;
const e0 = (s: string) => `${P}${s}__customizetemplate-558x1024.jpg`;
const em = (s: string) => `${P}${s}__customizetemplate-1-558x1024.jpg`;
const ef = (s: string) => `${P}${s}__customizetemplate.jpg`;
const efm = (s: string) => `${P}${s}__customizetemplate-1.jpg`;

type Demo = { slug: string; img: string };

const DEMOS: Record<string, Demo[]> = {
  "Business & Services": [
    { slug: "business-magazine-04", img: "2025/01/1.jpg" },
    { slug: "local-business-02", img: "2025/01/2.jpg" },
    { slug: "business-blog-04", img: "2025/01/3.jpg" },
    { slug: "business-consultancy-firm-04", img: "2025/01/4.jpg" },
    { slug: "business-consulting-02", img: "2025/01/5.jpg" },
    { slug: "saas-app-company-04", img: "2025/01/6.jpg" },
    { slug: "non-profit-organization-04", img: "2025/01/7.jpg" },
    { slug: "saas-04", img: "2025/01/8.jpg" },
    { slug: "marketing-firm-04", img: "2025/01/9.jpg" },
    { slug: "digital-agency-02", img: "2025/01/10.jpg" },
    { slug: "digital-marketing-agency-04", img: "2025/01/11.jpg" },
    { slug: "public-relations-agency-04", img: "2025/01/12.jpg" },
    { slug: "marketing-agency-02", img: "2025/01/14.jpg" },
    { slug: "media-agency-04", img: "2025/01/16.jpg" },
    { slug: "co-working-space-04", img: "2025/01/17.jpg" },
    { slug: "tourism-04", img: "2025/01/18.jpg" },
    { slug: "creative-agency-04", img: "2025/01/19.jpg" },
    { slug: "wordpress-agency-04", img: "2025/01/20.jpg" },
    { slug: "agency-02", img: "2025/01/21.jpg" },
    { slug: "co-working-space-02", img: "2025/01/22.jpg" },
    { slug: "rental-agency-02", img: "2025/01/23.jpg" },
    { slug: "bike-modification-04", img: "2025/01/24.jpg" },
    { slug: "car-wash-02", img: "2025/01/25.jpg" },
    { slug: "brandstore-02", img: "2025/01/26.jpg" },
    { slug: "lotus-spa-02", img: "2025/01/27.jpg" },
    { slug: "t-shirts-store-04", img: "2025/01/29.jpg" },
    { slug: "inessa-perfumes-04", img: "2025/01/30.jpg" },
    { slug: "jewellery-store-04", img: "2025/01/31.jpg" },
    { slug: "fashion-influencer-04", img: "2025/01/32.jpg" },
    { slug: "fashion-designer-boutique-02", img: "2025/01/33.jpg" },
    { slug: "beauty-products-store-04", img: "2025/01/34.jpg" },
    { slug: "hair-salon-04", img: "2025/01/35.jpg" },
    { slug: "massage-therapist-04", img: "2025/01/36.jpg" },
    { slug: "fashion-blog-04", img: "2025/01/37.jpg" },
    { slug: "stylist-02", img: "2025/01/38.jpg" },
    { slug: "consultant-firm-04", img: "2025/01/39.jpg" },
    { slug: "garden-maintenance-02", img: "2025/01/41.jpg" },
    { slug: "cleaning-services-04", img: "2025/01/43.jpg" },
    { slug: "homestay-04", img: "2025/01/44.jpg" },
    { slug: "heritage-hotel-04", img: "2025/01/45.jpg" },
    { slug: "home-garden-decor-02", img: "2025/01/1-1.jpg" },
    { slug: "horticulture-02", img: "2025/01/2-1.jpg" },
    { slug: "gardener-02", img: "2025/01/3-1.jpg" },
  ],
  "Online Store": [
    { slug: "electronic-store-04", img: "2024/09/1.jpg" },
    { slug: "black-friday-bonanza-04", img: "2024/09/2.jpg" },
    { slug: "christmas-store-04", img: "2024/09/3.jpg" },
    { slug: "digital-download-store-02", img: "2024/09/4.jpg" },
    { slug: "black-friday-04", img: "2024/09/5.jpg" },
    { slug: "christmas-shop-04", img: "2024/09/6.jpg" },
    { slug: "halloween-shop-04", img: "2024/09/7.jpg" },
    { slug: "blingg-jewelry-store-04", img: "2024/09/8.jpg" },
    { slug: "recycled-shoe-store-04", img: "2024/09/9.jpg" },
    { slug: "clothing-store-02", img: "2024/09/10.jpg" },
    { slug: "kathryn-ebook-author-02", img: "2024/09/11.jpg" },
    { slug: "furniture-shop-04", img: "2024/09/12.jpg" },
    { slug: "egrow-plants-04", img: "2024/09/13.jpg" },
    { slug: "home-decor-04", img: "2024/09/14.jpg" },
    { slug: "cycle-shop-02", img: "2024/09/15.jpg" },
    { slug: "skin-cleanser-store-02", img: "2024/09/16.jpg" },
    { slug: "plant-store-02", img: "2024/09/17.jpg" },
    { slug: "baby-store-04", img: "2024/09/18.jpg" },
    { slug: "ceramic-products-store-04", img: "2024/09/19.jpg" },
    { slug: "furniture-haven-04", img: "2024/09/20.jpg" },
    { slug: "book-store-02", img: "2024/09/21.jpg" },
    { slug: "custom-printing-04", img: "2024/09/22.jpg" },
    { slug: "gift-shop-04", img: "2024/09/23.jpg" },
    { slug: "plant-shop-04", img: "2024/09/24.jpg" },
    { slug: "cosmetics-store-02", img: "2024/09/25.jpg" },
    { slug: "furniture-store-04", img: "2024/09/26.jpg" },
    { slug: "flower-shop-04", img: "2024/09/27.jpg" },
    { slug: "shoe-store-04", img: "2024/09/28.jpg" },
    { slug: "custom-printing-02", img: "2024/09/29.jpg" },
    { slug: "ayurveda-04", img: "2024/09/30.jpg" },
    { slug: "jewellery-04", img: "2024/09/31.jpg" },
    { slug: "store-04", img: "2024/09/32.jpg" },
    { slug: "blockchain-technology-04", img: "2024/09/33.jpg" },
    { slug: "creative-blog-02", img: "2024/09/34.jpg" },
    { slug: "vlogger-04", img: "2024/09/35.jpg" },
    { slug: "business-magazine-04", img: "2024/09/36.jpg" },
    { slug: "food-drinks-blog-04", img: "2024/09/37.jpg" },
    { slug: "tech-blogger-04", img: "2024/09/38.jpg" },
    { slug: "tech-news-04", img: "2024/09/39.jpg" },
    { slug: "vlogger-02", img: "2024/09/40.jpg" },
    { slug: "life-coach-sara-john", img: "2024/09/42.jpg" },
    { slug: "fashion-blog-04", img: "2024/09/43.jpg" },
    { slug: "author-04", img: "2024/09/44.jpg" },
    { slug: "fnb-blogger-04", img: "2024/09/45.jpg" },
    { slug: "wanderlust-travel-diary-04", img: "2024/09/46.jpg" },
    { slug: "fashion-lifestyle-02", img: "2024/09/47.jpg" },
    { slug: "language-tutors-02", img: "2024/09/48.jpg" },
    { slug: "online-health-coach-02", img: "2024/09/49.jpg" },
    { slug: "teach-ecourse-04", img: "2024/09/50.jpg" },
  ],
  "Portfolio": [
    { slug: "personal-portfolio-02", img: "2024/09/1-1.jpg" },
    { slug: "personal-trainer-04", img: "2024/09/2-1.jpg" },
    { slug: "fitness-trainer-02", img: "2024/09/3-1.jpg" },
    { slug: "dietitian-04", img: "2024/09/4-1.jpg" },
    { slug: "real-estate-company-04", img: "2024/09/5-1.jpg" },
    { slug: "locksmith-02", img: "2024/09/6-1.jpg" },
    { slug: "certified-life-coach-04", img: "2024/09/7-1.jpg" },
    { slug: "business-consultancy-firm-04", img: "2024/09/11-1.jpg" },
    { slug: "public-speaker-02", img: "2024/09/12-1.jpg" },
    { slug: "relationship-coach-02", img: "2024/09/13-1.jpg" },
    { slug: "security-services-04", img: "2024/09/14-1.jpg" },
    { slug: "event-management-04", img: "2024/09/15-1.jpg" },
    { slug: "inspirational-speaker-04", img: "2024/09/16-1.jpg" },
    { slug: "life-coach-04", img: "2024/09/17-1.jpg" },
    { slug: "professional-services-02", img: "2024/09/18-1.jpg" },
    { slug: "coach-02", img: "2024/09/19-1.jpg" },
    { slug: "motivational-speaker-02", img: "2024/09/20-1.jpg" },
    { slug: "yoga-studio-04", img: "2024/09/21-2.jpg" },
    { slug: "fitness-hub-04", img: "2024/09/22-1.jpg" },
    { slug: "yoga-instructor-02", img: "2024/09/23-1.jpg" },
    { slug: "nutritionist-02", img: "2024/09/24-1.jpg" },
    { slug: "fitness-trainer-04", img: "2024/09/25-1.jpg" },
    { slug: "yoga-04", img: "2024/09/26-1.jpg" },
    { slug: "fitness-center-04", img: "2024/09/27-1.jpg" },
    { slug: "web-developer-portfolio-04", img: "2024/09/28-1.jpg" },
    { slug: "guitarist-02", img: "2024/09/29-1.jpg" },
    { slug: "web-developer-04", img: "2024/09/30-1.jpg" },
    { slug: "artist-multipurpose-02", img: "2024/09/31-1.jpg" },
    { slug: "portfolio-photographer-04", img: "2024/09/32-1.jpg" },
    { slug: "video-editor-04", img: "2024/09/33-1.jpg" },
    { slug: "politician-04", img: "2024/09/34-1.jpg" },
    { slug: "voiceover-artist-02", img: "2024/09/35-1.jpg" },
  ],
  "Corporations & Organizations": [
    { slug: "archmasters-architecture-02", img: e1("archmasters-architecture-02") },
    { slug: "artist-multipurpose-02", img: e1("artist-multipurpose-02") },
    { slug: "brandstore-02", img: e1("brandstore-02") },
    { slug: "ceramic-products-store-04", img: e1("ceramic-products-store-04") },
    { slug: "custom-printing-04", img: e1("custom-printing-04") },
    { slug: "daycare-02", img: e1("daycare-02") },
    { slug: "earth-02", img: e1("earth-02") },
    { slug: "earth-store-02", img: e1("earth-store-02") },
    { slug: "education-04", img: e1("education-04") },
    { slug: "generic-02", img: e1("generic-02") },
    { slug: "kindergarten-04", img: e1("kindergarten-04") },
    { slug: "language-tutors-02", img: e1("language-tutors-02") },
    { slug: "learn-baking-02", img: e1("learn-baking-02") },
    { slug: "learndash-academy-02", img: e1("learndash-academy-02") },
    { slug: "learn-digital-marketing-02", img: e1("learn-digital-marketing-02") },
    { slug: "learn-meditation-02", img: e1("learn-meditation-02") },
    { slug: "learn-oil-painting-02", img: e1("learn-oil-painting-02") },
    { slug: "love-nature-02", img: e1("love-nature-02") },
    { slug: "martial-arts-04", img: e1("martial-arts-04") },
    { slug: "music-school-04", img: e1("music-school-04") },
    { slug: "online-coding-course-02", img: e1("online-coding-course-02") },
    { slug: "online-cooking-course-02", img: e1("online-cooking-course-02") },
    { slug: "online-courses-02", img: e1("online-courses-02") },
    { slug: "online-health-coach-02", img: e1("online-health-coach-02") },
    { slug: "outdoor-adventure-02", img: e1("outdoor-adventure-02") },
    { slug: "politician-04", img: e1("politician-04") },
    { slug: "saas-app-company-04", img: e1("saas-app-company-04") },
    { slug: "school-02", img: e1("school-02") },
    { slug: "school-kindergarten-04", img: e1("school-kindergarten-04") },
    { slug: "sierra-nature-02", img: e1("sierra-nature-02") },
    { slug: "teach-ecourse-04", img: e1("teach-ecourse-04") },
    { slug: "university-04", img: e1("university-04") },
    { slug: "sierra-industry-02", img: e1("sierra-industry-02") },
  ],
  "Consultant": [
    { slug: "business-consultancy-firm-04", img: e1("business-consultancy-firm-04") },
    { slug: "business-consulting-02", img: e1("business-consulting-02") },
    { slug: "certified-life-coach-04", img: e1("certified-life-coach-04") },
    { slug: "coach-02", img: e11("coach-02") },
    { slug: "consultant-04", img: e1("consultant-04") },
    { slug: "consultant-firm-04", img: e1("consultant-firm-04") },
    { slug: "event-management-04", img: e1("event-management-04") },
    { slug: "inspirational-speaker-04", img: e1("inspirational-speaker-04") },
    { slug: "life-coach-04", img: e1("life-coach-04") },
    { slug: "life-coach-sara-john", img: e1("life-coach-sara-john") },
    { slug: "motivational-speaker-02", img: e1("motivational-speaker-02") },
    { slug: "online-health-coach-02", img: e11("online-health-coach-02") },
    { slug: "professional-services-02", img: e1("professional-services-02") },
    { slug: "public-speaker-02", img: e1("public-speaker-02") },
    { slug: "real-estate-company-04", img: e1("real-estate-company-04") },
    { slug: "real-estate-consultant-02", img: e1("real-estate-consultant-02") },
    { slug: "relationship-coach-02", img: e1("relationship-coach-02") },
    { slug: "security-services-02", img: e1("security-services-02") },
    { slug: "security-services-04", img: e1("security-services-04") },
  ],
  "Blog": [
    { slug: "author-04", img: e1("author-04") },
    { slug: "bestselling-author-02", img: e11("bestselling-author-02") },
    { slug: "blockchain-technology-04", img: e1("blockchain-technology-04") },
    { slug: "business-blog-04", img: e1("business-blog-04") },
    { slug: "business-magazine-04", img: e1("business-magazine-04") },
    { slug: "childcare-blog-02", img: e1("childcare-blog-02") },
    { slug: "creative-blog-02", img: e1("creative-blog-02") },
    { slug: "creative-podcaster-02", img: e1("creative-podcaster-02") },
    { slug: "fashion-blog-04", img: e1("fashion-blog-04") },
    { slug: "fashion-influencer-04", img: e1("fashion-influencer-04") },
    { slug: "fashion-lifestyle-02", img: e1("fashion-lifestyle-02") },
    { slug: "fnb-blogger-04", img: e1("fnb-blogger-04") },
    { slug: "food-blogger-04", img: e1("food-blogger-04") },
    { slug: "food-drinks-blog-04", img: e1("food-drinks-blog-04") },
    { slug: "tech-blogger-04", img: e1("tech-blogger-04") },
    { slug: "tech-news-04", img: e1("tech-news-04") },
    { slug: "travel-blogger-04", img: e1("travel-blogger-04") },
    { slug: "vlogger-02", img: e11("vlogger-02") },
    { slug: "vlogger-04", img: e1("vlogger-04") },
    { slug: "wanderlust-travel-diary-04", img: e1("wanderlust-travel-diary-04") },
  ],
  "One Page": [
    { slug: "locksmith-02", img: e0("locksmith-02") },
    { slug: "webinar-02", img: e0("webinar-02") },
    { slug: "dentist-02", img: e0("dentist-02") },
    { slug: "wedding-02", img: e0("wedding-02") },
    { slug: "beer-launch-04", img: e0("beer-launch-04") },
    { slug: "black-friday-sale-04", img: e0("black-friday-sale-04") },
    { slug: "personal-trainer-04", img: e0("personal-trainer-04") },
    { slug: "music-school-04", img: e0("music-school-04") },
    { slug: "vlogger-02", img: e0("vlogger-02") },
    { slug: "bbq-food-truck-04", img: e0("bbq-food-truck-04") },
    { slug: "coffee-shop-02", img: e0("coffee-shop-02") },
    { slug: "wedding-invitation-04", img: e0("wedding-invitation-04") },
    { slug: "fitness-trainer-04", img: e0("fitness-trainer-04") },
    { slug: "yoga-04", img: em("yoga-04") },
    { slug: "transport-services-04", img: e0("transport-services-04") },
    { slug: "love-nature-02", img: e0("love-nature-02") },
    { slug: "outdoor-adventure-02", img: e0("outdoor-adventure-02") },
    { slug: "earth-02", img: e0("earth-02") },
    { slug: "politician-04", img: e0("politician-04") },
    { slug: "artist-multipurpose-02", img: e1("artist-multipurpose-02") },
    { slug: "archmasters-architecture-02", img: e1("archmasters-architecture-02") },
    { slug: "galatic-02", img: e0("galatic-02") },
    { slug: "generic-02", img: e1("generic-02") },
    { slug: "sierra-nature-02", img: e0("sierra-nature-02") },
    { slug: "sierra-industry-02", img: e0("sierra-industry-02") },
  ],
  "Food & Restaurants": [
    { slug: "eggcellent-restaurant-04", img: ef("eggcellent-restaurant-04") },
    { slug: "wine-bar-and-restaurant-04", img: ef("wine-bar-and-restaurant-04") },
    { slug: "fast-food-04", img: ef("fast-food-04") },
    { slug: "flavio-restaurant-04", img: ef("flavio-restaurant-04") },
    { slug: "deli-restaurant-02", img: ef("deli-restaurant-02") },
    { slug: "restaurant-04", img: ef("restaurant-04") },
    { slug: "bbq-restaurant-02", img: ef("bbq-restaurant-02") },
    { slug: "restaurant-bbq-02", img: ef("restaurant-bbq-02") },
    { slug: "italian-restaurant-02", img: ef("italian-restaurant-02") },
    { slug: "pub-and-lounge-04", img: ef("pub-and-lounge-04") },
    { slug: "cafe-library-02", img: ef("cafe-library-02") },
    { slug: "fiona-patisserie-04", img: ef("fiona-patisserie-04") },
    { slug: "food-blogger-04", img: ef("food-blogger-04") },
    { slug: "pizzeria-04", img: ef("pizzeria-04") },
    { slug: "coffee-shop-04", img: ef("coffee-shop-04") },
    { slug: "coffee-house-02", img: ef("coffee-house-02") },
    { slug: "steak-house-02", img: ef("steak-house-02") },
    { slug: "food-drinks-blog-04", img: ef("food-drinks-blog-04") },
    { slug: "pub-and-bar-04", img: ef("pub-and-bar-04") },
    { slug: "online-cooking-course-02", img: ef("online-cooking-course-02") },
    { slug: "cafe-04", img: efm("cafe-04") },
    { slug: "fnb-blogger-04", img: ef("fnb-blogger-04") },
    { slug: "brandstore-02", img: efm("brandstore-02") },
    { slug: "saas-app-company-04", img: efm("saas-app-company-04") },
    { slug: "clothing-store-02", img: ef("clothing-store-02") },
    { slug: "ceramic-products-store-04", img: ef("ceramic-products-store-04") },
    { slug: "freelance-trader-02", img: ef("freelance-trader-02") },
    { slug: "tech-startup-02", img: ef("tech-startup-02") },
    { slug: "custom-printing-04", img: "2024/09/22.jpg" },
    { slug: "hope-02", img: ef("hope-02") },
  ],
  "Events": [
    { slug: "music-event-04", img: e0("music-event-04") },
    { slug: "covid-prevention-02", img: e0("covid-prevention-02") },
    { slug: "catering-services-04", img: e0("catering-services-04") },
    { slug: "event-management-04", img: em("event-management-04") },
    { slug: "party-planner-02", img: em("party-planner-02") },
    { slug: "halloween-event-04", img: em("halloween-event-04") },
    { slug: "halloween-party-04", img: em("halloween-party-04") },
    { slug: "christmas-party-04", img: em("christmas-party-04") },
    { slug: "wedding-organizer-04", img: em("wedding-organizer-04") },
    { slug: "wedding-planner-04", img: em("wedding-planner-04") },
    { slug: "non-profit-organization-04", img: e0("non-profit-organization-04") },
    { slug: "faithfulgathering-church-04", img: em("faithfulgathering-church-04") },
    { slug: "elderly-care-02", img: e0("women-empowerment-02") },
    { slug: "church-04", img: em("church-04") },
    { slug: "animal-welfare-02", img: em("animal-welfare-02") },
    { slug: "communities-02", img: e0("communities-02") },
    { slug: "charity-04", img: em("charity-04") },
  ],
};

const ALL_DEMOS: Demo[] = Object.values(DEMOS).flat();

const categories = [
  "All",
  "Business & Services",
  "Online Store",
  "Portfolio",
  "Corporations & Organizations",
  "Consultant",
  "Blog",
  "One Page",
  "Food & Restaurants",
  "Events",
];

function DemoCard({ demo }: { demo: Demo }) {
  return (
    <a
      href={`https://websitedemos.net/${demo.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
    >
      <div className="overflow-hidden bg-gray-200" style={{ aspectRatio: "558/1024" }}>
        <img
          src={`${I}${demo.img}`}
          alt={demo.slug}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-semibold text-sm px-4 py-2 rounded-lg border border-white">
          Lihat Demo
        </span>
      </div>
    </a>
  );
}

export default function DemoWebsitePage() {
  const [activeTab, setActiveTab] = useState("All");

  const demos =
    activeTab === "All"
      ? ALL_DEMOS
      : (DEMOS[activeTab] ?? []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* HERO DARK */}
        <section style={{ backgroundColor: "#200033" }} className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Demo Website</h1>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Dengan ratusan demo website yang tersedia, Anda dapat memilih sesuai dengan kebutuhan Bisnis Anda
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={
                  activeTab === cat
                    ? { backgroundColor: "#480E6A", color: "#fff" }
                    : { backgroundColor: "#f3f4f6", color: "#554B4E" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Grid */}
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {demos.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {demos.map((demo, i) => (
                  <DemoCard key={`${demo.slug}-${i}`} demo={demo} />
                ))}
              </div>
            ) : (
              <div className="py-16" />
            )}
          </div>
        </section>

        {/* BANGUN BISNIS DIGITAL */}
        <section className="py-20" style={{ backgroundColor: "#f9f7ff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="flex justify-center">
                <img src="https://saraya.website/wp-content/uploads/2026/02/mengapa.png" alt="Mengapa Saraya"
                  className="max-w-full rounded-2xl" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug" style={{ color: "#200033" }}>
                  Bangun Bisnis Digital Bersama Saraya
                </h2>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#481d69" }}>
                  Langkah Strategis Menuju Pertumbuhan Bisnis Anda
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#554B4E" }}>
                  Saraya Website hadir sebagai mitra digital terpercaya untuk membantu bisnis Anda berkembang. Dari pembuatan website profesional hingga strategi digital marketing yang tepat sasaran, kami siap mendampingi setiap langkah perjalanan bisnis Anda.
                </p>
                <a href="https://wa.me/6285117257892" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#480E6A" }}>
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA SARAYA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#480E6A" }}>Saraya Website</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: "#200033" }}>Mengapa Saraya Website?</h2>
              <p className="text-base" style={{ color: "#554B4E" }}>Mengapa Anda Harus Memilih Saraya Website?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: "https://saraya.website/wp-content/uploads/2025/06/crown-2.webp", title: "Template Premium", desc: "Desain eksklusif dengan kualitas tinggi yang siap pakai untuk tampil profesional tanpa repot." },
                { img: "https://saraya.website/wp-content/uploads/2025/06/Garansi-Selamanya.webp", title: "Garansi Terjamin", desc: "Sekali Menggunakan layanan jasa kami, Anda mendapatkan dukungan layanan seumur hidup." },
                { img: "https://saraya.website/wp-content/uploads/2025/06/Website-Berkualitas.webp", title: "Seo Friendly", desc: "Website mudah ditemukan di Google, bantu tingkatkan trafik dan jangkauan bisnis Anda." },
                { img: "https://saraya.website/wp-content/uploads/2025/06/mudah-digunakan.webp", title: "Mudah Digunakan", desc: "Antarmuka yang simpel dan intuitif, siapa pun bisa mengelola tanpa perlu keahlian teknis." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6 border border-gray-100 bg-white shadow-sm text-center hover:shadow-md transition-shadow">
                  <img src={item.img} alt={item.title} className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                  <h3 className="font-bold text-base mb-2" style={{ color: "#200033" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#554B4E" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl py-16 px-8" style={{ backgroundColor: "#200033" }}>
              <div className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-medium" style={{ border: "0.8px solid rgb(202,192,190)", color: "rgba(255,255,255,0.7)" }}>
                Percayakan Pada Saraya Website
              </div>
              <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 leading-tight">Hubungi Kami Sekarang Juga​</h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Buat website untuk bisnis anda sekarang juga dan dapatkan promo menarik</p>
              <a href="https://wa.me/6285117257892" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#ffffff", color: "#200033" }}>
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
