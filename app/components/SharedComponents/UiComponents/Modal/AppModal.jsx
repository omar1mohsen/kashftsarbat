import React from "react";
import { Modal } from "antd";

const AppModal = ({
  children,
  className,
  modalTitle,
  isModalVisible,
  onOk,
  cancelText,
  okText,
  footer,
  width,
  centered,
  onCancel,
}) => {
  return (
    <>
      <Modal
        className={className ? `createApp-Modal ${className}` : "createApp-Modal"}
        title={modalTitle ? modalTitle : false}
        open={isModalVisible}
        onOk={onOk}
        cancelText={cancelText}
        okText={okText}
        onCancel={onCancel}
        footer={footer}
        width={width}
        centered={centered}
        getContainer={false}
      >
        {children}
      </Modal>
    </>
  );
};

export default AppModal;
