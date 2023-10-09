"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Copyright from "@/components/Copyright";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate API request success
    setIsLoading(false);
    setIsSuccess(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex w-[80vw] flex-col  justify-end items-center self-end object-end h-full pt-20">
      <div className="w-full h-[80vh] flex flex-col items-center justify-center">
        <div className="w-1/2 p-6 bg-[#89608f] rounded-lg ">
          <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

          {isSuccess ? (
            <p className="text-green-500 mb-6">Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-900 font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-900 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-900 font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border text-gray-900 border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          )}
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default ContactPage;
