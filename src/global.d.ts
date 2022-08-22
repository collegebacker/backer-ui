type IconTypes =
  | "menu"
  | "arrow-left"
  | "cross"
  | "chevron-left"
  | "chevron-in-circle-left"
  | "close-circle"
  | "tickmark-in-circle"
  | "chekbox"
  | "plus"
  | "question"
  | "alert"
  | "credit-card"
  | "mail"
  | "photo"
  | "image"
  | "trashcan"
  | "settings"
  | "profile"
  | "person"
  | "pointing-hand"
  | "analytics"
  | "gift"
  | "new-tab"
  | "calendar"
  | "shield"
  | "opened-eye"
  | "closed-eye"
  | "arrow-right"
  | "chevron-right"
  | "chevron-down"
  | "chevron-top"
  | "chevron-in-circle-right"
  | "plus-in-circle"
  | "download"
  | "minus-in-circle"
  | "kebab"
  | "phone"
  | "like"
  | "full-screen"
  | "emoji"
  | "share";

type TargetTypes = "_blank" | "_self" | "_parent" | "_top";

type AppTypographyTypes =
  | "title-xlarge"
  | "title-large"
  | "title-medium"
  | "title-medium-adaptive"
  | "title-small"
  | "body-large"
  | "body-large-adaptive"
  | "body-large-paragraph"
  | "body-large-paragraph-adaptive"
  | "body-main"
  | "body-paragraph"
  | "body-caption";

type MarketingTypographyTypes =
  | "xlarge"
  | "large"
  | "lead"
  | "lead-bold"
  | "lead-small"
  | "lead-small-bold"
  | "accent-paragraph"
  | "accent-paragraph-bold"
  | "paragraph"
  | "paragraph-bold"
  | "caption"
  | "caption-bold";

type ToastItemProps = {
  closeOnClick?: boolean;
  showCloseIcon?: boolean;
  dismissButton?: boolean;
  button?: {
    label: string | null;
    onClick: () => void | null;
  };
  emoji?: string;
  type?: "success" | "error" | "warning" | "info";
  timeout?: number;
};
