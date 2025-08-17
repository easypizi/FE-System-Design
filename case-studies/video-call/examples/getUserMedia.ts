// Basic getUserMedia with constraints and error handling.

export const startMedia = async (video = true, audio = true) => {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({
			video: video ? { width: { ideal: 1280 }, height: { ideal: 720 } } : false,
			audio,
		});
		return stream;
	} catch (e: any) {
		// Handle NotAllowedError, NotFoundError, OverconstrainedError, etc.
		throw new Error(`Failed to get media: ${e?.name || 'Unknown'}`);
	}
};
