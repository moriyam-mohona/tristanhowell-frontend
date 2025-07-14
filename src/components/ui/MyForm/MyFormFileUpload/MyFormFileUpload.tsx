/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  RiDeleteBinLine,
  RiFileTextLine,
  RiFilePdf2Line,
  RiFileWord2Line,
} from "react-icons/ri";

type TFileUploadProps = {
  name: string;
  label?: string;
  children?: ReactNode;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  previewClassName?: string;
  defaultValue?: File | string;
  accept?: string;
  [key: string]: any;
};

const MyFormFileUpload = ({
  name,
  label,
  parentClassName = "",
  labelClassName = "",
  inputClassName = "",
  previewClassName = "",
  defaultValue,
  accept = ".pdf,.doc,.docx",
  children,
  ...rest
}: TFileUploadProps) => {
  const { control, setValue, resetField } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  const getFileIcon = (filename: string) => {
    if (filename.endsWith(".pdf"))
      return <RiFilePdf2Line size={48} className="text-red-500" />;
    if (filename.endsWith(".doc") || filename.endsWith(".docx"))
      return <RiFileWord2Line size={48} className="text-blue-500" />;
    return <RiFileTextLine size={48} className="text-gray-500" />;
  };

  const handleFileChange = (file: File) => {
    setFileName(file.name);
    setValue(name, file);
  };

  const handleRemoveFile = () => {
    setFileName(null);
    resetField(name);
    setFileInputKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (defaultValue) {
      if (typeof defaultValue === "string") {
        setFileName(defaultValue);
      } else if (defaultValue instanceof File) {
        setFileName(defaultValue.name);
      }
      setValue(name, defaultValue, { shouldValidate: false });
    }
  }, [defaultValue, name, setValue]);
  const truncateFileName = (fileName: string) => {
    // Split filename and extension
    const lastDotIndex = fileName.lastIndexOf(".");
    const name = fileName.substring(0, lastDotIndex);
    const extension = fileName.substring(lastDotIndex);

    // Truncate the name part (first approach: by character count)
    const maxLength = 10;
    const truncatedName =
      name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;

    // Alternative approach: by word count
    // const words = name.split(/[\s_\-]+/);
    // const truncatedName = words.length > 4
    //   ? `${words.slice(0, 4).join(' ')}...`
    //   : name;

    return `${truncatedName}${extension}`;
  };

  return (
    <div className={cn("form-group h-full", parentClassName)}>
      {label && <p className={cn("mb-2", labelClassName)}>{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({ fieldState: { error } }) => (
          <>
            {fileName ? (
              <div
                className={cn(
                  "flex items-center gap-4 p-4 border rounded-md",
                  previewClassName
                )}
              >
                {getFileIcon(fileName)}
                <div className="flex-1">
                  <p className="font-medium truncate">
                    {truncateFileName(fileName)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {fileName.endsWith(".pdf")
                      ? "PDF Document"
                      : fileName.endsWith(".doc") || fileName.endsWith(".docx")
                      ? "Word Document"
                      : "Document"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-2 text-gray-500 hover:text-red-500"
                >
                  <RiDeleteBinLine size={20} />
                </button>
              </div>
            ) : (
              <>
                {children ? (
                  <label htmlFor={name} className="h-full w-full">
                    {children}
                  </label>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md cursor-pointer">
                    <RiFileTextLine size={48} className="text-gray-400 mb-2" />
                    <p className="text-gray-500">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-400">
                      PDF or Word documents only
                    </p>
                  </div>
                )}

                <input
                  key={fileInputKey}
                  id={name}
                  type="file"
                  accept={accept}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileChange(file);
                    }
                  }}
                  className={cn(
                    "w-full rounded-md border border-gray-300 p-2",
                    inputClassName,
                    children && "hidden"
                  )}
                  {...rest}
                />
              </>
            )}

            {error && <small className="text-red-500">{error.message}</small>}
          </>
        )}
      />
    </div>
  );
};

export default MyFormFileUpload;
