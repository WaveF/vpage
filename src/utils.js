/**
 * Fetch JSON
 * @param {string} jsonPath - JSON file path
 * @returns {Promise<Object>} - return JSON data
 */
export async function getJson(jsonPath) {
  try {
    const response = await fetch(jsonPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON data from ${jsonPath}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading JSON:", error);
    throw error;
  }
}

/**
 * simple css minifier
 * @param {string} css - css string
 * @returns {string} - return minified css string
 */
export function minifyCSS(css) {
  return css
    .replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '')  // remove comments
    .replace(/\s*([\{\}:;,])\s*/g, '$1')             // remove spaces around selectors
    .replace(/\s+/g, ' ')                            // replace multiple spaces with a single space
    .replace(/;\}/g, '}')                            // remove trailing semicolons
    .trim();                                         // remove leading and trailing spaces
}