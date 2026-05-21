import { world, system } from "@minecraft/server";

import { initBondSystem } from "./systems/bondSystem.js";
import { initStateSystem } from "./systems/stateSystem.js";
import { initFollowSystem } from "./systems/followSystem.js";
import { initTargetSystem } from "./systems/targetSystem.js";

// Inicialización segura
system.run(() => {

    try {

        initBondSystem();
        initStateSystem(() => {});
        initFollowSystem();
        initTargetSystem();

        world.sendMessage("§a[OmeDweller] Systems Loaded");

    } catch (err) {

        world.sendMessage(
            `§c[OmeDweller] Script Error: ${err}`
        );
    }
});