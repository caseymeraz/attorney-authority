import type { Metadata } from "next";
import Breadcrumb from "@/components/marketing/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Attorney Authority  -  Law Firm SEO Services",
  description: "Contact Attorney Authority to discuss law firm SEO services, place an order, or get a volume pricing quote.",
  alternates: { canonical: "https://attorneyauthority.com/contact" },
};

async function sendContactForm(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const website = formData.get("website") as string;
  const message = formData.get("message") as string;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer re_YqooNLKh_9Rov1VcinbVRZqWoagbCBrgT`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Attorney Authority Contact Form <onboarding@resend.dev>",
      to: "cmeraz@jurisdigital.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Law Firm / Website:</strong> ${website}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      reply_to: email,
    }),
  });
}

export default function ContactPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Ready to place an order, ask about volume pricing, or discuss your law firm&apos;s
          SEO strategy? Reach out and we will get back to you within one business day.
        </p>
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
          <form action={sendContactForm} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name</label>
              <input name="name" type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Jane Smith" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
              <input name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="jane@smithlawfirm.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Law Firm / Website</label>
              <input name="website" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="https://smithlawfirm.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
              <textarea name="message" rows={5} required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Which service are you interested in? What keywords or practice areas are you targeting?" />
            </div>
            <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
