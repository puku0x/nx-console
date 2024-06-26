import {
  NxSourceMapFilesToProjectMapRequest,
  NxTargetsForConfigFileRequest,
} from '@nx-console/language-server/types';
import { sendRequest } from '@nx-console/vscode/lsp-client';
import type { TargetConfiguration } from 'nx/src/devkit-exports';

export async function getSourceMapFilesToProjectMap(): Promise<
  Record<string, string> | undefined
> {
  return sendRequest(NxSourceMapFilesToProjectMapRequest, undefined);
}

export async function getTargetsForConfigFile(
  projectName: string,
  configFilePath: string
): Promise<Record<string, TargetConfiguration> | undefined> {
  return sendRequest(NxTargetsForConfigFileRequest, {
    projectName,
    configFilePath,
  });
}
