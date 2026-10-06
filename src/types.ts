export type PageRoute = 
  | '/' 
  | '/about' 
  | '/programs' 
  | '/services' 
  | '/talks' 
  | '/learn' 
  | '/funding' 
  | '/contact';

export interface ServiceCategory {
  id: 'build' | 'establish' | 'grow';
  title: string;
  tagline: string;
  description: string;
  color: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'build' | 'establish' | 'grow';
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  timeline: string;
  whoNeedsThis: string;
}

export interface JourneyStage {
  step: string;
  title: string;
  label: string;
  tagline: string;
  whatHappens: string;
  whatStartmetHelpsWith: string[];
  founderOutcome: string;
  typicalDuration: string;
}

export interface TalkEpisode {
  id: string;
  number: string;
  title: string;
  topicCategory: 'Founder Failures' | 'Product & MVP' | 'India Market GTM' | 'Fundraising Realities' | 'Compliance & Law';
  duration: string;
  summary: string;
  keyTakeaways: string[];
  date: string;
  featuredQuote?: string;
  speakerRole: string;
}

export interface ResourceGuide {
  id: string;
  title: string;
  category: 'Guides' | 'Checklists' | 'Compliance' | 'Funding' | 'Product';
  readTime: string;
  description: string;
  keyTopics: string[];
  downloadName?: string;
  updatedAt: string;
}

export interface VentureProgram {
  id: string;
  name: string;
  badge: string;
  duration: string;
  stage: string;
  summary: string;
  focus: string[];
  deliverables: string[];
  idealFor: string;
}

export interface FounderInquiry {
  founderName: string;
  email: string;
  phone: string;
  city: string;
  startupName?: string;
  stage: 'Idea / Concept' | 'Prototype / MVP Needed' | 'Product Built, Need Brand/Launch' | 'Registered, Seeking Growth' | 'Fundraising Preparation';
  primaryNeed: string;
  briefDescription: string;
  timeline: 'Immediate (0-30 days)' | '1-3 months' | 'Exploratory';
}

export interface FounderIntakeData {
  founderName: string;
  email: string;
  phone: string;
  startupStage: string;
  startupCategory: string;
  primaryNeeds: string[];
  deckOrWebsiteLink?: string;
  briefDescription: string;
  preferredChannel: 'WhatsApp' | 'Email' | 'Phone';
}
