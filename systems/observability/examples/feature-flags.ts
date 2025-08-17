// Minimal feature flags helper with local overrides.

type Flags = Record<string, boolean>;

const STORAGE_KEY = 'feature-flags-overrides';

export const getFlags = (serverFlags: Flags): Flags => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		const overrides = raw ? (JSON.parse(raw) as Flags) : {};
		return { ...serverFlags, ...overrides };
	} catch {
		return serverFlags;
	}
};

export const setFlagOverride = (key: string, value: boolean) => {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		const overrides = raw ? (JSON.parse(raw) as Flags) : {};
		overrides[key] = value;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
	} catch {}
};
