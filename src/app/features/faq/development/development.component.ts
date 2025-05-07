import { Component, signal } from '@angular/core';



import { RouterLink } from '@angular/router';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-development',
  imports: [PanelComponent,NgFor],
  templateUrl: './development.component.html',
  styleUrl: './development.component.css'
})
export class DevelopmentComponent{

  items = [
    {
      title: 'What is application development?',
      description: 'Application development refers to the process of designing, creating, and maintaining software applications. It includes stages like planning, coding, testing, and deploying apps that solve specific business problems or enhance user experience..'
    },
    {
      title: 'How much does it cost to develop an application?',
      description: 'The cost of application development varies based on factors such as complexity, features, platform (iOS, Android, or both), and the level of customisation required. Costs can range from £10,000 for a basic app to £100,000 or more for a complex, multi-functional application.' },
    {
      title: 'What is agile development, and do you use it?',
      description: 'Agile development is an iterative approach that focuses on flexibility, collaboration, and customer feedback. We adopt agile methodologies to ensure faster delivery of high-quality applications, with regular updates and opportunities for client feedback throughout the process.' },
    {
      title: 'Why is custom application development important for businesses?',
      description: 'Custom application development allows businesses to create tailored solutions that meet their specific needs, improve operational efficiency, and enhance customer engagement. Unlike off-the-shelf software, custom applications offer greater flexibility, scalability, and the ability to adapt to changing business requirements.' },
    {
      title: 'Is parking available at the restaurant?',
      description: 'Yes, we have a parking lot adjacent to the restaurant, and street parking is also available. Valet parking is offered on weekends.' },
    {
      title: 'Will my app be scalable as my business grows?',
      description: 'Yes, scalability is a crucial consideration during development. We design applications that can grow with your business, handling increased traffic, new features, and larger data volumes efficiently without compromising performance.' },
    {
      title: 'How long does it take to develop a mobile or web application?',
      description: 'The development timeline depends on the complexity and scope of the project. A simple application may take 3-6 months, while more complex solutions could take 9 months or longer. Factors like design, functionality, testing, and feedback cycles also influence the time required.' },
    {
      title: 'Can I get both iOS and Android versions of my app?',
      description: 'Yes, you can develop apps for both iOS and Android platforms. You may opt for native development, which builds separate apps for each platform, or cross-platform development, which allows you to build one app that works on both platforms using frameworks like React Native or Flutter.' },
    {
      title: 'How do I choose the right application development partner?',
      description: 'When choosing an application development partner, look for experience, a strong portfolio, transparent communication, and a clear understanding of your business needs. Check client testimonials and case studies to ensure they have a proven track record of delivering quality applications.' },
    {
      title: 'What are the key stages of the application development process?',
      description: 'he key stages of application development include: Planning & Requirements Gathering: Understanding business needs.Design: Creating user interfaces and experiences (UI/UX).Development: Coding the application. Testing: Ensuring the app is functional, secure, and bug-free. Deployment: Launching the app for use. Maintenance & Support: Providing updates and fixes as required'
     },
    {
      title: 'Can you integrate third-party services into my application?',
      description: 'Yes, third-party integrations are common in application development. We can connect your app with services like payment gateways (Stripe, PayPal), social media platforms, analytics tools, and more, depending on your business requirements.' },
    {
      title: 'How can a well-developed application improve user engagement?',
      description: 'A well-designed application improves user engagement by offering a seamless, intuitive experience. Features like push notifications, personalised content, and easy-to-use navigation encourage users to spend more time on your app, resulting in higher customer satisfaction and retention' },
    {
      title: 'What technologies are commonly used in application development?',
      description: 'Common technologies include:Frontend: HTML, CSS, JavaScript, Angular, React. Backend: Node.js, Python, Java, PHP.Databases: MySQL, PostgreSQL, MongoDB. Mobile: Swift (iOS), Kotlin/Java (Android), React Native, Flutter.' },
    {
      title: 'Do you offer ongoing maintenance and support after the application is launched?',
      description: 'Absolutely! We provide ongoing maintenance and support packages to ensure your app runs smoothly, remains secure, and is updated with new features or improvements as needed.' },
    {
      title: 'How do I get started with my application development project?',
      description: 'Getting started is easy! Simply contact us for an initial consultation where we’ll discuss your ideas, business objectives, and technical requirements. From there, we can develop a tailored plan to bring your application to life.' },
  ];
}


