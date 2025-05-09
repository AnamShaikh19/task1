import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-itsupport',
  imports: [PanelComponent,NgFor],
  templateUrl: './itsupport.component.html',
  styleUrl: './itsupport.component.css'
})
export class ItsupportComponent {
   items = [
    {
      title: 'What is IT support, and why is it important?',
      description: 'IT support refers to the assistance provided to individuals and organisations regarding technology-related issues such as hardware failures, software problems, network outages, and cybersecurity threats. IT support is crucial to keeping systems running smoothly, ensuring business continuity, and maintaining security.'
    },
    {
      title: 'What is the average response time for IT support requests?',
      description: 'Our typical response time is within 15 to 30 minutes, depending on the urgency of the issue. We prioritise critical issues that may affect your business operations and work to resolve them as quickly as possible.'
    },
    {
      title: 'How much does IT support cost?',
      description: 'Our IT support costs vary depending on the level of service required and the size of your organisation. We offer flexible pricing models, including pay-as-you-go and monthly retainer options, to suit your budget and needs. Contact us for a free, no-obligation quote.'
    },
    {
      title: 'What types of IT support do you offer?',
      description: 'We offer a comprehensive range of IT support services, including remote and on-site support, network management, cybersecurity, software installation and troubleshooting, hardware repairs, and cloud solutions. Our services cater to businesses of all sizes.'
    },
    {
      title: 'How do you ensure the security of my data during IT support?',
      description: 'We take data security seriously. Our IT support team uses encrypted connections and industry-standard security protocols to protect your sensitive information. Additionally, we follow strict confidentiality policies to ensure your data remains secure at all times.'
    },
    {
      title: 'How can I request IT support from your team?',
      description: 'You can request IT support by calling our dedicated support line, sending us an email, or using our online support portal. Once we receive your request, one of our qualified technicians will be in touch to assist you.'
    },
    {
      title: 'Do you provide 24/7 IT support?',
      description: 'Yes, we provide 24/7 IT support to ensure that your business operations run smoothly at all times. Our dedicated support team is available to assist with any issues that arise, even outside of normal business hours.'
    },
    {
      title: 'Can you support our business as it grows?',
      description: 'Absolutely. Our IT support services are scalable, meaning we can easily adjust to your changing needs as your business expands. We’ll help you implement the right technology solutions to support your growth and ensure your IT infrastructure is always up to date.'
    },
    {
      title: 'What are the benefits of outsourcing IT support?',
      description: 'Outsourcing IT support offers several advantages, including cost savings, access to specialised expertise, reduced downtime, and improved efficiency. By relying on our professional IT support team, you can focus on growing your business while we manage your technology needs.'
    },
    {
      title: 'What is remote IT support, and how does it work?',
      description: 'Remote IT support allows us to troubleshoot and resolve issues without needing to visit your office. We securely connect to your systems to diagnose and fix problems, providing faster and more efficient service. Most issues can be resolved remotely, saving time and reducing downtime.'
    },
    {
      title: 'Do you offer IT support for remote workers?',
      description: 'Yes, we provide IT support for remote workers to ensure they can remain productive and connected from anywhere. We assist with VPN setups, cloud access, cybersecurity measures, and remote desktop solutions to keep your team working smoothly.'
    },

  ];


}
