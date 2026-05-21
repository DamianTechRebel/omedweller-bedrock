export function safeRun(scope, callback) {

    try {
        callback();
    } catch (error) {

        console.warn(
            `[OmeDweller/${scope}] ${error}`
        );
    }
}