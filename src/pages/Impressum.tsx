import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Impressum = () => (
  <div className="min-h-screen font-inter relative">
    <div className="fixed inset-0 bg-gradient-to-b from-black via-slate-900 via-black via-slate-800 via-slate-900 to-black -z-10"></div>
    <Header />
    <main>
      <div className="max-w-3xl mx-auto px-4 py-16 text-white">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        <p className="mb-6">Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV:</p>
        <p>
          Golden Parrot – Niklas Horstmann<br />
          Ückendorfer Straße 95<br />
          45886 Gelsenkirchen<br />
          Deutschland
        </p>
        <p className="mt-4">
          Telefon: 0174 7205407<br />
          E-Mail: <a href="mailto:kontakt@golden-parrot.de" className="underline">kontakt@golden-parrot.de</a>
        </p>
        <p className="mt-4">
          Vertreten durch:<br />
          Niklas Horstmann
        </p>
        <p className="mt-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
          DE350314022
        </p>
        <p className="mt-4">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
          Niklas Horstmann<br />
          Ückendorfer Straße 95<br />
          45886 Gelsenkirchen
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum; 