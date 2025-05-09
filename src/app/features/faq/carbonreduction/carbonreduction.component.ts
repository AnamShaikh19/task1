import { Component } from '@angular/core';
import { PanelComponent } from '../../../core/components/panel/panel.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carbonreduction',
  imports: [PanelComponent,NgFor],
  templateUrl: './carbonreduction.component.html',
  styleUrl: './carbonreduction.component.css'
})
export class CarbonreductionComponent {
  items = [
    {
      title: 'What is a Carbon Reduction Plan?',
      description: 'A Carbon Reduction Plan outlines a business’s strategy and actions to reduce its greenhouse gas emissions. It typically includes specific targets, timelines, and initiatives aimed at minimising carbon output and improving sustainability.'
    },
      {
      title: 'How do I measure carbon emissions?',
      description: 'Carbon emissions are measured in terms of “Scopes” defined by the Greenhouse Gas Protocol: Scope 1: Direct emissions from owned or controlled sources (e.g., company vehicles, fuel combustion). Scope 2: Indirect emissions from the generation of purchased electricity, heat, or steam. Scope 3: All other indirect emissions in the value chain (e.g., supply chain emissions, employee travel).'
    },
      {
      title: 'What are Scope 1, Scope 2, and Scope 3 emissions?',
      description: 'Scope 1: Direct emissions from company-owned or controlled sources (e.g., company vehicles, on-site energy generation). Scope 2: Indirect emissions from the generation of purchased electricity, steam, heating, and cooling. Scope 3: All other indirect emissions that occur in the company’s value chain (e.g., business travel, supply chain, waste disposal).'
    },
      {
      title: 'Why is a Carbon Reduction Plan important?',
      description: 'A CRP is vital for addressing climate change, reducing environmental impact, and meeting the UK’s legally binding net-zero emissions target by 2050. It also helps businesses align with regulatory requirements and improve their sustainability credentials, which can attract eco-conscious customers and investors.'
    },
      {
      title: 'What should be included in a Carbon Reduction Plan?',
      description: 'A CRP typically includes: A baseline of current carbon emissions.Short-, medium-, and long-term emission reduction targets. Strategies for reducing emissions (e.g., energy efficiency, renewable energy adoption). Reporting and monitoring frameworks to track progress. How can I reduce my carbon emissions?'
    },
      {
      title: 'How often should a Carbon Reduction Plan be updated?',
      description: 'It is recommended to review and update your CRP annually to reflect any changes in your emissions, progress towards goals, and new regulations. Regular updates ensure that your strategies remain effective and aligned with your reduction targets.'
    },
      {
      title: 'Is a Carbon Reduction Plan mandatory?',
      description: 'For some sectors and industries, particularly those engaging in government contracts or high-carbon industries, it’s becoming mandatory. Many UK businesses are required to have a carbon reduction plan to bid for public sector contracts valued above £5 million. However, it’s recommended for all businesses to demonstrate their commitment to sustainability.'
    },
      {
      title: 'How can I reduce my carbon emissions?',
      description: 'There are several strategies for reducing emissions, including: Switching to renewable energy sources (e.g., solar, wind). Improving energy efficiency in buildings and equipment. Reducing travel by using virtual meetings or adopting low-emission vehicles. Encouraging sustainable practices within your supply chain.'
    },
      {
      title: 'How can I set realistic carbon reduction targets?',
      description: 'Targets should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Start by assessing your current emissions and consider incremental targets to make gradual reductions, aligned with scientific recommendations for limiting global temperature rise.'
    },
      {
      title: 'Where can I get help with creating a Carbon Reduction Plan?',
      description: 'There are various consultancy services and government resources available to help businesses develop and implement a CRP. The UK government offers guidance through its Carbon Trust and other sustainability organisations that provide tools, advice, and support for businesses at all stages of their carbon reduction journey.'
    },
      {
      title: 'What are the benefits of implementing a Carbon Reduction Plan?',
      description: 'Cost savings: Increased energy efficiency often leads to reduced operating costs. Reputation: Enhancing your brand image by demonstrating a commitment to sustainability. Compliance: Staying ahead of regulatory requirements and avoiding potential penalties. Competitive advantage: Meeting customer and investor expectations for environmental responsibility.'
    },
      {
      title: 'How do Carbon Reduction Plans impact financial performance?',
      description: 'Carbon reduction often leads to lower energy costs, enhanced operational efficiency, and improved risk management. Additionally, businesses with strong sustainability practices tend to attract environmentally-conscious customers and investors, potentially boosting financial performance.'
    },
      {
      title: 'What steps are involved in creating a Carbon Reduction Plan?',
      description: 'Measure: Assess your current carbon emissions (Scopes 1, 2, and 3). Set targets: Define clear and achievable goals for emission reduction. Implement actions: Develop strategies such as improving energy efficiency, switching to renewable energy, reducing waste, and optimizing supply chains. Monitor progress: Track emissions reduction regularly and adjust the plan as needed. Report: Publicly disclose progress and outcomes.'
    },
      {
      title: 'What tools are available to help businesses reduce their carbon footprint?',
      description: 'Businesses can use various tools like carbon calculators, energy management systems, and carbon accounting software. Partnering with consultancy firms that specialize in sustainability or carbon reduction is also beneficial.'
    },
      {
      title: 'Can small businesses benefit from a Carbon Reduction Plan?',
      description: 'Absolutely. While smaller businesses may not be subject to the same regulations as larger firms, adopting a carbon reduction plan can lead to cost savings, improve marketability, and future-proof the business against evolving regulations.'
    },
      {
      title: 'Can we get external help to develop a Carbon Reduction Plan?',
      description: 'Yes, many organisations, like consultancy firms and sustainability experts, offer specialised services to help businesses design, implement, and monitor Carbon Reduction Plans. They also assist in navigating compliance and reporting requirements.'
    },
      {
      title: 'What are the typical timeframes for achieving carbon reduction goals?',
      description: 'While timeframes vary depending on the size of the organization and industry, most businesses set targets for reducing carbon emissions over 5, 10, or even 20 years, with short-term goals that are reviewed annually.'
    },
      {
      title: 'What is the Net Zero target, and how does it relate to Carbon Reduction Plans?',
      description: 'Net Zero refers to balancing the amount of emitted greenhouse gases with the amount removed from the atmosphere. Carbon Reduction Plans are integral to achieving Net Zero, as they provide a roadmap for lowering emissions across all scopes.'
    },
      {
      title: 'How often should we update our Carbon Reduction Plan?',
      description: 'Your plan should be reviewed and updated regularly, typically annually, to ensure targets remain aligned with business growth, new regulations, and technological advancements.'
    },
      {
      title: 'What is the role of offsetting in a Carbon Reduction Plan?',
      description: 'Carbon offsetting involves investing in environmental projects (like reforestation or renewable energy) to compensate for emissions that cannot be reduced directly. While important, it should complement rather than replace efforts to reduce emissions at the source.'
    },
      {
      title: 'How does a Carbon Reduction Plan support compliance with UK and international standards?',
      description: 'Having a structured plan helps businesses comply with UK regulatory frameworks (such as the Streamlined Energy and Carbon Reporting (SECR) or TCFD) and international initiatives like the Paris Agreement. It also aligns with ISO 14001 (environmental management) and ISO 50001 (energy management) standards.'
    },
      {
      title: 'How does a Carbon Reduction Plan help with stakeholder engagement?',
      description: 'Having a well-defined Carbon Reduction Plan demonstrates a business’s commitment to environmental responsibility, which can improve relationships with customers, investors, employees, and regulatory bodies.'
    },
  ];

}
