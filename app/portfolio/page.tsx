import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'

export const metadata: Metadata = {
  title: 'نمونه‌کارهای آرایش دائم در مشهد | فاطمه درویشی',
  description:
    'مشاهده نمونه‌کارهای آرایش دائم فاطمه درویشی در مشهد؛ فیبروز و میکروبلیدینگ ابرو، بن مژه، خط چشم دائم، رژ لب دائم، کانتور لب و اصلاح تاتو قدیمی.',
  keywords: [
    'نمونه کار آرایش دائم در مشهد',
    'نمونه کار فیبروز ابرو مشهد',
    'نمونه کار میکروبلیدینگ مشهد',
    'نمونه کار بن مژه مشهد',
    'نمونه کار خط چشم دائم مشهد',
    'نمونه کار رژ لب دائم مشهد',
    'فاطمه درویشی نمونه کار',
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'نمونه‌کارهای آرایش دائم در مشهد | فاطمه درویشی',
    description:
      'گالری نمونه‌کارهای واقعی آرایش دائم، فیبروز ابرو، بن مژه، خط چشم دائم و رژ لب دائم توسط فاطمه درویشی در مشهد.',
    type: 'website',
    locale: 'fa_IR',
    url: `${siteUrl}/portfolio`,
    siteName: 'فاطمه درویشی',
    images: [
      {
        url: `${siteUrl}/optimized/abroo-1000.webp`,
        width: 1200,
        height: 630,
        alt: 'نمونه کار فیبروز ابرو توسط فاطمه درویشی در مشهد',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نمونه‌کارهای آرایش دائم در مشهد | فاطمه درویشی',
    description:
      'مشاهده نمونه‌کارهای فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و رژ لب دائم در مشهد.',
    images: [`${siteUrl}/optimized/abroo-1000.webp`],
  },
}

const portfolioImages = [
  {
    src: '/optimized/abroo-1000.webp',
    alt: 'نمونه کار فیبروز ابرو نچرال در مشهد',
    category: 'ابرو',
    title: 'فیبروز ابرو نچرال',
  },
  {
    src: '/optimized/abroo-1001.webp',
    alt: 'نمونه کار میکروبلیدینگ ابرو ظریف در مشهد',
    category: 'ابرو',
    title: 'میکروبلیدینگ ابرو ظریف',
  },
  {
    src: '/optimized/abroo-1002.webp',
    alt: 'نمونه کار آرایش دائم ابرو با خطوط طبیعی در مشهد',
    category: 'ابرو',
    title: 'آرایش دائم ابرو طبیعی',
  },
  {
    src: '/optimized/abroo-1003.webp',
    alt: 'نمونه کار کانتور ابرو نچرال توسط فاطمه درویشی',
    category: 'ابرو',
    title: 'کانتور ابرو نچرال',
  },
  {
    src: '/optimized/nemooneh.webp',
    alt: 'مقایسه قبل و بعد فیبروز ابرو در مشهد',
    category: 'قبل و بعد',
    title: 'قبل و بعد فیبروز ابرو',
  },
  {
    src: '/optimized/1004.webp',
    alt: 'نتیجه میکروبلیدینگ ابرو طبیعی و متقارن در مشهد',
    category: 'ابرو',
    title: 'میکروبلیدینگ طبیعی و متقارن',
  },
  {
    src: '/optimized/1005.webp',
    alt: 'نمونه کار خط چشم دائم و بن مژه در مشهد',
    category: 'چشم',
    title: 'خط چشم دائم و بن مژه',
  },
  {
    src: '/optimized/1006.webp',
    alt: 'نمونه کار رژ لب دائم و کانتور لب در مشهد',
    category: 'لب',
    title: 'رژ لب دائم و کانتور لب',
  },
  {
    src: '/optimized/1008.webp',
    alt: 'نمونه کار میکروپیگمنتیشن و آرایش دائم لب',
    category: 'لب',
    title: 'میکروپیگمنتیشن لب',
  },
  {
    src: '/optimized/1009.webp',
    alt: 'نمونه کار فیبروز ابرو طبیعی با خطوط ظریف',
    category: 'ابرو',
    title: 'فیبروز ابرو با خطوط ظریف',
  },
  {
    src: '/optimized/1010.webp',
    alt: 'نمونه کار ریموو و اصلاح تاتو ابرو قدیمی',
    category: 'اصلاح',
    title: 'اصلاح تاتو ابرو قدیمی',
  },
  {
    src: '/optimized/1011.webp',
    alt: 'نمونه کار بن مژه دائم ظریف در مشهد',
    category: 'چشم',
    title: 'بن مژه دائم ظریف',
  },
  {
    src: '/optimized/1012.webp',
    alt: 'نمونه کار شیدینگ لب دائم طبیعی',
    category: 'لب',
    title: 'شیدینگ لب دائم طبیعی',
  },
  {
    src: '/optimized/1013.webp',
    alt: 'نمونه کار کامل آرایش دائم ابرو، چشم و لب',
    category: 'کامل',
    title: 'آرایش دائم کامل',
  },
  {
    src: '/optimized/1014.webp',
    alt: 'نمونه کار ابروهای پر و نچرال با فیبروز ابرو',
    category: 'ابرو',
    title: 'ابروهای پر و نچرال',
  },
  {
    src: '/optimized/1015.webp',
    alt: 'نمونه کار خط چشم دائم ظریف',
    category: 'چشم',
    title: 'خط چشم دائم ظریف',
  },
  {
    src: '/optimized/1016.webp',
    alt: 'نمونه کار رژ لب دائم با رنگ طبیعی',
    category: 'لب',
    title: 'رژ لب دائم طبیعی',
  },
  {
    src: '/optimized/137.webp',
    alt: 'نمونه کار میکروبلیدینگ ابرو متقارن',
    category: 'ابرو',
    title: 'میکروبلیدینگ ابرو متقارن',
  },
  {
    src: '/optimized/138.webp',
    alt: 'نمونه کار فیبروز ابرو با حالت طبیعی',
    category: 'ابرو',
    title: 'فیبروز ابرو طبیعی',
  },
  {
    src: '/optimized/139.webp',
    alt: 'نمونه کار بن مژه دائم برای چشم‌های درخشان‌تر',
    category: 'چشم',
    title: 'بن مژه دائم',
  },
  {
    src: '/optimized/140.webp',
    alt: 'نمونه کار آرایش دائم کامل در مشهد',
    category: 'کامل',
    title: 'آرایش دائم کامل',
  },
  {
    src: '/optimized/141.webp',
    alt: 'نمونه کار فیبروز ابرو پر و برجسته',
    category: 'ابرو',
    title: 'فیبروز ابرو پرتر',
  },
]

const categories = ['همه', 'ابرو', 'چشم', 'لب', 'قبل و بعد', 'اصلاح', 'کامل']

export default function PortfolioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/portfolio#webpage`,
        url: `${siteUrl}/portfolio`,
        name: 'نمونه‌کارهای آرایش دائم فاطمه درویشی',
        description:
          'گالری نمونه‌کارهای آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم، رژ لب دائم و اصلاح تاتو قدیمی در مشهد.',
        inLanguage: 'fa-IR',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/portfolio#breadcrumb`,
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
            name: 'نمونه‌کارها',
            item: `${siteUrl}/portfolio`,
          },
        ],
      },
      {
        '@type': 'ImageGallery',
        '@id': `${siteUrl}/portfolio#gallery`,
        name: 'گالری نمونه‌کارهای آرایش دائم',
        image: portfolioImages.map((item) => ({
          '@type': 'ImageObject',
          url: `${siteUrl}${item.src}`,
          caption: item.alt,
          name: item.title,
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
              گالری نمونه‌کارهای واقعی
            </p>

            <h1 className='mb-5 text-3xl font-black leading-tight text-gray-950 md:text-5xl'>
              نمونه‌کارهای آرایش دائم در مشهد
            </h1>

            <p className='mx-auto max-w-3xl text-base leading-8 text-gray-600 md:text-lg'>
              در این صفحه می‌توانید نمونه‌کارهای خدمات آرایش دائم فاطمه درویشی
              را بررسی کنید؛ از فیبروز و میکروبلیدینگ ابرو تا بن مژه، خط چشم
              دائم، رژ لب دائم، کانتور لب و اصلاح تاتو قدیمی. دیدن نمونه‌کارها
              قبل از رزرو کمک می‌کند با سبک اجرا، طبیعی بودن نتیجه و نوع خدمات
              بهتر آشنا شوید.
            </p>

            <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
              <Link
                href='/services'
                className='inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-emerald-800'
              >
                بررسی خدمات
              </Link>

              <Link
                href='/contact-us'
                className='inline-flex items-center justify-center rounded-full border border-emerald-700 px-8 py-3 font-bold text-emerald-700 no-underline transition duration-300 hover:bg-emerald-50'
              >
                رزرو وقت مشاوره
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto flex max-w-5xl flex-wrap justify-center gap-3'>
            {categories.map((category) => (
              <span
                key={category}
                className='rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-gray-700'
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className='pb-16 md:pb-24'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {portfolioImages.map((item) => (
              <figure
                key={`${item.src}-${item.title}`}
                className='group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md'
              >
                <div className='overflow-hidden bg-gray-100'>
                  <img
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    className='h-72 w-full object-cover transition duration-500 group-hover:scale-105'
                    loading='lazy'
                  />
                </div>

                <figcaption className='p-5'>
                  <div className='mb-3 flex items-center justify-between gap-3'>
                    <h2 className='text-lg font-black text-gray-950'>
                      {item.title}
                    </h2>
                    <span className='shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700'>
                      {item.category}
                    </span>
                  </div>

                  <p className='text-sm leading-7 text-gray-600'>{item.alt}</p>
                </figcaption>
              </figure>
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
                  نمونه‌کارها را دیدید؟ حالا روش مناسب را انتخاب کنید
                </h2>

                <p className='leading-8 text-gray-300'>
                  انتخاب بین فیبروز، میکروبلیدینگ، شیدینگ، بن مژه یا رژ لب دائم
                  باید بعد از بررسی فرم صورت، نوع پوست، سابقه تاتو و انتظار شما
                  از نتیجه انجام شود.
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
                  مشاهده خدمات کامل
                </Link>

                <Link
                  href='/blog'
                  className='inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  مطالعه مقالات آموزشی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}