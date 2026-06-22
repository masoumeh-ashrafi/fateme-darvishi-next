import { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'

export const metadata: Metadata = {
  title: 'خدمات آرایش دائم در مشهد | فیبروز ابرو، بن مژه و رژ لب دائم',
  description:
    'معرفی خدمات تخصصی آرایش دائم فاطمه درویشی در مشهد؛ فیبروز و میکروبلیدینگ ابرو، شیدینگ ابرو، بن مژه، خط چشم دائم، رژ لب دائم، کانتور لب، ترمیم و اصلاح تاتو قدیمی.',
  keywords: [
    'خدمات آرایش دائم در مشهد',
    'فیبروز ابرو مشهد',
    'میکروبلیدینگ مشهد',
    'شیدینگ ابرو مشهد',
    'میکروپیگمنتیشن ابرو مشهد',
    'بن مژه دائم مشهد',
    'خط چشم دائم مشهد',
    'رژ لب دائم مشهد',
    'کانتور لب دائم مشهد',
    'اصلاح تاتو ابرو قدیمی مشهد',
    'مرکز آرایش دائم در مشهد',
    'فاطمه درویشی',
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'خدمات آرایش دائم در مشهد | فاطمه درویشی',
    description:
      'خدمات تخصصی فیبروز ابرو، میکروبلیدینگ، شیدینگ، بن مژه، خط چشم دائم، رژ لب دائم و اصلاح تاتو قدیمی در مشهد.',
    type: 'website',
    locale: 'fa_IR',
    url: `${siteUrl}/services`,
    siteName: 'فاطمه درویشی',
    images: [
      {
        url: `${siteUrl}/optimized/abroo-1000.webp`,
        width: 1200,
        height: 630,
        alt: 'خدمات آرایش دائم و فیبروز ابرو در مشهد توسط فاطمه درویشی',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات آرایش دائم در مشهد | فاطمه درویشی',
    description:
      'فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم، رژ لب دائم و اصلاح تاتو قدیمی در مشهد.',
    images: [`${siteUrl}/optimized/abroo-1000.webp`],
  },
}

const services = [
  {
    title: 'فیبروز و میکروبلیدینگ ابرو',
    description:
      'طراحی و اجرای خطوط ظریف شبیه تار مو برای افرادی که ابروهای کم‌پشت، نامتقارن یا بی‌فرم دارند. هدف این روش ایجاد ابرویی طبیعی، مرتب و هماهنگ با فرم صورت است.',
    image: '/optimized/abroo-1000.webp',
    alt: 'خدمات فیبروز و میکروبلیدینگ ابرو در مشهد',
    points: [
      'مناسب برای ابروهای کم‌پشت و نامتقارن',
      'طراحی متناسب با فرم صورت',
      'ظاهر طبیعی‌تر نسبت به تاتوهای قدیمی',
      'نیازمند ترمیم طبق شرایط پوست و ماندگاری رنگ',
    ],
  },
  {
    title: 'شیدینگ و میکروپیگمنتیشن ابرو',
    description:
      'ایجاد سایه‌ای نرم و کنترل‌شده برای پرتر دیده‌شدن ابروها. این روش برای کسانی مناسب است که نتیجه‌ای مرتب‌تر، آرایش‌شده‌تر و در عین حال متعادل می‌خواهند.',
    image: '/optimized/abroo-1001.webp',
    alt: 'شیدینگ و میکروپیگمنتیشن ابرو در مشهد',
    points: [
      'مناسب برای پرتر نشان‌دادن ابرو',
      'قابل ترکیب با تکنیک‌های تار مویی',
      'انتخاب رنگ بر اساس تناژ پوست و مو',
      'مناسب برای اصلاح فرم کلی ابرو',
    ],
  },
  {
    title: 'بن مژه و خط چشم دائم',
    description:
      'تقویت خط رویش مژه و ایجاد جلوه‌ای مرتب‌تر برای چشم‌ها، بدون نیاز به آرایش روزانه. بن مژه معمولاً نتیجه‌ای طبیعی‌تر از خط چشم ضخیم دارد.',
    image: '/optimized/1005.webp',
    alt: 'خدمات بن مژه و خط چشم دائم در مشهد',
    points: [
      'مناسب برای پرتر دیده‌شدن مژه‌ها',
      'قابل اجرا به‌صورت ظریف و طبیعی',
      'کاهش نیاز به آرایش روزانه چشم',
      'انتخاب مدل بر اساس فرم چشم و سلیقه مشتری',
    ],
  },
  {
    title: 'رژ لب دائم و کانتور لب',
    description:
      'اصلاح بی‌رنگی، نامتقارنی یا کم‌رنگی لب‌ها با انتخاب رنگ‌های طبیعی و هماهنگ با چهره. هدف این خدمت ایجاد لب‌هایی مرتب‌تر، خوش‌رنگ‌تر و متعادل‌تر است.',
    image: '/optimized/1006.webp',
    alt: 'خدمات رژ لب دائم و کانتور لب در مشهد',
    points: [
      'مناسب برای لب‌های کم‌رنگ یا بی‌فرم',
      'امکان اصلاح خط لب و تقارن ظاهری',
      'انتخاب رنگ بر اساس تناژ پوست',
      'نتیجه نهایی وابسته به ترمیم و مراقبت بعد از کار',
    ],
  },
  {
    title: 'ریموو و اصلاح تاتو قدیمی',
    description:
      'بررسی و اصلاح تاتوهای قدیمی ابرو یا رنگ‌های نامناسب، با هدف آماده‌سازی برای طراحی جدید یا بهبود ظاهر فعلی. نوع اصلاح به رنگ قبلی، عمق رنگ و شرایط پوست بستگی دارد.',
    image: '/optimized/1010.webp',
    alt: 'ریموو و اصلاح تاتو ابرو قدیمی در مشهد',
    points: [
      'بررسی وضعیت تاتو قبلی پیش از شروع کار',
      'اصلاح فرم، رنگ یا عدم تقارن در حد امکان',
      'نیازمند مشاوره قبل از تصمیم نهایی',
      'گاهی نیازمند چند جلسه، بسته به شرایط پوست',
    ],
  },
  {
    title: 'مشاوره، ترمیم و مراقبت بعد از کار',
    description:
      'قبل از انجام هر خدمت، فرم صورت، نوع پوست، رنگ‌پذیری، سابقه تاتو و انتظار مشتری بررسی می‌شود. ترمیم و مراقبت بعد از کار بخش مهمی از نتیجه نهایی است.',
    image: '/optimized/nemooneh.webp',
    alt: 'مشاوره و ترمیم آرایش دائم در مشهد',
    points: [
      'بررسی فرم صورت و نوع پوست',
      'توضیح مراقبت‌های قبل و بعد از کار',
      'زمان‌بندی ترمیم بر اساس شرایط هر فرد',
      'پرهیز از وعده قطعی درباره ماندگاری یا نتیجه یکسان برای همه',
    ],
  },
]

const processSteps = [
  {
    title: '۱. مشاوره و بررسی اولیه',
    description:
      'در ابتدا فرم صورت، نوع پوست، سابقه تاتو، حساسیت‌ها و انتظار شما بررسی می‌شود تا روش مناسب انتخاب شود.',
  },
  {
    title: '۲. طراحی فرم قبل از اجرا',
    description:
      'فرم ابرو، چشم یا لب پیش از شروع کار طراحی می‌شود تا نتیجه با چهره و سلیقه شما هماهنگ باشد.',
  },
  {
    title: '۳. اجرای تخصصی با رعایت بهداشت',
    description:
      'اجرای کار با تمرکز بر دقت، تقارن، انتخاب رنگ مناسب و رعایت اصول بهداشتی انجام می‌شود.',
  },
  {
    title: '۴. مراقبت و ترمیم',
    description:
      'نتیجه نهایی به مراقبت بعد از کار و جلسه ترمیم وابسته است. دستورالعمل‌های مراقبتی باید دقیق رعایت شوند.',
  },
]

const faqItems = [
  {
    question: 'کدام خدمت آرایش دائم برای من مناسب‌تر است؟',
    answer:
      'انتخاب روش به فرم صورت، نوع پوست، میزان کم‌پشتی، سابقه تاتو قبلی و نتیجه‌ای که می‌خواهید بستگی دارد. برای ابروهای کم‌پشت معمولاً فیبروز یا میکروبلیدینگ بررسی می‌شود؛ برای نتیجه پرتر، شیدینگ یا ترکیب تکنیک‌ها می‌تواند مناسب باشد.',
  },
  {
    question: 'آیا نتیجه آرایش دائم برای همه افراد یکسان است؟',
    answer:
      'خیر. نوع پوست، مراقبت بعد از کار، رنگ‌پذیری پوست، سبک زندگی و انجام ترمیم روی نتیجه نهایی اثر دارد. به همین دلیل قبل از کار باید مشاوره انجام شود.',
  },
  {
    question: 'آیا آرایش دائم نیاز به ترمیم دارد؟',
    answer:
      'بله. در بیشتر خدمات آرایش دائم، جلسه ترمیم برای تثبیت رنگ، اصلاح جزئیات و کامل‌تر شدن نتیجه اهمیت دارد. زمان دقیق ترمیم بعد از بررسی شرایط پوست مشخص می‌شود.',
  },
  {
    question: 'برای تاتو ابرو قدیمی هم می‌توان فیبروز انجام داد؟',
    answer:
      'همیشه نه. اگر رنگ تاتوی قبلی تیره، عمیق یا بدفرم باشد، ممکن است ابتدا نیاز به اصلاح، کاور یا ریموو باشد. تصمیم نهایی فقط بعد از دیدن وضعیت ابرو قابل اعلام است.',
  },
  {
    question: 'قبل از رزرو وقت چه اطلاعاتی باید ارسال کنم؟',
    answer:
      'بهتر است عکس واضح از ناحیه مورد نظر، سابقه تاتو یا خدمات قبلی، نوع خدمت مدنظر و هرگونه حساسیت یا بیماری پوستی را اعلام کنید تا مشاوره دقیق‌تر انجام شود.',
  },
]

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BeautySalon', 'LocalBusiness'],
        '@id': `${siteUrl}/#beautysalon`,
        name: 'مرکز زیبایی فاطمه درویشی',
        image: `${siteUrl}/optimized/abroo-1000.webp`,
        description:
          'مرکز تخصصی آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه و رژ لب دائم در مشهد.',
        url: siteUrl,
        telephone: phoneHref,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱',
          addressLocality: 'مشهد',
          addressRegion: 'خراسان رضوی',
          postalCode: 'توس ۱۶۰',
          addressCountry: 'IR',
        },
        areaServed: {
          '@type': 'City',
          name: 'مشهد',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/services#webpage`,
        url: `${siteUrl}/services`,
        name: 'خدمات آرایش دائم در مشهد',
        description:
          'معرفی خدمات آرایش دائم فاطمه درویشی شامل فیبروز ابرو، میکروبلیدینگ، شیدینگ، بن مژه، خط چشم دائم، رژ لب دائم و اصلاح تاتو قدیمی.',
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
        '@id': `${siteUrl}/services#breadcrumb`,
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
            name: 'خدمات',
            item: `${siteUrl}/services`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/services#services`,
        name: 'فهرست خدمات آرایش دائم',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: {
              '@id': `${siteUrl}/#beautysalon`,
            },
            areaServed: {
              '@type': 'City',
              name: 'مشهد',
            },
            serviceType: service.title,
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/services#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <main className='w-full bg-gray-50 min-h-screen' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <span className='inline-block mb-4 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700'>
              خدمات تخصصی آرایش دائم در مشهد
            </span>

            <h1 className='text-3xl md:text-5xl font-black text-gray-950 mb-6 leading-tight'>
              خدمات آرایش دائم، فیبروز ابرو، بن مژه و رژ لب دائم در مشهد
            </h1>

            <p className='text-base md:text-lg text-gray-600 leading-8 max-w-3xl mx-auto mb-8'>
              در مرکز زیبایی فاطمه درویشی، خدمات آرایش دائم با تمرکز بر طراحی
              طبیعی، تناسب با فرم صورت، رعایت اصول بهداشتی و مشاوره قبل از اجرا
              انجام می‌شود. اگر به دنبال ابروهای مرتب‌تر، چشم‌های گیراتر یا
              لب‌هایی خوش‌رنگ‌تر هستید، انتخاب روش مناسب باید بعد از بررسی چهره،
              نوع پوست و سابقه خدمات قبلی انجام شود.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/contact-us'
                className='inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-white font-bold no-underline transition duration-300 hover:bg-emerald-800'
              >
                رزرو وقت مشاوره
              </a>

              <a
                href='/#gallery'
                className='inline-flex items-center justify-center rounded-full border border-emerald-700 px-8 py-3 text-emerald-700 font-bold no-underline transition duration-300 hover:bg-emerald-50'
              >
                مشاهده نمونه‌کارها
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'>
              <h2 className='text-xl font-bold text-gray-950 mb-3'>
                طراحی اختصاصی
              </h2>
              <p className='text-gray-600 leading-8'>
                فرم ابرو، خط چشم یا لب نباید برای همه یکسان باشد. طراحی باید با
                فرم صورت، رنگ پوست و سلیقه شما هماهنگ شود.
              </p>
            </div>

            <div className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'>
              <h2 className='text-xl font-bold text-gray-950 mb-3'>
                تمرکز بر نتیجه طبیعی
              </h2>
              <p className='text-gray-600 leading-8'>
                هدف، ایجاد ظاهری مرتب و طبیعی است؛ نه نتیجه‌ای سنگین، مصنوعی یا
                ناسازگار با چهره.
              </p>
            </div>

            <div className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'>
              <h2 className='text-xl font-bold text-gray-950 mb-3'>
                مشاوره قبل از اجرا
              </h2>
              <p className='text-gray-600 leading-8'>
                قبل از شروع کار، وضعیت پوست، سابقه تاتو، حساسیت‌ها و انتظارات
                شما بررسی می‌شود تا تصمیم دقیق‌تری گرفته شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950 mb-4'>
              فهرست خدمات فاطمه درویشی
            </h2>
            <p className='text-gray-600 leading-8'>
              در این بخش، خدمات اصلی آرایش دائم را می‌بینید. هر خدمت باید بر
              اساس نیاز چهره، نوع پوست و نتیجه مورد انتظار انتخاب شود.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {services.map((service) => (
              <article
                key={service.title}
                className='overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm'
              >
                <div className='grid grid-cols-1 md:grid-cols-5'>
                  <div className='md:col-span-2 bg-gray-200'>
                    <img
                      src={service.image}
                      alt={service.alt}
                      title={service.alt}
                      className='h-64 md:h-full w-full object-cover'
                      loading='lazy'
                    />
                  </div>

                  <div className='md:col-span-3 p-6'>
                    <h3 className='text-xl md:text-2xl font-black text-gray-950 mb-3'>
                      {service.title}
                    </h3>

                    <p className='text-gray-600 leading-8 mb-5'>
                      {service.description}
                    </p>

                    <ul className='space-y-3'>
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className='flex gap-3 text-sm md:text-base text-gray-700 leading-7'
                        >
                          <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600' />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950 mb-4'>
              روند انجام خدمات آرایش دائم
            </h2>
            <p className='text-gray-600 leading-8'>
              نتیجه خوب فقط به اجرا وابسته نیست. مشاوره، طراحی، انتخاب تکنیک،
              مراقبت بعد از کار و ترمیم، همگی روی نتیجه نهایی اثر دارند.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {processSteps.map((step) => (
              <div
                key={step.title}
                className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'
              >
                <h3 className='text-lg font-black text-gray-950 mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-600 leading-8'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto rounded-3xl bg-emerald-50 p-6 md:p-10 border border-emerald-100'>
            <h2 className='text-2xl md:text-3xl font-black text-gray-950 mb-5'>
              انتخاب مرکز آرایش دائم در مشهد؛ چه چیزی مهم است؟
            </h2>

            <div className='space-y-5 text-gray-700 leading-9'>
              <p>
                برای انتخاب مرکز آرایش دائم در مشهد، فقط دیدن چند عکس کافی
                نیست. باید به طبیعی بودن نتیجه، تناسب فرم با چهره، رعایت بهداشت،
                کیفیت مشاوره، تجربه اجرا و توضیح دقیق مراقبت‌های بعد از کار توجه
                کنید.
              </p>

              <p>
                در خدماتی مثل فیبروز ابرو، میکروبلیدینگ، بن مژه و رژ لب دائم،
                تصمیم عجولانه می‌تواند باعث نارضایتی از فرم، رنگ یا ماندگاری
                شود. به همین دلیل، قبل از اجرای کار باید درباره سابقه تاتو قبلی،
                نوع پوست، بیماری‌های پوستی، بارداری، مصرف دارو و حساسیت‌های
                احتمالی صحبت شود.
              </p>

              <p>
                اگر تاتو قدیمی، رنگ نامناسب یا عدم تقارن قبلی دارید، ممکن است
                اجرای مستقیم روش جدید انتخاب درستی نباشد. در چنین مواردی، ابتدا
                باید امکان اصلاح، کاور یا ریموو بررسی شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950 mb-4'>
              سوالات پرتکرار درباره خدمات آرایش دائم
            </h2>
            <p className='text-gray-600 leading-8'>
              قبل از رزرو وقت، این سوالات به تصمیم‌گیری دقیق‌تر کمک می‌کنند.
            </p>
          </div>

          <div className='max-w-4xl mx-auto space-y-4'>
            {faqItems.map((item) => (
              <details
                key={item.question}
                className='group rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'
              >
                <summary className='cursor-pointer list-none text-lg font-bold text-gray-950'>
                  {item.question}
                </summary>

                <p className='mt-4 text-gray-600 leading-8'>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className='py-14 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            <a
              href='/#gallery'
              className='rounded-2xl border border-gray-100 bg-gray-50 p-6 no-underline transition duration-300 hover:border-emerald-300 hover:bg-emerald-50'
            >
              <h2 className='text-xl font-black text-gray-950 mb-3'>
                مشاهده نمونه‌کارها
              </h2>
              <p className='text-gray-600 leading-8'>
                قبل از تصمیم‌گیری، نمونه‌کارهای ابرو، چشم و لب را بررسی کنید.
              </p>
            </a>

            <a
              href='/about-us'
              className='rounded-2xl border border-gray-100 bg-gray-50 p-6 no-underline transition duration-300 hover:border-emerald-300 hover:bg-emerald-50'
            >
              <h2 className='text-xl font-black text-gray-950 mb-3'>
                درباره فاطمه درویشی
              </h2>
              <p className='text-gray-600 leading-8'>
                با تخصص، رویکرد کاری و فضای مرکز زیبایی بیشتر آشنا شوید.
              </p>
            </a>

            <a
              href='/blog'
              className='rounded-2xl border border-gray-100 bg-gray-50 p-6 no-underline transition duration-300 hover:border-emerald-300 hover:bg-emerald-50'
            >
              <h2 className='text-xl font-black text-gray-950 mb-3'>
                مطالعه مقالات آموزشی
              </h2>
              <p className='text-gray-600 leading-8'>
                درباره مراقبت، ماندگاری، ترمیم و انتخاب روش مناسب بیشتر بخوانید.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-emerald-700 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-4xl font-black mb-4'>
            برای انتخاب خدمت مناسب، اول مشاوره بگیرید
          </h2>

          <p className='text-base md:text-lg mb-8 opacity-90 leading-8 max-w-2xl mx-auto'>
            اگر نمی‌دانید فیبروز، شیدینگ، بن مژه، خط چشم دائم یا رژ لب دائم برای
            شما مناسب‌تر است، قبل از رزرو نهایی مشاوره بگیرید.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact-us'
              className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-emerald-700 font-bold no-underline transition duration-300 hover:bg-gray-100'
            >
              رزرو وقت مشاوره
            </a>

            <a
              href={`tel:${phoneHref}`}
              className='inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-white font-bold no-underline transition duration-300 hover:bg-white/10'
              aria-label={`تماس با شماره ${phoneNumber}`}
            >
              تماس: {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}