import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';
import { DESTRUCTION } from 'dns';

@Component({
  selector: 'app-cloudstorage',
  imports: [PanelComponent,NgFor],
  templateUrl: './cloudstorage.component.html',
  styleUrl: './cloudstorage.component.css'
})
export class CloudstorageComponent {
 items = [
    {
      title: 'What is cloud storage, and how does it work?',
      description:'Cloud storage is a digital storage solution that allows you to save and access data via the internet, rather than storing it locally on physical devices like hard drives or servers. Data is stored on remote servers maintained by cloud providers, making it accessible from anywhere with an internet connection.'
    },
    {
      title: 'Will I still be able to access my data if there’s an internet outage?',
      description:'Some cloud storage solutions allow for offline access, where files are synchronised to local devices and can be accessed without an internet connection. However, for real-time updates or large amounts of data, an active internet connection will be necessary.'
    },
    {
      title: 'Can cloud storage help my business comply with data protection regulations?',
      description: 'Yes, many cloud providers adhere to strict data protection regulations such as GDPR (General Data Protection Regulation). It’s important to choose a provider that can ensure compliance with local and international regulations, keeping your business legally protected.'
    },
    {
      title: 'How can cloud storage improve the reliability of my data?',
      description: 'Cloud storage offers enhanced reliability by automatically backing up your data across multiple data centres. This redundancy ensures that your information is safe, even if one server experiences downtime or failure. Most cloud providers also offer high uptime guarantees, reducing the risk of data loss.'
    },
    {
      title: 'Can I integrate cloud storage with my existing business systems?',
      description: 'Yes, most cloud storage providers offer seamless integration with commonly used business tools such as Microsoft 365, Google Workspace, and other productivity platforms. This allows for easy file sharing, collaboration, and streamlined workflows across teams.'
    },
    {
      title: 'How can I ensure my cloud storage usage remains cost-effective?',
      description: 'To optimise costs, regularly assess your storage needs and eliminate redundant or outdated data. Most providers offer usage analytics, allowing you to track how much storage you’re using and adjust your plan accordingly. You can also take advantage of tiered storage options, where frequently accessed data is stored on faster, more expensive servers, while less critical files are archived at a lower cost.'
    },
    {
      title: 'Can cloud storage help save costs for my business?',
      description: 'Yes, cloud storage is typically more cost-effective than traditional storage methods. It eliminates the need for expensive hardware, ongoing maintenance, and energy consumption associated with on-site servers. Cloud services also offer scalable plans, so you only pay for the storage you need, with the ability to upgrade or downgrade as your requirements change.'
    },
    {
      title: 'How do I choose the right cloud storage provider for my business?',
      description: 'When selecting a cloud storage provider, consider factors such as storage capacity, pricing, security features, scalability, and customer support. Providers that offer tailored solutions for your industry or business size can also be beneficial. Research customer reviews and look for those with a strong track record in uptime and security.'
    },
    {
      title: 'Is cloud storage suitable for businesses of all sizes?',
      description: 'Yes, cloud storage is a flexible solution that can cater to businesses of all sizes. Whether you’re a small startup or a large enterprise, cloud services can scale with your needs, allowing you to expand or reduce storage as your business grows.'
    },
    {
      title: 'How secure is my data in the cloud?',
      description: 'Cloud storage providers employ robust security measures such as encryption, multi-factor authentication, and access controls to ensure your data remains secure. Many providers are compliant with international security standards and regulations, giving you peace of mind that your sensitive information is protected.'
    },
    {
      title: 'What is the difference between public and private cloud storage?',
      description: 'Public cloud storage is hosted by third-party providers and shared across multiple users, offering cost efficiency and scalability. Private cloud storage, on the other hand, is dedicated solely to your business and may offer greater security and control, though typically at a higher cost. Hybrid cloud solutions combine elements of both, providing flexibility.'
    },
    {
      title: 'Can I switch cloud storage providers easily?',
      description: 'Yes, many cloud providers offer migration tools and services to make it easier to transfer your data between platforms. However, it’s essential to check if there are any associated costs or compatibility issues before switching providers. Planning and testing are key to a smooth migration.'
    },

  ];
}
