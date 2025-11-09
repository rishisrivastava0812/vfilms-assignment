
import Container from './UI/Container.jsx';
import ContactForm from './ContactForm.jsx';

export default function ContactUsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="contact-section">
   
      <img src="/contact/Footer-Vector2.png" alt="decor left" className="pointer-events-none select-none absolute left-0 bottom-0 w-80 opacity-100" draggable={false} />
      <img src="/contact/FooterVector.png" alt="decor right" className="pointer-events-none select-none absolute right-0 -top-10 w-96 opacity-100" draggable={false} />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
         
          <div className="order-2 lg:order-1 text-ink/90 leading-7 mt-10">
            <p>Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.</p>
            <p className="mt-3">Let's catch up over coffee.</p>
            <p>Great stories always begin with a good conversation</p>
           
          </div>

          
          <div className="order-1 lg:order-2">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-serif text-ink">Join the Story</h2>
              <p className="text-ink/80 mt-2">Ready to bring your vision to life? Let's talk.</p>
            </div>
            
            <ContactForm />
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-ink/80">
              <a href="mailto:vernita@varnanfilms.co.in" className="text-accent">
                vernita@varnanfilms.co.in
              </a>
              <p className='text-accent'>|</p>
              <a href="tel:+919873694567" className="text-accent">
                +91 98736 94567
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}