import type { PagePath } from "./pagePath";

import _global from "@i18n/en-US/$.json";
import _index from "@i18n/en-US/_.json";
import _chatgpt from "@i18n/en-US/_chatgpt.json";
import _chatgptGeneral from "@i18n/en-US/_chatgpt-general.json";
import _chatgptGeneratorCot from "@i18n/en-US/_chatgpt-generator-cot.json";
import _chatgptInteractiveGame from "@i18n/en-US/_chatgpt-interactive-game.json";
import _chatgptPromptRolePlay from "@i18n/en-US/_chatgpt-prompt-role-play.json";
import _chatgptSamples from "@i18n/en-US/_chatgpt-samples.json";
import _githubCopilotSamples from "@i18n/en-US/_github-copilot-samples.json";
import _resources from "@i18n/en-US/_resources.json";
import _stableDiffusionExamples from "@i18n/en-US/_stable-diffusion-examples.json";
import _stableDiffusionGenerator from "@i18n/en-US/_stable-diffusion-generator.json";

export type GlobalKey = keyof typeof _global;
const pages = {
  "/": _index,
  "/chatgpt/": _chatgpt,
  "/chatgpt-general/": _chatgptGeneral,
  "/chatgpt-generator-cot/": _chatgptGeneratorCot,
  "/chatgpt-interactive-game/": _chatgptInteractiveGame,
  "/chatgpt-prompt-role-play/": _chatgptPromptRolePlay,
  "/chatgpt-samples/": _chatgptSamples,
  "/github-copilot-samples/": _githubCopilotSamples,
  "/resources/": _resources,
  "/stable-diffusion-examples/": _stableDiffusionExamples,
  "/stable-diffusion-generator/": _stableDiffusionGenerator,
} satisfies Record<PagePath, any>;
export type PageKey<P extends PagePath> = keyof (typeof pages)[P];

const i18nDataEnUS = {
  "*": _global,
  ...pages,
};
export default i18nDataEnUS;
