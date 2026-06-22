import Link from 'next/link'
import type { Metadata } from 'next'
import { articlesData } from './[slug]/articles'

const siteUrl = 'https://fatemedarvishi.ir'

export const metadata: Metadata = {
  title: 'وبلاگ آرایش دائم | مقالات فیبروز، میکروبلیدینگ و مراقبت',
  description:
    'مقالات آموزشی فاطمه درویشی درباره آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم، رژ لب دائم، مراقبت قبل و بعد و انتخاب روش مناسب در مشهد.',
  keywords: [
    'وبلاگ آرایش دائم',
    'مقالات آرایش دائم',
    'مراقبت بعد از فیبروز ابرو',
    'میکروبلیدینگ ابرو',
    'بن مژه دائم',
    'خط چشم دائم',
    'رژ لب دائم',
    'آرایش دائم در مشهد',
    'فیبروز ابرو مشهد',
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'وبلاگ آرایش دائم | فاطمه درویشی',
    description:
      'مطالب آموزشی درباره فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم، رژ لب دائم، مراقبت‌ها و انتخاب روش مناسب آرایش دائم.',
    type: 'website',
    locale: 'fa_IR',
    url: `${siteUrl}/blog`,
    siteName: 'فاطمه درویشی',
    images: [
      {
        url: `${siteUrl}/optimized/header-bg.webp`,
        width: 1200,
        height: 630,
        alt: 'وبلاگ آموزشی آرایش دائم فاطمه درویشی',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'وبلاگ آرایش دائم | فاطمه درویشی',
    description:
      'مقالات آموزشی درباره آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه و رژ لب دائم.',
    images: [`${siteUrl}/optimized/header-bg.webp`],
  },
}

function getExcerpt(text: string) {
  const cleanText = text.trim().replace(/\s+/g, ' ')
  const excerpt = cleanText.slice(0, 155)

  return excerpt.length < cleanText.length ? `${excerpt.trim()}...` : excerpt
}

export default function BlogPage() {
  const blogPosts = Object.entries(articlesData).map(([slug, article]) => {
    const firstParagraph = article.sections.find((block) => block.type === 'p')

    return {
      slug,
      img: article.img,
      alt: article.title,
      author: article.author,
      date: article.date,
      title: article.title,
      desc: firstParagraph?.text
        ? getExcerpt(firstParagraph.text)
        : 'مقاله‌ای آموزشی درباره آرایش دائم، مراقبت‌های قبل و بعد و انتخاب روش مناسب.',
    }
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${siteUrl}/blog#blog`,
        url: `${siteUrl}/blog`,
        name: 'وبلاگ آرایش دائم فاطمه درویشی',
        description:
          'مقالات آموزشی درباره آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم، رژ لب دائم و مراقبت‌های قبل و بعد.',
        inLanguage: 'fa-IR',
        publisher: {
          '@id': `${siteUrl}/#beautysalon`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/blog#breadcrumb`,
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
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/blog#articles`,
        name: 'فهرست مقالات آرایش دائم',
        itemListElement: blogPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteUrl}/blog/${post.slug}`,
            image: `${siteUrl}${post.img}`,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            publisher: {
              '@id': `${siteUrl}/#beautysalon`,
            },
          },
        })),
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

      <section className='bg-white py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl text-center'>
            <p className='mb-4 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700'>
              آموزش و مراقبت آرایش دائم
            </p>

            <h1 className='mb-5 text-3xl font-black leading-tight text-gray-950 md:text-5xl'>
              وبلاگ آرایش دائم، فیبروز ابرو و مراقبت‌های زیبایی
            </h1>

            <p className='mx-auto max-w-3xl text-base leading-8 text-gray-600 md:text-lg'>
              در این بخش، مقاله‌های آموزشی درباره آرایش دائم، فیبروز و
              میکروبلیدینگ ابرو، بن مژه، خط چشم دائم، رژ لب دائم، مراقبت‌های
              قبل و بعد و انتخاب روش مناسب را می‌خوانید. هدف این محتوا کمک به
              تصمیم‌گیری آگاهانه پیش از رزرو خدمات است.
            </p>
          </div>
        </div>
      </section>

      <section className='py-14 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <h2 className='text-2xl font-black text-gray-950 md:text-3xl'>
                همه مقالات آموزشی
              </h2>
              <p className='mt-3 leading-8 text-gray-600'>
                {blogPosts.length} مقاله منتشرشده درباره خدمات و مراقبت‌های
                آرایش دائم.
              </p>
            </div>

            <Link
              href='/services'
              className='inline-flex items-center justify-center rounded-full border border-emerald-700 px-6 py-3 text-sm font-bold text-emerald-700 no-underline transition duration-300 hover:bg-emerald-50'
            >
              مشاهده خدمات مرتبط
            </Link>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className='flex overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md'
              >
                <div className='flex w-full flex-col'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='block overflow-hidden no-underline'
                    aria-label={`خواندن مقاله ${post.title}`}
                  >
                    <img
                      src={post.img}
                      alt={post.alt}
                      title={post.title}
                      className='h-52 w-full object-cover transition duration-500 hover:scale-105'
                      loading='lazy'
                    />
                  </Link>

                  <div className='flex grow flex-col p-6'>
                    <div className='mb-3 flex items-center justify-between gap-3 text-xs text-gray-500'>
                      <span>نویسنده: {post.author}</span>
                      <time>{post.date}</time>
                    </div>

                    <h3 className='mb-3 text-lg font-black leading-8 text-gray-950'>
                      <Link
                        href={`/blog/${post.slug}`}
                        className='text-gray-950 no-underline transition duration-300 hover:text-emerald-800'
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className='mb-6 text-sm leading-8 text-gray-600'>
                      {post.desc}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className='mt-auto inline-flex font-bold text-emerald-700 no-underline transition duration-300 hover:text-emerald-900'
                    >
                      ادامه مطلب
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white py-14 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl rounded-3xl bg-gray-950 p-6 text-white md:p-10'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center'>
              <div>
                <h2 className='mb-4 text-2xl font-black md:text-3xl'>
                  مطالعه مقاله کافی نیست؛ قبل از انجام خدمات مشاوره بگیرید
                </h2>

                <p className='leading-8 text-gray-300'>
                  مقاله‌ها برای افزایش آگاهی مفیدند، اما انتخاب روش مناسب برای
                  ابرو، چشم یا لب باید بعد از بررسی فرم صورت، نوع پوست، سابقه
                  تاتو و انتظار شما از نتیجه انجام شود.
                </p>
              </div>

              <div className='flex flex-col gap-4'>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold text-gray-950 no-underline transition duration-300 hover:bg-gray-100'
                >
                  رزرو وقت مشاوره
                </Link>

                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-white px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  مشاهده خدمات آرایش دائم
                </Link>

                <Link
                  href='/#gallery'
                  className='inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  مشاهده نمونه‌کارها
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}