## **Landing Page Specification – B2B Messaging Web Application**

### **Overview**

This landing page is designed for a B2B web application targeting business users who write professional emails and messages. The visual and interaction design will follow the clean, modular, and enterprise-friendly style of Atlassian’s web interfaces.

---

### **Global Components**

* **Top Navigation Bar**

  * Reuse the existing navigation component from the main web application.
  * Must be responsive and include primary navigation items, such as “Product”, “Pricing”, “Docs”, and “Login/Signup”.

---

### **Block 1: Hero Introduction**

**Layout:**
Two-column layout (Left: text / Right: visual media)

**Left Section**

* **Title**: Concise and compelling (e.g., “Write Smarter, Communicate Better”)
* **Subtitle**: Supporting value proposition line (e.g., “AI-powered writing assistance for business professionals”)
* **Description Text**: 2–4 lines describing the core value and problem it solves.

**Right Section**

* **Media Component**: Placeholder for an animated GIF or static image

  * Accepts either `.gif` or `.webp` formats
  * Shows product demo, user scenarios, or solution impact

**Styling**

* Professional, light-themed background
* Optional decorative elements (e.g., soft gradients, abstract business-themed vector patterns)
* Design cues should reflect Atlassian-style calm professionalism

---

### **Block 2: Core Features or Problems Solved**

**Layout:**
Three horizontally aligned feature cards

**Header:**

* Block title (e.g., “Why Teams Choose Us”)

**Each Feature Card Includes:**

* **Icon or Image**: Profile-style or concept icon
* **Title**: Brief, benefit-focused headline
* **Text Description**: 2–3 lines explaining the feature or problem it solves

**Styling**

* Cards should be responsive
* Hover effects encouraged for interactivity
* Maintain visual harmony with Block 1

---

### **Block 3: Interactive Explanation + Demo Video**

**Layout:**
Two-part layout:

* Left: Vertical scrollable stack of expandable text blocks
* Right: Sticky/fixed video player

**Left Section – Scrollable Content**

* Multiple blocks, each containing:

  * **Title**: Key feature/benefit
  * **Subtitle**: Supporting line
  * **Description**: Rich text (up to 4 lines)
* Must support vertical navigation with smooth scrolling or snapping

**Right Section – Fixed Element**

* **Video Player**

  * Stays fixed to the user’s viewport as they scroll through the left section
  * Accepts uploaded video formats (`.mp4`, `.webm`)
  * Should auto-play (muted), loop, or allow user control based on user interaction preferences

**Styling**

* Ensure clear separation between scrollable and fixed zones
* Responsive for various viewports while maintaining fixed behavior on desktop
