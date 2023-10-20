import { useContext } from "react";
import Papa from "papaparse";
import { DataContext } from "../context";
import { getFormattedData } from "../utils/getFormattedData";
import { getDuplicateId } from "../utils/getDuplicateId";

export const useUsersImport = () => {
  const { setFileData } = useContext<any>(DataContext);
  const reader = new FileReader();

  const handleFileUpload = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    reader.onload = (e: any) => {
      const fileContents = e.target.result;
      const csvData = Papa.parse(fileContents, { header: true }) as any;

      const checkedList =
        csvData.data[csvData.data.length - 1]["Full Name"] == "\n" ||
        csvData.data[csvData.data.length - 1]["full Name"] == "\n"
          ? csvData.data.slice(0, csvData.data.length - 1)
          : csvData.data;

      const hasEmptyField = checkedList.some((user: User) => {
        const fullName = user["Full Name"] || user["full Name"];
        const phone = user["Phone"];
        const email = user["Email"];
        return !fullName || !phone || !email;
      });

      const dataWithId = checkedList.map((user: User, index: number) => ({
        ID: index + 1,
        ...user,
      }));

      const formattedData = getFormattedData(
        dataWithId.map((user: User) => ({
          ...user,
          "Duplicate With": getDuplicateId(dataWithId, user),
        }))
      );
      setFileData(
        hasEmptyField || fileObj.type != "text/csv" ? "Error" : formattedData
      );
    };

    reader.readAsText(fileObj);
  };

  return { handleFileUpload };
};
