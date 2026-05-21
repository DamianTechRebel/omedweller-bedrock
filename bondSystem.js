import { world } from "@minecraft/server";

export function initBondSystem() {

    world.sendMessage(
        "§7[OmeDweller] BondSystem OK"
    );
}

export function createBond(player, entity) {

    try {

        removeBond(player);

        entity.addTag(
            `owner:${player.id}`
        );

    } catch (error) {

        console.warn(
            `[BondSystem/createBond] ${error}`
        );
    }
}

export function removeBond(player) {

    try {

        const entities =
            player.dimension.getEntities({
                type: "omenaso:omebuddy"
            });

        for (const entity of entities) {

            if (
                entity.hasTag(
                    `owner:${player.id}`
                )
            ) {

                entity.removeTag(
                    `owner:${player.id}`
                );
            }
        }

    } catch (error) {

        console.warn(
            `[BondSystem/removeBond] ${error}`
        );
    }
}

export function getBuddy(player) {

    try {

        const entities =
            player.dimension.getEntities({

                type: "omenaso:omebuddy",
                tags: [`owner:${player.id}`]

            });

        return entities[0] ?? null;

    } catch (error) {

        console.warn(
            `[BondSystem/getBuddy] ${error}`
        );

        return null;
    }
}

export function getOwner() {

    return null;
}

export function hasValidOwner() {

    return true;
}

export function transferBond() {}