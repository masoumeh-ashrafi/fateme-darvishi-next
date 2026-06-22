import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'
const emailAddress = 'FatemeDarvishi71@gmail.com'

export const metadata: Metadata = {
  title: 'درباره فاطمه درویشی | متخصص آرایش دائم در مشهد',
  description:
    'آشنایی با فاطمه درویشی، متخصص خدمات آرایش دائم در مشهد؛ رویکرد کاری، خدمات تخصصی، اصول مشاوره، بهداشت، مدارک آموزشی و راه‌های ارتباطی.',
  keywords: [
    'درباره فاطمه درویشی',
    'فاطمه درویشی مشهد',
    'متخصص آرایش دائم در مشهد',
    'متخصص فیبروز ابرو مشهد',
    'میکروبلیدینگ مشهد',
    'مرکز زیبایی فاطمه درویشی',
  ],
  alternates: {
    canonical: `${siteUrl}/about-us`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'درباره فاطمه درویشی | متخصص آرایش دائم در مشهد',
    description:
      'با رویکرد کاری، تخصص‌ها، مدارک آموزشی و مسیر مشاوره و رزرو خدمات آرایش دائم فاطمه درویشی در مشهد آشنا شوید.',
    type: 'profile',
    locale: 'fa_IR',
    url: `${siteUrl}/about-us`,
    siteName: 'فاطمه درویشی',
    images: [
      {
        url: `${siteUrl}/optimized/me.webp`,
        width: 1200,
        height: 630,
        alt: 'فاطمه درویشی متخصص آرایش دائم در مشهد',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'درباره فاطمه درویشی | متخصص آرایش دائم در مشهد',
    description:
      'آشنایی با تخصص، رویکرد کاری، مدارک آموزشی و راه‌های ارتباطی فاطمه درویشی در مشهد.',
    images: [`${siteUrl}/optimized/me.webp`],
  },
}

const expertiseItems = [
  {
    title: 'فیبروز و میکروبلیدینگ ابرو',
    description:
      'طراحی فرم ابرو با هدف ایجاد ظاهر طبیعی‌تر، مرتب‌تر و هماهنگ با فرم صورت.',
  },
  {
    title: 'بن مژه و خط چشم دائم',
    description:
      'تقویت خط رویش مژه و ایجاد جلوه‌ای مرتب‌تر برای چشم‌ها، با انتخاب مدل متناسب با فرم چشم.',
  },
  {
    title: 'رژ لب دائم و کانتور لب',
    description:
      'اصلاح رنگ، فرم و تقارن ظاهری لب‌ها با انتخاب رنگ‌های طبیعی‌تر و هماهنگ با چهره.',
  },
  {
    title: 'ترمیم و اصلاح کار قبلی',
    description:
      'بررسی تاتو یا آرایش دائم قبلی و تصمیم‌گیری درباره امکان اصلاح، ترمیم، کاور یا ریموو.',
  },
]

const principles = [
  'طراحی اختصاصی بر اساس فرم صورت، رنگ پوست و سلیقه مراجعه‌کننده',
  'مشاوره قبل از اجرا برای بررسی نوع پوست، سابقه تاتو، حساسیت و انتظار از نتیجه',
  'پرهیز از وعده‌های قطعی درباره ماندگاری یا نتیجه یکسان برای همه افراد',
  'توجه به مراقبت‌های قبل و بعد از کار و توضیح دقیق مراحل ترمیم',
  'تمرکز بر نتیجه طبیعی، متعادل و قابل استفاده در چهره روزمره',
]

export default function AboutUsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BeautySalon', 'LocalBusiness'],
        '@id': `${siteUrl}/#beautysalon`,
        name: 'مرکز زیبایی فاطمه درویشی',
        url: siteUrl,
        image: `${siteUrl}/optimized/me.webp`,
        description:
          'مرکز تخصصی آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و رژ لب دائم در مشهد.',
        telephone: phoneHref,
        email: emailAddress,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰',
          addressLocality: 'مشهد',
          addressRegion: 'خراسان رضوی',
          addressCountry: 'IR',
        },
        areaServed: {
          '@type': 'City',
          name: 'مشهد',
        },
      },
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about-us#webpage`,
        url: `${siteUrl}/about-us`,
        name: 'درباره فاطمه درویشی',
        description:
          'صفحه معرفی فاطمه درویشی، متخصص خدمات آرایش دائم در مشهد؛ شامل رویکرد کاری، تخصص‌ها، مدارک آموزشی و راه‌های ارتباطی.',
        inLanguage: 'fa-IR',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#beautysalon`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/about-us#breadcrumb`,
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
            name: 'درباره فاطمه درویشی',
            item: `${siteUrl}/about-us`,
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

      <section className='bg-white py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2'>
            <div>
              <p className='mb-4 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700'>
                متخصص آرایش دائم در مشهد
              </p>

              <h1 className='mb-6 text-3xl font-black leading-tight text-gray-950 md:text-5xl'>
                درباره فاطمه درویشی
              </h1>

              <div className='space-y-5 text-gray-700 leading-9'>
                <p>
                  من، فاطمه درویشی، در حوزه خدمات آرایش دائم فعالیت می‌کنم و
                  تمرکز اصلی من بر طراحی طبیعی، هماهنگی با فرم صورت و انتخاب روش
                  مناسب برای هر مراجعه‌کننده است. در خدماتی مثل فیبروز ابرو،
                  میکروبلیدینگ، بن مژه و رژ لب دائم، نتیجه خوب فقط به اجرای
                  تکنیک وابسته نیست؛ مشاوره، طراحی، انتخاب رنگ، مراقبت بعد از
                  کار و ترمیم هم نقش جدی دارند.
                </p>

                <p>
                  هدف من این است که پیش از انجام هر خدمت، شرایط پوست، سابقه
                  تاتو یا آرایش دائم قبلی، حساسیت‌ها و انتظار شما از نتیجه بررسی
                  شود تا تصمیم دقیق‌تری گرفته شود. به همین دلیل، مشاوره قبل از
                  اجرا بخش مهمی از روند کاری من است.
                </p>
              </div>

              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-emerald-800'
                >
                  رزرو وقت مشاوره
                </Link>

                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-emerald-700 px-8 py-3 font-bold text-emerald-700 no-underline transition duration-300 hover:bg-emerald-50'
                >
                  مشاهده خدمات
                </Link>
              </div>
            </div>

            <div className='overflow-hidden rounded-3xl border border-gray-100 bg-gray-100 shadow-sm'>
              <img
                src='/optimized/me.webp'
                alt='فاطمه درویشی متخصص آرایش دائم در مشهد'
                title='فاطمه درویشی متخصص آرایش دائم در مشهد'
                className='h-full min-h-96 w-full object-cover'
                loading='eager'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='mb-4 text-2xl font-black text-gray-950 md:text-4xl'>
              رویکرد کاری من
            </h2>
            <p className='leading-8 text-gray-600'>
              در آرایش دائم، طراحی یکسان برای همه افراد نتیجه حرفه‌ای نمی‌دهد.
              فرم چهره، نوع پوست، رنگ‌پذیری، سابقه خدمات قبلی و سبک مورد انتظار
              باید قبل از اجرا بررسی شوند.
            </p>
          </div>

          <div className='mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
            {principles.map((item) => (
              <div
                key={item}
                className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm'
              >
                <p className='leading-8 text-gray-700'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white py-16 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='mb-4 text-2xl font-black text-gray-950 md:text-4xl'>
              حوزه‌های تخصصی خدمات
            </h2>
            <p className='leading-8 text-gray-600'>
              خدمات اصلی بر اساس نیاز چهره، نوع پوست و نتیجه مورد انتظار انتخاب
              می‌شوند. توضیحات کامل هر خدمت را در صفحه خدمات بخوانید.
            </p>
          </div>

          <div className='mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
            {expertiseItems.map((item) => (
              <article
                key={item.title}
                className='rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm'
              >
                <h3 className='mb-3 text-xl font-black text-gray-950'>
                  {item.title}
                </h3>
                <p className='mb-5 leading-8 text-gray-600'>
                  {item.description}
                </p>
                <Link
                  href='/services'
                  className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                >
                  توضیحات کامل در صفحه خدمات
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl rounded-3xl border border-emerald-100 bg-emerald-50 p-6 md:p-10'>
            <h2 className='mb-5 text-2xl font-black text-gray-950 md:text-3xl'>
              مشاوره قبل از انجام خدمات چرا مهم است؟
            </h2>

            <div className='space-y-5 leading-9 text-gray-700'>
              <p>
                در خدماتی مثل فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و
                رژ لب دائم، نتیجه نهایی برای همه افراد یکسان نیست. نوع پوست،
                رنگ‌پذیری، مراقبت بعد از کار، ترمیم و حتی سبک زندگی روی نتیجه
                اثر می‌گذارد.
              </p>

              <p>
                اگر تاتو قدیمی، تغییر رنگ، عدم تقارن، حساسیت پوستی، بارداری،
                شیردهی یا مصرف داروی خاص دارید، باید قبل از رزرو نهایی اعلام
                شود. در بعضی شرایط ممکن است انجام خدمت به زمان دیگری موکول شود
                یا ابتدا نیاز به اصلاح و بررسی دقیق‌تر باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-16 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='mb-4 text-2xl font-black text-gray-950 md:text-4xl'>
              مدارک و گواهینامه‌های آموزشی
            </h2>
            <p className='leading-8 text-gray-600'>
              تصاویر زیر مربوط به مدارک و گواهینامه‌های ارائه‌شده در سایت است.
              برای پرهیز از ادعای غیرقابل بررسی، عنوان دقیق صادرکننده یا شماره
              مدرک فقط در صورت تأیید قطعی باید در متن سایت اضافه شود.
            </p>
          </div>

          <div className='mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2'>
            <figure className='rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm'>
              <img
                src='/optimized/my.webp'
                alt='تصویر یکی از مدارک آموزشی فاطمه درویشی'
                title='مدرک آموزشی فاطمه درویشی'
                className='mb-4 w-full rounded-xl object-cover'
                loading='lazy'
              />
              <figcaption className='text-center text-sm font-semibold text-gray-600'>
                مدرک آموزشی مرتبط با خدمات زیبایی
              </figcaption>
            </figure>

            <figure className='rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm'>
              <img
                src='/optimized/degree.webp'
                alt='تصویر گواهینامه آموزشی فاطمه درویشی در حوزه آرایش دائم'
                title='گواهینامه آموزشی فاطمه درویشی'
                className='mb-4 w-full rounded-xl object-cover'
                loading='lazy'
              />
              <figcaption className='text-center text-sm font-semibold text-gray-600'>
                گواهینامه آموزشی مرتبط با آرایش دائم
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-5xl rounded-3xl bg-gray-950 p-6 text-white md:p-10'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center'>
              <div>
                <h2 className='mb-4 text-2xl font-black md:text-3xl'>
                  برای انتخاب روش مناسب، مشاوره بگیرید
                </h2>
                <p className='leading-8 text-gray-300'>
                  اگر نمی‌دانید فیبروز ابرو، شیدینگ، بن مژه، خط چشم دائم، رژ لب
                  دائم یا اصلاح کار قبلی برای شما مناسب‌تر است، قبل از رزرو
                  نهایی مشاوره بگیرید.
                </p>
              </div>

              <div className='flex flex-col gap-4'>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold text-gray-950 no-underline transition duration-300 hover:bg-gray-100'
                >
                  تماس و رزرو وقت
                </Link>

                <Link
                  href='/#gallery'
                  className='inline-flex items-center justify-center rounded-full border border-white px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  مشاهده نمونه‌کارها
                </Link>

                <a
                  href={`tel:${phoneHref}`}
                  className='inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-white/10'
                >
                  تماس مستقیم: {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          <div className='mx-auto mt-10 max-w-5xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8'>
            <h2 className='mb-4 text-xl font-black text-gray-950'>
              راه‌های ارتباطی
            </h2>

            <div className='grid grid-cols-1 gap-4 text-sm text-gray-700 md:grid-cols-2'>
              <p className='m-0 leading-8'>
                آدرس: مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰
              </p>

              <p className='m-0 leading-8'>
                تلفن:{' '}
                <a
                  href={`tel:${phoneHref}`}
                  className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                >
                  {phoneNumber}
                </a>
              </p>

              <p className='m-0 leading-8'>
                ایمیل:{' '}
                <a
                  href={`mailto:${emailAddress}`}
                  className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                >
                  {emailAddress}
                </a>
              </p>

              <div className='flex flex-wrap gap-4'>
                <a
                  href='https://t.me/fatemehdarvishpour2020'
                  target='_blank'
                  rel='noreferrer'
                  className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                >
                  تلگرام
                </a>

                <a
                  href='https://www.instagram.com/fatemedarvish.ir?igsh=Z3BidGZyc24zNW5r'
                  target='_blank'
                  rel='noreferrer'
                  className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                >
                  اینستاگرام
                </a>

                <Link
                  href='/blog'
                  className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                >
                  مقالات آموزشی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}