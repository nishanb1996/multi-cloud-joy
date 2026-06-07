// Email service using EmailJS
declare global {
  interface Window {
    emailjs?: any;
  }
}

export interface ContactFormPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export class EmailService {
  serviceId = "service_wkhtl5s";
  templateId = "template_uem5cjd";
  publicKey = "roIaQ8s4L8cOM_Mr_";
  initialized = false;

  async initialize() {
    if (this.initialized) return;
    try {
      if (!window.emailjs) {
        await this.loadEmailJS();
      }
      if (window.emailjs) {
        window.emailjs.init(this.publicKey);
        this.initialized = true;
        console.log("EmailJS initialized successfully");
      }
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }

  loadEmailJS(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async sendContactForm(formData: ContactFormPayload) {
    if (!this.initialized) {
      await this.initialize();
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        phone: formData.phone || "Not provided",
        service: formData.service || "General inquiry",
        message: formData.message || "No message provided",
        reply_to: formData.email,
        submitted_at: new Date().toLocaleString(),
      };

      const response = await window.emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log("Email sent successfully:", response);
      return { success: true as const, response };
    } catch (error) {
      console.error("Email send failed:", error);
      return { success: false as const, error };
    }
  }
}

export const emailService = new EmailService();
