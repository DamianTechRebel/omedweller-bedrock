/**
 * WhistleSystem
 * Silbato básico para llamar a Omebuddy
 */

import { world } from "@minecraft/server";

import { getBuddy } from "./bondSystem.js";

// ─────────────────────────────────────────────

export function initWhistleSystem() {

    world.afterEvents.itemUse.subscribe((event) => {

        try {

            const player = event.source;
            const item = event.itemStack;

            if (!player || !item) return;

            // Verificar item
            if (item.typeId !== "omenaso:whistle") {
                return;
            }

            const buddy = getBuddy(player);

            if (!buddy) {

                player.sendMessage(
                    "§cNo tenés un Omebuddy vinculado."
                );

                return;
            }

            const playerPos = player.location;

            // Teleport cerca del player
            buddy.teleport(
                {
                    x: playerPos.x + 1,
                    y: playerPos.y,
                    z: playerPos.z + 1
                },
                {
                    dimension: player.dimension
                }
            );

            // Sonido
            try {

                player.dimension.playSound(
                    "omenaso.whistle_short",
                    playerPos
                );

            } catch {}

        } catch {}
    });
}