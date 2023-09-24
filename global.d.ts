declare module '*.svg' {
  export const content: React.FC<React.SVGProps<SVGElement>>;
  export default string;
}

declare interface Window {
  Kakao: any;
}
