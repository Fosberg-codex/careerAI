'use client'
import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  TrendingUp, 
  MapPin, 
  DollarSign, 
  Clock, 
  Star, 
  BookOpen, 
  Briefcase, 
  Users,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Share2,
  Heart,
  CheckCircle
} from 'lucide-react';

const CareerRecommendations = () => {
  const [expandedCareer, setExpandedCareer] = useState<number | null>(null);
  const [savedCareers, setSavedCareers] = useState<number[]>([]);

  // Sample user data (would come from the questionnaire)
  const userData = {
    name: "Akosua Mensah",
    age: "16-18",
    region: "Greater Accra",
    currentLevel: "Senior High School (SHS)",
    favoriteSubjects: ["Mathematics", "ICT", "Science"],
    interests: ["Technology/Coding", "Problem-solving", "Innovation"]
  };

  // Sample AI-generated career recommendations
  const careerRecommendations = [
    {
      id: 1,
      title: "Software Engineer",
      matchPercentage: 92,
      salaryRange: "GHS 3,000 - 12,000/month",
      growthOutlook: "Excellent",
      description: "Design, develop, and maintain software applications and systems. Perfect match for your love of mathematics, ICT, and problem-solving.",
      whyRecommended: [
        "Strong performance in Mathematics and ICT",
        "Interest in technology and coding",
        "Excellent problem-solving approach",
        "Preference for analytical thinking"
      ],
      skills: [
        "Programming Languages (Python, Java, JavaScript)",
        "Problem-solving and logical thinking",
        "Database management",
        "Software testing and debugging",
        "Version control systems"
      ],
      careerPath: [
        "Junior Software Developer (Entry level)",
        "Software Engineer (2-4 years)",
        "Senior Software Engineer (5-8 years)",
        "Technical Lead/Software Architect (8+ years)",
        "Engineering Manager/CTO (10+ years)"
      ],
      universities: [
        {
          name: "University of Ghana",
          programs: ["BSc Computer Science", "BSc Information Technology"],
          location: "Legon, Accra",
          requirements: "Aggregate 6-12 with Mathematics and English",
          duration: "4 years"
        },
        {
          name: "Kwame Nkrumah University of Science & Technology",
          programs: ["BSc Computer Science", "BSc Software Engineering"],
          location: "Kumasi",
          requirements: "Aggregate 6-12 with Mathematics and English",
          duration: "4 years"
        },
        {
          name: "Ashesi University",
          programs: ["BSc Computer Science", "BSc Management Information Systems"],
          location: "Berekuso",
          requirements: "Excellent academic performance",
          duration: "4 years"
        },
        {
          name: "Ghana Technology University College",
          programs: ["BSc Computer Science", "BSc Information Technology"],
          location: "Accra",
          requirements: "Aggregate 12-24",
          duration: "4 years"
        }
      ],
      companies: [
        {
          name: "Farmerline",
          type: "AgriTech Startup",
          location: "Accra",
          roles: ["Software Developer", "Mobile App Developer", "Full Stack Developer"],
          description: "Leading agricultural technology company in Ghana"
        },
        {
          name: "Hubtel",
          type: "Fintech Company",
          location: "Accra",
          roles: ["Backend Developer", "Frontend Developer", "Mobile Developer"],
          description: "Ghana's leading mobile commerce and payments company"
        },
        {
          name: "Vodafone Ghana",
          type: "Telecommunications",
          location: "Accra",
          roles: ["Software Engineer", "Systems Developer", "IT Specialist"],
          description: "Major telecommunications provider with extensive IT operations"
        },
        {
          name: "Ecobank Ghana",
          type: "Banking & Finance",
          location: "Accra",
          roles: ["Software Developer", "Systems Analyst", "IT Support"],
          description: "Leading pan-African bank with strong technology focus"
        },
        {
          name: "IBM Ghana",
          type: "Technology Consulting",
          location: "Accra",
          roles: ["Software Engineer", "Cloud Developer", "Data Analyst"],
          description: "Global technology company with operations in Ghana"
        }
      ],
      nextSteps: [
        "Focus on Mathematics and ICT in your final SHS year",
        "Learn basic programming (Python or JavaScript) online",
        "Apply to universities with strong Computer Science programs",
        "Join coding communities and tech meetups in Ghana",
        "Consider internships at local tech companies"
      ]
    },
    {
      id: 2,
      title: "Data Scientist",
      matchPercentage: 88,
      salaryRange: "GHS 4,000 - 15,000/month",
      growthOutlook: "Excellent",
      description: "Analyze complex data to help organizations make informed decisions. Combines your mathematical skills with technology and problem-solving.",
      whyRecommended: [
        "Exceptional mathematics performance",
        "Strong analytical thinking",
        "Interest in research and patterns",
        "Technology-oriented mindset"
      ],
      skills: [
        "Statistics and Mathematics",
        "Programming (Python, R, SQL)",
        "Data visualization tools",
        "Machine learning algorithms",
        "Critical thinking and analysis"
      ],
      careerPath: [
        "Data Analyst (Entry level)",
        "Junior Data Scientist (1-3 years)",
        "Data Scientist (3-6 years)",
        "Senior Data Scientist (6-10 years)",
        "Chief Data Officer (10+ years)"
      ],
      universities: [
        {
          name: "University of Ghana",
          programs: ["BSc Mathematics", "BSc Statistics", "BSc Computer Science"],
          location: "Legon, Accra",
          requirements: "Aggregate 6-12 with Mathematics",
          duration: "4 years"
        },
        {
          name: "KNUST",
          programs: ["BSc Mathematics", "BSc Statistics", "BSc Computer Science"],
          location: "Kumasi",
          requirements: "Aggregate 6-12 with Mathematics",
          duration: "4 years"
        },
        {
          name: "University of Cape Coast",
          programs: ["BSc Mathematics", "BSc Statistics"],
          location: "Cape Coast",
          requirements: "Aggregate 12-20 with Mathematics",
          duration: "4 years"
        }
      ],
      companies: [
        {
          name: "MTN Ghana",
          type: "Telecommunications",
          location: "Accra",
          roles: ["Data Analyst", "Business Intelligence Analyst"],
          description: "Leading telecom with extensive customer data analytics needs"
        },
        {
          name: "Standard Chartered Bank Ghana",
          type: "Banking",
          location: "Accra",
          roles: ["Risk Analyst", "Data Scientist", "Quantitative Analyst"],
          description: "International bank with strong analytics focus"
        },
        {
          name: "Ghana Statistical Service",
          type: "Government Agency",
          location: "Accra",
          roles: ["Statistical Officer", "Data Analyst", "Research Analyst"],
          description: "National statistics office handling population and economic data"
        }
      ],
      nextSteps: [
        "Excel in Mathematics and Statistics courses",
        "Learn Python or R programming for data analysis",
        "Take online courses in data science fundamentals",
        "Work on personal data projects using Ghana datasets",
        "Consider mathematics or statistics at university"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      matchPercentage: 85,
      salaryRange: "GHS 3,500 - 18,000/month",
      growthOutlook: "Excellent",
      description: "Protect organizations from cyber threats and ensure data security. High-demand field combining technology, problem-solving, and continuous learning.",
      whyRecommended: [
        "Strong ICT and technology interest",
        "Analytical problem-solving approach",
        "Detail-oriented personality",
        "Interest in protecting others"
      ],
      skills: [
        "Network security protocols",
        "Ethical hacking and penetration testing",
        "Risk assessment and management",
        "Security tools and software",
        "Incident response and forensics"
      ],
      careerPath: [
        "IT Security Analyst (Entry level)",
        "Cybersecurity Specialist (2-4 years)",
        "Security Consultant (4-7 years)",
        "Security Manager (7-10 years)",
        "Chief Information Security Officer (10+ years)"
      ],
      universities: [
        {
          name: "Ashesi University",
          programs: ["BSc Computer Science with Security Focus"],
          location: "Berekuso",
          requirements: "Excellent academic performance",
          duration: "4 years"
        },
        {
          name: "KNUST",
          programs: ["BSc Computer Science", "BSc Computer Engineering"],
          location: "Kumasi",
          requirements: "Aggregate 6-12",
          duration: "4 years"
        },
        {
          name: "University of Professional Studies",
          programs: ["BSc Information Technology"],
          location: "Accra",
          requirements: "Aggregate 12-24",
          duration: "4 years"
        }
      ],
      companies: [
        {
          name: "Databank Group",
          type: "Financial Services",
          location: "Accra",
          roles: ["IT Security Analyst", "Cybersecurity Specialist"],
          description: "Leading financial services group with strong security needs"
        },
        {
          name: "Ghana Commercial Bank",
          type: "Banking",
          location: "Accra",
          roles: ["Information Security Officer", "Risk Analyst"],
          description: "Largest indigenous bank with comprehensive security requirements"
        },
        {
          name: "National Communications Authority",
          type: "Regulatory Body",
          location: "Accra",
          roles: ["Cybersecurity Analyst", "IT Security Specialist"],
          description: "Government agency regulating telecommunications and cybersecurity"
        }
      ],
      nextSteps: [
        "Strengthen ICT and Mathematics foundations",
        "Learn about network basics and security concepts",
        "Explore ethical hacking through online courses",
        "Stay updated on cybersecurity trends and threats",
        "Consider cybersecurity certifications after university"
      ]
    },
    {
      id: 4,
      title: "Biomedical Engineer",
      matchPercentage: 82,
      salaryRange: "GHS 2,800 - 10,000/month",
      growthOutlook: "Very Good",
      description: "Design and develop medical devices and equipment. Perfect blend of your science and mathematics interests with helping others.",
      whyRecommended: [
        "Strong performance in Science and Mathematics",
        "Interest in helping others through technology",
        "Problem-solving and innovation focus",
        "Analytical thinking approach"
      ],
      skills: [
        "Engineering design principles",
        "Medical device development",
        "Biomaterials knowledge",
        "CAD software proficiency",
        "Research and testing methods"
      ],
      careerPath: [
        "Junior Biomedical Engineer (Entry level)",
        "Biomedical Engineer (2-5 years)",
        "Senior Biomedical Engineer (5-8 years)",
        "Engineering Manager (8-12 years)",
        "Director of Engineering (12+ years)"
      ],
      universities: [
        {
          name: "KNUST",
          programs: ["BSc Biomedical Engineering"],
          location: "Kumasi",
          requirements: "Aggregate 6-12 with Mathematics, Physics, Chemistry",
          duration: "4 years"
        },
        {
          name: "University of Ghana",
          programs: ["BSc Biomedical Engineering (under development)"],
          location: "Legon, Accra",
          requirements: "Aggregate 6-12 with Science subjects",
          duration: "4 years"
        },
        {
          name: "Ghana Technology University College",
          programs: ["BSc Biomedical Engineering"],
          location: "Accra",
          requirements: "Aggregate 12-24 with Science background",
          duration: "4 years"
        }
      ],
      companies: [
        {
          name: "Korle-Bu Teaching Hospital",
          type: "Healthcare",
          location: "Accra",
          roles: ["Biomedical Engineer", "Medical Equipment Technician"],
          description: "Ghana's premier teaching hospital with extensive medical equipment"
        },
        {
          name: "Komfo Anokye Teaching Hospital",
          type: "Healthcare",
          location: "Kumasi",
          roles: ["Biomedical Engineer", "Clinical Engineer"],
          description: "Major referral hospital in northern Ghana"
        },
        {
          name: "Ghana Health Service",
          type: "Government Healthcare",
          location: "Nationwide",
          roles: ["Biomedical Engineer", "Medical Equipment Officer"],
          description: "National health service managing medical equipment across Ghana"
        }
      ],
      nextSteps: [
        "Excel in Physics, Chemistry, and Mathematics",
        "Explore biomedical engineering through online resources",
        "Visit hospitals to understand medical equipment",
        "Consider volunteering in healthcare settings",
        "Focus on STEM subjects for university admission"
      ]
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      matchPercentage: 78,
      salaryRange: "GHS 2,000 - 8,000/month",
      growthOutlook: "Very Good",
      description: "Create and manage online marketing campaigns for businesses. Combines creativity with technology and data analysis.",
      whyRecommended: [
        "Interest in technology and online activities",
        "Creative thinking and problem-solving",
        "Good communication skills",
        "Understanding of social media and digital trends"
      ],
      skills: [
        "Social media marketing",
        "Content creation and strategy",
        "Google Analytics and SEO",
        "Email marketing platforms",
        "Data analysis and reporting"
      ],
      careerPath: [
        "Digital Marketing Assistant (Entry level)",
        "Digital Marketing Specialist (1-3 years)",
        "Senior Digital Marketer (3-6 years)",
        "Digital Marketing Manager (6-10 years)",
        "Chief Marketing Officer (10+ years)"
      ],
      universities: [
        {
          name: "University of Ghana Business School",
          programs: ["BBA Marketing", "BSc Business Administration"],
          location: "Legon, Accra",
          requirements: "Aggregate 6-15",
          duration: "4 years"
        },
        {
          name: "KNUST School of Business",
          programs: ["BSc Marketing", "BSc Business Administration"],
          location: "Kumasi",
          requirements: "Aggregate 8-20",
          duration: "4 years"
        },
        {
          name: "Central University",
          programs: ["BSc Marketing", "BSc Communication Studies"],
          location: "Accra",
          requirements: "Aggregate 12-30",
          duration: "4 years"
        }
      ],
      companies: [
        {
          name: "Ogilvy Ghana",
          type: "Advertising Agency",
          location: "Accra",
          roles: ["Digital Marketing Executive", "Social Media Manager"],
          description: "Leading advertising agency with major local and international clients"
        },
        {
          name: "Jumia Ghana",
          type: "E-commerce",
          location: "Accra",
          roles: ["Digital Marketing Specialist", "Performance Marketing Manager"],
          description: "Major e-commerce platform with extensive digital marketing needs"
        },
        {
          name: "Unilever Ghana",
          type: "Consumer Goods",
          location: "Accra",
          roles: ["Digital Marketing Manager", "Brand Manager"],
          description: "Multinational consumer goods company with strong digital presence"
        }
      ],
      nextSteps: [
        "Build a strong online presence and personal brand",
        "Learn digital marketing through free online courses",
        "Practice creating content for social media",
        "Study successful digital marketing campaigns",
        "Consider internships at marketing agencies"
      ]
    }
  ];

  const toggleCareerExpansion = (careerId:any) => {
    setExpandedCareer(expandedCareer === careerId ? null : careerId);
  };

  const toggleSaveCareer = (careerId:any) => {
    setSavedCareers((prev:any) => 
      prev.includes(careerId) 
        ? prev.filter((id:any) => id !== careerId)
        : [...prev, careerId]
    );
  };

  const getMatchColor = (percentage:any) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-blue-600 bg-blue-100';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Career Recommendations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based on your responses, we've identified the top 5 career paths that align with your interests, skills, and goals in Ghana.
          </p>
        </div>

        {/* User Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Hello, {userData.name}!
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Users size={16} />
                  {userData.age} years old
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {userData.region}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap size={16} />
                  {userData.currentLevel}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={16} />
                Download PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Career Recommendations */}
        <div className="space-y-6">
          {careerRecommendations.map((career:any, index:any) => (
            <div key={career.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Career Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{career.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(career.matchPercentage)}`}>
                        {career.matchPercentage}% Match
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{career.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-green-600">
                        <DollarSign size={16} />
                        {career.salaryRange}
                      </span>
                      <span className="flex items-center gap-1 text-blue-600">
                        <TrendingUp size={16} />
                        {career.growthOutlook} Growth
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSaveCareer(career.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        savedCareers.includes(career.id)
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Heart size={20} fill={savedCareers.includes(career.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={() => toggleCareerExpansion(career.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span>Learn More</span>
                      {expandedCareer === career.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCareer === career.id && (
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Why Recommended */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Star className="text-yellow-500" size={20} />
                          Why This Career Matches You
                        </h4>
                        <ul className="space-y-2">
                          {career.whyRecommended.map((reason:any, idx:any) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="text-green-500 mt-0.5" size={16} />
                              <span className="text-gray-700">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Needed */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Briefcase className="text-blue-500" size={20} />
                          Key Skills to Develop
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill:any, idx:any) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Career Path */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="text-purple-500" size={20} />
                          Career Progression Path
                        </h4>
                        <div className="space-y-3">
                          {career.careerPath.map((stage:any, idx:any) => (
                            <div key={idx} className="flex items-center gap-3">
                              <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{stage}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Universities */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <GraduationCap className="text-green-500" size={20} />
                          Recommended Universities in Ghana
                        </h4>
                        <div className="space-y-3">
                          {career.universities.map((uni:any, idx:any) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-4">
                              <h5 className="font-semibold text-gray-900 mb-1">{uni.name}</h5>
                              <p className="text-sm text-gray-600 mb-2">{uni.location}</p>
                              <div className="space-y-1 text-sm">
                                <p><span className="font-medium">Programs:</span> {uni.programs.join(', ')}</p>
                                <p><span className="font-medium">Requirements:</span> {uni.requirements}</p>
                                <p><span className="font-medium">Duration:</span> {uni.duration}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Companies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Building2 className="text-orange-500" size={20} />
                          Top Employers in Ghana
                        </h4>
                        <div className="space-y-3">
                          {career.companies.map((company:any, idx:any) => (
                            <div key={idx} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-semibold text-gray-900">{company.name}</h5>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                  {company.type}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{company.location}</p>
                              <p className="text-sm text-gray-700 mb-2">{company.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {company.roles.map((role:any, roleIdx:any) => (
                                  <span key={roleIdx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                    {role}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="text-blue-500" size={20} />
                      Your Next Steps
                    </h4>
                    <ul className="space-y-2">
                      {career.nextSteps.map((step:any, idx:any) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            These career recommendations are personalized for you based on your unique profile. 
            Take the next step by exploring the programs and opportunities that interest you most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule Career Counseling
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Explore More Careers
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white  hover:text-black ">
              Retake Assessment
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Career recommendations are based on current market trends and your assessment responses.</p>
          <p className="mt-2">For personalized guidance, consider speaking with a career counselor or mentor in your chosen field.</p>
        </div>
      </div>
    </div>
  );
};

export default CareerRecommendations;