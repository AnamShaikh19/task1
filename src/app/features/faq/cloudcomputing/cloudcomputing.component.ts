import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cloudcomputing',
  imports: [PanelComponent,NgFor],
  templateUrl: './cloudcomputing.component.html',
  styleUrl: './cloudcomputing.component.css'
})
export class CloudcomputingComponent {
  items = [
    {
      title: 'What are the main cost-saving benefits of cloud computing?',
      description: '* Pay-as-you-go: You only pay for the resources you use. * Scalability: Easily scale up or down based on your needs, so you’re not paying for unused capacity. * No hardware costs: Reduce the need for physical servers, storage, and data centres.* Lower energy costs: With fewer on-premises servers, your business saves on electricity and cooling.'
    },
    {
      title: 'How does cloud computing reduce IT maintenance costs?',
      description: 'Cloud service providers handle much of the maintenance, including software updates, security patches, and hardware replacements. This reduces the burden on your IT team, allowing them to focus on more strategic tasks rather than routine maintenance' },
    {
      title: 'What are hybrid cloud solutions, and how do they reduce costs?',
      description: 'A hybrid cloud solution combines private cloud (on-premises or dedicated) and public cloud services. This gives businesses more flexibility, allowing them to keep sensitive workloads in a private environment while taking advantage of the cost-efficiency of public cloud for less critical tasks. By using the right combination, you can optimise performance and minimise expenses' },
    {
      title: 'How can cloud computing improve reliability?',
      description: 'Cloud providers offer robust infrastructure with redundancy, automatic backups, and failover systems to ensure high availability. Most cloud services come with Service Level Agreements (SLAs) guaranteeing uptime, so your business can benefit from continuous operations with minimal disruptions.' },
    {
      title: 'How does cloud computing improve scalability?',
      description: 'Cloud platforms allow you to scale your resources quickly and efficiently. Whether you need more storage, computing power, or network capacity, the cloud can adjust in real time to meet demand, helping you avoid downtime and unnecessary expenses.' },
    {
      title: 'How can I ensure I’m getting the most cost savings from my cloud services?',
      description: 'To maximise cost savings * Monitor usage: Regularly review your cloud usage to identify any unused or underutilised resources.* Automate scaling: Use cloud-native tools to automatically scale resources up and down based on real-time demand.* Use reserved instances: If you know your long-term needs, committing to reserved instances can provide significant discounts.* Rightsize your instances: Regularly review and adjust the size of your cloud resources to match your needs.' },
    {
      title: 'What is cloud computing?',
      description: 'Cloud computing refers to the delivery of computing services such as servers, storage, databases, networking, software, and analytics over the internet (“the cloud”). It enables businesses to access technology resources on demand, without the need for physical infrastructure.' },
    {
      title: 'Is cloud computing secure?',
      description: 'Major cloud providers invest heavily in security, offering built-in security measures such as encryption, identity management, firewalls, and multi-factor authentication. By leveraging these tools and maintaining good security practices, cloud environments can be more secure than traditional on-premise setups.' },
    {
      title: 'Are there any hidden costs with cloud computing?',
      description: 'While cloud computing offers clear cost advantages, it’s important to consider factors such as data transfer fees, licensing for certain software, and any potential costs for third-party integrations. Monitoring and optimising your cloud usage can help avoid unexpected charges.' },
    {
      title: 'Will cloud computing save my business money?',
      description: 'Yes, cloud computing can significantly reduce costs. By shifting from a capital expenditure model (buying hardware and software) to an operational expenditure model (paying for what you use), you avoid large upfront investments. You also eliminate the need for physical maintenance, reducing costs related to IT management and hardware updates.'
     },
    {
      title: 'Can cloud computing help with disaster recovery?',
      description: 'Yes, cloud solutions often include automated backups, geographic redundancy, and recovery services that make disaster recovery more efficient and cost-effective. This means your business can bounce back quickly in the event of a system failure or cyber-attack, without costly downtime or data loss.' },
    {
      title: 'How do I migrate my business to the cloud?',
      description: 'Migrating to the cloud involves assessing your current infrastructure, choosing the right cloud provider, and planning the migration process. Many cloud providers offer migration tools and services, and working with an experienced cloud partner can make the transition smoother and more cost-effective.' },
  ];

}
