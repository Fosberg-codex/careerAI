'use client'
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, User, BookOpen, Heart, Activity, Target, Brain, Users, Lightbulb, X, RefreshCw, Loader2 } from 'lucide-react';
import Nav from '@/comps/nav';

// Types
type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
};

type Recommendation = {
  rank: number;
  program: string;
  description: string;
  match_reasons: string[];
  recommended_institutions: string[];
  admission_requirements: string;
  future_opportunities: string;
  skills_to_develop: string[];
  first_steps: string[];
};

type FormData = {
  // Personal Information
  name: string;
  age: string;
  gender: string;
  region: string;
  shsTrack: string;

  // Academic Background
  favoriteSubjects: string[];
  difficultSubjects: string[];
  grades: string;
  educationGoals: string;
  learningStyle: string;

  // Interests & Hobbies
  booksGenres: string[];
  gamesTypes: string[];
  hobbies: string[];
  onlineActivities: string[];

  // Personality & Preferences
  preferredEnvironment: string;
  helpingOthers: string;
  problemSolving: string;
  creativity: string;
  leadership: string;
  teamwork: string;

  // Skills & Abilities
  technicalSkills: string[];
  communicationStyle: string;
  languages: string[];
  practicalSkills: string[];

  // Program Preferences
  programType: string;
  studyLocation: string;
  fundingConcerns: string;
  familyExpectations: string;
  futurePlans: string;

  // Ghanaian Context
  localCommunity: string;
  culturalValues: string;
  economicFactors: string;
};

const initialFormData: FormData = {
  // Personal Information
  name: '',
  age: '',
  gender: '',
  region: '',
  shsTrack: '',

  // Academic Background
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

  // Personality & Preferences
  preferredEnvironment: '',
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

  // Program Preferences
  programType: '',
  studyLocation: '',
  fundingConcerns: '',
  familyExpectations: '',
  futurePlans: '',

  // Ghanaian Context
  localCommunity: '',
  culturalValues: '',
  economicFactors: ''
};

const requiredFieldsBySection: { [key: number]: (keyof FormData)[] } = {
  0: ['name', 'age', 'gender', 'region', 'shsTrack'],
  1: ['favoriteSubjects', 'difficultSubjects', 'grades', 'educationGoals', 'learningStyle'],
  2: ['booksGenres', 'gamesTypes', 'hobbies', 'onlineActivities'],
  3: ['preferredEnvironment', 'helpingOthers', 'problemSolving', 'creativity', 'leadership', 'teamwork'],
  4: ['technicalSkills', 'communicationStyle', 'languages', 'practicalSkills'],
  5: ['programType', 'studyLocation', 'fundingConcerns', 'familyExpectations', 'futurePlans'],
  6: ['localCommunity', 'culturalValues', 'economicFactors'],
};

const getFieldLabel = (field: keyof FormData) => {
  const map: { [key in keyof FormData]?: string } = {
    name: 'Full Name',
    age: 'Age',
    gender: 'Gender',
    region: 'Region',
    shsTrack: 'SHS Track',
    favoriteSubjects: 'Favorite Subjects',
    difficultSubjects: 'Difficult Subjects',
    grades: 'WASSCE Results',
    educationGoals: 'Educational Goals',
    learningStyle: 'Learning Style',
    booksGenres: 'Book Genres',
    gamesTypes: 'Game Types',
    hobbies: 'Hobbies',
    onlineActivities: 'Online Activities',
    preferredEnvironment: 'Preferred Learning Environment',
    helpingOthers: 'Helping Others',
    problemSolving: 'Problem Solving',
    creativity: 'Creativity',
    leadership: 'Leadership',
    teamwork: 'Teamwork',
    technicalSkills: 'Technical Skills',
    communicationStyle: 'Communication Style',
    languages: 'Languages',
    practicalSkills: 'Practical Skills',
    programType: 'Preferred Program Type',
    studyLocation: 'Preferred Study Location',
    fundingConcerns: 'Funding Concerns',
    familyExpectations: 'Family Expectations',
    futurePlans: 'Future Plans',
    localCommunity: 'Local Community',
    culturalValues: 'Cultural Values',
    economicFactors: 'Economic Factors',
  };
  return map[field] || field;
};

const ProgramQuestionnaire: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [showRecommendations, setShowRecommendations] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>(initialFormData);

  // For validation error popup
  const [validationError, setValidationError] = useState<string | null>(null);

  // OpenAI API integration
  const generateProgramRecommendations = async (userData: FormData): Promise<any> => {
    // ... unchanged ...
    // (omitted for brevity)
    // ... unchanged ...
  };

  const handleRegenerate = async (): Promise<void> => {
    try {
      setIsGenerating(true);
      setError(null);
      const result = await generateProgramRecommendations(formData);
      if (result && Array.isArray(result.recommendations)) {
        setRecommendations(result.recommendations);
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to regenerate recommendations');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Array.isArray(prev[field])
        ? (prev[field] as string[]).includes(value)
          ? (prev[field] as string[]).filter((item) => item !== value)
          : [...(prev[field] as string[]), value]
        : [value]
    }));
  };

  // ... unchanged validation and handlers ...

  const validateCurrentSection = (): boolean => {
    const requiredFields = requiredFieldsBySection[currentSection] || [];
    for (const field of requiredFields) {
      const value = (formData as any)[field];
      const isArrayField = Array.isArray(value);
      const isEmpty = isArrayField ? value.length === 0 : !value || String(value).trim() === '';
      if (isEmpty) {
        setValidationError(`${getFieldLabel(field)} is required.`);
        return false;
      }
    }
    setValidationError(null);
    return true;
  };

  const nextSection = (): void => {
    if (!validateCurrentSection()) return;
    setCurrentSection((prev) => Math.min(prev + 1, Object.keys(requiredFieldsBySection).length - 1));
  };

  const prevSection = (): void => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateCurrentSection()) return;
    setShowRecommendations(true);
    await handleRegenerate();
  };

  // All form fields are now required (add required attribute and asterisk)
  const requiredAsterisk = <span className="text-red-500">*</span>;

  // Section 0: Personal Information
  const renderPersonalSection = (): any => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name {requiredAsterisk}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age {requiredAsterisk}
          </label>
          <select
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select age range</option>
            <option value="16-18">16-18 years</option>
            <option value="19-21">19-21 years</option>
            <option value="22-25">22-25 years</option>
            <option value="26+">26+ years</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender {requiredAsterisk}
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Region in Ghana {requiredAsterisk}
          </label>
          <select
            value={formData.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          SHS Track {requiredAsterisk}
        </label>
        <select
          value={formData.shsTrack}
          onChange={(e) => handleInputChange('shsTrack', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select SHS Track</option>
          <option value="general-science">General Science</option>
          <option value="general-arts">General Arts</option>
          <option value="business">Business</option>
          <option value="visual-arts">Visual Arts</option>
          <option value="home-economics">Home Economics</option>
          <option value="technical">Technical</option>
          <option value="agric">Agricultural Science</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );

  // Section 1: Academic Background
  const renderEducationSection = (): any => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Favorite Subjects (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Mathematics', 'English', 'Biology', 'Physics', 'Chemistry', 'Economics', 'Geography', 'Government', 'History', 'Literature', 'French', 'ICT', 'Technical Drawing', 'Visual Arts', 'Agriculture', 'Business Management', 'Accounting', 'Food & Nutrition', 'Other'].map(subject => (
            <label key={subject} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.favoriteSubjects.includes(subject)}
                onChange={() => handleArrayChange('favoriteSubjects', subject)}
                className="mr-2"
                required={formData.favoriteSubjects.length === 0}
              />
              <span className="text-sm">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Which subjects did you find most challenging? {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Mathematics', 'English', 'Biology', 'Physics', 'Chemistry', 'Economics', 'Geography', 'Government', 'History', 'Literature', 'French', 'ICT', 'Technical Drawing', 'Visual Arts', 'Agriculture', 'Business Management', 'Accounting', 'Food & Nutrition', 'Other'].map(subject => (
            <label key={subject} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.difficultSubjects.includes(subject)}
                onChange={() => handleArrayChange('difficultSubjects', subject)}
                className="mr-2"
                required={formData.difficultSubjects.length === 0}
              />
              <span className="text-sm">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How would you describe your WASSCE results? {requiredAsterisk}
        </label>
        <select
          value={formData.grades}
          onChange={(e) => handleInputChange('grades', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select performance level</option>
          <option value="excellent">Excellent (Mostly A's/B's)</option>
          <option value="good">Good (Mix of B's/C's)</option>
          <option value="average">Average (C's/D's)</option>
          <option value="below-average">Below average (E's/F's)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How do you learn best? {requiredAsterisk}
        </label>
        <select
          value={formData.learningStyle}
          onChange={(e) => handleInputChange('learningStyle', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What are your educational goals after SHS? {requiredAsterisk}
        </label>
        <textarea
          value={formData.educationGoals}
          onChange={(e) => handleInputChange('educationGoals', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Describe what you hope to achieve in tertiary education..."
          required
        />
      </div>
    </div>
  );

  // Section 2: Interests & Hobbies
  const renderInterestsSection = (): any => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What types of books do you enjoy? (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Adventure/Action', 'Romance', 'Mystery/Thriller', 'Science Fiction', 'Biography', 'History', 'Self-help', 'Religious/Spiritual', 'Academic/Educational', 'Comics/Graphic Novels', 'Poetry', 'I don\'t read much'].map(genre => (
            <label key={genre} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.booksGenres.includes(genre)}
                onChange={() => handleArrayChange('booksGenres', genre)}
                className="mr-2"
                required={formData.booksGenres.length === 0}
              />
              <span className="text-sm">{genre}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What types of games do you play? (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Strategy games', 'Puzzle games', 'Sports games', 'Action/Adventure games', 'Educational games', 'Board games', 'Card games', 'Mobile games', 'Console games', 'Online multiplayer', 'Traditional games (Oware, etc.)', 'I don\'t play games'].map(game => (
            <label key={game} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.gamesTypes.includes(game)}
                onChange={() => handleArrayChange('gamesTypes', game)}
                className="mr-2"
                required={formData.gamesTypes.length === 0}
              />
              <span className="text-sm">{game}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What are your hobbies and interests? (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Music (listening/playing)', 'Dancing', 'Drawing/Painting', 'Photography', 'Writing', 'Cooking', 'Gardening', 'Sports/Exercise', 'Technology/Coding', 'Fashion/Design', 'Volunteering', 'Reading', 'Traveling', 'Crafts/DIY', 'Nature/Environment'].map(hobby => (
            <label key={hobby} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.hobbies.includes(hobby)}
                onChange={() => handleArrayChange('hobbies', hobby)}
                className="mr-2"
                required={formData.hobbies.length === 0}
              />
              <span className="text-sm">{hobby}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What do you spend most time doing online? {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Social media', 'Educational videos', 'Gaming', 'Research/Learning', 'Entertainment/Movies', 'News/Current events', 'Online courses', 'Shopping', 'Music/Podcasts', 'Creating content', 'Messaging friends', 'I don\'t use internet much'].map(activity => (
            <label key={activity} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.onlineActivities.includes(activity)}
                onChange={() => handleArrayChange('onlineActivities', activity)}
                className="mr-2"
                required={formData.onlineActivities.length === 0}
              />
              <span className="text-sm">{activity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // Section 3: Personality & Preferences
  const renderPersonalitySection = (): any => (
    <div className="space-y-6">
      {/* ... unchanged ... */}
      {/* All select fields are already full width and responsive */}
      {/* ... unchanged ... */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Do you prefer working alone or in teams? {requiredAsterisk}
        </label>
        <select
          value={formData.teamwork}
          onChange={(e) => handleInputChange('teamwork', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
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

  // Section 4: Skills & Abilities
  const renderSkillsSection = (): any => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What technical skills do you have or are interested in? (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Computer programming', 'Web design', 'Graphics design', 'Video editing', 'Data analysis', 'Social media management', 'Digital marketing', 'Mobile app development', 'Hardware repair', 'Network setup', 'Database management', 'None of these'].map(skill => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.technicalSkills.includes(skill)}
                onChange={() => handleArrayChange('technicalSkills', skill)}
                className="mr-2"
                required={formData.technicalSkills.length === 0}
              />
              <span className="text-sm">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How would you describe your communication style? {requiredAsterisk}
        </label>
        <select
          value={formData.communicationStyle}
          onChange={(e) => handleInputChange('communicationStyle', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What languages can you speak? (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['English', 'Twi/Akan', 'Ga', 'Ewe', 'Dagbani', 'Hausa', 'French', 'Arabic', 'Spanish', 'Portuguese', 'German', 'Chinese'].map(language => (
            <label key={language} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.languages.includes(language)}
                onChange={() => handleArrayChange('languages', language)}
                className="mr-2"
                required={formData.languages.length === 0}
              />
              <span className="text-sm">{language}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What practical skills do you have? (Select all that apply) {requiredAsterisk}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Driving', 'Cooking', 'Tailoring/Sewing', 'Carpentry', 'Electrical work', 'Plumbing', 'Hair styling', 'Makeup artistry', 'Photography', 'Event planning', 'Sales/Marketing', 'Customer service', 'Financial management', 'Teaching/Tutoring'].map(skill => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.practicalSkills.includes(skill)}
                onChange={() => handleArrayChange('practicalSkills', skill)}
                className="mr-2"
                required={formData.practicalSkills.length === 0}
              />
              <span className="text-sm">{skill}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // Section 5: Program Preferences
  const renderProgramPrefSection = (): any => (
    <div className="space-y-6">
      {/* ... unchanged ... */}
    </div>
  );

  // Section 6: Ghanaian Context
  const renderContextSection = (): any => (
    <div className="space-y-6">
      {/* ... unchanged ... */}
    </div>
  );

  // Recommendations Popup Component
  const RecommendationsPopup: React.FC = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Your Program Recommendations</h2>
            <p className="text-blue-100 mt-1 text-sm sm:text-base">Personalized tertiary program suggestions based on your profile</p>
          </div>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button
              onClick={handleRegenerate}
              disabled={isGenerating}
              className=" bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all disabled:opacity-50"
              title="Regenerate recommendations"
            >
              {isGenerating ? <Loader2 size={20} className="animate-spin" /> : <RefreshCw size={20} />}
            </button>
            <button
              onClick={() => setShowRecommendations(false)}
              className=" bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {error ? (
            <div className="text-center py-8">
              <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                <p className="text-red-700 font-medium">Error generating recommendations</p>
                <p className="text-red-600 text-sm mt-1">{error}</p>
              </div>
              <button
                onClick={handleRegenerate}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Try Again
              </button>
            </div>
          ) : isGenerating ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 size={48} className="animate-spin text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Analyzing Your Profile</h3>
              <p className="text-gray-500 text-center max-w-md">
                Our AI is carefully reviewing your responses and matching them with tertiary programs in Ghana...
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          #{rec.rank}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{rec.program}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{rec.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Target size={16} className="mr-2 text-blue-600" />
                          Why This Matches You
                        </h4>
                        <ul className="space-y-1">
                          {rec.match_reasons.map((reason, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <BookOpen size={16} className="mr-2 text-green-600" />
                          Recommended Institutions
                        </h4>
                        <ul className="list-disc ml-5 text-sm text-gray-600">
                          {rec.recommended_institutions.map((inst, idx) => (
                            <li key={idx}>{inst}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Activity size={16} className="mr-2 text-purple-600" />
                          Future Opportunities
                        </h4>
                        <p className="text-sm text-gray-600">{rec.future_opportunities}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <Lightbulb size={16} className="mr-2 text-orange-600" />
                          Skills to Develop
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {rec.skills_to_develop.map((skill, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <ChevronRight size={16} className="mr-2 text-red-600" />
                          First Steps
                        </h4>
                        <ul className="space-y-1">
                          {rec.first_steps.map((step, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-red-600 mr-2">{idx + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <BookOpen size={16} className="mr-2 text-green-600" />
                          Admission Requirements
                        </h4>
                        <p className="text-sm text-gray-600">{rec.admission_requirements}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              These recommendations are AI-generated and should be used as guidance alongside professional academic counseling.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleRegenerate}
                disabled={isGenerating}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 text-sm"
              >
                {isGenerating ? 'Generating...' : 'Regenerate'}
              </button>
              <button
                onClick={() => setShowRecommendations(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Validation Error Popup
  const ValidationErrorPopup: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-xs sm:max-w-sm w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-red-600">Form Incomplete</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          OK
        </button>
      </div>
    </div>
  );

  const renderCurrentSection = (): any => {
    switch (currentSection) {
      case 0: return renderPersonalSection();
      case 1: return renderEducationSection();
      case 2: return renderInterestsSection();
      case 3: return renderPersonalitySection();
      case 4: return renderSkillsSection();
      case 5: return renderProgramPrefSection();
      case 6: return renderContextSection();
      default: return renderPersonalSection();
    }
  };

  const isLastSection: boolean = currentSection === Object.keys(requiredFieldsBySection).length - 1;
  const isFirstSection: boolean = currentSection === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-4 sm:py-8 px-2 sm:px-4">
      <Nav/>
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-4 sm:mt-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Tertiary Program Recommender
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-2xl mx-auto">
            Discover the best tertiary programs for you as a Ghanaian SHS graduate. Answer a few questions and get personalized program suggestions!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4 gap-1">
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              Section {currentSection + 1} of {Object.keys(requiredFieldsBySection).length}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {Math.round(((currentSection + 1) / Object.keys(requiredFieldsBySection).length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / Object.keys(requiredFieldsBySection).length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(requiredFieldsBySection).map((sectionIdx, index) => {
              const section = [
                {
                  id: 'personal',
                  title: 'Personal Information',
                  icon: User,
                  description: 'Tell us about yourself'
                },
                {
                  id: 'academic',
                  title: 'Academic Background',
                  icon: BookOpen,
                  description: 'Your SHS track and academic strengths'
                },
                {
                  id: 'interests',
                  title: 'Interests & Hobbies',
                  icon: Heart,
                  description: 'What you enjoy doing in your free time'
                },
                {
                  id: 'personality',
                  title: 'Personality & Preferences',
                  icon: Brain,
                  description: 'Your learning and personal style'
                },
                {
                  id: 'skills',
                  title: 'Skills & Abilities',
                  icon: Lightbulb,
                  description: 'Your current skills and talents'
                },
                {
                  id: 'program',
                  title: 'Program Preferences',
                  icon: Target,
                  description: 'Your preferences for tertiary study'
                },
                {
                  id: 'context',
                  title: 'Ghanaian Context',
                  icon: Users,
                  description: 'Your community and cultural considerations'
                }
              ][index];
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`flex items-center space-x-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    index === currentSection
                      ? 'bg-blue-600 text-white shadow-lg'
                      : index < currentSection
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden xs:inline sm:inline">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-4">
              {React.createElement([
                User, BookOpen, Heart, Brain, Lightbulb, Target, Users
              ][currentSection], { 
                size: 20, 
                className: "text-blue-600" 
              })}
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                {[
                  'Personal Information',
                  'Academic Background',
                  'Interests & Hobbies',
                  'Personality & Preferences',
                  'Skills & Abilities',
                  'Program Preferences',
                  'Ghanaian Context'
                ][currentSection]}
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              {[
                'Tell us about yourself',
                'Your SHS track and academic strengths',
                'What you enjoy doing in your free time',
                'Your learning and personal style',
                'Your current skills and talents',
                'Your preferences for tertiary study',
                'Your community and cultural considerations'
              ][currentSection]}
            </p>
          </div>

          {renderCurrentSection()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
          <button
            onClick={prevSection}
            disabled={isFirstSection}
            className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
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
              disabled={isGenerating}
              className="flex items-center justify-center space-x-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Generating Recommendations...</span>
                </>
              ) : (
                <>
                  <span>Get My Program Recommendations</span>
                  <Activity size={20} />
                </>
              )}
            </button>
          ) : (
            <button
              onClick={nextSection}
              className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
          <p>Your responses will help us recommend the best tertiary programs for you.</p>
          <p className="mt-2">All information is kept confidential and used only for program recommendations.</p>
        </div>
      </div>

      {/* Recommendations Popup */}
      {showRecommendations && <RecommendationsPopup />}

      {/* Validation Error Popup */}
      {validationError && (
        <ValidationErrorPopup
          message={validationError}
          onClose={() => setValidationError(null)}
        />
      )}
    </div>
  );
};

export default ProgramQuestionnaire;