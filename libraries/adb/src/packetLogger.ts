// Hack for allowing the MBF frontend to log packets for diagnostic purposes.

import type { AdbPacketData } from "./daemon/packet.js";

export interface PacketListeners {
    onPacketRead: ((readPacket: AdbPacketData) => void) | null;

    onPacketWritten: ((writtenPacket: AdbPacketData) => void) | null;
}

const packetListeners: PacketListeners = { onPacketRead: null, onPacketWritten: null };

export { packetListeners };