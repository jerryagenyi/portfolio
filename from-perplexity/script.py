
import json

# Create the updated portfolio JSON with Jeremiah's actual information
portfolio_data = {
  "portfolio": {
    "metadata": {
      "name": "Jeremiah Agenyi",
      "title": "Product Manager & Co-founder | Strategic Communications & Digital Marketing Specialist",
      "description": "Strategic Communications & Digital Marketing Specialist with over a decade of experience at the intersection of technology, communication, and social impact. WordPress Developer, Tech Enthusiast Driving Social Impact.",
      "email": "jerryagenyi@gmail.com",
      "location": "Salford, England, United Kingdom",
      "website": "https://jerryagenyi.xyz",
      "phone": ""
    },
    "profile": {
      "headline": "Strategic Communications & Digital Marketing Specialist | WordPress Developer | Tech Enthusiast Driving Social Impact",
      "about": "I am a passionate and versatile professional at the intersection of technology, communication, and social impact. With over a decade of experience, I specialise in crafting effective communication strategies, scaling digital marketing initiatives, and driving digital transformation. From enhancing public health campaigns to building engaging WordPress-powered platforms, I bring technical expertise and creative problem-solving to every project.\n\nMy journey has led me to embrace emerging technologies like automation tools (n8n), AI, and modern web development frameworks like Next.js. As a lifelong learner, I'm continuously expanding my knowledge in programming (JavaScript, Python) and UI/UX design to deliver user-centric solutions. My work is guided by a strong commitment to social good—using technology to empower communities and foster inclusion.\n\nWhether leading a 32-member technical team or mentoring students, I thrive on collaboration and innovation. I'm excited to connect with professionals who share my enthusiasm for combining technology and creativity to make a meaningful impact.",
      "yearsOfExperience": "12+ years",
      "expertise": [
        "Strategic Communications",
        "Digital Marketing",
        "WordPress Development",
        "Public Health Communication",
        "UI/UX Design",
        "Automation (n8n)",
        "AI Integration",
        "Next.js Development",
        "Social Media Strategy",
        "Brand Management",
        "Product Management"
      ]
    },
    "socialMedia": [
      {
        "name": "GitHub",
        "url": "https://github.com/jerryagenyi",
        "icon": "github"
      },
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/jerryagenyi",
        "icon": "linkedin"
      },
      {
        "name": "Twitter",
        "url": "https://twitter.com/jerryagenyi",
        "icon": "twitter"
      },
      {
        "name": "Instagram",
        "url": "https://www.instagram.com/jerryagenyi",
        "icon": "instagram"
      },
      {
        "name": "CodePen",
        "url": "https://codepen.io/jerryagenyi",
        "icon": "codepen"
      }
    ],
    "experience": [
      {
        "id": "job1",
        "title": "Product Manager & Co-founder",
        "company": "Balance Platform",
        "location": "United Kingdom",
        "startDate": "2024-10",
        "endDate": "present",
        "url": "",
        "description": "Co-founding a platform focused on leveraging AI, ethical automation, and technology for social impact and public health initiatives.",
        "highlights": [
          "Developing 1-3 year media strategy for platform launch",
          "Building church management system (ChMS) with competitive pricing and enhanced features",
          "Integrating AI agents and automation workflows for nonprofit tech initiatives"
        ]
      },
      {
        "id": "job2",
        "title": "Wordpress Web Developer",
        "company": "Ash Creative Digital Limited",
        "location": "Middlesbrough, United Kingdom",
        "startDate": "2024-01",
        "endDate": "2024-06",
        "url": "",
        "description": "Developed WordPress-powered web platform for the Love GardenRoute business listing service.",
        "highlights": [
          "Built complete WordPress platform from site installation to deployment",
          "Provided branding services and digital marketing support",
          "Managed site setup, maintenance, and optimization"
        ]
      },
      {
        "id": "job3",
        "title": "Student Mentor",
        "company": "The University of Salford",
        "location": "Manchester Area, United Kingdom",
        "startDate": "2024-01",
        "endDate": "2024-03",
        "url": "https://www.salford.ac.uk",
        "description": "Mentored students in digital marketing and technology applications.",
        "highlights": [
          "Provided guidance on academic and career development",
          "Shared expertise in digital marketing and communications",
          "Supported students in technology and business projects"
        ]
      },
      {
        "id": "job4",
        "title": "Consultant, Communication and Advocacy",
        "company": "World Bank Regional Disease Surveillance System Enhancement (REDISSE) Project - Nigeria",
        "location": "Abuja, Federal Capital Territory, Nigeria",
        "startDate": "2021-03",
        "endDate": "2023-02",
        "url": "",
        "description": "Led development and implementation of communication activities for the World Bank REDISSE Project in Nigeria.",
        "highlights": [
          "Created and strengthened public awareness and support for disease surveillance systems",
          "Communicated project activities, states' performance and disbursements",
          "Developed advocacy strategies for public health initiatives",
          "Worked across multiple West African countries on health security communication"
        ]
      },
      {
        "id": "job5",
        "title": "Head of Communications / Public Relations Lead",
        "company": "Nigeria Centre for Disease Control and Prevention (NCDC)",
        "location": "Abuja, Nigeria",
        "startDate": "2017-01",
        "endDate": "2021-02",
        "url": "https://www.ncdc.gov.ng",
        "description": "Led corporate communications for Nigeria's national public health institute during critical period including COVID-19 pandemic response.",
        "highlights": [
          "Grew Twitter followership significantly and launched digital campaigns for disease awareness (Lassa fever, COVID-19)",
          "Led 32-member technical communications team during COVID-19 pandemic response",
          "Coordinated media relations training for senior NCDC leadership",
          "Managed communications for partnerships with UK Public Health England, Germany's Robert Koch Institute, and Resolve to Save Lives",
          "Developed communication strategies for establishment of NCDC Act in 2018"
        ]
      },
      {
        "id": "job6",
        "title": "Atlas Corps Fellow",
        "company": "Robert F. Kennedy Human Rights",
        "location": "Washington, DC, United States",
        "startDate": "2016-09",
        "endDate": "2017-08",
        "url": "https://rfkhumanrights.org",
        "description": "Selected as one of 23 Global Superheroes for Atlas Corps Fellowship to serve at RFK Human Rights.",
        "highlights": [
          "Worked on human rights advocacy and communication initiatives",
          "Gained international experience in nonprofit management and social impact work",
          "Collaborated with global leaders on justice and human rights campaigns",
          "Represented Nigeria among elite global social change leaders"
        ]
      },
      {
        "id": "job7",
        "title": "New Media Manager",
        "company": "Medicaid Cancer Foundation",
        "location": "Abuja, Nigeria",
        "startDate": "2016-04",
        "endDate": "2016-08",
        "url": "https://www.medicaidcancerfoundation.org",
        "description": "Rebranded and revamped Medicaid Cancer Foundation's online presence on web and social media.",
        "highlights": [
          "Built bespoke website (www.medicaidcancerfoundation.org) and trained media management team",
          "Successfully managed online/offline branding for 2016 #WalkAwayCancer campaign in Nigeria",
          "Used cost-effective strategies for health campaigns and marketing"
        ]
      },
      {
        "id": "job8",
        "title": "Special Assistant on New Media",
        "company": "Her Excellency, Dr. Zainab Shinkafi Bagudu (Wife of the Governor, Kebbi State)",
        "location": "Abuja, Nigeria",
        "startDate": "2016-04",
        "endDate": "2016-08",
        "url": "",
        "description": "Served as Special Assistant on communication and digital media to the First Lady of Kebbi State.",
        "highlights": [
          "Media liaison and content curator",
          "Social media management",
          "Digital communication strategy"
        ]
      },
      {
        "id": "job9",
        "title": "Communication Assistant",
        "company": "Association for Reproductive and Family Health (ARFH)",
        "location": "Abuja, Nigeria",
        "startDate": "2014-03",
        "endDate": "2015-12",
        "url": "https://www.arfh-ng.org",
        "description": "Supported communication unit as Primary Recipient of Global Fund HIV, AIDS and TB Round 9 project.",
        "highlights": [
          "Created bespoke website (www.arfh-ng.org), managed it and trained team for continuity",
          "Managed ARFH's online presence across social media platforms",
          "Developed human-interest stories (print and video) for various projects",
          "Produced ARFH 2013 Annual Report (content sourcing, design and print production)",
          "Created media campaigns (jingles, documentary) and IEC materials"
        ]
      },
      {
        "id": "job10",
        "title": "Freelance Consultant",
        "company": "JerryAgenyi (Independent)",
        "location": "Abuja, Nigeria",
        "startDate": "2014-02",
        "endDate": "2016-09",
        "url": "",
        "description": "Provided freelance communication, web development, and digital marketing consultancy services.",
        "highlights": [
          "Served multiple clients across nonprofit, government and private sectors",
          "Delivered web development and branding solutions",
          "Developed communication strategies for various organizations"
        ]
      },
      {
        "id": "job11",
        "title": "Communication/IT Officer",
        "company": "His Treasure House, Abuja",
        "location": "Abuja, Nigeria",
        "startDate": "2012-08",
        "endDate": "2014-02",
        "url": "",
        "description": "Managed all communication and IT-related affairs for the organization.",
        "highlights": [
          "Assembled, trained and managed the first digital media team",
          "Created and implemented cost-saving social media campaigns for all events",
          "Convinced organization to reduce print budget and invest in social media",
          "Supervised Print Publications Team, overseeing all screen and print designs",
          "Built the first website for the organization",
          "Provided general IT support"
        ]
      },
      {
        "id": "job12",
        "title": "Webmaster and Graphics Designer",
        "company": "Visage PR, Abuja",
        "location": "Abuja, Nigeria",
        "startDate": "2011-03",
        "endDate": "2012-01",
        "url": "",
        "description": "Designed, developed and maintained websites and graphic materials for company and clients.",
        "highlights": [
          "Website development and maintenance for multiple clients",
          "Brochures, flyers, and logo designs",
          "General graphics and branding work"
        ]
      }
    ],
    "education": [
      {
        "id": "edu1",
        "institution": "University of Salford",
        "degree": "MSc Digital Marketing",
        "field": "Digital Marketing",
        "location": "Salford, United Kingdom",
        "startDate": "2022",
        "endDate": "2023",
        "description": "Focused on digital product management, AI integration, and modern marketing strategies."
      },
      {
        "id": "edu2",
        "institution": "University of Jos",
        "degree": "Bachelor's Degree",
        "field": "Geology",
        "location": "Jos, Nigeria",
        "startDate": "2005",
        "endDate": "2009",
        "description": "Studied earth sciences before transitioning into technology and communications."
      }
    ],
    "skills": {
      "languages": [
        "JavaScript",
        "Python",
        "HTML/CSS",
        "PHP"
      ],
      "frameworks": [
        "Next.js",
        "React",
        "WordPress",
        "Node.js"
      ],
      "tools": [
        "n8n (Automation)",
        "Git/GitHub",
        "Figma",
        "Adobe Creative Suite",
        "Microsoft Office Suite",
        "Google Analytics",
        "Social Media Analytics Tools",
        "MailerLite",
        "invideo.ai"
      ],
      "design": [
        "UI/UX Design",
        "Brand Identity Design",
        "Graphic Design",
        "Web Design",
        "Print Design"
      ],
      "marketing": [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Email Marketing",
        "Digital Campaigns",
        "Media Relations",
        "Public Relations",
        "Crisis Communication"
      ]
    },
    "projects": [
      {
        "id": "project1",
        "title": "Balance Platform",
        "date": "2024-10-01",
        "description": "Co-founding a platform that leverages AI and ethical automation for social impact, with focus on church management systems and public health initiatives.",
        "technologies": ["Next.js", "AI", "n8n", "Python", "WordPress"],
        "github": "",
        "external": "",
        "featured": true
      },
      {
        "id": "project2",
        "title": "Social Good Nigeria",
        "date": "2014-09-01",
        "description": "Co-founded a networked community of innovators and socio-preneurs leveraging digital technology for social good across Nigeria.",
        "technologies": ["Community Building", "Social Media", "Digital Marketing"],
        "github": "",
        "external": "http://socialgood.ng",
        "featured": true
      },
      {
        "id": "project3",
        "title": "Love GardenRoute Business Listing Platform",
        "date": "2024-01-01",
        "description": "Developed complete WordPress-powered business listing service including site installation, branding, and digital marketing.",
        "technologies": ["WordPress", "PHP", "JavaScript", "SEO"],
        "github": "",
        "external": "",
        "featured": true
      },
      {
        "id": "project4",
        "title": "New Dad Secrets Marketing Pipeline",
        "date": "2023-01-01",
        "description": "Developed email marketing pipeline using MailerLite to drive affiliate revenue, integrating WordPress website with blogging, social media, and video content.",
        "technologies": ["WordPress", "MailerLite", "invideo.ai", "Content Marketing"],
        "github": "",
        "external": "https://www.newdadsecrets.com",
        "featured": false
      },
      {
        "id": "project5",
        "title": "ARFH Website",
        "date": "2014-01-01",
        "description": "Created bespoke website for Association for Reproductive and Family Health, managed maintenance and trained team for continuity.",
        "technologies": ["WordPress", "PHP", "SEO", "Content Management"],
        "github": "",
        "external": "https://www.arfh-ng.org",
        "featured": false
      },
      {
        "id": "project6",
        "title": "Medicaid Cancer Foundation Website & #WalkAwayCancer Campaign",
        "date": "2016-01-01",
        "description": "Built organization website and successfully managed integrated online/offline branding campaign for cancer awareness in Nigeria.",
        "technologies": ["WordPress", "Social Media", "Campaign Management", "Branding"],
        "github": "",
        "external": "https://www.medicaidcancerfoundation.org",
        "featured": false
      }
    ],
    "achievements": [
      {
        "title": "Atlas Corps Fellowship",
        "organization": "Atlas Corps / Robert F. Kennedy Human Rights",
        "year": "2016-2017",
        "description": "Selected as one of 23 Global Superheroes to serve at RFK Human Rights in Washington, DC"
      },
      {
        "title": "COVID-19 Pandemic Response Leadership",
        "organization": "Nigeria Centre for Disease Control",
        "year": "2020",
        "description": "Led 32-member communications team during Nigeria's COVID-19 response, discovering product management as ideal career path"
      },
      {
        "title": "Social Good Nigeria Co-founder",
        "organization": "Social Good Nigeria",
        "year": "2014-present",
        "description": "Co-founded networked community of innovators leveraging technology for social impact across Nigeria"
      }
    ],
    "design": {
      "colors": {
        "navy": "#0a192f",
        "darkNavy": "#020c1b",
        "green": "#64ffda",
        "slate": "#8892b0",
        "lightSlate": "#a8b2d1",
        "lightestSlate": "#ccd6f6",
        "white": "#e6f1ff"
      },
      "typography": {
        "fontFamily": "Calibre, San Francisco, Segoe UI, Roboto, sans-serif",
        "monoFont": "SF Mono, Monaco, Inconsolata, Courier New, monospace"
      }
    },
    "navigation": [
      {
        "name": "About",
        "url": "/#about",
        "id": "about"
      },
      {
        "name": "Experience",
        "url": "/#jobs",
        "id": "jobs"
      },
      {
        "name": "Work",
        "url": "/#projects",
        "id": "projects"
      },
      {
        "name": "Contact",
        "url": "/#contact",
        "id": "contact"
      }
    ],
    "sections": {
      "hero": {
        "id": "hero",
        "title": "Hi, my name is",
        "name": "Jeremiah Agenyi",
        "tagline": "I build digital solutions for social impact.",
        "description": "I'm a product manager and full-stack developer specializing in creating technology solutions that drive meaningful change. With over a decade bridging communication, technology, and social good, I help organizations leverage digital transformation to empower communities.",
        "cta": "Get In Touch"
      },
      "about": {
        "id": "about",
        "title": "About Me",
        "content": "My journey from geology to digital product management has been anything but linear—and that's what makes it powerful.\n\nI started my career fascinated by the earth's systems, but discovered my true passion at the intersection of technology, communication, and social impact. Over the past 12+ years, I've had the privilege of working on projects that matter: from leading COVID-19 communications for Nigeria's Centre for Disease Control to serving as an Atlas Corps Fellow at Robert F. Kennedy Human Rights in Washington, DC.\n\nMy work has spanned public health campaigns, WordPress development, digital marketing strategy, and now product management. I've led a 32-member team during a global pandemic, built websites for nonprofits driving change, and helped international organizations communicate life-saving information to millions.\n\nToday, as a co-founder of Balance Platform alongside Kelvin Bawa, Maria Raiwe, and Gloria Osemeke, I'm building solutions that combine AI, ethical automation, and accessible technology to serve communities—from church management systems to public health tools.\n\nI believe technology should empower, not exclude. Whether I'm coding in JavaScript and Python, designing user experiences, or crafting communication strategies, my focus remains constant: creating digital solutions that make a real difference in people's lives."
      },
      "experience": {
        "id": "jobs",
        "title": "Where I've Worked"
      },
      "projects": {
        "id": "projects",
        "title": "Some Things I've Built"
      },
      "contact": {
        "id": "contact",
        "title": "Get In Touch",
        "description": "I'm currently open to new opportunities and always interested in connecting with people working at the intersection of technology and social impact. Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out!",
        "cta": "Say Hello"
      }
    }
  }
}

# Save to JSON file
json_output = json.dumps(portfolio_data, indent=2)
print("Updated llm.json file has been generated successfully!")
print(f"\nFile size: {len(json_output)} characters")
print("\nPreview of updated data structure:")
print(f"- Name: {portfolio_data['portfolio']['metadata']['name']}")
print(f"- Total Experience Entries: {len(portfolio_data['portfolio']['experience'])}")
print(f"- Total Projects: {len(portfolio_data['portfolio']['projects'])}")
print(f"- Education Entries: {len(portfolio_data['portfolio']['education'])}")
print(f"- Skills Categories: {len(portfolio_data['portfolio']['skills'])}")
