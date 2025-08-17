# Case Study: Video Call (WebRTC)

Designing a browser-based video conference: capture, encode, transport, and render.

## RADIO+
- Requirements: multi-party, mute/camera control, screen share, recording
- API/Data: signaling (offer/answer/ICE), TURN/STUN, media constraints
- Interface: device selection, permissions UX, grid layout, a11y
- Operations: bandwidth adaptation, simulcast/SVC, rejoin flows
- Risks: permissions denied, NAT traversal issues, device quirks
- Observability/Testing: media quality metrics, reconnect tests

## Examples
- `examples/getUserMedia.ts`
- `examples/webrtc-offer-answer.ts`
