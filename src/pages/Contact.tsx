
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Have recipe ideas or suggestions? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
