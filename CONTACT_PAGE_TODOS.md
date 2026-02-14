# Contact Page - Future Development

## Current Status
- ✅ Contact page created and routed to `/contact`
- ✅ Navigation link updated
- ✅ Quick Links section added
- ✅ Consistent footer with Home page
- ⚠️ Form submission not functional (see below)

## TODO - Contact Form Functionality

### HIGH PRIORITY
- [ ] **Implement Form Submission Handler**
  - Choose backend solution:
    - Option 1: Discord Webhook (free, no signup if team Discord exists)
    - Option 2: Node.js backend with database (Render/Replit + MongoDB)
    - Option 3: Third-party email service (EmailJS, Formspree)
  
- [ ] **Add Spam Protection**
  - Implement rate limiting (max 1 submission per minute per IP)
  - Add input validation (email format, min/max length)
  - Consider honeypot field (hidden input to catch bots)

### MEDIUM PRIORITY
- [ ] **Form UX Improvements**
  - Add loading state while submitting
  - Show success/error messages to user
  - Clear form after successful submission
  - Add form validation feedback

- [ ] **Contact Information**
  - Add team email/contact details to page
  - Add physical location/meeting times
  - Add social media links

### LOW PRIORITY
- [ ] Add reCAPTCHA for enhanced bot protection
- [ ] Store contact submissions in database for admin review
- [ ] Add email confirmation to user
- [ ] Create admin dashboard to view submissions

## Notes
- Discord Webhook requires webhook URL setup in Discord server
- Any backend solution should include origin validation to prevent abuse
- Consider adding required field indicators to form
