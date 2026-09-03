import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '../langContext'

export default function AboutPage() {
  const { lang } = useLang()

  const isEnglish = lang === 'en'

  return (
    <>
      <Header />

      <main className="pt-20 bg-[#0d1512] min-h-screen text-white">

        {/* ==================== ABOUT US ==================== */}
        <section
          id="bidni-tuhai"
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                {isEnglish ? 'About Us' : 'Бидний тухай'}
              </h1>

              <div className="w-20 h-1 bg-[#10b981] mx-auto rounded-full mb-6" />

              <h2 className="text-2xl sm:text-3xl font-bold text-[#10b981]">
                {isEnglish
                  ? 'MBD Tax Tactic TMZ LLC'
                  : 'ЭМ БИ ДИ ТАКС ТАКТИК ТМЗ ХХК'}
              </h2>
            </div>

            {/* Company introduction */}
            <div className="space-y-6">
              <p className="text-white/85 text-base md:text-lg leading-8">
                {isEnglish
                  ? 'MBD Tax Tactic TMZ LLC was established in 2021 with the goal of providing professional and comprehensive services in accounting, taxation, finance, and legal consulting. Our services include accounting training from beginner to professional level, certified tax advisory services, financial and tax reporting support, legal consulting based on financial statements, and outsourced accounting services.'
                  : 'ЭМ БИ ДИ ТАКС ТАКТИК ТМЗ ХХК нь 2021 онд нягтлан бодох бүртгэл, татвар, санхүү болон хууль зүйн зөвлөх үйлчилгээг мэргэжлийн түвшинд, цогцоор нь хүргэх зорилгоор байгуулагдсан.'}
              </p>

              <p className="text-white/85 text-base md:text-lg leading-8">
                {isEnglish
                  ? 'We provide accounting training from beginner to professional level, certified tax advisory services, financial and tax reporting support, legal consulting based on financial statements, and outsourced accounting services.'
                  : 'Бид нягтлан бодох бүртгэлийн анхан шатнаас мэргэжил дээшлүүлэх түвшин хүртэлх сургалт, татварын мэргэшсэн зөвлөх үйлчилгээ, санхүү болон татварын тайлан гаргах зөвлөгөө, санхүүгийн тайланд үндэслэсэн компанийн хууль зүйн зөвлөгөө болон гэрээт нягтлан бодогчийн үйлчилгээг үзүүлэн ажиллаж байна.'}
              </p>

              <p className="text-white/85 text-base md:text-lg leading-8">
                {isEnglish
                  ? 'We currently work with more than 150 organizations. More than 300 learners have successfully completed our beginner accounting programs, while more than 150 learners have participated in our professional development programs through online and classroom training. We continue to expand our activities by preparing qualified accounting and tax professionals.'
                  : 'Одоогоор бид 150 гаруй байгууллагатай хамтран ажиллаж байна. Мөн 300 гаруй суралцагч анхан шатны нягтлан бодох бүртгэлийн хөтөлбөрийг амжилттай төгсөж, салбартаа ажиллаж байна. Мэргэжил дээшлүүлэх хөтөлбөрт 150 гаруй суралцагч онлайн болон танхимын сургалтад хамрагдан, мэргэжлийн ур чадвараа дээшлүүлсэн.'}
              </p>

              <p className="text-white/85 text-base md:text-lg leading-8">
                {isEnglish
                  ? 'We also maintain close cooperation with Erdmiiin Undarga Consulting Center and the auditing firm MBD RD Star Tax.'
                  : 'Бид “ЭРДМИЙН УНДАРГА ЗӨВЛӨХ ҮЙЛЧИЛГЭЭНИЙ ТӨВ” болон аудитын “ЭМ БИ ДИ АР ДИ СТАР ТАКС” байгууллагуудтай нягт хамтран ажиллаж, харилцагчдад цогц мэргэжлийн үйлчилгээ хүргэхийг зорин ажилладаг.'}
              </p>
            </div>

            {/* ==================== CURRENT TEAM ==================== */}
            <div className="mt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                {isEnglish ? 'Our Current Team' : 'Манай хамт олон'}
              </h3>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                <ul className="text-white/85 text-base md:text-lg leading-8 space-y-3">
                  {isEnglish ? (
                    <>
                      <li>
                        • One certified accountant and certified tax advisor
                      </li>
                      <li>
                        • Two certified tax advisors
                      </li>
                      <li>
                        • Seven accountants
                      </li>
                      <li>
                        • One legal advisor
                      </li>
                      <li>
                        • One marketing advisor
                      </li>
                      <li className="pt-2 text-[#10b981] font-semibold">
                        • 12 professionals in total
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        • Мэргэшсэн нягтлан бодогч, татварын мэргэшсэн зөвлөх – 1
                      </li>
                      <li>
                        • Татварын мэргэшсэн зөвлөх – 2
                      </li>
                      <li>
                        • Нягтлан бодогч – 7
                      </li>
                      <li>
                        • Хуулийн зөвлөх – 1
                      </li>
                      <li>
                        • Маркетингийн зөвлөх – 1
                      </li>
                      <li className="pt-2 text-[#10b981] font-semibold">
                        • Нийт 12 мэргэжилтэнтэй
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* ==================== VISION ==================== */}
            <div className="mt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
                {isEnglish ? 'Our Vision' : 'Манай компанийн алсын хараа'}
              </h3>

              <p className="text-white/85 text-base md:text-lg leading-8">
                {isEnglish
                  ? 'To become a leading provider of tax, financial, and accounting consulting services in Mongolia, creating sustainable growth and long-term value for businesses through professional expertise, innovative solutions, and trust-based partnerships.'
                  : 'Монголын бизнесийн татвар, санхүү, нягтлан бодох бүртгэлийн зөвлөх үйлчилгээний салбарт манлайлагч болж, мэргэжлийн өндөр ур чадвар, инновац, итгэлцэлд суурилсан шийдлээр дамжуулан байгууллагуудын тогтвортой хөгжил, урт хугацааны үнэ цэнийг бүтээнэ.'}
              </p>
            </div>

            {/* ==================== MISSION ==================== */}
            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
                {isEnglish ? 'Our Mission' : 'Эрхэм зорилго'}
              </h3>

              <p className="text-white/85 text-base md:text-lg leading-8">
                {isEnglish
                  ? 'To integrate global innovations in finance and accounting into our services, prioritize client satisfaction, and create real value through professional knowledge, practical experience, and reliable solutions regardless of time and place.'
                  : 'Санхүү, нягтлан бодох бүртгэлийн дэлхийн шилдэг инноваци, шинэ шийдлийг үйлчилгээндээ нэвтрүүлж, харилцагчийн сэтгэл ханамжийг эрхэмлэн, мэргэжлийн мэдлэг, практик туршлага, найдвартай шийдлээр дамжуулан цаг хугацаа, орон зай үл хамааран бодит үнэ цэнийг бий болгоно.'}
              </p>
            </div>

            {/* ==================== GOALS ==================== */}
            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-5">
                {isEnglish ? 'Our Goals' : 'Зорилт'}
              </h3>

              <ul className="text-white/85 text-base md:text-lg leading-8 space-y-4">
                {isEnglish ? (
                  <>
                    <li>
                      • Build a capable, professional, and stable workforce.
                    </li>
                    <li>
                      • Continuously innovate and introduce new ideas and solutions.
                    </li>
                    <li>
                      • Listen to the needs, interests, and feedback of our clients and partners and continuously improve our products and services.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      • Чадвартай, мэргэшсэн, тогтвортой хүний нөөцийг бүрдүүлэх.
                    </li>
                    <li>
                      • Шинэлэг санаа, шинэ шийдлийг тасралтгүй санаачлан хэрэгжүүлэх.
                    </li>
                    <li>
                      • Харилцагч, хэрэглэгчдийн хүсэл, сонирхол, санал шүүмжийг цаг үргэлж сонсож, бүтээгдэхүүн, үйлчилгээгээ тасралтгүй хөгжүүлэх.
                    </li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </section>

        {/* ==================== GREETINGS ==================== */}
        <section
          id="mendchilgee"
          className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Greeting text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center md:text-left">
                {isEnglish ? 'Greetings' : 'Мэндчилгээ'}
              </h2>

              <div className="text-white/85 text-base md:text-lg leading-8 space-y-6">

                {isEnglish ? (
                  <>
                    <p>
                      We are pleased to greet you—our valued clients,
                      partner organizations, and students—through our website.
                    </p>

                    <p>
                      As we continue to adapt to the growing needs of
                      businesses and changes in the market environment, we
                      provide professional and reliable consulting services in
                      the areas of tax, finance, and accounting.
                    </p>

                    <p>
                      We are committed to delivering practical solutions
                      tailored to the unique needs and goals of our clients
                      while creating sustainable value through our expertise
                      and experience.
                    </p>

                    <p>
                      The foundation of our success lies in our professional
                      capabilities, the dedication and commitment of our team,
                      our continuous pursuit of development, and most
                      importantly, the trust and confidence of our valued
                      clients.
                    </p>

                    <p>
                      We would like to express our sincere gratitude to all
                      our clients, partner organizations, learners, and team
                      members who have supported and inspired us throughout
                      our journey.
                    </p>

                    <p>
                      Through our website, we believe you will gain a deeper
                      understanding of our organization’s vision, mission,
                      areas of operation, and professional services, allowing
                      you to better recognize the value we strive to deliver.
                    </p>

                    <p>
                      Moving forward, we will continue to be a trusted
                      consulting partner for our clients by providing
                      professional knowledge, practical experience, and
                      innovative solutions while creating lasting value
                      through meaningful partnerships.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Эрхэм хүндэт харилцагч, хамтран ажилладаг байгууллагууд
                      болон суралцагчид та бүхэнтэйгээ цахим хуудсаараа
                      мэндчилж байгаадаа баяртай байна.
                    </p>

                    <p>
                      Бид өсөн нэмэгдэж буй бизнесийн хэрэгцээ, зах зээлийн
                      өөрчлөлттэй хөл нийлүүлэн алхаж, татвар, санхүү,
                      нягтлан бодох бүртгэлийн чиглэлээр мэргэжлийн,
                      найдвартай зөвлөх үйлчилгээг хүргэн ажиллаж байна.
                    </p>

                    <p>
                      Харилцагч байгууллагуудынхаа онцлог хэрэгцээ, зорилгод
                      нийцсэн зөв шийдэл, бодит үнэ цэнийг бий болгохыг бид
                      эрхэмлэдэг.
                    </p>

                    <p>
                      Бидний амжилтын үндэс нь мэргэжлийн өндөр ур чадвар,
                      хамт олны хичээл зүтгэл, тасралтгүй хөгжих эрмэлзэл
                      болон харилцагчдынхаа бидэнд үзүүлсэн итгэл юм.
                    </p>

                    <p>
                      Бидэнд урам зориг, дэмжлэг үзүүлж ирсэн нийт харилцагч,
                      түнш байгууллагууд, суралцагчид болон хамт олондоо
                      чин сэтгэлийн талархал илэрхийлье.
                    </p>

                    <p>
                      Манай вэб сайтаар дамжуулан байгууллагын алсын хараа,
                      эрхэм зорилго, үйл ажиллагааны чиглэл болон мэргэжлийн
                      үйлчилгээний талаарх дэлгэрэнгүй мэдээлэлтэй танилцаж,
                      бидний үнэ цэнэ, хандлагыг илүү сайн ойлгоно гэдэгт
                      итгэлтэй байна.
                    </p>

                    <p>
                      Бид цаашид ч мэргэжлийн мэдлэг, туршлагадаа тулгуурлан
                      харилцагчдынхаа найдвартай зөвлөх түнш байж, инновац,
                      чанар, итгэлцэлд суурилсан үйлчилгээг хүргэн, хамтын
                      үнэ цэнийг бүтээн ажиллах болно.
                    </p>
                  </>
                )}

              </div>
            </div>

            {/* Greeting image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-[#161b22] border border-white/10 shadow-2xl">
                <Image
                  src="/mend.jpg"
                  alt={isEnglish ? 'MBD Tax Tactic Greetings' : 'Мэндчилгээ'}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}