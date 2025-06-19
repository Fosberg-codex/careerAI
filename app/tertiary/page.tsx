'use client'
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, User, BookOpen, Heart, Activity, Target, Brain, Users, Lightbulb } from 'lucide-react';

const CareerQuestionnaire = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<any>({
    // Personal Information
    name: '',
    age: '',
    gender: '',
    region: '',
    currentLevel: '',
    
    // Educational Background
    favoriteSubjects: [],
    difficultSubjects: [],
    grades: '',
    educationGoals: '',
    learningStyle: '',
    
    // Interests & Hobbies
    booksGenres: [],
    gamesTypes: [],
    hobbies: [],
    onlineActivities: [],
    
    // Personality & Values
    workEnvironment: '',
    helpingOthers: '',
    problemSolving: '',
    creativity: '',
    leadership: '',
    teamwork: '',
    
    // Skills & Abilities
    technicalSkills: [],
    communicationStyle: '',
    languages: [],
    practicalSkills: [],
    
    // Career Preferences
    workSchedule: '',
    travelWillingness: '',
    salaryImportance: '',
    jobSecurity: '',
    careerAspirations: '',
    
    // Ghanaian Context
    localCommunity: '',
    culturalValues: '',
    familyExpectations: '',
    economicFactors: ''
  });

  const sections = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      description: 'Tell us about yourself'
    },
    {
      id: 'education',
      title: 'Educational Background',
      icon: BookOpen,
      description: 'Your academic journey and preferences'
    },
    {
      id: 'interests',
      title: 'Interests & Hobbies',
      icon: Heart,
      description: 'What you enjoy doing in your free time'
    },
    {
      id: 'personality',
      title: 'Personality & Values',
      icon: Brain,
      description: 'Your character traits and what matters to you'
    },
    {
      id: 'skills',
      title: 'Skills & Abilities',
      icon: Lightbulb,
      description: 'Your current skills and talents'
    },
    {
      id: 'career',
      title: 'Career Preferences',
      icon: Target,
      description: 'Your work-related preferences and goals'
    },
    {
      id: 'context',
      title: 'Cultural Context',
      icon: Users,
      description: 'Your community and cultural considerations'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev:any) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string) => {
    setFormData((prev:any) => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter((item:any) => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async () => {
    // Here you would send the data to your backend
    console.log('Form Data:', formData);
    alert('Assessment submitted! Your career recommendations will be generated.');
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const renderPersonalSection = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <select
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select age range</option>
            <option value="12-15">12-15 years</option>
            <option value="16-18">16-18 years</option>
            <option value="19-25">19-25 years</option>
            <option value="26-35">26-35 years</option>
            <option value="36+">36+ years</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Region in Ghana</label>
          <select
            value={formData.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select region</option>
            <option value="greater-accra">Greater Accra</option>
            <option value="ashanti">Ashanti</option>
            <option value="western">Western</option>
            <option value="central">Central</option>
            <option value="eastern">Eastern</option>
            <option value="volta">Volta</option>
            <option value="northern">Northern</option>
            <option value="upper-east">Upper East</option>
            <option value="upper-west">Upper West</option>
            <option value="brong-ahafo">Brong Ahafo</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Current Education Level</label>
        <select
          value={formData.currentLevel}
          onChange={(e) => handleInputChange('currentLevel', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select current level</option>
          <option value="jhs">Junior High School (JHS)</option>
          <option value="shs">Senior High School (SHS)</option>
          <option value="tertiary">Tertiary (University/Polytechnic)</option>
          <option value="working">Currently Working</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );

  const renderEducationSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Subjects (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Mathematics', 'English', 'Science', 'Social Studies', 'ICT', 'French', 'Technical Drawing', 'Home Economics', 'Music', 'Visual Arts', 'Physical Education', 'Religious Studies'].map(subject => (
            <label key={subject} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.favoriteSubjects.includes(subject)}
                onChange={() => handleArrayChange('favoriteSubjects', subject)}
                className="mr-2"
              />
              <span className="text-sm">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Which subjects do you find most challenging?</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Mathematics', 'English', 'Science', 'Social Studies', 'ICT', 'French', 'Technical Drawing', 'Home Economics', 'Music', 'Visual Arts', 'Physical Education', 'Religious Studies'].map(subject => (
            <label key={subject} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.difficultSubjects.includes(subject)}
                onChange={() => handleArrayChange('difficultSubjects', subject)}
                className="mr-2"
              />
              <span className="text-sm">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How would you describe your academic performance?</label>
        <select
          value={formData.grades}
          onChange={(e) => handleInputChange('grades', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select performance level</option>
          <option value="excellent">Excellent (Top 10% of class)</option>
          <option value="good">Good (Above average)</option>
          <option value="average">Average</option>
          <option value="below-average">Below average</option>
          <option value="struggling">Need improvement</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How do you learn best?</label>
        <select
          value={formData.learningStyle}
          onChange={(e) => handleInputChange('learningStyle', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select learning style</option>
          <option value="visual">Visual (diagrams, charts, images)</option>
          <option value="auditory">Auditory (listening, discussions)</option>
          <option value="hands-on">Hands-on (practical activities)</option>
          <option value="reading">Reading and writing</option>
          <option value="group">Group work and collaboration</option>
          <option value="independent">Independent study</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What are your educational goals?</label>
        <textarea
          value={formData.educationGoals}
          onChange={(e) => handleInputChange('educationGoals', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Describe what you hope to achieve through education..."
        />
      </div>
    </div>
  );

  const renderInterestsSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What types of books do you enjoy? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Adventure/Action', 'Romance', 'Mystery/Thriller', 'Science Fiction', 'Biography', 'History', 'Self-help', 'Religious/Spiritual', 'Academic/Educational', 'Comics/Graphic Novels', 'Poetry', 'I don\'t read much'].map(genre => (
            <label key={genre} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.booksGenres.includes(genre)}
                onChange={() => handleArrayChange('booksGenres', genre)}
                className="mr-2"
              />
              <span className="text-sm">{genre}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What types of games do you play? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Strategy games', 'Puzzle games', 'Sports games', 'Action/Adventure games', 'Educational games', 'Board games', 'Card games', 'Mobile games', 'Console games', 'Online multiplayer', 'Traditional games (Oware, etc.)', 'I don\'t play games'].map(game => (
            <label key={game} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.gamesTypes.includes(game)}
                onChange={() => handleArrayChange('gamesTypes', game)}
                className="mr-2"
              />
              <span className="text-sm">{game}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What are your hobbies and interests? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Music (listening/playing)', 'Dancing', 'Drawing/Painting', 'Photography', 'Writing', 'Cooking', 'Gardening', 'Sports/Exercise', 'Technology/Coding', 'Fashion/Design', 'Volunteering', 'Reading', 'Traveling', 'Crafts/DIY', 'Nature/Environment'].map(hobby => (
            <label key={hobby} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.hobbies.includes(hobby)}
                onChange={() => handleArrayChange('hobbies', hobby)}
                className="mr-2"
              />
              <span className="text-sm">{hobby}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What do you spend most time doing online?</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Social media', 'Educational videos', 'Gaming', 'Research/Learning', 'Entertainment/Movies', 'News/Current events', 'Online courses', 'Shopping', 'Music/Podcasts', 'Creating content', 'Messaging friends', 'I don\'t use internet much'].map(activity => (
            <label key={activity} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.onlineActivities.includes(activity)}
                onChange={() => handleArrayChange('onlineActivities', activity)}
                className="mr-2"
              />
              <span className="text-sm">{activity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPersonalitySection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What type of work environment appeals to you most?</label>
        <select
          value={formData.workEnvironment}
          onChange={(e) => handleInputChange('workEnvironment', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select work environment</option>
          <option value="office">Office setting</option>
          <option value="outdoor">Outdoor/Field work</option>
          <option value="home">Work from home</option>
          <option value="laboratory">Laboratory/Research facility</option>
          <option value="hospital">Hospital/Healthcare facility</option>
          <option value="school">School/Educational institution</option>
          <option value="factory">Factory/Manufacturing</option>
          <option value="creative-studio">Creative studio/workshop</option>
          <option value="mixed">Mixed/Flexible environment</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How important is helping others in your future career?</label>
        <select
          value={formData.helpingOthers}
          onChange={(e) => handleInputChange('helpingOthers', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select importance level</option>
          <option value="very-important">Very important - I want to directly help people</option>
          <option value="somewhat-important">Somewhat important - I'd like to contribute positively</option>
          <option value="neutral">Neutral - Not a primary concern</option>
          <option value="not-important">Not important - I prefer other motivations</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How do you approach problem-solving?</label>
        <select
          value={formData.problemSolving}
          onChange={(e) => handleInputChange('problemSolving', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select approach</option>
          <option value="analytical">Analytical - I break down problems step by step</option>
          <option value="creative">Creative - I think outside the box</option>
          <option value="collaborative">Collaborative - I work with others to find solutions</option>
          <option value="research">Research-based - I gather information first</option>
          <option value="intuitive">Intuitive - I trust my instincts</option>
          <option value="practical">Practical - I look for simple, workable solutions</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How would you rate your creativity level?</label>
        <select
          value={formData.creativity}
          onChange={(e) => handleInputChange('creativity', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select creativity level</option>
          <option value="very-creative">Very creative - I love creating new things</option>
          <option value="moderately-creative">Moderately creative - I have some creative abilities</option>
          <option value="somewhat-creative">Somewhat creative - I can be creative when needed</option>
          <option value="not-very-creative">Not very creative - I prefer following established methods</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How comfortable are you with leadership roles?</label>
        <select
          value={formData.leadership}
          onChange={(e) => handleInputChange('leadership', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select comfort level</option>
          <option value="very-comfortable">Very comfortable - I enjoy leading others</option>
          <option value="comfortable">Comfortable - I can lead when necessary</option>
          <option value="somewhat-comfortable">Somewhat comfortable - I prefer supporting roles</option>
          <option value="not-comfortable">Not comfortable - I prefer to follow others</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Do you prefer working alone or in teams?</label>
        <select
          value={formData.teamwork}
          onChange={(e) => handleInputChange('teamwork', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select preference</option>
          <option value="team-focused">Strongly prefer teamwork</option>
          <option value="team-comfortable">Comfortable with teamwork</option>
          <option value="flexible">Flexible - both work well for me</option>
          <option value="independent-comfortable">Comfortable working independently</option>
          <option value="independent-focused">Strongly prefer working alone</option>
        </select>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What technical skills do you have or are interested in? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Computer programming', 'Web design', 'Graphics design', 'Video editing', 'Data analysis', 'Social media management', 'Digital marketing', 'Mobile app development', 'Hardware repair', 'Network setup', 'Database management', 'None of these'].map(skill => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.technicalSkills.includes(skill)}
                onChange={() => handleArrayChange('technicalSkills', skill)}
                className="mr-2"
              />
              <span className="text-sm">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How would you describe your communication style?</label>
        <select
          value={formData.communicationStyle}
          onChange={(e) => handleInputChange('communicationStyle', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select communication style</option>
          <option value="excellent-public">Excellent at public speaking and presentations</option>
          <option value="good-groups">Good at speaking in small groups</option>
          <option value="better-writing">Better at written communication</option>
          <option value="one-on-one">Prefer one-on-one conversations</option>
          <option value="quiet-listener">Quiet and prefer listening</option>
          <option value="shy-reserved">Shy and reserved</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What languages can you speak? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['English', 'Twi/Akan', 'Ga', 'Ewe', 'Dagbani', 'Hausa', 'French', 'Arabic', 'Spanish', 'Portuguese', 'German', 'Chinese'].map(language => (
            <label key={language} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.languages.includes(language)}
                onChange={() => handleArrayChange('languages', language)}
                className="mr-2"
              />
              <span className="text-sm">{language}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What practical skills do you have? (Select all that apply)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['Driving', 'Cooking', 'Tailoring/Sewing', 'Carpentry', 'Electrical work', 'Plumbing', 'Hair styling', 'Makeup artistry', 'Photography', 'Event planning', 'Sales/Marketing', 'Customer service', 'Financial management', 'Teaching/Tutoring'].map(skill => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.practicalSkills.includes(skill)}
                onChange={() => handleArrayChange('practicalSkills', skill)}
                className="mr-2"
              />
              <span className="text-sm">{skill}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCareerSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What work schedule would you prefer?</label>
        <select
          value={formData.workSchedule}
          onChange={(e) => handleInputChange('workSchedule', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select schedule preference</option>
          <option value="regular-hours">Regular 9-5 weekdays</option>
          <option value="flexible">Flexible hours</option>
          <option value="shift-work">Shift work (including nights/weekends)</option>
          <option value="seasonal">Seasonal work</option>
          <option value="project-based">Project-based work</option>
          <option value="self-employed">Self-employed/Own business</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How willing are you to travel for work?</label>
        <select
          value={formData.travelWillingness}
          onChange={(e) => handleInputChange('travelWillingness', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select travel willingness</option>
          <option value="very-willing">Very willing - I love traveling</option>
          <option value="somewhat-willing">Somewhat willing - occasional travel is fine</option>
          <option value="limited-travel">Limited travel - only when necessary</option>
          <option value="no-travel">Prefer no travel - want to stay local</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How important is a high salary to you?</label>
        <select
          value={formData.salaryImportance}
          onChange={(e) => handleInputChange('salaryImportance', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select importance level</option>
          <option value="very-important">Very important - I want to earn a lot</option>
          <option value="important">Important - I need good financial security</option>
          <option value="moderate">Moderate - decent pay is enough</option>
          <option value="not-priority">Not a priority - job satisfaction matters more</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How important is job security to you?</label>
        <select
          value={formData.jobSecurity}
          onChange={(e) => handleInputChange('jobSecurity', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select importance level</option>
          <option value="very-important">Very important - I need stability</option>
          <option value="important">Important - reasonable security needed</option>
          <option value="moderate">Moderate - some uncertainty is okay</option>
          <option value="not-priority">Not a priority - I'm comfortable with risk</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What are your career aspirations? Describe your dream job or career goal.</label>
        <textarea
          value={formData.careerAspirations}
          onChange={(e) => handleInputChange('careerAspirations', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="Describe your ideal career path, what success looks like to you, or any specific roles you're interested in..."
        />
      </div>
    </div>
  );

  const renderContextSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How important is contributing to your local community?</label>
        <select
          value={formData.localCommunity}
          onChange={(e) => handleInputChange('localCommunity', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select importance level</option>
          <option value="very-important">Very important - I want to develop my community</option>
          <option value="important">Important - I'd like to make a local impact</option>
          <option value="moderate">Moderate - some contribution is good</option>
          <option value="not-priority">Not a priority - I'm open to working anywhere</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How do cultural values influence your career choices?</label>
        <select
          value={formData.culturalValues}
          onChange={(e) => handleInputChange('culturalValues', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select influence level</option>
          <option value="very-influential">Very influential - tradition guides my choices</option>
          <option value="somewhat-influential">Somewhat influential - I consider cultural expectations</option>
          <option value="balanced">Balanced - I blend modern and traditional values</option>
          <option value="not-influential">Not influential - I make independent choices</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What are your family's expectations for your career?</label>
        <select
          value={formData.familyExpectations}
          onChange={(e) => handleInputChange('familyExpectations', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select family expectation</option>
          <option value="high-prestige">High prestige career (doctor, lawyer, engineer)</option>
          <option value="stable-income">Stable income and job security</option>
          <option value="family-business">Continue family business</option>
          <option value="supportive-any">Supportive of any career I choose</option>
          <option value="mixed-opinions">Mixed opinions in family</option>
          <option value="no-specific">No specific expectations</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">What economic factors influence your career decisions?</label>
        <select
          value={formData.economicFactors}
          onChange={(e) => handleInputChange('economicFactors', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select economic consideration</option>
          <option value="immediate-income">Need to earn money immediately</option>
          <option value="long-term-investment">Can invest time in education for future returns</option>
          <option value="family-support">Need to support family financially</option>
          <option value="education-costs">Limited by education/training costs</option>
          <option value="location-opportunities">Limited by opportunities in my area</option>
          <option value="flexible-resources">Have flexible resources and options</option>
        </select>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderPersonalSection();
      case 1: return renderEducationSection();
      case 2: return renderInterestsSection();
      case 3: return renderPersonalitySection();
      case 4: return renderSkillsSection();
      case 5: return renderCareerSection();
      case 6: return renderContextSection();
      default: return renderPersonalSection();
    }
  };

  const isLastSection = currentSection === sections.length - 1;
  const isFirstSection = currentSection === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CareerAI Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your ideal career path with our comprehensive assessment designed for Ghanaian students and professionals
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Section {currentSection + 1} of {sections.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentSection + 1) / sections.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === currentSection
                      ? 'bg-blue-600 text-white shadow-lg'
                      : index < currentSection
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              {React.createElement(sections[currentSection].icon, { 
                size: 24, 
                className: "text-blue-600" 
              })}
              <h2 className="text-2xl font-bold text-gray-900">
                {sections[currentSection].title}
              </h2>
            </div>
            <p className="text-gray-600">
              {sections[currentSection].description}
            </p>
          </div>

          {renderCurrentSection()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSection}
            disabled={isFirstSection}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              isFirstSection
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          {isLastSection ? (
            <button
              onClick={handleSubmit}
              className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Submit Assessment</span>
              <Activity size={20} />
            </button>
          ) : (
            <button
              onClick={nextSection}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Your responses will help us recommend the best career paths and educational programs for you.</p>
          <p className="mt-2">All information is kept confidential and used only for career recommendations.</p>
        </div>
      </div>
    </div>
  );
};

export default CareerQuestionnaire;