// metric-dashboard config + logging — delegated to the shared core library
// so every plugin uses one config + logging system. Public API kept stable for
// dashboard-core.js (getAppConfigDir, getPluginConfig, writeLog).
import { getAppConfigDir, loadConfig, defineConfig, makeWriteLog } from "../core/src/index.js";

const PACKAGE_NAME = "metric-dashboard";

// register defaults so the loader can discover + edit them (writes no file on load)
defineConfig(PACKAGE_NAME, { logging: true });

export { getAppConfigDir };

export function getPluginConfig(configDir = getAppConfigDir()) {
  return loadConfig(PACKAGE_NAME, configDir);
}

export const writeLog = makeWriteLog(PACKAGE_NAME);
