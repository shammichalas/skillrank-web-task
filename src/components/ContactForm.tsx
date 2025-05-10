
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAppSettings } from "@/context/AppSettingsContext";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useAppSettings();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    if (!formRef.current) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    // Send email using emailjs
    emailjs.sendForm(
      'service_bym1ezo', 
      'template_noo0oss', 
      formRef.current, 
      {
        publicKey: 'kSsnF84_M1LHBzU0R',
      }
    )
    .then(
      () => {
        console.log("Email sent successfully!");
        toast({
          title: "Message Sent",
          description: "Thank you for your ideas! We'll get back to you soon.",
        });
        form.reset();
      },
      (error) => {
        console.error("Email sending failed:", error.text);
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      }
    )
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Share Your Ideas</h2>
      </div>
      
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} name="user_name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} name="user_email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Ideas</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your recipe ideas or suggestions..."
                    className="min-h-32"
                    {...field}
                    name="message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
