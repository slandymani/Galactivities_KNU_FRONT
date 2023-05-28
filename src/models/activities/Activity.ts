import { UserProfile } from '../users/UserProfile';

export interface Activity {
  id: string;
  title: string;
  date: Date;
  description: string;
  category: string;
  location: string;
  venue: string;
  hostUsername: string;
  isCancelled?: boolean;
  isGoing: boolean;
  isHost: boolean;
  host?: UserProfile;
  attendees: UserProfile[];
  moderationStatus: 1 | 2 | 0;
}

export class Activity implements Activity {
  public constructor(init?: ActivityFormValues) {
    Object.assign(this, init);
  }
}

export class ActivityFormValues {
  id?: string;

  title: string = '';

  category: string = '';

  description: string = '';

  date: Date | null = new Date();

  location: string = '';

  venue: string = '';

  public constructor(activity?: Activity) {
    if (activity) {
      this.id = activity.id;
      this.title = activity.title;
      this.category = activity.category;
      this.description = activity.description;
      this.date = activity.date;
      this.location = activity.location;
      this.venue = activity.venue;
    }
  }
}
