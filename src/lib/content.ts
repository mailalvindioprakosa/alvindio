import { getDb } from "./db";

type Locale = "id" | "en";

function pick(locale: Locale, idVal: unknown, enVal: unknown): string {
  if (locale === "en" && enVal) return String(enVal);
  return String(idVal ?? enVal ?? "");
}

export type HeroContent = {
  welcome: string;
  heading: string;
  subtext: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  text: string;
  avatar: string | null;
};

export type PortfolioItem = {
  title: string;
  category: string;
  img: string;
  url: string | null;
};

export type FaqItem = { q: string; a: string };

export type PricingPackage = {
  name: string;
  original: string;
  price: string;
  renewal_cost: string;
  is_highlighted: boolean;
  badge: string | null;
  features: { label: string; available: boolean }[];
};

export async function getHeroContent(locale: Locale, pageKey = "home"): Promise<HeroContent | null> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM hero_content WHERE page_key = ${pageKey} LIMIT 1`;
    if (!rows.length) return null;
    const r = rows[0];
    return {
      welcome: pick(locale, r.label_id, r.label_en),
      heading: pick(locale, r.heading_id, r.heading_en),
      subtext: pick(locale, r.subheading_id, r.subheading_en),
    };
  } catch {
    return null;
  }
}

export async function getTestimonials(locale: Locale): Promise<TestimonialItem[]> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM testimonials WHERE is_active = true ORDER BY sort_order ASC, created_at DESC`;
    return rows.map((r) => ({
      name: String(r.name),
      role: pick(locale, r.role, r.role),
      text: pick(locale, r.text_id, r.text_en),
      avatar: r.avatar_url ? String(r.avatar_url) : null,
    }));
  } catch {
    return [];
  }
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM portfolio_items WHERE is_active = true ORDER BY sort_order ASC, created_at DESC`;
    return rows.map((r) => ({
      title: String(r.title),
      category: String(r.category),
      img: String(r.img_url),
      url: r.url ? String(r.url) : null,
    }));
  } catch {
    return [];
  }
}

export async function getFaqs(locale: Locale, pageKey = "global"): Promise<FaqItem[]> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM faqs WHERE is_active = true AND page_key = ${pageKey} ORDER BY sort_order ASC, created_at DESC`;
    return rows.map((r) => ({
      q: pick(locale, r.question_id, r.question_en),
      a: pick(locale, r.answer_id, r.answer_en),
    }));
  } catch {
    return [];
  }
}

export async function getPricing(locale: Locale, scope = "home"): Promise<PricingPackage[]> {
  try {
    const sql = getDb();
    const pkgs = await sql`SELECT * FROM pricing_packages WHERE is_active = true AND scope = ${scope} ORDER BY sort_order ASC, created_at DESC`;
    if (!pkgs.length) return [];
    const feats = await sql`SELECT * FROM pricing_features ORDER BY sort_order ASC`;
    return pkgs.map((p) => ({
      name: pick(locale, p.name_id, p.name_en),
      original: String(p.original_price ?? ""),
      price: String(p.price ?? ""),
      renewal_cost: pick(locale, p.renewal_text_id, p.renewal_text_en),
      is_highlighted: Boolean(p.is_highlighted),
      badge: p.badge ? String(p.badge) : null,
      features: feats
        .filter((f) => Number(f.package_id) === Number(p.id))
        .map((f) => ({ label: pick(locale, f.label_id, f.label_en), available: Boolean(f.is_available) })),
    }));
  } catch {
    return [];
  }
}

export async function getSiteSettings(): Promise<Record<string, string>> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT key, value FROM site_settings`;
    return Object.fromEntries(rows.map((r) => [String(r.key), String(r.value ?? "")]));
  } catch {
    return {};
  }
}

export type NavServiceItem = {
  slug: string;
  label: string;
  href: string;
  badge: string | null;
};

export type DemoItem = { slug: string; title: string; img: string };

/** Generic per-page text fields, keyed by field_key (e.g. hero_heading, quote, about_p1). */
export async function getPageFields(locale: Locale, pageSlug: string): Promise<Record<string, string>> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM page_fields WHERE page_slug = ${pageSlug} AND is_active = true ORDER BY sort_order ASC`;
    return Object.fromEntries(rows.map((r) => [String(r.field_key), pick(locale, r.value_id, r.value_en)]));
  } catch {
    return {};
  }
}

export type PageImage = { url: string; caption: string | null };

export async function getPageImages(pageSlug: string, groupKey: string, locale: Locale = "id"): Promise<PageImage[]> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM page_images WHERE page_slug = ${pageSlug} AND group_key = ${groupKey} AND is_active = true ORDER BY sort_order ASC`;
    return rows.map((r) => ({
      url: String(r.image_url),
      caption: r.caption_id || r.caption_en ? pick(locale, r.caption_id, r.caption_en) : null,
    }));
  } catch {
    return [];
  }
}

export async function getNavServices(locale: Locale): Promise<NavServiceItem[]> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM nav_services WHERE is_active = true ORDER BY sort_order ASC`;
    return rows.map((r) => ({
      slug: String(r.slug),
      label: pick(locale, r.label_id, r.label_en),
      href: String(r.href),
      badge: r.badge_id || r.badge_en ? pick(locale, r.badge_id, r.badge_en) : null,
    }));
  } catch {
    return [];
  }
}

export async function getDemoItems(): Promise<Record<string, DemoItem[]>> {
  try {
    const sql = getDb();
    const rows = await sql`SELECT * FROM demo_website_items WHERE is_active = true ORDER BY category ASC, sort_order ASC`;
    const grouped: Record<string, DemoItem[]> = {};
    for (const r of rows) {
      const cat = String(r.category);
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push({ slug: String(r.slug), title: String(r.title ?? r.slug), img: String(r.image_url) });
    }
    return grouped;
  } catch {
    return {};
  }
}
