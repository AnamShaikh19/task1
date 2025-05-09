import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-socialmedia',
  imports: [PanelComponent,NgFor],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.css'
})
export class SocialmediaComponent {
   items = [
    {
      title: 'What is Social Media Marketing?',
      description: 'Social media marketing (SMM) is the use of platforms like Facebook, Instagram, Twitter, LinkedIn, and others to promote your brand, engage with your audience, and drive traffic to your website. It involves creating and sharing content, running advertisements, and engaging with your community to increase visibility and achieve business goals.'
    },
     {
      title: 'How do I measure the success of my social media campaigns?',
      description: 'Success is measured by key metrics like engagement (likes, comments, shares), follower growth, website traffic, and conversions. We provide detailed reports and analytics to track your campaign’s performance and suggest areas for improvement.'
    },
     {
      title: 'How long does it take to see results from social media marketing?',
      description: 'Social media marketing is a long-term strategy. While some results, like increased engagement and follower growth, can be seen quickly, achieving significant business goals like conversions and website traffic often takes several months of consistent effort. Our team will guide you through each stage of your campaign.'
    },
     {
      title: 'Why is Social Media Marketing important for my business?',
      description: 'Social media marketing helps you reach a large and targeted audience, boosts brand awareness, increases website traffic, and provides valuable insights into your customer base. It’s also a cost-effective way to engage with potential and existing customers and drive conversions.'
    },
     {
      title: 'Should I invest in paid social media advertising?',
      description: 'Paid social media ads can significantly boost your reach and engagement, allowing you to target specific demographics and interests. It’s an effective way to promote special offers, increase brand visibility, and drive traffic to your website. We can help manage your ad campaigns to ensure a high return on investment.'
    },
     {
      title: 'What are the costs involved in social media marketing?',
      description: 'Costs depend on the scope of your campaign, including content creation, paid advertising, and management fees. We offer customised packages to fit your budget and ensure that you get the best return on your investment.'
    },
     {
      title: 'Which social media platforms should my business be on?',
      description: 'The best platforms for your business depend on your audience and goals. For example, B2B companies often find LinkedIn and Twitter valuable, while B2C businesses may benefit more from Instagram, Facebook, and TikTok. We can help you identify the right platforms based on your target market.'
    },
     {
      title: 'How can I grow my social media following?',
      description: 'Growing your following takes time and strategy. Regular, high-quality content, engaging with your audience, using relevant hashtags, running contests or promotions, and leveraging paid ads can help increase your follower count. We specialise in creating strategies to boost your social media presence organically and through advertising.'
    },
     {
      title: 'Can I manage my social media accounts myself?',
      description: 'Yes, but managing social media effectively requires time, creativity, and an understanding of each platform’s nuances. Many businesses find it beneficial to work with professionals who can create and manage campaigns while you focus on other aspects of your business.'
    },
     {
      title: 'How often should I post on social media?',
      description: 'Posting frequency varies by platform and audience. However, consistency is key. For most businesses, posting at least once a day on platforms like Instagram and Facebook, and several times a week on LinkedIn and Twitter, is ideal. We can help create a tailored posting schedule based on your specific goals.'
    },
     {
      title: 'What is influencer marketing, and should I use it?',
      description: 'Influencer marketing involves partnering with social media influencers who can promote your products or services to their audience. If done correctly, it can significantly increase your brand’s visibility and credibility. We can help you identify the right influencers and create a campaign that aligns with your brand.'
    },
     {
      title: 'Why should I choose your agency for social media marketing?',
      description: 'We specialise in creating data-driven, results-oriented social media strategies tailored to your business. Our team stays up-to-date with the latest trends and technologies to ensure your brand stays ahead of the competition. We focus on delivering measurable results that align with your business objectives.'
    },
     {
      title: 'What kind of content should I post?',
      description: 'Your content should be engaging, informative, and relevant to your audience. This can include product updates, blog posts, industry news, behind-the-scenes looks at your business, and customer testimonials. Visual content, such as images and videos, tends to perform particularly well on most platforms.'
    },
     {
      title: 'Can social media help with search engine optimisation (SEO)?',
      description: 'Yes, social media can indirectly impact your SEO. By driving more traffic to your website and increasing brand awareness, your social presence can contribute to higher search engine rankings. Additionally, social media profiles themselves often rank in search results, giving your brand more visibility.'
    },
     {
      title: 'How do I get started with social media marketing?',
      description: 'Getting started is easy! Contact us for a consultation, and we’ll discuss your goals, identify the best platforms for your business, and develop a strategy to grow your online presence.'
    },
  ];

}
