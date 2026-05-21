import { world } from "@minecraft/server";

export function initTargetSystem() {

    world.afterEvents.entityHurt.subscribe((event) => {

        try {

            const hurtEntity = event.hurtEntity;

            if (!hurtEntity) return;

        } catch (error) {

            console.warn(
                `[TargetSystem] ${error}`
            );
        }
    });
}