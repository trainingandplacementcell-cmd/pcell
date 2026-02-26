export interface Company {
  id: string;
  name: string;
  logoUrl: string | null;
  logoImage: string | null;
}

export interface Drive {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
  location: string | null;
  type: "placement" | "internship" | "ppt" | "other";
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  imageUrl: string | null;
  registrationLink: string | null;
  companies: Company[];
  createdAt: string;
  updatedAt: string;
}

export interface DriveFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "placement" | "internship" | "ppt" | "other";
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  imageUrl: string | null;
  registrationLink: string | null;
  companies: Company[];
}

export interface DriveWithCompanies extends Drive {
  companies: Company[];
}