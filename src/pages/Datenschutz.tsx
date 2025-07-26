import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Datenschutz = () => (
  <div className="min-h-screen font-inter relative w-full overflow-x-hidden">
    {/* Gradient-Hintergrund wie auf der Homepage */}
    <div className="fixed inset-0 bg-gradient-to-b from-black via-slate-900 via-black via-slate-800 via-slate-900 to-black -z-10"></div>
    <Header />
    <main>
      <div className="max-w-3xl mx-auto px-4 py-16 text-white">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        <ol className="space-y-6 list-decimal list-inside">
          <li>
            <strong>Verantwortlicher für die Datenverarbeitung</strong>
            <p className="mt-2">
              Golden Parrot – Niklas Horstmann<br />
              Ückendorfer Straße 95<br />
              45886 Gelsenkirchen<br />
              E-Mail: <a href="mailto:kontakt@golden-parrot.de" className="underline">kontakt@golden-parrot.de</a><br />
              Telefon: 0174 7205407<br />
              Ansprechpartner: Niklas Horstmann
            </p>
          </li>
          <li>
            <strong>Arten der verarbeiteten personenbezogenen Daten</strong>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Zahlungsinformationen</li>
              <li>Auftragsdaten</li>
              <li>Video-Uploads (z.B. von Kunden hochgeladene Videos, die für die Produktion genutzt werden)</li>
            </ul>
          </li>
          <li>
            <strong>Zweck der Datenverarbeitung</strong>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Zur Erfüllung des Vertrages (z.B. Videoproduktion)</li>
              <li>Zur Kommunikation mit den Nutzern (z.B. Beantwortung von Anfragen)</li>
              <li>Zur Bearbeitung und Optimierung der von uns angebotenen Dienstleistungen</li>
            </ul>
          </li>
          <li>
            <strong>Rechtsgrundlage der Verarbeitung</strong>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Art. 6 Abs. 1 lit. b DSGVO – Verarbeitung zur Erfüllung eines Vertrages</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse an der Verarbeitung zur Optimierung der Dienstleistungen</li>
            </ul>
          </li>
          <li>
            <strong>Datenquellen</strong>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Kontaktformular auf unserer Website</li>
              <li>Gespräche (z.B. telefonisch oder per E-Mail)</li>
            </ul>
          </li>
          <li>
            <strong>Drittanbieter und Auftragsverarbeiter</strong>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Vercel – Hosting und Deployment der Website</li>
              <li>Ionos – Bereitstellung der Domain und weiterer Infrastruktur</li>
            </ul>
            <p className="mt-2">Diese Drittanbieter verarbeiten personenbezogene Daten ausschließlich in unserem Auftrag und in Übereinstimmung mit den geltenden Datenschutzgesetzen.</p>
          </li>
          <li>
            <strong>Speicherdauer und Löschung von Daten</strong>
            <p className="mt-2">Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung des Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen dies verlangen. Die Löschung der Daten erfolgt automatisch, sobald der Zweck der Speicherung entfällt oder eine gesetzliche Frist abläuft.</p>
          </li>
          <li>
            <strong>Betroffenenrechte</strong>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Recht auf Auskunft über die gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
              <li>Recht auf Löschung der Daten, wenn diese nicht mehr erforderlich sind</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten aus Gründen, die sich aus Ihrer besonderen Situation ergeben</li>
            </ul>
            <p className="mt-2">Wenn Sie eines dieser Rechte geltend machen möchten, kontaktieren Sie uns bitte per E-Mail unter <a href="mailto:kontakt@golden-parrot.de" className="underline">kontakt@golden-parrot.de</a>.</p>
          </li>
          <li>
            <strong>Widerspruchsmöglichkeiten</strong>
            <p className="mt-2">Sie können der Verarbeitung Ihrer personenbezogenen Daten jederzeit widersprechen. Um von Ihrem Widerspruchsrecht Gebrauch zu machen, senden Sie bitte eine E-Mail an <a href="mailto:kontakt@golden-parrot.de" className="underline">kontakt@golden-parrot.de</a>.</p>
          </li>
          <li>
            <strong>Datensicherheit</strong>
            <p className="mt-2">Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten zu schützen, insbesondere durch Verschlüsselung bei der Übertragung und Speicherung der Daten. Wir stellen sicher, dass nur befugte Personen Zugriff auf die Daten haben.</p>
          </li>
          <li>
            <strong>Übermittlung von Daten außerhalb der EU</strong>
            <p className="mt-2">Wir übermitteln keine personenbezogenen Daten außerhalb der EU. Alle Datenverarbeitungsprozesse finden innerhalb der EU statt.</p>
          </li>
          <li>
            <strong>Cookies und Tracking</strong>
            <p className="mt-2">Auf unserer Website setzen wir Cookies ein, um die Nutzung unserer Website zu analysieren und um Ihnen eine bessere Benutzererfahrung zu bieten. Weitere Informationen hierzu finden Sie in unserer Cookie-Richtlinie.</p>
          </li>
          <li>
            <strong>Automatisierte Entscheidungen und Profiling</strong>
            <p className="mt-2">Wir setzen keine automatisierten Entscheidungen oder Profiling-Techniken ein, die Ihre personenbezogenen Daten betreffen.</p>
          </li>
          <li>
            <strong>Änderung der Datenschutzerklärung</strong>
            <p className="mt-2">Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf zu ändern, um sie an gesetzliche Anforderungen oder Änderungen unserer Dienstleistungen anzupassen. Die jeweils aktuelle Version wird auf unserer Website veröffentlicht.</p>
          </li>
        </ol>
      </div>
    </main>
    <Footer />
  </div>
);

export default Datenschutz; 