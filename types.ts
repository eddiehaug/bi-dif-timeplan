
export interface Link {
  text: string;
  url: string;
  type: 'video' | 'profile' | 'web';
}

export interface ActivityDetail {
  pedagogy: {
    title: string;
    description: string;
  };
  comments: string;
  links?: Link[];
}

export interface Activity {
  id: string;
  day: 'Tirsdag' | 'Onsdag' | 'Torsdag';
  time: string;
  title: string;
  presenter?: string;
  color: 'blue' | 'yellow' | 'orange' | 'green' | 'gray';
  details?: ActivityDetail;
}

export interface Professor {
  name: string;
  email: string;
  role: string;
  position: string;
  sessions: string;
  imageUrl: string;
  linkedinUrl?: string;
}
