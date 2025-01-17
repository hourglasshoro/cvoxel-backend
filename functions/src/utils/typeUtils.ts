import { WorkSubjectFromDework } from "../types/workCredential.js";
import { WorkSubject } from "vess-sdk";
import { removeUndefined } from "./commonUtil.js";

export const cast2WorkSubject = (
  deworkSubject: WorkSubjectFromDework
): WorkSubject => {
  const mid: WorkSubjectFromDework = removeUndefined<WorkSubjectFromDework>({
    ...deworkSubject,
    taskId: undefined,
    streamId: undefined,
  });
  return mid as WorkSubject;
};
