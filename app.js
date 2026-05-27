const teamMembers = {
  shweta: {
    name: "CA Shweta Setia",
    role: "Senior Advisor",
    initials: "SS",
    image: "assets/Shweta.png",
    bio: [
      "CA Shweta Setia is an accomplished professional with credentials as a Registered Insolvency Professional, Registered Valuer and Fellow Member of the Institute of Company Secretaries of India. She is also a law graduate with a PGDBA in Finance.",
      "Her work spans corporate laws, restructuring, project finance, export incentives, government subsidies, regulatory matters, secretarial practice, labour laws and general administration.",
      "Across more than 15 years, she has worked at senior management level, advised on corporate planning and strategy, and handled tax, compliance and governance assignments."
    ]
  },
  honey: {
    name: "CS Honey Bhardwaj",
    role: "Senior Advisor",
    initials: "HB",
    image: "assets/Honey-Bhardwaj.jpeg",
    bio: [
      "CS Honey Bhardwaj is an Associate Member of the Institute of Company Secretaries of India. She holds degrees in commerce and law, is a Junior Associate of the Indian Institute of Banking, and is certified in CSR and POSH matters.",
      "She has over 15 years of experience in corporate compliances and corporate trainings. Before joining the firm, she served with The South Indian Bank Limited for seven years and later built her independent practice.",
      "She is also a regular faculty member at the Institute of Company Secretaries of India."
    ]
  },
  swati: {
    name: "CA Swati Ahuja",
    role: "Senior Advisor",
    initials: "SA",
    image: "assets/swati-ahuja.jpeg",
    bio: [
      "CA Swati Ahuja is the founder of SWATI A & CO. and works as a Virtual CFO for startups and growing businesses.",
      "She is a practicing Chartered Accountant with expertise in financial services, capital markets, reporting, valuations, corporate restructuring, due diligence and strategic financial planning.",
      "Her work includes financial modelling, ESOP structuring, co-founder equity planning, compliance management and growth strategy."
    ]
  },
  rajni: {
    name: "Adv. Rajni Saini",
    role: "Taxation Executive",
    image: "assets/rajni-saini.jpeg",
    initials: "RS",
    bio: [
      "She is a practicing Lawyer in taxation matter registered with Bar Council of Punjab & Haryana, Chandigarh, holds a bachelor's degree in arts from Kurukshetra University, Kurukshetra and graduated in law from Dr. B. R. Ambedkar University, Jaipur, Rajasthan."
    ]
  },
  krishna: {
    name: "Mrs. Krishna Saini",
    role: "Accounting & Office Management",
    initials: "KS",
    image: "assets/krishna-saini.jpeg",
    bio: [
      "Mrs. Krishna Saini is a Graduate with 4 years of experience in taxation work and a thorough knowledge of tax-oriented computer software.",
      "She manages office operations and handles GST Registration, monthly/quarterly/annual GST Returns filing, and all day-to-day office-related matters.",
      "With sufficient experience in office management, she ensures the smooth running of administrative functions and timely completion of all client-related tasks."
    ]
  },
  priya: {
    name: "Mrs. Priya Vats",
    role: "GST & Income Tax Advisor",
    initials: "PV",
    image: "assets/priya-vats.jpeg",
    bio: [
      "Mrs. Priya Vats is a well-qualified taxation expert with 6 years of experience in direct and indirect taxation work, backed by excellent knowledge of tax-oriented computer software.",
      "Her areas of expertise include ITR filing, tax audits, GST returns filing, Shares & Mutual Fund Tax saving, TDS on sale of property and Assessment Proceedings before Income Tax and GST authorities.",
      "She handles GST Registration, monthly/quarterly/annual GST Returns filing, MSME Registration, Darpan Registration, Firm Registration, Society Registration, RWA Registration, and FSSAI Registration."
    ]
  },
  varsha: {
    name: "Ms. Varsha Saini",
    role: "Accounting & GST, TDS-TCS ",
    initials: "VS",
    image: "assets/varsha-saini.jpeg",
    bio: [
      "Ms. Varsha Saini is a Commerce Graduate with 5 years of experience in taxation work and excellent knowledge of tax-oriented computer software.",
      "She handles accounting, income tax, tax audits, GST and TDS-TCS returns filing on a monthly, quarterly, and annual basis.",
      "Her work also covers GST Registration and MSME Registration, ensuring clients remain fully compliant with their statutory obligations."
    ]
  },
  aakansha: {
    name: "Mrs. Aakanksha",
    role: "Office Management Assistant",
    initials: "AK",
    image: "assets/aakansha.jpeg",
    bio: [
      "Mrs. Aakanksha has more than 6 years of experience in office management work, efficiently overseeing all aspects of office administration.",
      "She ensures that all office tasks are completed on time, maintaining smooth day-to-day operations and supporting the advisory team with coordination, documentation, and client communication."
    ]
  }
};

const header = document.getElementById("siteHeader");
const scrollProgress = document.getElementById("scrollProgress");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("primaryNav");
const navItems = [...navLinks.querySelectorAll("a")];
const modal = document.getElementById("teamModal");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalAvatar = document.getElementById("modalAvatar");
const modalBody = document.getElementById("modalBody");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
let lastFocusedElement = null;

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function syncScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
}

function syncActiveNav() {
  const anchor = [...document.querySelectorAll("main section[id]")].reverse().find((section) => {
    return section.getBoundingClientRect().top <= 130;
  });

  navItems.forEach((link) => {
    link.classList.toggle("is-active", anchor && link.getAttribute("href") === `#${anchor.id}`);
  });
}

function closeNavigation() {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function openNavigation() {
  navLinks.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("is-open");
  if (isOpen) {
    closeNavigation();
  } else {
    openNavigation();
  }
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeNavigation();
  }
});

window.addEventListener("scroll", () => {
  syncHeader();
  syncScrollProgress();
  syncActiveNav();
}, { passive: true });
syncHeader();
syncScrollProgress();
syncActiveNav();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

function renderAvatar(member) {
  modalAvatar.className = "modal-avatar";
  modalAvatar.replaceChildren();

  if (member.image) {
    const image = document.createElement("img");
    image.src = member.image;
    image.alt = member.name;
    modalAvatar.classList.add("has-photo");
    modalAvatar.appendChild(image);
    return;
  }

  modalAvatar.textContent = member.initials;
}

function openModal(memberKey) {
  const member = teamMembers[memberKey];
  if (!member) return;

  lastFocusedElement = document.activeElement;
  modalName.textContent = member.name;
  modalRole.textContent = member.role;
  renderAvatar(member);

  modalBody.replaceChildren();
  member.bio.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    modalBody.appendChild(p);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".team-card").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.member));
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal.classList.contains("is-open")) {
      closeModal();
    }
    closeNavigation();
  }
});

function markInvalid(field, isInvalid) {
  const group = field.closest(".input-group");
  if (group) {
    group.classList.toggle("is-invalid", isInvalid);
  }
}

function validateContactForm(formData) {
  const fields = {
    name: contactForm.elements.namedItem("name"),
    email: contactForm.elements.namedItem("email"),
    subject: contactForm.elements.namedItem("subject"),
    message: contactForm.elements.namedItem("message")
  };

  let isValid = true;

  Object.entries(fields).forEach(([key, field]) => {
    const value = formData.get(key).trim();
    const invalid = value.length === 0 || (key === "email" && !field.validity.valid);
    markInvalid(field, invalid);
    if (invalid) isValid = false;
  });

  return isValid;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  if (!validateContactForm(formData)) {
    formStatus.textContent = "Please complete all fields with a valid email address.";
    formStatus.className = "form-status is-error";
    return;
  }

  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();

  // Try submitting directly to FormSubmit via AJAX first
  formStatus.textContent = "Sending your message...";
  formStatus.className = "form-status";

  fetch("https://formsubmit.co/ajax/THETAXBENEFIT@YAHOO.COM", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      _subject: subject,
      message: message
    })
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("AJAX submission failed");
  })
  .then(() => {
    formStatus.textContent = "Thank you! Your message has been sent successfully.";
    formStatus.className = "form-status is-success";
    contactForm.reset();
  })
  .catch((error) => {
    console.warn("Direct submission failed, falling back to mailto client:", error);
    
    // Fallback: Copy to clipboard and open default mail client
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message
    ].join("\n");
    
    const mailto = `mailto:THETAXBENEFIT@YAHOO.COM?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("THETAXBENEFIT@YAHOO.COM").then(() => {
        formStatus.textContent = "Email copied to clipboard! Opening your mail client...";
        formStatus.className = "form-status is-success";
      }).catch(() => {
        formStatus.textContent = "Opening your email client with a prepared message...";
        formStatus.className = "form-status is-success";
      });
    } else {
      formStatus.textContent = "Opening your email client with a prepared message...";
      formStatus.className = "form-status is-success";
    }
    
    window.location.href = mailto;
  });
});
