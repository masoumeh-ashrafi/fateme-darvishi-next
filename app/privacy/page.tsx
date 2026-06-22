// app/privacy/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'
const emailAddress = 'FatemeDarvishi71@gmail.com'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'

export const metadata: Metadata = {
  title: 'سیاست حفظ حریم خصوصی | فاطمه درویشی',
  description:
    'سیاست حفظ حریم خصوصی وب‌سایت فاطمه درویشی درباره نحوه دریافت، استفاده و نگهداری اطلاعات فرم‌های تماس، رزرو، مشاوره و تصاویر نمونه‌کارها.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'سیاست حفظ حریم خصوصی | فاطمه درویشی',
    description:
      'توضیح نحوه استفاده از اطلاعات تماس، فرم‌های رزرو، مشاوره و تصاویر نمونه‌کارها در وب‌سایت فاطمه درویشی.',
    type: 'website',
    locale: 'fa_IR',
    url: `${siteUrl}/privacy`,
    siteName: 'فاطمه درویشی',
  },
}

export default function PrivacyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'PrivacyPolicy',
        '@id': `${siteUrl}/privacy#privacy-policy`,
        url: `${siteUrl}/privacy`,
        name: 'سیاست حفظ حریم خصوصی فاطمه درویشی',
        description:
          'سیاست حفظ حریم خصوصی وب‌سایت فاطمه درویشی درباره اطلاعات فرم‌های تماس، رزرو، مشاوره و تصاویر نمونه‌کارها.',
        inLanguage: 'fa-IR',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/privacy#breadcrumb`,
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
            name: 'سیاست حفظ حریم خصوصی',
            item: `${siteUrl}/privacy`,
          },
        ],
      },
    ],
  }

  return (
    <main className='w-full bg-gray-50 py-16 md:py-20' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className='container mx-auto px-4'>
        <article className='mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-10'>
          <header className='mb-10 border-b border-gray-100 pb-6'>
            <p className='mb-4 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700'>
              اطلاعات کاربران و مراجعین
            </p>

            <h1 className='mb-4 text-3xl font-black leading-tight text-gray-950 md:text-4xl'>
              سیاست حفظ حریم خصوصی
            </h1>

            <p className='leading-8 text-gray-600'>
              این صفحه توضیح می‌دهد که وب‌سایت فاطمه درویشی چه اطلاعاتی را از
              طریق فرم‌های تماس، رزرو و مشاوره دریافت می‌کند و این اطلاعات با چه
              هدفی استفاده می‌شوند. هدف این سیاست، شفافیت بیشتر و ایجاد اعتماد
              در ارتباط با خدمات آرایش دائم در مشهد است.
            </p>
          </header>

          <div className='space-y-8 text-gray-700'>
            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۱. چه اطلاعاتی دریافت می‌شود؟
              </h2>

              <p className='leading-9'>
                زمانی که از فرم‌های سایت استفاده می‌کنید، ممکن است اطلاعاتی مانند
                نام، شماره تماس، ایمیل، نوع خدمت مورد نظر و توضیحات مرتبط با
                درخواست مشاوره یا رزرو دریافت شود. اگر درباره سابقه تاتو قبلی،
                حساسیت پوستی، مصرف دارو یا شرایط خاص توضیحی ارسال کنید، این
                اطلاعات فقط برای بررسی بهتر امکان انجام خدمت و هماهنگی مشاوره
                استفاده می‌شود.
              </p>
            </section>

            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۲. اطلاعات با چه هدفی استفاده می‌شود؟
              </h2>

              <p className='leading-9'>
                اطلاعات ارسالی شما برای پاسخ‌گویی، هماهنگی زمان مشاوره یا رزرو،
                بررسی اولیه شرایط خدمت، پیگیری درخواست‌ها و بهبود کیفیت ارتباط با
                مراجعین استفاده می‌شود. این اطلاعات برای ارسال پیام‌های نامرتبط یا
                تبلیغات بدون ارتباط با درخواست شما استفاده نخواهد شد.
              </p>
            </section>

            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۳. نگهداری و محرمانگی اطلاعات
              </h2>

              <p className='leading-9'>
                اطلاعاتی که از طریق فرم‌ها یا راه‌های ارتباطی سایت ارسال می‌شود،
                فقط در حد نیاز برای پاسخ‌گویی، پیگیری و هماهنگی خدمات نگهداری
                می‌شود. دسترسی به این اطلاعات محدود است و بدون دلیل مرتبط با
                ارائه خدمات، در اختیار افراد یا مجموعه‌های دیگر قرار نمی‌گیرد.
              </p>
            </section>

            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۴. عکس‌ها و نمونه‌کارها
              </h2>

              <p className='leading-9'>
                تصاویر قبل و بعد یا نمونه‌کارهای مربوط به خدماتی مانند فیبروز
                ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم یا رژ لب دائم فقط در
                صورتی برای سایت، شبکه‌های اجتماعی یا نمونه‌کارها استفاده می‌شود
                که رضایت لازم از مراجعه‌کننده دریافت شده باشد. در صورت انتشار
                تصویر، تلاش می‌شود اطلاعات هویتی غیرضروری نمایش داده نشود.
              </p>
            </section>

            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۵. اشتراک‌گذاری اطلاعات با اشخاص دیگر
              </h2>

              <p className='leading-9'>
                اطلاعات شخصی شما فروخته نمی‌شود و برای استفاده تبلیغاتی در اختیار
                اشخاص ثالث قرار نمی‌گیرد. تنها در موارد ضروری برای پاسخ‌گویی،
                پیگیری درخواست، الزامات قانونی یا حفظ امنیت خدمات، ممکن است
                اطلاعات در حد لازم بررسی شود.
              </p>
            </section>

            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۶. درخواست اصلاح یا حذف اطلاعات
              </h2>

              <p className='leading-9'>
                اگر اطلاعاتی را از طریق سایت ارسال کرده‌اید و می‌خواهید اصلاح یا
                حذف شود، می‌توانید از راه‌های ارتباطی ثبت‌شده در سایت درخواست خود
                را اعلام کنید. درخواست‌ها در حد امکان و با توجه به نیازهای
                پیگیری خدمات بررسی می‌شوند.
              </p>
            </section>

            <section>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                ۷. لینک‌ها و سرویس‌های بیرونی
              </h2>

              <p className='leading-9'>
                ممکن است در سایت لینک‌هایی به شبکه‌های اجتماعی، نقشه، فرم‌های
                تماس یا سرویس‌های بیرونی وجود داشته باشد. استفاده از این سرویس‌ها
                تابع سیاست‌ها و شرایط همان سرویس‌هاست و بهتر است قبل از ارسال
                اطلاعات، شرایط آن‌ها را نیز بررسی کنید.
              </p>
            </section>

            <section className='rounded-2xl border border-emerald-100 bg-emerald-50 p-5'>
              <h2 className='mb-3 text-xl font-black text-gray-950'>
                راه ارتباطی برای سوال درباره حریم خصوصی
              </h2>

              <div className='space-y-3 text-sm leading-8 text-gray-700'>
                <p>
                  تلفن:{' '}
                  <a
                    href={`tel:${phoneHref}`}
                    className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                  >
                    {phoneNumber}
                  </a>
                </p>

                <p>
                  ایمیل:{' '}
                  <a
                    href={`mailto:${emailAddress}`}
                    className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
                  >
                    {emailAddress}
                  </a>
                </p>
              </div>
            </section>
          </div>

          <footer className='mt-10 flex flex-col gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between'>
            <p className='m-0'>آخرین به‌روزرسانی: ۱۴۰۵</p>

            <div className='flex flex-wrap gap-4'>
              <Link
                href='/terms'
                className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
              >
                شرایط و ضوابط
              </Link>

              <Link
                href='/contact-us'
                className='font-bold text-emerald-700 no-underline hover:text-emerald-900'
              >
                تماس با ما
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}