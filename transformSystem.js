/**
 * TransformSystem
 * Transformación básica Omebuddy ↔ Omedweller
 */

import { system } from "@minecraft/server";

import { getBuddy } from "./bondSystem.js";
import {
    setState,
    STATE_TRANSFORMING
} from "./stateSystem.js";

// ─────────────────────────────────────────────

export function initTransformSystem() {

    // Placeholder
}

// ─────────────────────────────────────────────

export function requestTransform(player) {

    try {

        const buddy = getBuddy(player);

        if (!buddy) return;

        // Marcar transformación
        setState(
            buddy,
            STATE_TRANSFORMING
        );

        const location = buddy.location;
        const dimension = buddy.dimension;

        // Sonido
        try {

            dimension.playSound(
                "omenaso.transform",
                location
            );

        } catch {}

        // Delay corto para efecto
        system.runTimeout(() => {

            try {

                // Spawn dweller
                const dweller = dimension.spawnEntity(
                    "omenaso:omedweller",
                    location
                );

                // Remover buddy
                buddy.remove();

                // Feedback visual simple
                dimension.spawnParticle(
                    "minecraft:large_explosion",
                    location
                );

            } catch {}

        }, 40);

    } catch {}
}