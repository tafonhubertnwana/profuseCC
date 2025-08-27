export const servicePricings = [
  {
    service: {
      id: 'software-development',
      name: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      features: ['Custom Applications', 'Web Development', 'Mobile Apps', 'API Integration']
    },
    tiers: [
      {
        id: 'Basic',
        name: 'Basic (Starter Website)',
        price: '1,599.99',
        features: [
          'Basic web application',
          'Up to 5 pages',
           'Mobile Responsive Design',
          'Contact Form',
          'Blog/News Section',
          'Revision 1 round',
          'Basic SEO optimization',
           'Hosting & Maintenance $50 - $100/Mo',
           'One-Time Building Fee $1500'
        ]
      },
      {
        id: 'Standard',
        name: 'Standard (Business Website)',
        price: '3,699.99',
        popular: true,
        features: [
          'Advanced web application',
          'Up to 10 pages',
          'Advanced database integration',
          'User authentication',
          'Payment integration',
          'Custom Design',
          'Revision 2-3 rounds',
          'Advanced SEO optimization',
          'Mobile responsive design',
          'social Media Integration',
          'Google Analytics',
          'Hosting & Maintenance $150 - $250/Mo',
           'One-Time Building Fee $3500'
        ]
      },
      {
        id: 'Premium',
        name: 'Premium (Growth Website)',
        price: '10,599',
        features: [
          'Enterprise-grade application',
          'Unlimited pages',
          'Complex database architecture',
          'Advanced security features',
          'Multiple payment gateways',
          '24/7 dedicated support',
          '1-year warranty',
          'Full SEO suite',
          'Progressive Web App',
          'Performance optimization',
          'Custom integrations',
          'Hosting & Maintenance $300 - $500/Mo',
           'One-Time Building Fee $10000'
        ]
      }
    ]
  },
  {
    service: {
      id: 'data-analysis',
      name: 'Data Analysis',
      description: 'Transform your data into actionable insights',
      features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Custom Reports']
    },
    tiers: [
      {
        id: 'standard',
        name: 'Standard',
        price: '1,499.99',
        features: [
          'Basic data cleaning',
          'Simple visualizations',
          'Monthly reports',
          'Email support',
          'Up to 10GB data processing'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced',
        price: '2,999.99',
        popular: true,
        features: [
          'Advanced data cleaning',
          'Interactive dashboards',
          'Weekly reports',
          'Predictive modeling',
          'Priority support',
          'Up to 100GB data processing',
          'Custom KPI tracking'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '4,999.99',
        features: [
          'Enterprise data pipeline',
          'Real-time dashboards',
          'Daily automated reports',
          'Machine learning models',
          '24/7 support',
          'Unlimited data processing',
          'Custom analytics platform',
          'API access',
          'White-label solutions'
        ]
      }
    ]
  },
  {
    service: {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Scalable cloud infrastructure and management',
  
      features: ['Cloud Migration', 'Infrastructure Management', 'Backup Solutions', 'Security Monitoring']
    },
    tiers: [
      {
        id: 'standard',
        name: 'Standard',
        price: '999.99',
        features: [
          'Basic cloud setup',
          'Up to 5 virtual machines',
          'Standard backup',
          'Email support',
          'Basic monitoring'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced',
        price: '2,499.99',
        popular: true,
        features: [
          'Advanced cloud architecture',
          'Up to 20 virtual machines',
          'Automated backup',
          'Load balancing',
          'Security monitoring',
          'Priority support',
          'Disaster recovery'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '4,999.99',
        features: [
          'Enterprise cloud solution',
          'Unlimited virtual machines',
          'Real-time backup',
          'Advanced security suite',
          'Multi-region deployment',
          '24/7 support',
          'Custom integrations',
          'Compliance management',
          'Performance optimization'
        ]
      }
    ]
  },
  {
    service: {
      id: 'generative-ai',
      name: 'Generative AI',
      description: 'AI-powered content generation and automation',
     
      features: ['Content Generation', 'AI Chatbots', 'Image Creation', 'Text Analysis']
    },
    tiers: [
      {
        id: 'standard',
        name: 'Standard',
        price: '1,999.99',
        features: [
          'Basic AI chatbot',
          'Content generation templates',
          '1,000 AI requests/month',
          'Email support',
          'Basic customization'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced',
        price: '3,999.99',
        popular: true,
        features: [
          'Advanced AI chatbot',
          'Custom content models',
          '10,000 AI requests/month',
          'Image generation',
          'Priority support',
          'Advanced training',
          'API integration'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '7,999.99',
        features: [
          'Enterprise AI platform',
          'Custom AI models',
          'Unlimited AI requests',
          'Multi-modal generation',
          '24/7 support',
          'White-label solution',
          'Advanced analytics',
          'Custom integrations',
          'Dedicated infrastructure'
        ]
      }
    ]
  },
  {
    service: {
      id: 'ai-cybersecurity',
      name: 'AI & Cybersecurity',
      description: 'AI-powered security solutions and threat detection',
      features: ['Threat Detection', 'Security Monitoring', 'Vulnerability Assessment', 'Incident Response']
    },
    tiers: [
      {
        id: 'standard',
        name: 'Standard',
        price: '1,799.99',
        features: [
          'Basic threat detection',
          'Weekly security reports',
          'Email alerts',
          'Basic vulnerability scans',
          'Email support'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced',
        price: '3,499.99',
        popular: true,
        features: [
          'Advanced threat detection',
          'Real-time monitoring',
          'Daily security reports',
          'Automated responses',
          'Priority support',
          'Compliance reporting',
          'Security training'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '6,999.99',
        features: [
          'Enterprise security suite',
          'AI-powered threat hunting',
          '24/7 monitoring',
          'Incident response team',
          'Custom security policies',
          'Dedicated support',
          'Penetration testing',
          'Compliance management',
          'Security consulting'
        ]
      }
    ]
  },
  {
    service: {
      id: 'banners',
      name: 'Banners',
      description: 'Professional banner design and digital advertising',
      features: ['Web Banners', 'Social Media Graphics', 'Print Materials', 'Brand Identity']
    },
    tiers: [
      {
        id: 'standard',
        name: 'Standard',
        price: '299.99',
        features: [
          '5 banner designs',
          '2 revisions per design',
          'Web-ready formats',
          'Email delivery',
          '7-day turnaround'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced',
        price: '599.99',
        popular: true,
        features: [
          '15 banner designs',
          '3 revisions per design',
          'Multiple formats',
          'Social media optimization',
          'Priority support',
          '5-day turnaround',
          'Brand guidelines'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '999.99',
        features: [
          'Unlimited banner designs',
          'Unlimited revisions',
          'All formats included',
          'Animated banners',
          'Brand strategy',
          '24/7 support',
          '3-day turnaround',
          'Monthly design retainer',
          'Dedicated designer'
        ]
      }
    ]
  },
  {
    service: {
      id: 'graphics',
      name: 'Graphics',
      description: 'Custom graphic design and visual content creation',
      features: ['Logo Design', 'Illustrations', 'Infographics', 'Brand Materials']
    },
    tiers: [
      {
        id: 'standard',
        name: 'Standard',
        price: '499.99',
        features: [
          '3 logo concepts',
          '2 revisions',
          'Basic file formats',
          'Email support',
          '10-day delivery'
        ]
      },
      {
        id: 'advanced',
        name: 'Advanced',
        price: '999.99',
        popular: true,
        features: [
          '5 logo concepts',
          '5 revisions',
          'All file formats',
          'Brand color palette',
          'Typography guide',
          'Priority support',
          '7-day delivery',
          'Business card design'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '1,999.99',
        features: [
          'Complete brand identity',
          'Unlimited concepts',
          'Unlimited revisions',
          'Brand guidelines',
          'Marketing materials',
          '24/7 support',
          '5-day delivery',
          'Trademark research',
          'Brand strategy consultation',
          '1-year brand support'
        ]
      }
    ]
  }
];
