"use client";

import { useState, useEffect, FormEvent } from "react";
import { Mail, Globe, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  FacebookIcon, 
  TelegramIcon,
  CodeforcesIcon,
  W3schoolsIcon
} from "@/components/ui/SocialIcons";
import Reveal from "@/components/ui/Reveal";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TelegramIcon, href: "https://t.me/aswany", label: "Telegram" },
  { icon: CodeforcesIcon, href: "https://codeforces.com/profile/YOUR_USERNAME", label: "Codeforces" },
  { icon: W3schoolsIcon, href: "https://my-learning.w3schools.com", label: "W3Schools" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

useEffect(() => {
      if (success) {
        const timer = setTimeout(() => {
          setSuccess(false);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [success]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // إخفاء رسالة النجاح تلقائياً بعد 3 ثوانٍ
    

    // 1. التحقق من ملء الحقول الإلزامية
    if (!name || !email || !message) {
      setErrorMessage("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    // 2. التحقق من احتواء البريد الإلكتروني على علامة "@"
    if (
      !email.includes("@") ||
      email.indexOf("@") === 0 ||
      email.lastIndexOf("@") === email.length - 1
    ) {
      setErrorMessage("Please enter a valid email address containing '@'.");
      setLoading(false);
      return;
    }

    // إعداد نص الرسالة الموجهة للتيليجرام متضمناً رقم الهاتف إذا وجد
    // إعداد نص الرسالة باللغة الإنجليزية بالكامل
    let telegramText = `📬 *New Portfolio Inquiry:*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}`;
    if (phone) {
      telegramText += `\n📱 *Phone:* ${phone}`;
    }
    telegramText += `\n💬 *Message:*\n${message}`;

    // جلب التوكن ومعرف المحادثة من متغيرات البيئة
    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      setErrorMessage(
        "Telegram configuration is missing. Please check environment variables.",
      );
      setLoading(false);
      return;
    }

    try {
      // إرسال البيانات بالتوازي إلى تيليجرام و Formspree
      const [telegramRes] = await Promise.all([
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramText,
            parse_mode: "Markdown",
          }),
        }),
        fetch("https://formspree.io/f/mdekddwa", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || "Not provided",
            message,
            _subject: `New portfolio inquiry from ${name}`,
          }),
        }).catch((err) => {
          console.error("Formspree forwarding error:", err);
        }),
      ]);

      if (telegramRes.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setErrorMessage(
          "Failed to send message to Telegram. Please try again.",
        );
      }
    } catch {
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#FAF9F1] py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* الترويسة الرئيسية */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-[#E03D46] text-white border-2 border-[#141414] shadow-[2px_2px_0px_#141414] mb-4">
              GET IN TOUCH
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-[#141414] tracking-tight">
              Contact Me
            </h2>
          </Reveal>
        </div>

        {/* تقسيم الشاشة لعمودين: البيانات يساراً والنموذج يميناً */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* العمود الأيسر: معلومات التواصل والشبكات */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#141414] mb-5">
                Let&apos;s Work Together
              </h3>

              <p className="text-[#6B6A65] text-base leading-relaxed mb-10 max-w-md font-normal">
                Have a project in mind? Want to collaborate? Or just want to say
                hello? Feel free to reach out. I’m always open to discussing new
                opportunities.
              </p>

              {/* بطاقات البيانات الثلاث */}
              <div className="space-y-6">
                {/* 1. البريد */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#141414] text-white flex items-center justify-center border-2 border-[#141414] shrink-0">
                    <Mail size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono font-bold tracking-widest text-[#8F836B] uppercase">
                      EMAIL
                    </span>
                    <a
                      href="mailto:aswany4tech@gmail.com"
                      className="text-sm sm:text-base font-bold text-[#141414] hover:underline"
                    >
                      aswany4tech@gmail.com
                    </a>
                  </div>
                </div>

                {/* 2. الموقع */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#141414] text-white flex items-center justify-center border-2 border-[#141414] shrink-0">
                    <Globe size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono font-bold tracking-widest text-[#8F836B] uppercase">
                      WEBSITE
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#141414]">
                      aswany.pro
                    </span>
                  </div>
                </div>

                {/* 3. الموقع الجغرافي */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#141414] text-white flex items-center justify-center border-2 border-[#141414] shrink-0">
                    <MapPin size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono font-bold tracking-widest text-[#8F836B] uppercase">
                      LOCATION
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#141414]">
                      Minya, Egypt
                    </span>
                  </div>
                </div>
              </div>

              {/* أزرار التواصل الخمسة المربعة (Mail, GitHub, LinkedIn, Facebook, Telegram) */}
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-12 h-12 border-2 border-[#141414] bg-[#FAF9F1] flex items-center justify-center text-[#141414]
                               transition-all duration-200 ease-out
                               hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#141414]
                               active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <Icon size={18} className="shrink-0" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* العمود الأيمن: استمارة المراسلة */}
          <div className="lg:col-span-7">
            <Reveal delay={0.16}>
              <form
                onSubmit={handleSubmit}
                className="border-2 border-[#141414] bg-[#FAF9F1] p-6 sm:p-10 lg:p-12
                           shadow-[8px_8px_0px_#141414] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                           hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0px_#141414]"
              >
                <div className="space-y-6">
                  {/* حقل الاسم */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-mono font-bold tracking-widest text-[#141414] uppercase mb-2"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full border-2 border-[#141414] bg-white px-4 py-3.5 text-sm text-[#141414] placeholder-[#9E9E9C] font-medium outline-none transition-colors focus:bg-[#FAF9F1]"
                    />
                  </div>

                  {/* حقل البريد */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono font-bold tracking-widest text-[#141414] uppercase mb-2"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full border-2 border-[#141414] bg-white px-4 py-3.5 text-sm text-[#141414] placeholder-[#9E9E9C] font-medium outline-none transition-colors focus:bg-[#FAF9F1]"
                    />
                  </div>

                  {/* حقل الهاتف الاختياري */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="phone"
                        className="block text-[11px] font-mono font-bold tracking-widest text-[#141414] uppercase"
                      >
                        PHONE NUMBER
                      </label>
                      <span className="text-[10px] font-mono font-bold text-[#8F836B] uppercase tracking-wider">
                        OPTIONAL
                      </span>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+20 100 000 0000"
                      className="w-full border-2 border-[#141414] bg-white px-4 py-3.5 text-sm text-[#141414] placeholder-[#9E9E9C] font-medium outline-none transition-colors focus:bg-[#FAF9F1]"
                    />
                  </div>

                  {/* حقل الرسالة */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-mono font-bold tracking-widest text-[#141414] uppercase mb-2"
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full border-2 border-[#141414] bg-white p-4 text-sm text-[#141414] placeholder-[#9E9E9C] font-medium outline-none resize-none transition-colors focus:bg-[#FAF9F1]"
                    />
                  </div>

                  {/* رسالة الخطأ */}
                  {errorMessage && (
                    <p className="text-xs font-mono font-bold text-[#E03D46] bg-red-50 border border-[#E03D46] p-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* رسالة التأكيد بعد وصول الرسالة للتيليجرام بنجاح */}
                  {success && (
                    <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border-2 border-emerald-500 p-3.5 shadow-[2px_2px_0px_#141414] animate-in fade-in slide-in-from-top-2 duration-300">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-600 shrink-0"
                      />
                      <span>
                        Your message has been verified and delivered
                        successfully to Telegram &amp; Email!
                      </span>
                    </div>
                  )}

                  {/* زر الإرسال التفاعلي */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border-2 border-[#141414] bg-[#E03D46] py-4 px-6 text-white text-xs sm:text-sm font-black tracking-widest uppercase
                               shadow-[4px_4px_0px_#141414] transition-all duration-200
                               hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141414]
                               active:translate-x-1 active:translate-y-1 active:shadow-none
                               disabled:opacity-60 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <span>SENDING...</span>
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={15} strokeWidth={2.4} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
