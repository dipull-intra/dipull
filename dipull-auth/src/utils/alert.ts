import { Id, ToastContent, ToastOptions, TypeOptions, UpdateOptions, Zoom, toast } from "react-toastify";

const defaultOptions: ToastOptions = {
  transition: Zoom,
  position: "top-left",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  closeButton: false,
};

const warn = (message: ToastContent, options?: ToastOptions) => {
  return toast.warn(message, { ...defaultOptions, ...options });
};

const error = (message: ToastContent, options?: ToastOptions) => {
  return toast.error(message, { ...defaultOptions, ...options });
};

const success = (message: ToastContent, options?: ToastOptions) => {
  return toast.success(message, { ...defaultOptions, ...options });
};

const loading = (message: ToastContent, options?: ToastOptions) => {
  return toast.loading(message, { ...defaultOptions, ...options });
};

const info = (message: ToastContent, options?: ToastOptions) => {
  return toast.info(message, { ...defaultOptions, ...options });
};

const update = (id: Id, message: ToastContent, type?: TypeOptions, options?: UpdateOptions) => {
  if(type)
    return toast.update(id, { render: message, ...defaultOptions, ...options, type, isLoading: false });
  else
    return toast.update(id, { render: message, ...defaultOptions, ...options });
};

export const alert = {
  warn,
  error,
  success,
  loading,
  update,
  info,
};