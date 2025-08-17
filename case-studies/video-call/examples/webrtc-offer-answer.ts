// Conceptual WebRTC offer/answer with ICE handling.
// Signaling transport is abstracted; integrate with your backend.

export const createPeer = () => new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });

export const startCall = async (
	local: RTCPeerConnection,
	remote: RTCPeerConnection,
	sendSignal: (msg: any) => void
) => {
	local.onicecandidate = e => e.candidate && sendSignal({ type: 'ice', candidate: e.candidate });
	remote.onicecandidate = e => e.candidate && sendSignal({ type: 'ice', candidate: e.candidate });
	const offer = await local.createOffer();
	await local.setLocalDescription(offer);
	sendSignal({ type: 'offer', sdp: offer.sdp });
};

export const handleSignal = async (
	pc: RTCPeerConnection,
	msg: any,
	sendSignal: (msg: any) => void
) => {
	if (msg.type === 'offer') {
		await pc.setRemoteDescription({ type: 'offer', sdp: msg.sdp });
		const answer = await pc.createAnswer();
		await pc.setLocalDescription(answer);
		sendSignal({ type: 'answer', sdp: answer.sdp });
	} else if (msg.type === 'answer') {
		await pc.setRemoteDescription({ type: 'answer', sdp: msg.sdp });
	} else if (msg.type === 'ice') {
		await pc.addIceCandidate(msg.candidate);
	}
};
