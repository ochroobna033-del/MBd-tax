import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '../langContext'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('consulting')
  const { lang } = useLang()

  const TABS = [
    { id: 'consulting', label: lang === 'en' ? 'Consulting services' : 'Зөвлөх үйлчилгээ' },
    { id: 'reporting', label: lang === 'en' ? 'Reporting services' : 'Тайлан гаргах үйлчилгээ' },
    {
      id: 'policy',
      label: lang === 'en' ? 'Accounting policy documentation' : 'Нягтлан бодох бүртгэлийн бодлогын баримт бичиг',
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20 bg-[#0d1512] min-h-screen pb-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            {lang === 'en' ? 'Our services' : 'Бидний үйлчилгээ'}
          </h1>

          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Left sidebar - service categories */}
            <nav className="space-y-3">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-4 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#10b981] text-white'
                      : 'bg-[#161b22] text-white/90 hover:bg-[#10b981]/20 border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Right content */}
            <div className="bg-[#161b22] rounded-xl border border-white/5 p-6 md:p-8 text-white/90">
              {activeTab === 'consulting' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">
                    {lang === 'en' ? 'Why do you need consulting services?' : 'Яагаад зөвлөх үйлчилгээ хэрэгтэй вэ?'}
                  </h2>
                  <p className="leading-relaxed">
                    {lang === 'en'
                      ? 'Every tax and financial decision you make can have a significant impact on your business’s growth, profitability, and long-term stability. That is why obtaining professional advice is essential to ensure accurate decisions, minimize risks, and maximize opportunities.'
                      : 'Татвар, санхүүгийн гаргаж буй шийдвэр бүр нь таны бизнесийн өсөлт, ашигт ажиллагаа, цаашдын тогтвортой байдалд шууд нөлөөлдөг. Тиймээс мэргэжлийн зөвлөгөө авах нь зөв шийдвэр гаргах, эрсдэлийг бууруулах, боломжийг зөв ашиглахад чухал ач холбогдолтой.'}
                  </p>
                  <p className="leading-relaxed">
                    {lang === 'en'
                      ? 'By receiving consulting services, you can:'
                      : 'Зөвлөх үйлчилгээ авснаар та:'}
                  </p>
    
                <p className="leading-relaxed space-y-3">
                    {lang === 'en'
                      ? 'Stay compliant with tax laws and regulations while minimizing risks, penalties, and unexpected costs.'
                      : 'Татварын хууль, дүрэм журмыг зөв хэрэгжүүлж, эрсдэл, торгууль, нэмэлт зардлаас урьдчилан сэргийлнэ.'}

                <br />

                    {lang === 'en'
                      ? 'Make confident financial decisions based on accurate information and professional expert guidance.'
                      : 'Бодит мэдээлэл, мэргэжлийн зөвлөгөөнд тулгуурлан санхүүгийн зөв шийдвэр гаргана.'}

                <br />

                    {lang === 'en'
                      ? 'Optimize your accounting processes, improve accuracy, and reduce reporting errors.'
                      : 'Нягтлан бодох бүртгэлийн үйл ажиллагаагаа сайжруулж, тайлангийн алдаа зөрчлийг бууруулна.'}

                <br />

                    {lang === 'en'
                      ? 'Identify potential tax and financial risks early and take preventive actions effectively.'
                      : 'Болзошгүй татвар, санхүүгийн эрсдэлийг урьдчилан илрүүлж, зөв арга хэмжээ авна.'}
                </p>
                </div>
              )}

              {activeTab === 'reporting' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">
                    {lang === 'en' ? 'Reporting and outsourcing services' : 'Тайлан гаргах үйлчилгээ'}
                  </h2>
                  <p className="leading-relaxed">
                    {lang === 'en'
                      ? 'Through our comprehensive accounting and financial outsourcing services, we take contractual responsibility for your organization’s finance function and prepare the following reports.'
                      : 'Бид нягтлан бодох бүртгэлийн цогц үйлчилгээ буюу санхүүгийн аутсорсингийн үйлчилгээгээрээ байгууллага, аж ахуй нэгж, хуулийн этгээд, бизнес эрхлэгчийн санхүүг гэрээгээр хариуцан дараах ажлуудыг хийж гүйцэтгэнэ.'}
                  </p>
                  <div className="overflow-x-auto">
                    <div className="space-y-6 text-sm md:text-base">
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {lang === 'en' ? '1. Financial statements' : '1. Санхүүгийн тайлан'}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>
                            {lang === 'en'
                              ? 'A. Statement of financial position'
                              : 'А. Санхүү байдлын тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'B. Detailed income statement'
                              : 'В. Орлогын дэлгэрэнгүй тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'C. Statement of changes in equity'
                              : 'С. Өмчийн өөрчлөлтийн тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'D. Statement of cash flows'
                              : 'D. Мөнгөн гүйлгээний тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'E. Notes and disclosures'
                              : 'Е. Нэмэлт тодруулга тайлан'}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {lang === 'en' ? '2. Tax returns' : '2. Татварын тайлан'}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>
                            {lang === 'en'
                              ? 'A. Corporate income tax return (TT-02)'
                              : 'А. Аж ахуйн нэгжийн орлогын албан татвар ТТ-02'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'B. Personal income tax returns (TT-11, TT-11-1, TT-12)'
                              : 'В. Хувь хүний орлогын албан татвар ТТ-11, ТТ-11-1, ТТ-12'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'C. Capital city tax'
                              : 'С. Нийслэл хотын албан татвар'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'D. Value added tax return (TT-03a)'
                              : 'D. Нэмэгдсэн өртгийн албан татвар ТТ-0За'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'E. Immovable property tax (TT-23)'
                              : 'Е. Үл хөдлөх эд хөрөнгийн албан татвар ТТ-23'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'F. Vehicle and self‑propelled machinery tax'
                              : 'F. Авто тээврийн өрөө явагч хэрэгслийн албан татвар'}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {lang === 'en' ? '3. Social insurance reports' : '3. Нийгмийн даатгалын тайлан'}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>
                            {lang === 'en'
                              ? 'A. Social insurance contribution report (ND-8)'
                              : 'А. Нийгмийн даатгалын ногдуулалтын тайлан НД-8'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'B. Social insurance payment report (ND-76)'
                              : 'В. Нийгмийн даатгалын төлөлтийн тайлан НД-76'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'C. Temporary disability benefit report (ND-10)'
                              : 'С. Хөдөлмөрийн чадвараа түр алдсаны тэтгэмж НД-10'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'D. Maternity benefit report (ND-10a)'
                              : 'D. Жирэмсэн эхийн амаржсаны тэтгэмж НД-10а'}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {lang === 'en'
                            ? '4. Reconciliation reports between accounting and tax'
                            : '4. Санхүү, татварын хоорондын зөрүү зохицуулах тайлан'}
                        </h3>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {lang === 'en' ? '5. Other reports' : '5. Бусад тайлан'}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>
                            {lang === 'en' ? 'A. General ledger' : 'А. Ерөнхий дэвтэр'}
                          </li>
                          <li>
                            {lang === 'en' ? 'B. General journal' : 'В. Ерөнхий журнал'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'C. Trial balance'
                              : 'С. Гүйлгээ шалгах баланс'}
                          </li>
                          <li>
                            {lang === 'en' ? 'D. Cash report' : 'D. Кассын тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'E. Bank account reconciliation report'
                              : 'Е. Харилцахын тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'F. Accounts payable / receivable report'
                              : 'F. Өглөг авлагын товчоо тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'G. Inventory report'
                              : 'G. Бараа материалын тайлан'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'H. Fixed assets report'
                              : 'Н. Үндсэн хөрөнгийн тайлан'}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          {lang === 'en'
                            ? '6. Other accounting‑related procedures'
                            : '6. Нягтлан бодох бүртгэлтэй холбоотой бусад ажилбарууд'}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/85 ml-2">
                          <li>
                            {lang === 'en'
                              ? 'A. Internal controls (surprise counts, control stocktakes)'
                              : 'А. Дотоод хяналт (Гэнэтийн тооллого, Хяналтын тооллого)'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'B. Confirmations and reconciliations of receivables and payables'
                              : 'В. Өглөг авлагын тулган баталгаажуулалт'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'C. Inventory counts'
                              : 'С. Бараа материалын тооллого'}
                          </li>
                          <li>
                            {lang === 'en'
                              ? 'D. Organizing and filing source documents'
                              : 'D. Баримт үдэж цэгцлэх'}
                          </li>
                        </ul>
                      </div>
                      <h4>
                        Аудит
                      </h4>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'policy' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">
                    {lang === 'en'
                      ? 'Accounting policy documentation'
                      : 'Нягтлан бодох бүртгэлийн бодлогын баримт бичиг'}
                  </h2>
                  <p className="leading-relaxed">
                    {lang === 'en'
                      ? 'Our accounting policy documentation service prepares policies fully aligned with applicable laws, standards and regulations. The purpose is to map your finance function and accounting processes to your organization’s structure and internal rules, and to reduce human‑factor risks by systematizing them.'
                      : 'Нягтлан бодох бүртгэлийн бодлогын баримт бичиг боловсруулах үйлчилгээ нь холбогдох хууль тогтоомж, стандарт, дүрэм, журам, зааварт нийцүүлсэн баримт бичгийн ҮЙЛЧИЛГЭЭНИЙ ЗОРИЛГО: Үйлчлүүлэгчийн үйл ажиллагааны онцлог, дотоод дүрэм, журам, зохион байгуулалтын бүтэцтэй уялдуулан санхүүгийн албаны үйл ажиллагааны процесс, нягтлан бодох бүртгэлийн зохион байгуулалтыг системчлэн хүний хүчин зүйлээс хамаарах эрсдэлийг бууруулахад оршино.'}
                  </p>
                  <p className="leading-relaxed">
                    {lang === 'en'
                      ? 'The accounting policy package is developed in the cycles below and can be tailored to the specific nature of your business.'
                      : 'Нягтлан бодох бүртгэлийн бодлогын бичиг баримтыг дараах циклүүдийн дагуу боловсруулагдана. Та өөрийн байгууллагын үйл ажиллагааны онцлогт тохируулан бодлогын бичиг баримтаа бэлтгүүлэх бүрэн боломжтой.'}
                  </p>
                  <p className="text-white font-medium">
                    {lang === 'en'
                      ? 'No.  Accounting policy sections / Hours'
                      : '№ НББ-н бодлогын горимууд / Зарцуулах цаг'}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/80">
                            {lang === 'en' ? 'No.' : '№'}
                          </th>
                          <th className="text-left py-2 pr-4 text-white/80">
                            {lang === 'en' ? 'Section' : 'Горим'}
                          </th>
                          <th className="text-right py-2 text-white/80">
                            {lang === 'en' ? 'Hours' : 'Цаг'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-white/85">
                        {[
                          {
                            no: 1,
                            labelMn: 'Нягтлан бодох бүртгэлийн бодлогын баримт бичгийн агуулга, нийтлэг үндэслэл',
                            labelEn:
                              'Content and general principles of the accounting policy documentation',
                            hours: 8,
                          },
                          {
                            no: 2,
                            labelMn: 'Нягтлан бодох бүртгэлийн удирдлага, зохион байгуулалт',
                            labelEn: 'Management and organization of accounting',
                            hours: 8,
                          },
                          {
                            no: 3,
                            labelMn: 'Нягтлан бодох бүртгэлийн ерөнхий бодлого, зарчим',
                            labelEn: 'General accounting policies and principles',
                            hours: 8,
                          },
                          {
                            no: 4,
                            labelMn: 'Нягтлан бодох бүртгэлийн тусгай бодлого, горим',
                            labelEn: 'Specific accounting policies and procedures',
                            hours: 8,
                          },
                          {
                            no: 5,
                            labelMn: 'Мөнгөн хөрөнгийн бүртгэл үйлдвэрлэлийн өртөг тооцолт',
                            labelEn: 'Cash accounting and production cost calculation',
                            hours: 16,
                          },
                          {
                            no: 6,
                            labelMn: 'Бараа материал',
                            labelEn: 'Inventories',
                            hours: 32,
                          },
                          {
                            no: 7,
                            labelMn: 'Авлага ба урьдчилгаа тооцоо, Өр төлбөрийн бүртгэл',
                            labelEn:
                              'Receivables, advances and liabilities accounting',
                            hours: 24,
                          },
                          {
                            no: 8,
                            labelMn: 'Бусад санхүүгийн хөрөнгө ба Урт хугацаат хөрөнгө оруулалт',
                            labelEn:
                              'Other financial assets and long‑term investments',
                            hours: 24,
                          },
                          {
                            no: 9,
                            labelMn: 'Борлуулах зорилгоор эзэмшиж буй эргэлтийн бус хөрөнгө',
                            labelEn:
                              'Non‑current assets held for sale and discontinued operations',
                            hours: 24,
                          },
                          {
                            no: 10,
                            labelMn: 'Үндсэн хөрөнгө',
                            labelEn: 'Property, plant and equipment',
                            hours: 24,
                          },
                          {
                            no: 11,
                            labelMn: 'Биет бус хөрөнгө',
                            labelEn: 'Intangible assets',
                            hours: 24,
                          },
                          {
                            no: 12,
                            labelMn: 'Хайгуул ба үнэлгээний хөрөнгө',
                            labelEn: 'Exploration and evaluation assets',
                            hours: 16,
                          },
                          {
                            no: 13,
                            labelMn: 'Хөрөнгө оруулалтын зориулалттай үл хөдлөх хөрөнгийн бүртгэл',
                            labelEn: 'Investment property accounting',
                            hours: 16,
                          },
                          {
                            no: 14,
                            labelMn: 'Эзний өмчийн бүртгэл',
                            labelEn: 'Equity accounting',
                            hours: 16,
                          },
                          {
                            no: 15,
                            labelMn: 'Гаалийн бүртгэл болон ачаа тээвэрийн бүртгэл өртгийн бүртгэл',
                            labelEn:
                              'Customs accounting, freight and cost accounting',
                            hours: 32,
                          },
                          {
                            no: 16,
                            labelMn: 'Орлогын бүртгэл',
                            labelEn: 'Revenue accounting',
                            hours: 16,
                          },
                          {
                            no: 17,
                            labelMn: 'Зардалын бүртгэл',
                            labelEn: 'Expense accounting',
                            hours: 16,
                          },
                          {
                            no: 18,
                            labelMn: 'Татварын бүртгэл',
                            labelEn: 'Tax accounting',
                            hours: 28,
                          },
                          {
                            no: 19,
                            labelMn:
                              'Нягтлан бодох бүртгэлтэй холбоотой журамууд /Мөнгөн хөрөнгө, бараа материал, үндсэн хөрөнгө/',
                            labelEn:
                              'Accounting‑related internal regulations (cash, inventories, fixed assets, etc.)',
                            hours: 32,
                          },
                          {
                            no: 20,
                            labelMn: 'Хавсралт',
                            labelEn: 'Appendices',
                            hours: 8,
                          },
                        ].map((row) => (
                          <tr key={row.no} className="border-b border-white/5">
                            <td className="py-2 pr-4">{row.no}</td>
                            <td className="py-2 pr-4">
                              {lang === 'en' ? row.labelEn : row.labelMn}
                            </td>
                            <td className="py-2 text-right">
                              {row.hours} {lang === 'en' ? 'hours' : 'цаг'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[#10b981] font-semibold pt-2">
                    {lang === 'en'
                      ? 'Total estimated hours: 480 hours'
                      : 'Нийт зарцуулах цаг: 480 цаг'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
