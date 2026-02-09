// Edit your personal details and projects below.
const PROFILE = {
  name: 'Mohan Sirvi',
  title: 'Software Engineer II · @Q2 Software, Bengaluru India',
  bio: 'A dedicated Software Engineer with 4.5+ years of professional experience with a passion for building scalable, high-performance software solutions and driving digital transformation. I excel in developing robust backend systems using C#, .NET, ASP.NET Core, and WebAPI, with deep expertise in RESTful APIs, distributed systems, and microservices architecture. My proficiency extends to database management with MSSQL and NoSQL, advanced caching strategies, and cloud-based solutions leveraging Azure Cloud services like Azure App Service, Storage Account, Service Bus and Azure Functions.',
  github: 'https://github.com/mohansirvi',
  linkedin: 'https://www.linkedin.com/in/mohansirvi',
  email: 'mohansirvi999@gmail.com',
  phone: '+91-6350271502',
  resume: 'resume.pdf',
  photo: 'mohan.jpg'
}

const PROJECTS = [
  {
    title: 'Orange Micro Services',
    highlights: [
      'Comprehensive e-commerce solution built with .NET 8 and Blazor',
      'Modular microservices architecture with separate services for authentication, product management, coupon management, shopping cart, email notifications, rewards, and order processing',
      'Blazor-based web frontend for user interaction with Ocelot API Gateway managing routing, load balancing, and security',
      'Azure Service Bus for reliable messaging between microservices and Azure App Service for scalable hosting',
      'Stripe integration for secure and efficient payment processing'
    ],
    link: 'https://github.com/mohansirvi/OrangeMicroServices'
  },
  {
    title: 'Document Management',
    highlights: [
      'Robust and scalable document management system built with C# 12.0 and .NET 8',
      'Secure and modular RESTful API for document, user authentication, and ingestion workflow management',
      'Designed for enterprise-level use cases with emphasis on clean architecture, security, and extensibility'
    ],
    link: 'https://github.com/mohansirvi/DocumentManagement'
  },
  {
    title: 'Ask The AI',
    highlights: [
      'Web application powered by OpenAI\'s GPT-3.5 model for AI-driven conversations',
      'Natural and intuitive interface enabling users to ask questions and receive AI-generated insights',
      'Harnesses artificial intelligence capabilities for engaging and informative interactions'
    ],
    link: 'https://github.com/mohansirvi/ask-the-ai'
  }
]

const EXPERIENCE = [
  {
    role: 'Software Engineer (SDE2)',
    company: 'Q2',
    type: 'Full-time',
    duration: 'May 2025 - Present',
    location: 'Bengaluru, Karnataka, India',
    locationtype: 'On-site',
    highlights: [
      'Building a dispute tracking system (DTS) to streamline fraud management and paperless dispute resolution for financial institutions, enabling faster transaction resolutions.',
      'Developing scalable solutions to manage disputes across multiple transaction types, improving efficiency and accuracy in handling complex financial disputes in integration-heavy banking environment.'
    ],
    skills: ['C#', '.NET Core', 'Azure', 'Microservices']
  },
  {
    role: 'Senior Software Development Engineer',
    company: 'Aptean',
    type: 'Full-time',
    duration: 'Apr 2024 - May 2025',
    location: 'Bengaluru, Karnataka, India',
    locationtype: 'On-site',
    highlights: [
      'Enhanced system interoperability and scalability by designing and developing RESTful APIs in C# and .NET, supporting seamless integration with external modules.',
      'Led end-to-end migration of document storage to Wasabi Cloud, reducing document management costs and optimizing storage efficiency.',
      'Collaborated cross-functionally with product managers, designers, and stakeholders to translate business requirements into technical specifications.',
      'Mentored and coached junior engineers, fostering a culture of innovation, continuous learning, and technical excellence within the team.',
      'Spearheaded code reviews, refactoring initiatives, and adoption of modern development practices to improve code quality and maintainability.',
      'Successfully delivered 5 product releases on time by facilitating Scrum ceremonies and improving velocity by 20%.'
    ],
    skills: ['.NET Core', 'C#', 'RESTful APIs', 'Cloud Migration', 'Agile/Scrum', 'Team Leadership']
  },
  {
    role: 'Engineer, Development',
    company: 'Aptean',
    type: 'Full-time',
    duration: 'Jul 2021 - Apr 2024',
    location: 'Bengaluru, Karnataka, India',
    locationtype: 'On-site',
    highlights: [
      'Built advanced job scheduling functionality using cron expressions, enabling flexible scheduling options like hourly, weekly, bi-weekly, monthly, yearly, and custom day-based recurrence.',
      'Engineered an interactive tooltip system across the web application, supporting internal navigation and external links to enhance accessibility and user engagement.',
      'Reduced average response times by 30% by implementing advanced in-memory caching techniques in C#, including time-based expiration and sliding expiration.'
    ],
    skills: ['C#', '.NET Framework', 'Job Scheduling', 'Caching', 'Web Development']
  }
]

const SKILLS = {
  backend: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'Web API', 'Microservices', '.NET Framework'],
  cloud: ['Microsoft Azure', 'Azure Functions', 'Azure Service Bus', 'Azure DevOps'],
  database: ['SQL Server', 'SQL', 'NoSQL', 'Redis'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Ext.js'],
  tools: ['Git/Github', 'CI/CD', 'Agile Development'],
  concepts: ['Distributed Systems', 'Scalable Systems', 'OOPS', 'SOLID', 'Design Patterns', 'Data Structures & Algorithms', 'RESTful APIs']
}

function populateProfile(){
  document.getElementById('name').textContent = PROFILE.name
  document.getElementById('title').textContent = PROFILE.title
  document.getElementById('bio').textContent = PROFILE.bio
  document.getElementById('githubLink').href = PROFILE.github
  document.getElementById('linkedinLink').href = PROFILE.linkedin
  document.getElementById('resumeLink').href = PROFILE.resume
  document.getElementById('emailLink').href = 'mailto:' + PROFILE.email
  document.getElementById('emailLink').textContent = PROFILE.email
  document.getElementById('phone').textContent = PROFILE.phone
  document.getElementById('profileImage').src = PROFILE.photo
  document.getElementById('year').textContent = new Date().getFullYear()

  // Populate projects
  const grid = document.getElementById('projectsGrid')
  PROJECTS.forEach(p => {
    const el = document.createElement('article')
    el.className = 'project'
    const highlightsHtml = p.highlights.map(h => `<li>${h}</li>`).join('')
    el.innerHTML = `<h3>${p.title}</h3><ul class="project-highlights">${highlightsHtml}</ul><div class="links"><a class="btn ghost" target="_blank" rel="noopener" href="${p.link}">View</a></div>`
    grid.appendChild(el)
  })

  // Populate skills
  const skillsContainer = document.getElementById('skillsContainer')
  if(skillsContainer){
    Object.entries(SKILLS).forEach(([category, items]) => {
      const section = document.createElement('div')
      section.className = 'skill-category'
      const title = category.replace(/([A-Z])/g, ' $1').trim().toUpperCase()
      section.innerHTML = `<h4>${title}</h4><div class="skills-list">${items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</div>`
      skillsContainer.appendChild(section)
    })
  }

  // Populate experience
  const experienceContainer = document.getElementById('experienceContainer')
  if(experienceContainer){
    EXPERIENCE.forEach(exp => {
      const expEl = document.createElement('div')
      expEl.className = 'experience-item'
      const highlightsHtml = exp.highlights.map(h => `<li>${h}</li>`).join('')
      const skillsHtml = exp.skills.map(s => `<span class="exp-skill-tag">${s}</span>`).join('')
      expEl.innerHTML = `
        <div class="exp-header">
          <div class="exp-title-company">
            <h3>${exp.role}</h3>
            <p class="exp-company">${exp.company}</p>
          </div>
          <div class="exp-meta">
            <span class="exp-duration">${exp.duration}</span>
            <span class="exp-location">📍 ${exp.location}</span>
          </div>
        </div>
        <ul class="exp-highlights">${highlightsHtml}</ul>
        <div class="exp-skills">${skillsHtml}</div>
      `
      experienceContainer.appendChild(expEl)
    })
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  populateProfile()

  document.getElementById('contactForm').addEventListener('submit', e=>{
    e.preventDefault()
    const name = document.getElementById('cfName').value || 'Someone'
    const email = document.getElementById('cfEmail').value || PROFILE.email
    const message = document.getElementById('cfMessage').value || ''
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} — ${email}`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  })
})