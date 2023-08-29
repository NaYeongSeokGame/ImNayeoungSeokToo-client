const copyClipboard = async (content: string) => {
  await window.navigator.clipboard.writeText(content);
};

export default copyClipboard;
