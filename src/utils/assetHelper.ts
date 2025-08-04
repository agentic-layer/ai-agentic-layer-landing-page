/**
 * Creates a complete, environment-aware URL for an asset located in the /public directory.
 * @param path The path to the asset relative to the /public directory.
 * @returns The full URL for the asset.
 */
export const getAssetUrl = (path: string): string => {
  // Remove any leading slash from the path to prevent double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Use Vite's import.meta.env.BASE_URL to get the correct base path
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};