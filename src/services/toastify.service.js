import { toast } from "react-toastify";
import { toastifyConfig } from "src/config/toastify.config";

export const toastifyService = {
  success: (message) => {
    toast.success(message, toastifyConfig);
  },
  warning: (message) => {
    toast.warning(message, toastifyConfig);
  },
  error: (message) => {
    toast.error(message, toastifyConfig);
  },
};
