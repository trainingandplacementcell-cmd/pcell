-- Drives table
CREATE TABLE IF NOT EXISTS drives (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  location TEXT,
  type TEXT CHECK(type IN ('placement', 'internship', 'ppt', 'other')) DEFAULT 'placement',
  status TEXT CHECK(status IN ('upcoming', 'ongoing', 'completed', 'cancelled')) DEFAULT 'upcoming',
  image_url TEXT,
  registration_link TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Drive companies table (many companies per drive)
CREATE TABLE IF NOT EXISTS drive_companies (
  id TEXT PRIMARY KEY,
  drive_id TEXT NOT NULL,
  name TEXT NOT NULL,
  logo_url TEXT,
  logo_image TEXT,
  FOREIGN KEY (drive_id) REFERENCES drives(id) ON DELETE CASCADE
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_drives_status ON drives(status);
CREATE INDEX IF NOT EXISTS idx_drives_dates ON drives(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_drive_companies_drive_id ON drive_companies(drive_id);