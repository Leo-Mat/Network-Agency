import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

interface AccordionItem {
  title: string;
  content: string;
}

const FaqAccordion = () => {

  // state to save the index of the current accordion items is active, if any
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionItems: AccordionItem[] = [
    {
      title: "What's the customer support like?",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales lectus sed lorem gravida placerat.',
    },
    {
      title: 'What does your reporting look like?',
      content:
        'Fusce bibendum lobortis lectus at fringilla. Integer in dolor in nunc cursus ultricies. Sed venenatis, velit et.',
    },
    {
      title: 'What does your training look like?',
      content:
        'Nulla facilisi. Vestibulum accumsan ultrices arcu, non finibus diam consectetur vitae. Nunc id risus ac.',
    },
    {
      title: 'What type of agencies do you work?',
      content:
        'Proin tempus est vitae lorem gravida, ut tristique lorem euismod. Vivamus suscipit nibh in dolor.',
    },
    {
      title: 'Is there any on-going training?',
      content:
        'Donec tristique tristique leo, eget malesuada velit aliquet non. Etiam finibus ultrices mi, sed facilisis nulla.',
    },
    {
      title: 'What if my clients need technical help?',
      content:
        'Maecenas consequat quam sit amet mi aliquam consequat. Fusce id gravida tellus, id fermentum massa.',
    },
  ];

  // gets the index and then sets it to active opening the selected element and closes whichever is active, if any
  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-[570px] divide-y-[1px] divide-white/10 py-7">
      <AnimatePresence mode="wait">
        {accordionItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="py-6 text-white"
            layout="position"
            transition={{ duration: 0.3 }}>
            {/* title + chevron icon for each of the faq accordions */}
            <div
              onClick={() => handleClick(index)}
              className="flex cursor-pointer items-center justify-between">
              <motion.h1
                layout="position"
                className="pointer select-none font-openSans text-2xl font-semibold">
                {item.title}
              </motion.h1>
              <motion.div
                layout="position"
                className="mx-2 w-6"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <IoIosArrowDown className="text-2xl" />
              </motion.div>
            </div>
            {/* title + chevron icon for each of the faq accordions ends */}

            {/* if active index is equal to the index opens the accordion */}
            {activeIndex === index && (
              <motion.p
                className="max-w-md pt-3 font-atkinson opacity-60"
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}>
                {item.content}
              </motion.p>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordion;
