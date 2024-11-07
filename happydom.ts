import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();

// Assuming that you have the necessary type declarations, otherwise remove the ts-ignore
globalThis.window = globalThis as unknown as Window & typeof globalThis;
globalThis.window.requestAnimationFrame = (callback: FrameRequestCallback) => setTimeout(callback, 0);