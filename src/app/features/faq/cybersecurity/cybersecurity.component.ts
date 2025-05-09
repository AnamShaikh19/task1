import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cybersecurity',
  imports: [PanelComponent,NgFor],
  templateUrl: './cybersecurity.component.html',
  styleUrl: './cybersecurity.component.css'
})
export class CybersecurityComponent {
 items = [
    {
      title: 'What is Cyber Security?',
      description:' Cyber security refers to the practices, technologies, and processes designed to protect systems, networks, and data from cyber threats such as hacking, malware, phishing, and other forms of cybercrime.'
    },
    {
      title: 'What are the penalties for a data breach in the UK?',
      description:'Under the General Data Protection Regulation (GDPR), companies can face severe fines for failing to protect personal data. Penalties can be up to 4% of annual global turnover or €20 million, whichever is higher.'
    },
    {
      title: 'What is GDPR, and how does it relate to cyber security?',
      description:'The General Data Protection Regulation (GDPR) is a regulation that protects personal data within the European Union. It requires businesses to have strict security measures in place to protect the personal data they handle. Non-compliance can lead to hefty fines.'
    },
     {
      title: 'Why is Cyber Security important for businesses?',
      description:'Cyber security is crucial for safeguarding sensitive information, protecting customer data, and ensuring business continuity. Without adequate protection, businesses are at risk of financial losses, reputational damage, and legal penalties.'
    },
     {
      title: 'How often should I update my cyber security measures?',
      description:'Cyber security should be reviewed and updated regularly. Software patches and updates should be installed as soon as they are available, and periodic security audits should be conducted to identify potential vulnerabilities.'
    },
     {
      title: 'What should I do if my business experiences a cyber attack?',
      description:'If your business is under attack:– Isolate the affected systems immediately to prevent the spread.– Notify your IT or cyber security team.– Inform relevant authorities, such as the NCSC or Action Fraud.– Conduct a post-attack analysis to strengthen future defences.'
    },
     {
      title: 'What are the most common types of cyber threats?',
      description:'Common cyber threats include: Phishing: Scams that trick users into revealing sensitive information. Malware: Malicious software that can harm systems or steal data. Ransomware: A type of malware that locks data until a ransom is paid. DDoS Attacks: Distributed Denial of Service, overwhelming a system with traffic.'
    },
     {
      title: 'What is two-factor authentication, and why should I use it?',
      description:'Two-factor authentication (2FA) adds an extra layer of security by requiring two forms of identification before granting access to an account. This can be something you know (password) and something you have (mobile device or token), making it much harder for attackers to gain access.'
    },
     {
      title: 'What is penetration testing?',
      description:'Penetration testing is a method used by businesses to simulate a cyber attack on their systems. This test helps identify vulnerabilities that real attackers could exploit and enables companies to fix them before they can be taken advantage of.'
    },
     {
      title: 'How can I protect my business from cyber attacks?',
      description:'Key steps to protect your business include: – Implementing strong firewalls and anti-virus software. – Regularly updating software and systems. – Training employees on cyber security best practices. – Using multi-factor authentication (MFA) for sensitive accounts. – Backing up data regularly to avoid loss during an attack.'
    },
     {
      title: 'How do I report a cyber attack?',
      description:'In the UK, you can report cyber attacks to the National Cyber Security Centre (NCSC) or Action Fraud. Immediate reporting can help minimise damage and protect others from falling victim to similar attacks.'
    },
     {
      title: 'How can I ensure my employees follow cyber security best practices?',
      description:'Provide regular training sessions on cyber security, highlight the latest threats, and create clear guidelines for using company systems and data securely. Encouraging a security-first mindset within your workforce can help prevent many common cyber threats.'
    },
     {
      title: 'What is phishing and how can I prevent it?',
      description:'Phishing is a method where attackers send fraudulent communications to trick individuals into revealing personal or financial information. To prevent phishing: – Avoid clicking on suspicious links in emails. – Verify the sender’s address before responding to any request for information. – Use anti-phishing software.'
    },
     {
      title: 'Does my business need a cyber security policy?',
      description:'Yes, having a comprehensive cyber security policy is essential. It sets guidelines for protecting data, using systems securely, and responding to potential threats. This policy ensures all employees understand their role in safeguarding the organisation’s digital assets.'
    },
     {
      title: 'What is the difference between a firewall and antivirus software?',
      description:'Firewall: A firewall monitors incoming and outgoing traffic and blocks unauthorised access to your network. Antivirus Software: Antivirus software scans and removes malicious software from your system. Both are essential components of a robust cyber security defence.'
    },

  ];
}
