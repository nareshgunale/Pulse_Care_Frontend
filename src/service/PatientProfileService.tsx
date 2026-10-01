import axiosInstance from "../interceptor/AxiosInterceptor"

const getPatient = async (id: any) => {
  return axiosInstance.get('/profile/patient/get/' + id)
    .then((response: any) => response.data)
    .catch((error: any) => { throw error; })
}

const updatePatient = async (patient: any) => {
  return axiosInstance.put('/profile/patient/update', patient)
    .then((response: any) => response.data)
    .catch((error: any) => { throw error; })
}

const uploadProfilePhoto = async (file: File, oldFileId?: number) => {
  const formData = new FormData();
  formData.append("file", file);

  if (oldFileId) {
    formData.append("oldFileId", oldFileId.toString());
  }

  const response = await axiosInstance.post(
    "/profile/files/upload",
    formData
  );

  return response.data;
};

export { getPatient, updatePatient, uploadProfilePhoto }