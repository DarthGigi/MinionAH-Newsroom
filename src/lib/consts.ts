// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Tonantzintla Newsroom";
export const SITE_DESCRIPTION =
  "Tonantzintla Newsroom is the central hub for news about all Tonantzintla projects. Read announcements and stay up-to-date.";
export const SITE_URL = "https://newsroom.tonantzintla.org";

// Project identifiers for filtering
export const PROJECTS = ["MinionAH", "Tonantzintla", "Unauctionable"] as const;
export type Project = (typeof PROJECTS)[number];

// Post type categories
export const POST_TYPES = ["Release", "Update", "Announcement", "Guide"] as const;
export type PostType = (typeof POST_TYPES)[number];
