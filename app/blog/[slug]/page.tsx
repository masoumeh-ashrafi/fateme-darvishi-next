// app/blog/[slug]/page.tsx

import { Article, TextBlock, articlesData } from './articles'

import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'

const siteUrl = 'https://fatemedarvishi.ir'
const fallbackImage = '/optimized/header-bg.webp'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

function getArticle(slug: string): Article | undefined {
  return articlesData[slug as keyof typeof articlesData] as Article | undefined
}

function getSafeImage(slug: string, image?: string) {
  if (!image) return fallbackImage

  // این مسیر در public فعلی وجود ندارد و باعث تصویر شکسته می‌شود.
  if (slug === 'post17' || image.startsWith('/optimized/images/')) {
    return fallbackImage
  }

  return image
}

function getAbsoluteUrl(path: string) {
  if (path.startsWith('http')) return path
  return `${siteUrl}${path}`
}

function getFirstParagraph(article: Article) {
  return article.sections.find((block) => block.type === 'p')?.text || ''
}

function getDescription(article: Article) {
  const firstParagraph = getFirstParagraph(article).trim().replace(/\s+/g, ' ')

  if (!firstParagraph) {
    return 'مقاله آموزشی درباره آرایش دائم، فیبروز ابرو، میکروبلیدینگ، مراقبت‌های قبل و بعد و انتخاب روش مناسب.'
  }

  return firstParagraph.length > 155
    ? `${firstParagraph.slice(0, 155).trim()}...`
    : firstParagraph
}

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    return {
      title: 'مقاله پیدا نشد | وبلاگ',
      description:
        'این مقاله در حال حاضر یافت نشد. به صفحه وبلاگ بازگردید و مقالات دیگر را بخوانید.',
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  const description = getDescription(article)
  const image = getSafeImage(slug, article.img)
  const articleUrl = `${siteUrl}/blog/${slug}`

  return {
    title: `${article.title} | وبلاگ`,
    description,
    alternates: {
      canonical: articleUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: article.title,
      description,
      type: 'article',
      locale: 'fa_IR',
      url: articleUrl,
      siteName: 'فاطمه درویشی',
      images: [
        {
          url: getAbsoluteUrl(image),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [getAbsoluteUrl(image)],
    },
  }
}

function renderTextWithLinks(block: TextBlock) {
  if (!block.links || block.links.length === 0) return block.text

  let styledText: ReactNode[] = [block.text]

  block.links.forEach((link, linkIndex) => {
    if (!link.word) return

    styledText = styledText.flatMap((node) => {
      if (typeof node !== 'string') return node

      const parts = node.split(link.word)
      if (parts.length === 1) return node

      const elements: ReactNode[] = []

      parts.forEach((part, index) => {
        elements.push(part)

        if (index < parts.length - 1) {
          elements.push(
            <Link
              key={`${link.word}-${linkIndex}-${index}`}
              href={link.href}
              className='font-extrabold text-emerald-700 underline decoration-emerald-400 decoration-2 underline-offset-4 transition-all duration-200 hover:text-emerald-900'
            >
              {link.word}
            </Link>,
          )
        }
      })

      return elements
    })
  })

  return styledText
}

function ArticleComparisonTable() {
  return (
    <div className='my-10 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm'>
      <table className='w-full border-collapse text-center text-sm md:text-base'>
        <thead>
          <tr className='border-b border-gray-200 bg-gray-50 text-gray-950'>
            <th className='p-4 font-black'>ویژگی معیار</th>
            <th className='p-4 font-black text-emerald-800'>
              میکروبلیدینگ / فیبروز
            </th>
            <th className='p-4 font-black text-emerald-800'>
              میکروپیگمنتیشن / روش جایگزین
            </th>
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-100 text-gray-700'>
          <tr>
            <td className='bg-gray-50/40 p-4 font-bold text-gray-900'>
              نحوه اجرا
            </td>
            <td className='p-4'>اجرای ظریف‌تر با تمرکز بر خطوط شبیه تار مو</td>
            <td className='p-4'>اجرای پودری‌تر یا متراکم‌تر، بسته به تکنیک</td>
          </tr>

          <tr>
            <td className='bg-gray-50/40 p-4 font-bold text-gray-900'>
              نتیجه ظاهری
            </td>
            <td className='p-4'>طبیعی‌تر و مناسب ابروهای کم‌پشت</td>
            <td className='p-4'>پرتر، آرایش‌شده‌تر یا مناسب برخی پوست‌ها</td>
          </tr>

          <tr>
            <td className='bg-gray-50/40 p-4 font-bold text-gray-900'>
              انتخاب روش
            </td>
            <td className='p-4'>وابسته به فرم ابرو، نوع پوست و انتظار فرد</td>
            <td className='p-4'>وابسته به سابقه تاتو، رنگ‌پذیری و نیاز ترمیم</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default async function PostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const description = getDescription(article)
  const safeImage = getSafeImage(slug, article.img)
  const articleUrl = `${siteUrl}/blog/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        headline: article.title,
        description,
        image: getAbsoluteUrl(safeImage),
        author: {
          '@type': 'Person',
          name: article.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'فاطمه درویشی',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/optimized/web-app-manifest-192x192.webp`,
          },
        },
        articleSection: 'آرایش دائم',
        articleBody: article.sections.map((block) => block.text).join('\n'),
        inLanguage: 'fa-IR',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'خانه',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'وبلاگ',
            item: `${siteUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  }

  return (
    <main className='w-full bg-gray-50' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <article className='container mx-auto max-w-4xl px-4 py-12 md:py-16'>
        <div className='overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm'>
          <div className='h-64 w-full bg-gray-100 md:h-96'>
            <img
              src={safeImage}
              alt={article.title}
              title={article.title}
              className='h-full w-full object-cover'
              loading='eager'
            />
          </div>

          <div className='p-6 md:p-10'>
            <div className='mb-6 flex flex-wrap items-center gap-4 border-b border-gray-100 pb-5 text-xs text-gray-500'>
              <span>نویسنده: {article.author}</span>
              <span>تاریخ: {article.date}</span>
              <Link
                href='/blog'
                className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
              >
                وبلاگ آرایش دائم
              </Link>
            </div>

            <h1 className='mb-8 text-2xl font-black leading-snug text-gray-950 md:text-4xl'>
              {article.title}
            </h1>

            <div className='space-y-6 text-base leading-9 text-gray-800 md:text-lg'>
              {article.sections.map((block, index) => {
                if (block.type === 'h2') {
                  return (
                    <h2
                      key={`${block.type}-${index}`}
                      className='mt-12 border-r-4 border-emerald-700 pr-4 text-xl font-black leading-9 text-gray-950 md:text-2xl'
                    >
                      {block.text}
                    </h2>
                  )
                }

                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={`${block.type}-${index}`}
                      className='my-8 rounded-l-2xl border-r-4 border-emerald-600 bg-emerald-50 p-5 text-sm font-semibold leading-8 text-emerald-950 md:text-base'
                    >
                      {block.text}
                    </blockquote>
                  )
                }

                if (block.type === 'li') {
                  return (
                    <p
                      key={`${block.type}-${index}`}
                      className='m-0 flex gap-3 rounded-xl bg-gray-50 p-4 font-medium leading-8 text-gray-800'
                    >
                      <span className='mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-600' />
                      <span>{renderTextWithLinks(block)}</span>
                    </p>
                  )
                }

                return (
                  <p key={`${block.type}-${index}`} className='m-0'>
                    {renderTextWithLinks(block)}
                  </p>
                )
              })}

              {article.hasTable && (slug === 'post2' || slug === 'post5') && (
                <ArticleComparisonTable />
              )}
            </div>

            <section className='mt-14 rounded-3xl bg-gray-950 p-6 text-white md:p-8'>
              <h2 className='mb-4 text-2xl font-black'>
                قبل از تصمیم نهایی، مشاوره بگیرید
              </h2>

              <p className='mb-6 leading-8 text-gray-300'>
                محتوای این مقاله برای آگاهی اولیه است. انتخاب روش مناسب برای
                ابرو، چشم یا لب باید بعد از بررسی نوع پوست، سابقه تاتو، فرم صورت
                و انتظار شما از نتیجه انجام شود.
              </p>

              <div className='flex flex-col gap-4 sm:flex-row'>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-gray-950 no-underline transition duration-300 hover:bg-gray-100'
                >
                  رزرو وقت مشاوره
                </Link>

                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-white px-7 py-3 text-sm font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  مشاهده خدمات
                </Link>

                <Link
                  href='/#gallery'
                  className='inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  نمونه‌کارها
                </Link>
              </div>
            </section>

            <div className='mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between'>
              <Link
                href='/blog'
                className='inline-flex justify-center rounded-full bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-700 no-underline transition duration-300 hover:bg-emerald-100'
              >
                بازگشت به لیست مقالات
              </Link>

              <Link
                href='/contact-us'
                className='inline-flex justify-center rounded-full border border-emerald-700 px-6 py-3 text-sm font-bold text-emerald-700 no-underline transition duration-300 hover:bg-emerald-50'
              >
                تماس و رزرو وقت
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}