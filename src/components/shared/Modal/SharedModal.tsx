"use client";

import React from "react";
import { Modal } from "antd";

interface SharedModalProps {
  children: React.ReactNode;
  open: boolean;
  onCancel: () => void;
  title: string;
}

const SharedModal: React.FC<SharedModalProps> = ({
  children,
  open, // Parent controls visibility
  onCancel, // Parent handles closing
  title,
}) => {
  return (
    <Modal
      title={
        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {title}
        </div>
      }
      open={open} // Controlled by parent
      onCancel={onCancel}
      footer={null}
      width={520}
      bodyStyle={{
        maxHeight: "calc(100vh - 200px)",
        overflowY: "auto",
        wordSpacing: "1px",
      }}
    >
      <div className="mt-3">{children}</div>
    </Modal>
  );
};

export default SharedModal;
