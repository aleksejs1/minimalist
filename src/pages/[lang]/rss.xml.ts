import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { languages, type SupportedLanguage } from '../../i18n/ui';
import type { APIContext } from 'astro';

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang },
  }));
}

export async function GET(context: APIContext) {
  const { lang } = context.params as { lang: SupportedLanguage };

  const guides = await getCollection('guides', ({ id }) => id.startsWith(`${lang}/`));
  const blog = await getCollection('blog', ({ id }) => id.startsWith(`${lang}/`));

  const items = [
    ...guides.map((guide) => ({
      title: guide.data.title,
      description: guide.data.description,
      pubDate: guide.data.publishedDate,
      link: `/${lang}/guides/${guide.slug.replace(`${lang}/`, '')}/`,
      categories: [guide.data.category],
    })),
    ...blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/${lang}/blog/${post.slug.replace(`${lang}/`, '')}/`,
      categories: post.data.tags || ['blog'],
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  const titles: Record<SupportedLanguage, string> = {
    en: 'minimalist.lv — Mindful Simplicity in Life & Technology',
    ru: 'minimalist.lv — Осознанная простота в жизни и технологиях',
    lv: 'minimalist.lv — Apzināts vienkāršums dzīvē un tehnoloģijās',
  };

  const descriptions: Record<SupportedLanguage, string> = {
    en: 'Independent multilingual knowledge base, blog and curated directory of lightweight tools.',
    ru: 'Независимая мультиязычная база знаний, блог и каталог легковесных инструментов.',
    lv: 'Neatkarīga daudzvalodu zināšanu bāze, emuārs un vieglu rīku katalogs.',
  };

  return rss({
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    site: context.site?.toString() || 'https://minimalist.lv',
    items,
    customData: `<language>${lang}</language>`,
  });
}
