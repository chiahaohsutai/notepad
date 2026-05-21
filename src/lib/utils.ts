import { env } from '$env/dynamic/private';

/**
 * Returns the value of an environment variable.
 *
 * @param key Environment variable name.
 * @param defaultValue Fallback value if the variable is undefined.
 * @returns The environment variable value or the provided default value.
 * @throws If no default value is provided and the variable is not defined.
 */
export function environ(key: string, defaultValue?: string) {
	const value = env[key] ?? defaultValue;
	if (value === undefined) {
		throw new Error(`Environment variable ${key} not defined`);
	}
	return value;
}
