/**
 * Helper function to get the correct path for assets
 * Prepends the base URL in production environments
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use import.meta.env.BASE_URL which will be populated with the base URL from vite.config.ts
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
