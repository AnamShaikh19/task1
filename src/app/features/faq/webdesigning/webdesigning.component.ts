import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-webdesigning',
  imports: [PanelComponent,NgFor],
  templateUrl: './webdesigning.component.html',
  styleUrl: './webdesigning.component.css'
})
export class WebdesigningComponent {
   items = [
    {
      title: 'What is web design, and why is it important?',
      description: 'Web design refers to the creation and design of websites. It covers aspects such as layout, user interface (UI), graphics, and overall functionality. A well-designed website is crucial as it enhances user experience, improves navigation, and helps your business stand out online.'
    },
     {
      title: 'What is mobile-responsive design, and why is it essential?',
      description: 'Mobile-responsive design ensures that your website adapts to different screen sizes and devices, such as smartphones and tablets. With the majority of users browsing the internet on mobile devices, having a responsive site is critical for user experience and SEO rankings.'
    },
     {
      title: 'What is the difference between web design and web development?',
      description: 'Web design focuses on the visual layout, look, and feel of a website, while web development involves the coding and technical aspects that make the website function. In many projects, web design and development go hand-in-hand to create a fully functional and aesthetically pleasing website.'
    },
     {
      title: 'What are the key elements of effective web design?',
      description: 'Effective web design includes: * User-friendly navigation: Ensuring visitors can easily find what they’re looking for. * Mobile responsiveness: Making sure your site works seamlessly on all devices. * Fast loading times: A slow website can deter visitors and hurt your ranking on search engines. * Strong visual elements: Using images, videos, and engaging graphics to hold attention. * Clear calls to action (CTAs): Encouraging users to take specific actions, such as making a purchase or contacting you.'
    },
     {
      title: 'How much does web design cost?',
      description: 'The cost of web design varies based on factors like site complexity, features, and design customisation. A basic business website may start from £500, while a more elaborate e-commerce site could range between £2,000 and £5,000. Contact us for a personalised quote based on your needs.'
    },
     {
      title: 'Will my website include analytics and tracking tools?',
      description: 'Yes, we can integrate tools like Google Analytics to track website performance, visitor behaviour, and conversion rates. These insights help you understand your audience and improve your online strategy over time.'
    },
     {
      title: 'Why should I invest in professional web design rather than DIY tools?',
      description: 'While DIY website builders may seem cost-effective, a professional web designer ensures a unique, tailored website that aligns with your business goals. Professionals offer expert knowledge in design, coding, SEO (Search Engine Optimisation), and user experience, helping you create a site that not only looks great but also performs well on search engines.'
    },

     {
      title: 'Will my website be optimised for search engines?',
      description: 'Yes, we design all websites with SEO best practices in mind. This includes optimising page titles, meta descriptions, and using clean code to ensure your site ranks well on search engines like Google. We also offer ongoing SEO services to help you stay competitive.'
    },
     {
      title: 'Can you redesign my existing website?',
      description: 'Yes, we offer website redesign services to improve the look, functionality, and performance of your current site. Whether you need a visual refresh or a complete overhaul, we can help you modernise your online presence.'
    },
     {
      title: 'How long does it take to design and launch a website?',
      description: 'The time frame varies depending on the complexity and scope of the project. A basic website can take 2-4 weeks, while more complex sites with advanced functionality may require 6-8 weeks or longer. We work closely with you to meet deadlines without compromising on quality.'
    },

     {
      title: 'Can I update my website content after it’s live?',
      description: 'Absolutely! We can build your website on a content management system (CMS) like WordPress, which allows you to easily update and manage your content without needing advanced technical skills. We also provide training and support to help you navigate the CMS.'
    },
     {
      title: 'How do I get started with a web design project?',
      description: 'To get started, simply contact us via phone or fill out our enquiry form. We’ll schedule a consultation to understand your business needs, goals, and preferences. From there, we’ll provide a detailed proposal and timeline to begin your project.'
    },
  ];
}
