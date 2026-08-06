import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamMemberCard from '@/components/TeamMemberCard'
import { useLang } from '../langContext'


export default function AboutPage() {
  const { lang } = useLang()
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#0d1512] min-h-screen">
        {/* Бидний тухай */}
        <section id="bidni-tuhai" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              {lang === 'en' ? 'About us' : 'Бидний тухай'}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10b981] mb-6 text-center">
              {lang === 'en' ? 'MBD Tax Tactic TMZ LLC' : 'ЭМ БИ ДИ ТАКС ТАКТИК ТМЗ ХХК'}
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {lang === 'en'
                ? 'MBD Tax Tactic TMZ LLC was established in 2021 to provide accounting training from entry to professional level, certified tax advisory services, and comprehensive legal consulting based on financial statements. We also provide tax and financial reporting support and outsourced accounting services. We currently work with more than 150 clients, have successfully trained over 300 beginner accountants, and through our advanced programs have prepared more than 150 certified accountants and 50 certified tax advisors. We actively cooperate with “Erdmiin Undarga Consulting Center” and the auditing firm “MBD RD Star Tax”.'
                : 'ЭМ БИ ДИ ТАКС ТАКТИК ТМЗ ХХК нь 2021 онд нягтлан бодох бүртгэлийн анхан шатнаас мэргэшүүлэх түвшин хүртэлх сургалтын үйлчилгээ үзүүлэх, татварын мэргэшсэн зөвлөхийн үйлчилгээ үзүүлэх, санхүүгийн тайлан болон түүнд суурилсан компанийн хууль зүйн зөвлөгөө үйлчилгээг цогцоор нь хүргэхээр байгуулагдсан. Мөн санхүү болон татварын тайлан гаргах зөвлөгөө өгөх, гэрээт нягтлан бодогчийн үйлчилгээ үзүүлэхээр ажиллаж байна. Одоогоор 150 гаруй байгууллагатай хамтран ажиллаж, 300 гаруй суралцагч анхан шатны хөтөлбөрөө амжилттай төгссөн, салбарт мэргэжлийн эхний шатны нягтлан бодогчийн албан тушаалд ажиллаж байна. Мэргэжил дээшлүүлэх хөтөлбөрт 150 гаруй суралцагч онлайн болон нүүрэн амны сургалтад оролцож, 50 гаруй мэргэшсэн нягтлан бодогч,  гаруй татварын мэргэшсэн зөвлөх бэлтгэж, үйл ажиллагаагаа өргөжүүлэн хөгжүүлж байна. \"ЭРДМИЙН УНДАРГА ЗӨВЛӨХ ҮЙЛЧИЛГЭЭНИЙ ТӨВ\" болон Auditing / \"ЭМ БИ ДИ АР ДИ СТАР ТАКС\" байгууллагуудтай ойр хамтрал эрхэлж байна.'}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Our current team' : 'Одоогоор'}
            </h3>
            <ul className="text-white/85 text-base md:text-lg leading-relaxed mb-8 space-y-2 list-disc list-inside">
              {lang === 'en' ? (
                <>
                  <li>One permanent certified accountant and certified tax advisor</li>
                  <li>Two certified tax advisors</li>
                  <li>Seven accountants</li>
                  <li>One legal advisor</li>
                  <li>One marketing advisor — 12 staff in total.</li>
                </>
              ) : (
                <>
                  <li>Хугацаагүй мэргэшсэн нягтлан бодогч, татварын мэргэшсэн зөвлөх нэг</li>
                  <li>Татварын мэргэшсэн зөвлөх хоёр</li>
                  <li>Нягтлан бодогч долоо</li>
                  <li>Хуулийн зөвлөх нэг</li>
                  <li>Маркетингийн зөвлөх нэг орон тоотойгоор нийт 12 ажилтантай үйл ажиллагаагаа явуулж байна.</li>
                </>
              )}
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Our vision' : 'Манай компанийн алсын хараа:'}
            </h3>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {lang === 'en'
                ? 'To become a leading provider of tax and financial consulting services in Mongolia, creating sustainable growth and long-term value for businesses through professional expertise, innovative solutions, and trust-based partnerships.'
                : 'Монголын бизнесийн татвар, санхүүгийн зөвлөх үйлчилгээний салбарт манлайлагч болж, мэргэжлийн өндөр ур чадвар, инновац, итгэлцэлд суурилсан шийдлээр дамжуулан байгууллагуудын тогтвортой хөгжил, урт хугацааны үнэ цэнийг бүтээнэ.'}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Mission' : 'Эрхэм зорилго:'}
            </h3>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
              {lang === 'en'
                ? 'To integrate global innovations in finance and accounting into our offerings, prioritize client satisfaction, and deliver real value through our services regardless of time and place.'
                : 'Санхүү нягтлан бодох бүртгэлийн дэлхийн инновацийг өөрсдийн бүтээгдэхүүнд шингээн хэрэглэгчийн сэтгэл ханамжийг дээдлэн цаг хугацаа, орон зай үл хамааран үйлчилгээ үзүүлэн бодит үр өгөөжийг харилцагчид бий болгох.'}
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              {lang === 'en' ? 'Goals' : 'Зорилт:'}
            </h3>
            <ul className="text-white/85 text-base md:text-lg leading-relaxed space-y-2 list-disc list-inside">
              {lang === 'en' ? (
                <>
                  <li>Build a capable, professional and stable workforce</li>
                  <li>Be an innovator and initiator of new ideas</li>
                  <li>To continuously listen to the needs, interests and feedback of our clients and partners, and to improve our products and services accordingly.</li>
                </>
              ) : (
                <>
                  <li>Чадвартай, мэргэшсэн тогтвортой хүний нөөцийг бүрдүүлэх</li>
                  <li>Шинэлэг шинийг санаачлагч байх</li>
                  <li>Харилцагч, хэрэглэгчдийн хүсэл, сонирхол, шүүмжийг цаг үргэлж сонсох нь бидний бүтээгдэхүүнийг хөгжүүлэх, үйлчилгээг төгөлдөржүүлэх зорилтууд юм.</li>
                </>
              )}
            </ul>
          </div>
        </section>

        {/* Мэндчилгээ */}
        <section id="mendchilgee" className="py-20 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center md:text-left">
                {lang === 'en' ? 'Greetings' : 'Мэндчилгээ'}
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                {lang === 'en' ? (
                  <>
                    We are pleased to greet you—our valued clients, partner organizations, and students—through our website.
                    <br /><br />
                    As we continue to adapt to the growing needs of businesses and changes in the market environment, we provide professional and reliable consulting services in the areas of tax, finance, and accounting. We are committed to delivering practical solutions tailored to the unique needs and goals of our clients while creating sustainable value through our expertise and experience.

                    The foundation of our success lies in our professional capabilities, the dedication and commitment of our team, our continuous pursuit of development, and most importantly, the trust and confidence of our valued clients. We would like to express our sincere gratitude to all our clients, partner organizations, learners, and team members who have supported and inspired us throughout our journey.
                    <br /><br />
                    Through our website, we believe you will gain a deeper understanding of our organization’s vision, mission, areas of operation, and professional services, allowing you to better recognize the value we strive to deliver.

                     <br /><br />
                     Moving forward, we will continue to be a trusted consulting partner for our clients by providing professional knowledge, practical experience, and innovative solutions while creating lasting value through meaningful partnerships.

                  </>
                ) : (
                  <>
                    Эрхэм хүндэт харилцагч, хамтран ажилладаг байгуулагууд болон суралцагчид та бүхэнтэйгээ цахим хуудсаараа мэндчилж байгаадаа баяртай байна.
                    <br /><br />
                    Бид өсөн нэмэгдэж буй бизнесийн хэрэгцээ, зах зээлийн өөрчлөлттэй хөл нийлүүлэн алхаж, татвар, санхүү, нягтлан бодох бүртгэлийн чиглэлээр мэргэжлийн, найдвартай зөвлөх үйлчилгээг хүргэн ажиллаж байна. Харилцагч байгууллагуудынхаа онцлог хэрэгцээ, зорилгод нийцсэн зөв шийдэл, бодит үнэ цэнийг бий болгохыг бид эрхэмлэдэг.

                    Бидний амжилтын үндэс нь мэргэжлийн өндөр ур чадвар, хамт олны хичээл зүтгэл, тасралтгүй хөгжих эрмэлзэл болон харилцагчдынхаа бидэнд үзүүлсэн итгэл юм. Бидэнд урам зориг, дэмжлэг үзүүлж ирсэн нийт харилцагч, түнш байгууллагууд, суралцагчид болон хамт олондоо чин сэтгэлийн талархал илэрхийлье.

                    <br /><br />
                    Манай вэб сайтаар дамжуулан байгууллагын эрхэм зорилго, үйл ажиллагааны чиглэл, мэргэжлийн үйлчилгээний талаарх дэлгэрэнгүй мэдээлэлтэй танилцаж, бидний үнэ цэнэ, хандлагыг илүү сайн ойлгоно гэдэгт итгэлтэй байна

                    <br /><br />
                    Бид цаашид ч мэргэжлийн мэдлэг, туршлагадаа тулгуурлан харилцагчдынхаа найдвартай зөвлөх түнш байж, хамтын үнэ цэнийг бүтээн ажиллах болно.
                  </>
                )}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-[#161b22] border border-white/10">
                <Image
                  src="/mend.jpg"
                  alt={lang === 'en' ? 'Greetings' : 'Мэндчилгээ'}
                  fill
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
