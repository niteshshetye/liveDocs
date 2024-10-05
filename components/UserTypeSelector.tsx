import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
  isDisabled = false,
}: UserTypeSelectorParams) => {
  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    if (onClickHandler) onClickHandler(type);
  };
  return (
    <Select
      value={userType}
      onValueChange={(type: UserType) => accessChangeHandler(type)}
      disabled={isDisabled}
    >
      <SelectTrigger className="shad-select">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-200 ">
        <SelectItem value="viewer" className="shad-select-item">
          can view
        </SelectItem>
        <SelectItem value="editor" className="shad-select-item">
          can edit
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
