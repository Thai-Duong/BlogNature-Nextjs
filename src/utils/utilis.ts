import axios from "axios";

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};
