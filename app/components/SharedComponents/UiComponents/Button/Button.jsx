import { Button } from "antd";
import "@/styles/uiComponents/button.scss";

const AppButton = ({
  children,
  htmlType,
  onClick,
  className,
  icon,
  loading,
  disabled,
  block,
  style,
  href
}) => {
  const buttonProps = {
    block,
    disabled,
    icon,
    className: className ? `createApp-Button ${className}` : "createApp-Button",
    onClick,
    loading,
    htmlType: htmlType || "button",
    style,
    ...(href ? { href } : {}),
  };
  return (
    <Button   {...buttonProps}>
      {children}
    </Button>
  );
};

export default AppButton;
