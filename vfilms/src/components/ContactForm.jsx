
import { useState, useRef } from 'react';

import Input from './UI/Input.jsx';
import Textarea from './UI/Textarea.jsx';
import Button from './UI/Button.jsx';
import { validateContact } from '../lib/validators';
import { postContact } from '../lib/api';

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [toast, setToast] = useState(null);
  
  const formRef = useRef(null);
  const abortControllerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    
    const validationErrors = validateContact(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    
    abortControllerRef.current = new AbortController();
    const timeoutId = setTimeout(() => abortControllerRef.current?.abort(), 10000);

    try {
      await postContact(values, abortControllerRef.current.signal);
      
     
      setValues((prev) => ({ ...prev, message: 'Form Submitted' }));
      setIsDisabled(true);
      setToast('Form submitted successfully');
      setTimeout(() => setToast(null), 3000);
      
      setTimeout(() => {
        setValues({ name: '', email: '', phone: '', message: '' });
        setIsDisabled(false);
      }, 3000);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          setSubmitError('Request timed out. Please try again.');
        } else {
          setSubmitError('Something went wrong. Please try again.');
        }
        console.error('Form submission error:', error);
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
   
    <>
     
      {toast && (
        <div className="fixed top-4 right-4 z-[70] bg-green-600 text-white px-4 py-2 rounded shadow-lg" role="status" aria-live="polite">
          {toast}
        </div>
      )}

     
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
        <Input
          label="Your name*"
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          error={errors.name}
          required
          disabled={isDisabled}
          placeholder="John Doe"
        />

        <Input
          label="Your email*"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          error={errors.email}
          required
          disabled={isDisabled}
          placeholder="john@example.com"
        />

        <Input
          label="Phone"
          type="tel"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          error={errors.phone}
          required
          disabled={isDisabled}
          placeholder="+1 234 567 8900"
        />

        <Textarea
          label="Your message*"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          error={errors.message}
          required
          disabled={isDisabled}
          placeholder="Tell us about your project..."
        />

        {submitError && (
          <div
            className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
            role="alert"
            aria-live="polite"
          >
            {submitError}
          </div>
        )}

       
        <div className="text-center pt-2">
          <Button type="submit" isLoading={isSubmitting} disabled={isDisabled}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}