import { TestimonialsProps } from "@/interfaces"

import {
	IconCloudUp,
	IconLock,
	IconServer,
	IconActivity,
	IconTrendingUp,
} from '@tabler/icons-react'

export const navigation = [
	{ name: 'About', href: '#about'},
	{ name: 'Benefits', href: '#benefits' },
	{ name: 'Products', href: '#products'},
	{ name: 'Testimonials', href: '#testimonials' },
	{ name: 'Pricing', href: '#pricing' },
	{ name: 'FAQs', href: '#faqs' },
  ]


  export const productFeatures = [
	{ name: 'Platform', description: 'Powered by AI-driven analytics for real-time insights.' },
	{ name: 'Integration', description: 'Seamlessly connects with third-party tools and APIs.' },
	{ name: 'Scalability', description: 'Designed to grow with your business demands.' },
	{ name: 'Security', description: 'Enterprise-grade security with end-to-end encryption.' },
	{ name: 'Customization', description: 'Fully customizable workflows to suit your needs.' },
	{ name: 'Support', description: '24/7 dedicated support for all your queries.' },
  ];


  export const benefitsFeatures = [
	{
	  name: 'Seamless Deployment',
	  description:
		'Deploy your applications effortlessly with our intuitive platform, ensuring faster time-to-market and reliable performance.',
	  icon: IconCloudUp,
	},
	{
	  name: 'Advanced Security',
	  description:
		'Protect your data with robust SSL certificates and state-of-the-art encryption, providing peace of mind for your business.',
	  icon: IconLock,
	},
	{
	  name: 'Automated Backups',
	  description:
		'Ensure data safety with regular automated backups, allowing you to restore your systems in minutes if needed.',
	  icon: IconServer,
	},
	// {
	//   name: 'Real-Time Monitoring',
	//   description:
	// 	'Track application performance with real-time monitoring and analytics, enabling proactive decision-making.',
	//   icon: IconActivity,
	// },
	// {
	//   name: 'Scalable Infrastructure',
	//   description:
	// 	'Scale effortlessly as your business grows with our flexible and reliable infrastructure designed for modern demands.',
	//   icon: IconTrendingUp,
	// },
  ];

export const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '$29',
    description: "Perfect for individuals and small teams to kickstart their projects.",
    features: [
      'Basic analytics dashboard',
      'Up to 10,000 API requests/month',
      'Community support',
      'Standard integrations',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '$79',
    description: 'Ideal for growing businesses looking for advanced tools and features.',
    features: [
      'Advanced analytics dashboard',
      '50,000 API requests/month',
      'Priority support',
      'Custom workflows',
      'Enhanced security options',
      'Marketing automations',
    ],
    featured: true,
  },
];

  export const testimonials: TestimonialsProps[] = [
	{
	  description:
		'Integrating TechNova’s solutions revolutionized our system. We’ve achieved unparalleled speed and reliability.',
	  user: {
		name: "Alex Carter",
		role: "CTO, Future Tech Co.",
		avatar: {
		  src: "/assets/users/fake-users/boy.jpg",
		  alt: "Young professional boy smiling",
		},
	  },
	},
	{
	  description:
		'TechNova equipped us with actionable insights that reshaped our strategies, optimizing costs and boosting efficiency.',
	  user: {
		name: "Sophia Martinez",
		role: "Head of Analytics, Visionary Data",
		avatar: {
		  src: "/assets/users/fake-users/girl.jpg",
		  alt: "Young professional girl with a confident expression",
		},
	  },
	},
	{
	  description:
		'TechNova’s support team is unmatched in expertise and responsiveness. They ensured a seamless integration process.',
	  user: {
		name: "Michael Johnson",
		role: "Operations Manager, Innovate Systems",
		avatar: {
		  src: "/assets/users/fake-users/oldman.jpg",
		  alt: "Older man with glasses and a kind smile",
		},
	  },
	},
	{
	  description:
		'Thanks to TechNova, we’ve automated key workflows and experienced increased productivity across our teams.',
	  user: {
		name: "Emily White",
		role: "Product Manager, TechSphere",
		avatar: {
		  src: "/assets/users/fake-users/girlwithglasses.jpg",
		  alt: "Professional girl wearing glasses and smiling",
		},
	  },
	},
	{
	  description:
		'The seamless integration capabilities of TechNova have allowed us to connect tools effortlessly, streamlining operations.',
	  user: {
		name: "Ryan Taylor",
		role: "Integration Specialist, Sync Solutions",
		avatar: {
		  src: "/assets/users/fake-users/whiteboywithglassess.jpg",
		  alt: "Young man with glasses looking confident",
		},
	  },
	},
	{
	  description:
		'TechNova has given us peace of mind with their secure infrastructure, ensuring our data is safe and accessible.',
	  user: {
		name: "Robert Thompson",
		role: "Security Consultant, Safeguard Corp.",
		avatar: {
		  src: "/assets/users/fake-users/oldwhiteman.jpg",
		  alt: "Older white man with a serious expression",
		},
	  },
	},
  ];

  export const faqs = [
	{
	  question: "What is TechNova Solutions?",
	  answer: "TechNova Solutions is a cutting-edge technology company specializing in AI-driven tools, advanced analytics, and bespoke software development, empowering businesses to achieve greater efficiency and growth.",
	},
	{
	  question: "What services does TechNova Solutions offer?",
	  answer: "Our services include AI-powered data analytics, cloud integration, custom software development, intuitive data visualization, and secure API development tailored to your business needs.",
	},
	{
	  question: "How does TechNova ensure data security?",
	  answer: "We employ robust encryption protocols, conduct regular security audits, and comply with international standards such as GDPR and ISO 27001 to protect your data.",
	},
	{
	  question: "Can I request a custom solution for my business?",
	  answer: "Yes! We excel at creating tailored solutions that address your specific business challenges. Contact us today to discuss your project requirements.",
	},
	{
	  question: "What industries does TechNova Solutions cater to?",
	  answer: "Our solutions cater to various industries, including healthcare, finance, retail, logistics, education, and technology, ensuring flexibility and scalability.",
	},
	{
	  question: "Do you offer a free trial for your products?",
	  answer: "Yes, we offer free trials for select products. Explore our product pages or reach out to our sales team to learn more.",
	},
	{
	  question: "How can I contact TechNova Solutions for support?",
	  answer: "You can contact our support team via email at support@technova.com or call us at +1-800-TECH-NOVA. We're available 24/7 to assist you.",
	},
	{
	  question: "What makes TechNova Solutions different from other tech companies?",
	  answer: "Our focus on innovation, customized solutions, and a client-centric approach sets us apart. TechNova delivers cutting-edge technology while maintaining seamless collaboration.",
	},
	{
	  question: "Can TechNova integrate with my existing systems?",
	  answer: "Absolutely! We specialize in seamless system integration, ensuring minimal disruption while maximizing compatibility and operational efficiency.",
	},
  ];