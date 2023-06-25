const previewImage = async (file: File): Promise<string | null> => {
  return new Promise<string | null>((resolve) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target && e.target.result;
      if (result instanceof ArrayBuffer) {
        const arrayBuffer = result;
        const blob = new Blob([arrayBuffer], { type: file.type });
        const imageUrl = URL.createObjectURL(blob);
        resolve(imageUrl);
      } else {
        resolve(result);
      }
    };

    reader.readAsDataURL(file);
  });
};

export default previewImage;
