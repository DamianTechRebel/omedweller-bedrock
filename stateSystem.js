export const STATE_COMPANION = 0;
export const STATE_AGITATED = 1;
export const STATE_TRANSFORMING = 2;

const entityStates = new Map();

export function initStateSystem() {

    console.warn(
        "[OmeDweller] StateSystem Loaded"
    );
}

export function setState(entity, state) {

    try {

        entityStates.set(
            entity.id,
            state
        );

        entity.setDynamicProperty(
            "omenaso:state",
            state
        );

    } catch (error) {

        console.warn(
            `[StateSystem/setState] ${error}`
        );
    }
}

export function getState(entity) {

    try {

        const cached =
            entityStates.get(entity.id);

        if (cached !== undefined) {
            return cached;
        }

        const stored =
            entity.getDynamicProperty(
                "omenaso:state"
            );

        if (
            stored !== undefined &&
            stored !== null
        ) {

            entityStates.set(
                entity.id,
                stored
            );

            return stored;
        }

    } catch (error) {

        console.warn(
            `[StateSystem/getState] ${error}`
        );
    }

    return STATE_COMPANION;
}