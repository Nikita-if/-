
export default function PageContacts()  {
    return (
        <section className="w-full py-16 px-6 bg-gradient-to-b from-zinc-900 to-black text-white">

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">

                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Давайте познакомимся ближе
                    </h2>

                    <p className="text-zinc-300 text-lg md:text-xl max-w-2xl">
                        Если вы хотите узнать нас лучше — просто свяжитесь.
                        Мы всегда на связи и готовы помочь вам с выбором и консультацией.
                    </p>
                </div>

                <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">

                    <h3 className="text-xl font-semibold mb-4">
                        Контакты
                    </h3>

                    <div className="flex flex-col gap-3 text-zinc-200">

                        <a
                            href="tel:+79999999999"
                            className="hover:text-white transition"
                        >
                            📞 Телефон: +7 (999) 999-99-99
                        </a>

                        <a
                            href="mailto:info@example.com"
                            className="hover:text-white transition"
                        >
                            ✉️ Email: info@example.com
                        </a>

                        <a
                            href="https://wa.me/79999999999"
                            className="hover:text-white transition"
                        >
                            💬 WhatsApp: написать нам
                        </a>

                    </div>
                </div>

                <div className="text-zinc-400 text-sm">
                    Ответим в течение 10–15 минут в рабочее время
                </div>

            </div>
        </section>
    );
};