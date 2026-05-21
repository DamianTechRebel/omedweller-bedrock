import { world, system } from "@minecraft/server";

import {
    getBuddy
} from "./bondSystem.js";

const FOLLOW_INTERVAL = 20;
const TELEPORT_DISTANCE = 16;

export function initFollowSystem() {

    system.runInterval(() => {

        try {

            for (const player of world.getPlayers()) {

                const buddy = getBuddy(player);

                if (!buddy) continue;

                const distance = getDistance(
                    player.location,
                    buddy.location
                );

                if (distance > TELEPORT_DISTANCE) {

                    buddy.teleport(
                        {
                            x: player.location.x + 1,
                            y: player.location.y,
                            z: player.location.z + 1
                        },
                        {
                            dimension: player.dimension
                        }
                    );
                }
            }

        } catch (error) {

            console.warn(
                `[FollowSystem] ${error}`
            );
        }

    }, FOLLOW_INTERVAL);
}

function getDistance(a, b) {

    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;

    return Math.sqrt(
        dx * dx +
        dy * dy +
        dz * dz
    );
}