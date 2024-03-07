export const ButtonType = {
  ADD: "ADD",
  DELETE: "DELETE",
  COMPLETE: "COMPLETE",
  CANCEL: "CANCEL",
} as const;

export type ButtonUnionType = (typeof ButtonType)[keyof typeof ButtonType];
