// 📂 app/page.tsx
"use client";

import Head from "next/head";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <Head>
                <title>Georgelys Marcano - Frontend Developer</title>
                <meta name="description" content="Portafolio de Georgelys Marcano, desarrolladora Frontend." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 text-center">
                <h1 className="text-4xl font-bold">Georgelys Marcano</h1>
                <p className="text-lg">Frontend Developer | Vue.js | Astro</p>
            </header>

            <main className="max-w-4xl mx-auto p-6">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
                    <p>
                        Desarrolladora front-end con más de 4 años de experiencia creando interfaces web atractivas y funcionales.
                        Especializada en Vue.js, Astro y diseño responsivo.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
                    <ul className="grid grid-cols-2 gap-4">
                        <li>HTML5 / CSS3 / JavaScript</li>
                        <li>Vue.js / Astro.js / Next.js</li>
                        <li>Tailwind CSS / Bootstrap</li>
                        <li>Figma / Adobe XD</li>
                        <li>WordPress / OpenCart</li>
                        <li>Scrum / Kanban</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="bg-white shadow-md p-4 rounded-lg">
                            <h3 className="font-bold">Portal Web Universitario</h3>
                            <p>Rediseño del portal web aumentando tráfico en 30%.</p>
                        </div>
                        <div className="bg-white shadow-md p-4 rounded-lg">
                            <h3 className="font-bold">E-commerce - Guuao</h3>
                            <p>Diseño y optimización de interfaces responsivas.</p>
                        </div>
                    </div>
                </section>

                <footer className="text-center mt-10">
                    <p>📧 <a href="mailto:georgelysmarcanob@gmail.com" className="text-blue-600">georgelysmarcanob@gmail.com</a></p>
                    <p>🔗 <a href="https://portfolio-marcanogeo.vercel.app/" className="text-blue-600">Ver Portafolio</a></p>
                </footer>
            </main>
        </div>
    );
}
