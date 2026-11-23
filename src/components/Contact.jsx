import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, ArrowUpRight, Loader } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MonoLabel from "@/components/ui/MonoLabel";
import Button from "@/components/ui/Button";
import TextLink from "@/components/ui/TextLink";
import { profile } from "@/data/profile";

const emptyForm = { name: "", email: "", message: "" };

const fieldClass =
  "mt-2 block w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none focus-visible:outline-none disabled:opacity-50";

function Field({ id, label, as = "input", ...props }) {
  const Control = as;
  return (
    <div>
      <label htmlFor={id}>
        <MonoLabel>{label}</MonoLabel>
      </label>
      <Control id={id} name={id} className={fieldClass} {...props} />
    </div>
  );
}

function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const sending = status === "sending";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setFormData(emptyForm);
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus("error");
    }
  };

  const details = [
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    { label: "Location", value: profile.location },
  ];

  return (
    <Section id="contact" tone="dark" labelledBy="contact-title">
      <Container>
        <div className="border-t border-border pt-6 md:pt-8">
          <MonoLabel>
            <span className="text-foreground">05</span>
            <span aria-hidden="true"> / </span>Contact
          </MonoLabel>
        </div>

        <div className="grid-site mt-10 gap-y-10 md:mt-14">
          <div className="col-span-4 md:col-span-8 lg:col-span-10">
            <h2 id="contact-title" className="text-display">
              Let’s <em className="italic">connect.</em>
            </h2>
            <p className="mt-8 max-w-[34rem] text-lead text-muted-foreground">
              I’m always interested in hearing about new opportunities,
              collaborations, and innovative projects.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex items-center gap-3 font-serif text-[clamp(1.5rem,1rem+2.6vw,3rem)] leading-tight [overflow-wrap:anywhere]"
            >
              <span className="link-underline">{profile.email}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-[0.7em] shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="grid-site mt-20 gap-y-16 md:mt-28">
          {/* Details and profiles */}
          <div className="col-span-4 space-y-12 md:col-span-3 lg:col-span-4">
            <dl className="space-y-5">
              {details.map((item) => (
                <div key={item.label}>
                  <MonoLabel as="dt">{item.label}</MonoLabel>
                  <dd className="mt-1">
                    {item.href ? (
                      <TextLink href={item.href}>{item.value}</TextLink>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <MonoLabel as="h3">Elsewhere</MonoLabel>
              <ul className="mt-2">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <TextLink href={social.href} arrow className="min-h-11">
                      {social.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
            <h3 className="font-serif text-h3">Have a message?</h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={sending}
                />
                <Field
                  id="email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={sending}
                />
              </div>
              <Field
                id="message"
                label="Message"
                as="textarea"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={sending}
                className={`${fieldClass} resize-none`}
              />

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button
                  type="submit"
                  disabled={sending}
                  icon={sending ? undefined : ArrowRight}
                >
                  {sending && (
                    <Loader aria-hidden="true" className="size-4 animate-spin" />
                  )}
                  {sending ? "Sending..." : "Send Message"}
                </Button>

                <p role="status" aria-live="polite" className="text-sm">
                  {status === "sent" && (
                    <span className="text-accent">
                      Message sent successfully! I’ll get back to you soon.
                    </span>
                  )}
                  {status === "error" && (
                    <span>
                      Failed to send message. Please try again or email me
                      directly.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
