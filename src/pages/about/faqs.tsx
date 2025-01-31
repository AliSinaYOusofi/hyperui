import Head from 'next/head'

import { faqItems } from '@/data/faqs'
import { FaqItem } from '@/interface/global'

import Banner from '@/components/HeroBanner'
import Container from '@/components/Container'

function Faqs() {
  const schemaData = {
    '@context': 'http://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      faqItems.map((faqItem: FaqItem) => {
        return {
          '@type': 'Question',
          name: faqItem.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faqItem.answer,
          },
        }
      }),
    ],
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>FAQs | HyperUI</title>
        <meta
          name="description"
          content="Get your questions about HyperUI answered with these FAQs."
          key="description"
        />
        <meta property="og:title" content="FAQs | HyperUI" key="og:title" />
        <meta
          property="og:description"
          content="Get your questions about HyperUI answered with these FAQs."
          key="og:description"
        />
        <meta
          name="twitter:title"
          content="FAQs | HyperUI"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="Get your questions about HyperUI answered with these FAQs."
          key="twitter:description"
        />
      </Head>

      <Banner title="FAQs" subtitle="Quick Info for HyperUI">
        Got questions? I have answers. Hopefully these answer any questions you
        have about HyperUI. If not, then please reach out on GitHub.
      </Banner>

      <Container>
        <ul className="grid gap-px bg-gray-100 dark:bg-gray-800 sm:grid-cols-2">
          {faqItems.map((faqItem: FaqItem) => {
            return (
              <li
                className="bg-white py-4 dark:bg-gray-900 lg:py-8 lg:odd:pe-8 lg:even:ps-8"
                key={faqItem.question}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faqItem.question}
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {faqItem.answer}
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}

export default Faqs
