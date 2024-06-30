"use client";
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long will the event last?",
      answer: "The event is expected to last approximately 5 hours. However, please note that the exact duration may vary depending on the program and activities scheduled for the day. We encourage you to check the event schedule for specific timings."
    },
    {
      question: "Can I purchase tickets at the door, or do I need to buy them in advance?",
      answer: "Tickets must be purchased in advance. We will not be selling tickets at the door to ensure a smooth and organized entry process for all attendees. You can purchase your tickets online through our website or at designated ticket outlets."
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Yes, there is parking available at the venue for your convenience. We have a dedicated parking area, and the cost to park is $5 per vehicle. Please have cash or card ready for payment, and our parking attendants will guide you to available spots."
    },
    {
      question: "Is photography and videography allowed during the event?",
      answer: "Yes, you are welcome to take photos and videos for personal use. We encourage you to capture and share your memorable moments with friends and family. However, please be respectful of other guests' privacy and avoid using flash photography, as it can be distracting. If you plan to use professional or large-scale equipment, please contact our event organizers for prior approval."
    },
    {
      question: "What should I wear to the event?",
      answer: "We recommend dressing comfortably and according to the event's theme if there is one. Many attendees choose casual or semi-formal attire. Keep in mind that the event may be held indoors and outdoors, so it's a good idea to check the weather forecast and dress accordingly. Don't forget to wear comfortable shoes, as you may be doing some walking."
    },
    {
      question: "Are food and beverages available at the event?",
      answer: "Yes, there will be a variety of food and beverage options available at the event. We have food stalls offering a wide range of delicious snacks, meals, and drinks. Whether you prefer something sweet or savory, vegetarian or non-vegetarian, you'll find something to satisfy your cravings. Please note that outside food and beverages are not allowed inside the event."
    },
    {
      question: "Is there an age restriction for the event?",
      answer: "The event is open to all ages, and we welcome attendees of different age groups. However, for certain activities or sections of the event that may have age restrictions or content unsuitable for minors, we will clearly mark and enforce those restrictions. We advise parents and guardians to use their discretion when bringing children to the event."
    },
    {
      question: "Can I get a refund for my ticket if I can't attend the event?",
      answer: "Unfortunately, we do not offer refunds for tickets once they have been purchased. However, if you find that you cannot attend the event, you may transfer your ticket to someone else or resell it."
    }
  ];  

  return (
    <div className="mx-auto py-10">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex justify-between items-center px-4 py-2 text-left text-md xs:text-xl font-semibold text-gray-900 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-2 py-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;