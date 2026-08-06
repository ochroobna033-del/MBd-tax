"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "../langContext";

const auditTabs = [
  {
    id: "service",
    titleMn: "Менежмент систем",
    titleEn: "Information technology audit",
  },
  {
    id: "internal",
    titleMn: "Дотоод аудит",
    titleEn: "Internal Audit",
  },
  {
    id: "tax",
    titleMn: "Татварын аудит",
    titleEn: "Tax Audit",
  },
];

export default function AuditPage() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState("service");

  const isEnglish = lang === "en";

  return (
    <>
      <Header />

      <main className="pt-20 bg-[#0d1512] min-h-screen">

        {/* ========================================
            PAGE HEADER
        ======================================== */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {isEnglish ? "Audit" : "Аудит"}
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? "We provide professional audit services to help organizations improve financial transparency, internal control, and compliance."
                : "Байгууллагын санхүүгийн ил тод байдал, дотоод хяналт болон хууль тогтоомжийн хэрэгжилтийг сайжруулахад чиглэсэн мэргэжлийн аудитын үйлчилгээг үзүүлнэ."}
            </p>

          </div>
        </section>

        {/* ========================================
            AUDIT CONTENT
        ======================================== */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* ========================================
                LEFT MENU
            ======================================== */}
            <div className="flex flex-col gap-3">

              {auditTabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      w-full
                      p-4
                      rounded-xl
                      text-left
                      font-semibold
                      border
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-[#10b981] border-[#10b981] text-white shadow-lg shadow-emerald-500/20"
                          : "bg-[#161b22] border-white/10 text-white/70 hover:bg-[#1c2520] hover:text-white"
                      }
                    `}
                  >
                    {isEnglish ? tab.titleEn : tab.titleMn}
                  </button>
                );
              })}

            </div>

            {/* ========================================
                RIGHT CONTENT
            ======================================== */}
            <div className="md:col-span-2">

              <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 md:p-10 min-h-[400px]">

                {/* ========================================
                    1. MANAGEMENT SYSTEM / AUDIT SERVICES
                ======================================== */}
                {activeTab === "service" && (
                  <div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {isEnglish
                        ? "Management System"
                        : "Менежмент систем"}
                    </h2>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                      {isEnglish
                        ? "Auditing plays an important role in establishing, certifying, and maintaining a management system. Types of audits differ according to various criteria."
                        : "Менежментийн системийг бий болгох, сертификатжуулах, үйл ажиллагааг хэвийн байлгахад аудит чухал үүрэг гүйцэтгэнэ. Аудитийн төрлүүд нь хоорондоо янз бүрийн шалгуураар ялгарна."}
                    </p>

                    {/* AUDIT TYPES BY SUBJECT */}
                    <h3 className="text-xl font-semibold text-[#10b981] mb-4">
                      {isEnglish
                        ? "Audit Types by Subject"
                        : "Аудитийн зүйлээр ялгавал"}
                    </h3>

                    <ul className="space-y-4 text-white/80 mb-8">

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Financial Audit"
                            : "Санхүүгийн аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines whether financial documents are maintained correctly, clearly, and systematically according to accounting principles."
                          : "Санхүүгийн баримтуудыг нягтлан бодох бүртгэлийн зарчмаар зөв, тодорхой, эмх цэгцтэй хөтлөн явуулж буй эсэх."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Compliance Audit"
                            : "Комплиансе аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines whether activities comply with applicable rules and procedures."
                          : "Дүрэм, журамтай таарч байгаа эсэх тухай шалгалт."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Performance Audit"
                            : "Перформансе аудит буюу гүйцэтгэлийн аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines whether objectives and efficiency have been achieved and whether resources have been used economically and efficiently."
                          : "Зорилго буюу үр ашигт хүрсэн эсэхийг объектын болон системийн шалгалтаар авч үзэх ба ашигласан нөөц нь эдийн засгийн болоод үр ашигтай хэрэглэгдсэн эсэхийг шалгана."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "System Audit"
                            : "Системийн аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines the management system."
                          : "Менежментийн системийг авч үзнэ."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Process Audit"
                            : "Процесс аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines an individual process separately."
                          : "Тухайн процессыг дан дангаар нь авч үзнэ."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Technology Audit"
                            : "Технологийн аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines products based on customer expectations."
                          : "Хэрэглэгчийн хүлээлт дээр үндэслэн бүтээгдэхүүнийг авч үзнэ."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Project Audit"
                            : "Төслийн аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines the progress of a specific project."
                          : "Тухайн төслийн явцыг авч үзнэ."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Information Audit"
                            : "Мэдээллийн аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Examines whether information presented through the media is accurate."
                          : "Хэвлэл мэдээллийн мэдээлэл бодит эсэхийг шалгана."}
                      </li>

                    </ul>

                    {/* AUDIT TYPES BY AUDITOR AUTHORITY */}
                    <h3 className="text-xl font-semibold text-[#10b981] mb-4">
                      {isEnglish
                        ? "Audit Types by Auditor Authority"
                        : "Аудиторын эрхээр нь ялгах"}
                    </h3>

                    <ul className="space-y-4 text-white/80 mb-8">

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Internal Audit"
                            : "Дотоод аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "The auditor is an employee of the organization and is authorized to perform internal audits."
                          : "Аудитор нь тухайн байгууллагын ажилтан бөгөөд байгууллагын дотоод аудиторыг гүйцэтгэх эрхтэй."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Supplier Audit"
                            : "Нийлүүлэгч аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Usually, the customer assigns someone to audit the products of their supplier."
                          : "Ихэнхдээ хэрэглэгч өөрөө хэн нэгнийг нийлүүлэгчийнхээ бүтээгдэхүүнийг шалгах үүргийг даатгана."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Certification Audit"
                            : "Сертификатжуулах аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "An independent third-party audit conducted by an organization authorized to issue certification."
                          : "Гадны хамааралгүй гуравдагч аудитын сертификат олгох газар."}
                      </li>

                    </ul>

                    {/* MANAGEMENT SYSTEM CERTIFICATION AUDITS */}
                    <h3 className="text-xl font-semibold text-[#10b981] mb-4">
                      {isEnglish
                        ? "Management System Certification Audits"
                        : "Менежментийн системийн сертификаттай холбоотой аудит"}
                    </h3>

                    <ul className="space-y-4 text-white/80">

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Pre-assessment Audit"
                            : "Урьдчилсан аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "An audit conducted to determine whether an organization is capable of certification, sometimes referred to as a friendly audit."
                          : "Сертификатжуулах чадвартай эсэхийг тогтоох урьдчилсан аудит, мөн friendly audit гэж нэрлэх нь бий."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Certification Audit"
                            : "Сертификатжуулах аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Includes document review and checks whether certification requirements are fulfilled according to a prepared checklist."
                          : "Баримт бичгийн шалгалттай сертификатжуулах аудит болон сертификат олгох дүрмийн гүйцэтгэлийг бэлтгэсэн асуултын жагсаалтын дагуу биелүүлэх эсэхийг шалгана."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Surveillance Audit"
                            : "Хяналтын аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "Usually conducted once a year to monitor the development of the management system."
                          : "Ихэвчлэн жилдээ нэг удаа хийнэ. Менежментийн системийн хөгжлийг хянах зорилготой."}
                      </li>

                      <li>
                        <strong className="text-white">
                          {isEnglish
                            ? "Recertification Audit"
                            : "Давтан аудит буюу сертификатыг сунгах аудит"}
                        </strong>
                        <br />
                        {isEnglish
                          ? "An audit conducted to renew the certification, usually once every three years."
                          : "Сертификатыг сунгах аудит бөгөөд гурван жилд нэг удаа хийнэ."}
                      </li>

                    </ul>

                  </div>
                )}

                {/* ========================================
                    2. INTERNAL AUDIT
                ======================================== */}
                {activeTab === "internal" && (
                  <div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {isEnglish
                        ? "Internal Audit"
                        : "Дотоод аудит"}
                    </h2>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                      {isEnglish
                        ? "Internal audit evaluates an organization's internal controls, risk management, business operations, and internal processes to identify weaknesses and improve operational effectiveness."
                        : "Дотоод аудит нь байгууллагын дотоод хяналт, эрсдэлийн удирдлага, бизнесийн үйл ажиллагаа болон дотоод процессын үр нөлөөг үнэлж, сул тал болон эрсдэлийг тодорхойлон үйл ажиллагааг сайжруулахад чиглэнэ."}
                    </p>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                      {isEnglish
                        ? "The purpose of internal audit is to help organizations strengthen internal controls, reduce risks, improve processes, and operate more efficiently."
                        : "Дотоод аудитын зорилго нь байгууллагын дотоод хяналтыг сайжруулах, эрсдэлийг бууруулах, бизнесийн үйл явцыг боловсронгуй болгох, үйл ажиллагааны үр ашгийг нэмэгдүүлэхэд дэмжлэг үзүүлэх юм."}
                    </p>

                    <h3 className="text-xl font-semibold text-[#10b981] mb-4">
                      {isEnglish
                        ? "Key Areas"
                        : "Үндсэн чиглэл"}
                    </h3>

                    <ul className="space-y-3 text-white/80">

                      <li>
                        ✓ {isEnglish
                          ? "Internal control evaluation"
                          : "Дотоод хяналтын үнэлгээ"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Risk identification and assessment"
                          : "Эрсдэлийг тодорхойлох, үнэлэх"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Operational efficiency assessment"
                          : "Үйл ажиллагааны үр ашгийн үнэлгээ"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Business process review"
                          : "Бизнесийн үйл явцын хяналт"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Process improvement recommendations"
                          : "Үйл ажиллагааг сайжруулах зөвлөмж"}
                      </li>

                    </ul>

                  </div>
                )}

                {/* ========================================
                    3. TAX AUDIT
                ======================================== */}
                {activeTab === "tax" && (
                  <div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {isEnglish
                        ? "Tax Audit"
                        : "Татварын аудит"}
                    </h2>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                      {isEnglish
                        ? "Tax audit evaluates an organization's tax reporting, compliance with tax regulations, and potential tax risks."
                        : "Татварын аудит нь байгууллагын татварын бүртгэл, тайлагнал, татварын хууль тогтоомжийн хэрэгжилт болон татвартай холбоотой эрсдэлийг үнэлэхэд чиглэсэн үйлчилгээ юм."}
                    </p>

                    <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                      {isEnglish
                        ? "It helps identify potential tax errors, irregularities, and compliance risks, enabling organizations to take corrective action and reduce future tax exposure."
                        : "Тус үйлчилгээ нь татварын болзошгүй алдаа, зөрчил болон эрсдэлийг урьдчилан илрүүлж, шаардлагатай арга хэмжээ авах, татварын эрсдэлийг бууруулахад дэмжлэг үзүүлнэ."}
                    </p>

                    <h3 className="text-xl font-semibold text-[#10b981] mb-4">
                      {isEnglish
                        ? "Tax Audit Services"
                        : "Татварын аудитын чиглэл"}
                    </h3>

                    <ul className="space-y-3 text-white/80">

                      <li>
                        ✓ {isEnglish
                          ? "Tax return review"
                          : "Татварын тайлангийн хяналт"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Tax risk assessment"
                          : "Татварын эрсдэлийн үнэлгээ"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Tax compliance review"
                          : "Татварын хууль тогтоомжийн нийцлийн хяналт"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Identification of tax errors and irregularities"
                          : "Татварын алдаа, зөрчлийг илрүүлэх"}
                      </li>

                      <li>
                        ✓ {isEnglish
                          ? "Tax advisory services"
                          : "Татварын зөвлөх үйлчилгээ"}
                      </li>

                    </ul>

                  </div>
                )}

              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}